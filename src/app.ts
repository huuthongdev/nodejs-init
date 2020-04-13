import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import { json } from 'body-parser';
import { onError } from './middlewares';
import { BASE_URL } from './configs';
import { ErrorMessage } from './utils';
import { serviceRouter } from './services';

export const app = express();

app.use(cors());
app.use(json());
app.use(onError);

app.get(BASE_URL + '/ping', (_, res) => res.send({ message: 'Welcome!' }));
app.use(BASE_URL + '/', serviceRouter);

app.use((_, res) => res.status(404).send({ success: false, message: ErrorMessage.INVALID_ROUTE }));

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error.stack)
    res.status(500).send({ success: false, message: ErrorMessage.INTERNAL_SERVER_ERROR });
});

import './database/testHelper'