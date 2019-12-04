import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { onError, ErrorMessage } from './refs';

const app = express();

app.use(cors());
app.use(json());
app.use(onError);

app.get('/', (_, res) => res.send({ message: 'Welcome!' }))
app.use((_, res) => res.status(404).send({ success: false, message: ErrorMessage.INVALID_ROUTE }));

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error.stack)
    res.status(500).send({ success: false, message: ErrorMessage.INTERNAL_SERVER_ERROR });
});

export default app