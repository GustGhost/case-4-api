import { HundredMeters } from '../Model/TypesHundredMeters';
import { BaseDataBase } from './BaseDataBase';

export class HundredMetersDataBase extends BaseDataBase {
  private static TABLE_NAME = 'Competicao_1';

  public async list100M(): Promise<HundredMeters[]> {
    const result = await this.getConnection()
      .select('*')
      .from(HundredMetersDataBase.TABLE_NAME);

    return result;
  }

  public async addCompetitor100M(
    id: string,
    competicao: string,
    atleta: string,
    value: number,
    unidade: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({ id, competicao, atleta, value, unidade })
        .into(HundredMetersDataBase.TABLE_NAME);
    } catch (error) {
      console.log(error);
    }
  }

  public async bestTime100M(): Promise<HundredMeters[]> {
    const result = await this.getConnection()
      .select('*')
      .from(HundredMetersDataBase.TABLE_NAME)
      .where({
        value: this.getConnection()
          .min('value')
          .from(HundredMetersDataBase.TABLE_NAME),
      });

    return result;
  }
}
