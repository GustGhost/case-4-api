import { Javelin } from '../../src/Model/TypesJavelin';
import {
  javelinUserMock1,
  javelinUserMock2,
  javelinUserMock3,
} from './JavelinUserMock';

export class JavelinDBMock {
  public async listJavelin(): Promise<Javelin[]> {
    return [javelinUserMock1, javelinUserMock2, javelinUserMock3];
  }

  public async addCompetitorJavelin(
    id: string,
    competicao: string,
    atleta: string,
    value: number,
    unidade: string
  ): Promise<void> {}

  public async bestTimeJavelin(): Promise<Javelin[]> {
    return [javelinUserMock3];
  }
}
