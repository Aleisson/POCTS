import { QueryResult } from 'pg';
import connection from '../database/database.js';
import { Book } from '../protocols/book.Protocols.js';

async function insertUnique(book: Book) {

    return await connection
        .query(`INSERT INTO "books"(
                title, author, value, pages)
                VALUES($1, $2, $3, $4);`,
            [
                book.title,
                book.author,
                book.value,
                book.pages
            ]);
}

export {
    insertUnique,
}