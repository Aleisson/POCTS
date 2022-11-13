import { Request, Response } from "express";
import { Book } from '../protocols/book.Protocols.js';
import * as repository from '../repositories/books.Repository.js';

async function insert(req: Request, res: Response) {

    const newBook = req.body as Book;

    //const insertedBook = repository.insertUnique(newBook);

    

    res.sendStatus(501);

}

export {
    insert,
}