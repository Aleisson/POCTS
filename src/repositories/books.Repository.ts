import { QueryResult } from 'pg';
import connection from '../database/database.js';
import { Book } from '../protocols/book.Protocols.js';

async function insertUnique(book: Book): Promise<QueryResult> {

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

async function findAll(): Promise<QueryResult<Book>> {

    return await connection.query('SELECT * FROM books;')

}

async function updateUnique(book: Book): Promise<QueryResult> {

    return await connection
        .query(`UPDATE "books"
                SET title = $1, author = $2 , value = $3, pages = $4
                WHERE id = $5;`,
            [
                book.title,
                book.author,
                book.value,
                book.pages,
                book.id
            ]);
}

async function deleteUnique(book: Book) {

    return await connection
        .query(`DELETE FROM "books" WHERE id = $1;`, [book.id]);

}


export {
    insertUnique,
    findAll,
    updateUnique,
    deleteUnique
}