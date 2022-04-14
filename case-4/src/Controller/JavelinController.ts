import { Request, Response } from 'express';
import { JavelinBusiness } from '../Business/JavelinBusiness';
import { JavelinDataBase } from '../Data/JavelinDataBase';
import { JavelinDTO } from '../Model/TypesJavelin';
import { IdGenerator } from '../Services/IdGenerator';

const businessDB = new JavelinBusiness(
  new IdGenerator(),
  new JavelinDataBase()
);
export class JavelinController {
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
      const input: JavelinDTO = {
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
