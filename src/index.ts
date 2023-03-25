import express, { Express, Request, Response } from 'express';
require('./db/mongoose');
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

// router imports
import UserRouter from './routers/user';
import ConceptRouter from './routers/concepts';
import TopicRouter from './routers/topics';
import HistoryRouter from './routers/history';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// configuration middlewares
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json({ limit: '10mb' }));
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

// registering routes
app.use('/user', UserRouter);
app.use('/concept', ConceptRouter);
app.use('/topic', TopicRouter);
app.use('/history', HistoryRouter);

app.get('/', (req: Request, res: Response) => {
  return res.send('[server]: imaster is ready to use!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
