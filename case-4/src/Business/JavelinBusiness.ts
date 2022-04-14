import { JavelinDataBase } from '../Data/JavelinDataBase';
import { CustomError } from '../Error/CustomError';
import { JavelinDTO } from '../Model/TypesJavelin';
import { IdGenerator } from '../Services/IdGenerator';

export class JavelinBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private javelinDB: JavelinDataBase
  ) {}

  public async competitorsList() {
    try {
      const list = await this.javelinDB.listJavelin();

      if (!list) {
        throw new CustomError('Bad Request', 400);
      }

      return list;
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.message, error.code);
      }
    }
  }

  public async addAthlete(input: JavelinDTO) {
    try {
      if (
        !input.competicao ||
        !input.atleta ||
        !input.unidade ||
        !input.value
      ) {
        throw new CustomError('Missing Input', 422);
      }

      const id = this.idGenerator.generate();

      await this.javelinDB.addCompetitorJavelin(
        id,
        input.competicao,
        input.atleta,
        input.value,
        input.unidade
      );

      return { message: 'Atleta adicionado!' };
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.message, error.code);
      }
    }
  }

  public async competitionWinner() {
    try {
      const winner = await this.javelinDB.bestTimeJavelin();

      if (!winner) {
        throw new CustomError('Bad Request', 400);
      }

      return winner;
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.message, error.code);
      }
    }
  }
}
