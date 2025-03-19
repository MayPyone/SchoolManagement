require('dotenv').config();
const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

// Connect to MySQL and create the database if it doesn't exist
connection.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL server.');

    // Create the database if it doesn't exist
    const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`;
    
    connection.query(createDatabaseQuery, (err, result) => {
        if (err) {
            console.error('Error creating database:', err);
            return;
        }
        console.log(`Database "${process.env.DB_NAME}" is ready.`);

        // Switch to the created database using the same connection
        connection.changeUser({ database: process.env.DB_NAME }, (err) => {
            if (err) {
                console.error('Error switching to the database:', err);
                return;
            }

            console.log(`Now using the database: ${process.env.DB_NAME}`);

            // Create the "schools" table if it doesn't exist
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS schools (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    address VARCHAR(255) NOT NULL,
                    latitude FLOAT NOT NULL,
                    longitude FLOAT NOT NULL
                )
            `;

            connection.query(createTableQuery, (err, result) => {
                if (err) {
                    console.error('Error creating table:', err);
                } else {
                    console.log('Schools table is ready.');
                }
            });

            // Now that the database is selected and the table is created, export the connection
        });
    });
});

module.exports = connection;