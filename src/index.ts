import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  const randomNumber = Math.floor(Math.random() * 10);
  res.status(200).json({ number: randomNumber });
});

app.listen(
  app.listen(process.env.PORT || 3333, () => console.log('Server started'))
);
