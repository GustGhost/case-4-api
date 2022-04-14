import { HundredMetersBusiness } from '../src/Business/HundredMetersBusiness';
import { CustomError } from '../src/Error/CustomError';
import { HundredMetersDTO } from '../src/Model/TypesHundredMeters';
import { HundredMetersDBMock } from './Mocks/HundredMetersDataBaseMock';
import { IdGeneratorMock } from './Mocks/IdGeneratorMock';

const hundredMetersBusinessMock = new HundredMetersBusiness(
  new IdGeneratorMock(),
  new HundredMetersDBMock() as any
);

describe('Hundred Meters tests', () => {
  test('Should return missing input', async () => {
    expect.assertions;
    try {
      const input: HundredMetersDTO = {
        atleta: 'Atleta_1',
        competicao: 'Correr',
        value: 0,
        unidade: '',
      };

      await hundredMetersBusinessMock.addAthlete(input);
    } catch (error) {
      if (error instanceof CustomError) {
        expect(error.message).toEqual('Missing Input');
        expect(error.code).toBe(422);
      }
    }
  });

  test('Should return success', async () => {
    expect.assertions;
    try {
      const input: HundredMetersDTO = {
        atleta: 'Atleta_1',
        competicao: 'Correr',
        value: 10.5,
        unidade: 's',
      };

      const result = await hundredMetersBusinessMock.addAthlete(input);
      expect(result).toEqual({ message: 'Atleta adicionado!' });
    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error);
      }
    }
  });
});
