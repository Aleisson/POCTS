import express, { json } from 'express';
import dotenv from 'dotenv';
import * as controllers from './controllers/books.Controllers.js'

dotenv.config();


const server = express();

server.use(json());

server.post('/book', controllers.insert);

server.get('/book', controllers.find);

server.put('/book', controllers.update);

server.delete('/book', controllers.remove);

server.get('/book/:id', controllers.findId);


server.listen(process.env.PORT, () => {
    console.log(`PORT ${process.env.PORT}`);
});

