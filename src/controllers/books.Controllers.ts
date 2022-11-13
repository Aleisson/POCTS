import { Request, Response } from "express";
import { Book } from '../protocols/book.Protocols.js';
import * as repository from '../repositories/books.Repository.js';

async function insert(req: Request, res: Response) {

    const newBook = req.body as Book;


    try {

        repository.insertUnique(newBook);

        res.sendStatus(201);

    } catch (error) {

        res.sendStatus(500);

    }
}

export {
    insert,
}