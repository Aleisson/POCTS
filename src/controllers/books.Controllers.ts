import { Request, Response } from "express";
import { bookSchema } from "../schema/books.Schema.js";
import { Book } from '../protocols/book.Protocols.js';
import * as repository from '../repositories/books.Repository.js';


async function insert(req: Request, res: Response) {

    const newBook = req.body as Book;

    const { error } = bookSchema.validate(newBook);

    if (error) {
        return res.status(400).send({
            message: error.message
        });
    }

    try {

        repository.insertUnique(newBook);

        return res.sendStatus(201);

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);

    }
}

async function find(req: Request, res: Response) {


    try {

        const result = await repository.findAll()

        if (result.rowCount) {
            return res.status(200).send(result.rows)
        }

        return res.sendStatus(404);

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);

    }
}

async function update(req: Request, res: Response) {

    const updateBook = req.body as Book;

    const { error } = bookSchema.validate(updateBook);

    if (error) {
        return res.status(400).send({
            message: error.message
        });
    }
    
    try {

        const result = await repository.updateUnique(updateBook);

        if (result.rowCount) {
            return res.sendStatus(200);
        }

        return res.sendStatus(404);

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);

    }
}

async function remove(req: Request, res: Response) {

    const deleteBook = req.body as Book;

    const { error } = bookSchema.validate(deleteBook);

    if (error) {
        return res.status(400).send({
            message: error.message
        });
    }

    try {
        const result = await repository.deleteUnique(deleteBook);

        if (result.rowCount) {
            return res.sendStatus(204);
        }

        return res.sendStatus(404);

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }


}


async function findId(req: Request, res: Response) {

    const { id } = req.params;
    
    try {

        const result = await repository.findUnique(id);

        if (result.rowCount) {
            return res.status(200).send(result.rows[0])
        }

        return res.sendStatus(404);

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);

    }
}

export {
    insert,
    find,
    update,
    remove,
    findId
}