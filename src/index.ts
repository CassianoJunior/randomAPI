import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  const randomNumber = Math.floor(Math.random() * 10);
  res.status(200).json({ number: randomNumber });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
