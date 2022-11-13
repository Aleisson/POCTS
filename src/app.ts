import express, { json } from 'express';
import dotenv from 'dotenv';
import { Request, Response } from 'express';

dotenv.config();


const server = express();

server.use(json());

server.get('/home', (req: Request, res: Response) => {
    return res.sendStatus(501);
})

server.listen(process.env.PORT, () => {
    console.log(`PORT ${process.env.PORT}`);
});

