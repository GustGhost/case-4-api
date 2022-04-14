import { HundredMetersDataBase } from '../Data/HundredMetersDataBase';
import { CustomError } from '../Error/CustomError';
import { HundredMetersDTO } from '../Model/TypesHundredMeters';
import { IdGenerator } from '../Services/IdGenerator';

export class HundredMetersBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private hundredMDB: HundredMetersDataBase
  ) {}

  public async competitorsList() {
    try {
      const list = await this.hundredMDB.list100M();

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

  public async addAthlete(input: HundredMetersDTO) {
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

      await this.hundredMDB.addCompetitor100M(
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
      const winner = await this.hundredMDB.bestTime100M();

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
