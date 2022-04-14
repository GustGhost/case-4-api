import express from 'express';
import { HundredMetersController } from '../Controller/HundredMetersController';

export const HundredMetersRouter = express.Router();

const hundredMController = new HundredMetersController();

HundredMetersRouter.get('/100m', hundredMController.competitorsList);
HundredMetersRouter.get('/100mwinner', hundredMController.competitionWinner);
HundredMetersRouter.post('/add100m', hundredMController.addAthlete);
