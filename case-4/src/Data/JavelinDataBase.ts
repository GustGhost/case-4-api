import { Javelin } from '../Model/TypesJavelin';
import { BaseDataBase } from './BaseDataBase';

export class JavelinDataBase extends BaseDataBase {
  private static TABLE_NAME = 'Competicao_2';

  public async listJavelin(): Promise<Javelin[]> {
    const result = await this.getConnection()
      .select('*')
      .from(JavelinDataBase.TABLE_NAME);

    return result;
  }

  public async addCompetitorJavelin(
    id: string,
    competicao: string,
    atleta: string,
    value: number,
    unidade: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({ id, competicao, atleta, value, unidade })
        .into(JavelinDataBase.TABLE_NAME);
    } catch (error) {
      console.log(error);
    }
  }

  public async bestTimeJavelin(): Promise<Javelin[]> {
    const result = await this.getConnection()
      .select('*')
      .from(JavelinDataBase.TABLE_NAME)
      .where({
        value: this.getConnection()
          .max('value')
          .from(JavelinDataBase.TABLE_NAME),
      });

    return result;
  }
}
