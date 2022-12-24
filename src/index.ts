import express, { Express } from 'express';
import dotenv from 'dotenv';

// router imports
import ConceptRouter from './routers/concepts';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/concept', ConceptRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
