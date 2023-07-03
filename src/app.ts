import express, { Express, Request, Response} from 'express';
const app : Express= express();
const port : number = 3000;
const userController = require('./Controllers/userController');

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!');
});

app.use('/user', userController);

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});