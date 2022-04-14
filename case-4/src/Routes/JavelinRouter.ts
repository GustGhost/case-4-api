import express from 'express';
import { JavelinController } from '../Controller/JavelinController';

export const JavelinRouter = express.Router();

const hundredMController = new JavelinController();

JavelinRouter.get('/javelin', hundredMController.competitorsList);
JavelinRouter.get('/javelinwinner', hundredMController.competitionWinner);
JavelinRouter.post('/addjavelin', hundredMController.addAthlete);
