import { Request, Response } from 'express';
import { HundredMetersBusiness } from '../Business/HundredMetersBusiness';
import { HundredMetersDataBase } from '../Data/HundredMetersDataBase';
import { HundredMetersDTO } from '../Model/TypesHundredMeters';
import { IdGenerator } from '../Services/IdGenerator';

const businessDB = new HundredMetersBusiness(
  new IdGenerator(),
  new HundredMetersDataBase()
);
export class HundredMetersController {
  public async competitorsList(req: Request, res: Response) {
    try {
      const result = await businessDB.competitorsList();

      res.status(200).send({ result });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  public async addAthlete(req: Request, res: Response) {
    try {
      const input: HundredMetersDTO = {
        competicao: req.body.competicao,
        atleta: req.body.atleta,
        unidade: req.body.unidade,
        value: req.body.value,
      };

      const result = await businessDB.addAthlete(input);

      res.status(200).send({ result });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  public async competitionWinner(req: Request, res: Response) {
    try {
      const result = await businessDB.competitionWinner();

      res.status(200).send({ result });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
}
