import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql
    .createPool({
        host: process.env.DB_HOST,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DATABASE,
        password: process.env.MYSQL_PASSWORD,
        port: process.env.DB_PORT,
    })
    .promise();

