import { HundredMeters } from '../../src/Model/TypesHundredMeters';
import {
  runnerUserMock1,
  runnerUserMock2,
  runnerUserMock3,
} from './HundredMetersUserMock';

export class HundredMetersDBMock {
  public async list100M(): Promise<HundredMeters[]> {
    return [runnerUserMock1, runnerUserMock2, runnerUserMock3];
  }

  public async addCompetitor100M(
    id: string,
    competicao: string,
    atleta: string,
    value: number,
    unidade: string
  ): Promise<void> {}

  public async bestTime100M(): Promise<HundredMeters[]> {
    return [runnerUserMock3];
  }
}
