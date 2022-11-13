import pg from 'pg';
import dotnev from 'dotenv';

dotnev.config();

const { Pool } = pg;

const connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

export default connection;