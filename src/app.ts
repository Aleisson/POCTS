import express, { json } from 'express';
import dotenv from 'dotenv';
import * as controllers from './controllers/books.Controllers.js'

dotenv.config();


const server = express();

server.use(json());

server.post('/book', controllers.insert);

server.get('/book',(req, res)=>{res.sendStatus(501);})

server.put('/book',(req, res)=>{res.sendStatus(501);})

server.delete('/book',(req, res)=>{res.sendStatus(501);})

server.get('/book/:id',(req, res)=>{res.sendStatus(501);})


server.listen(process.env.PORT, () => {
    console.log(`PORT ${process.env.PORT}`);
});

