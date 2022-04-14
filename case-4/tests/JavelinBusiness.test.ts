import { JavelinBusiness } from '../src/Business/JavelinBusiness';
import { CustomError } from '../src/Error/CustomError';
import { JavelinDTO } from '../src/Model/TypesJavelin';
import { IdGeneratorMock } from './Mocks/IdGeneratorMock';
import { JavelinDBMock } from './Mocks/JavelinDataBaseMock';

const javelinBusinessMock = new JavelinBusiness(
  new IdGeneratorMock(),
  new JavelinDBMock() as any
);

describe('Hundred Meters tests', () => {
  test('Should return missing input', async () => {
    expect.assertions;
    try {
      const input: JavelinDTO = {
        atleta: 'Atleta_1',
        competicao: '',
        value: 150,
        unidade: 'm',
      };

      await javelinBusinessMock.addAthlete(input);
    } catch (error) {
      if (error instanceof CustomError) {
        expect(error.message).toEqual('Missing Input');
        expect(error.code).toBe(422);
      }
    }
  });

  test('Should Return Success', async () => {
    expect.assertions;
    try {
      const input: JavelinDTO = {
        atleta: 'Atleta_1',
        competicao: 'Dardo',
        value: 150,
        unidade: 'm',
      };

      const result = await javelinBusinessMock.addAthlete(input);
      expect(result).toEqual({ message: 'Atleta adicionado!' });
    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error);
      }
    }
  });
});
