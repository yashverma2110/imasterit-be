import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// router imports
import ConceptRouter from './routers/concepts';

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

// registering routes
app.use('/concept', ConceptRouter);

app.get('/', (req: Request, res: Response) => {
  return res.send('[server]: imaster is ready to use!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
