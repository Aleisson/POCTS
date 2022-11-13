import express, { json } from 'express';
import dotenv from 'dotenv';

dotenv.config();


const server = express();

server.use(json());



server.listen(process.env.PORT, () => {
    console.log(`PORT ${process.env.PORT}`);
});

