//server.js

const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database!');
    await createEventsTable(); // Call the function to create the events table
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

async function createEventsTable() {
  try {
    await client.query(`
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      date VARCHAR(255), 
      location VARCHAR(255),
      url VARCHAR(255),
      image VARCHAR(255),
      description TEXT
    )
  `);
  console.log('Table created successfully');
    // Check if the column type needs to be changed
    const checkColumnTypeQuery = `
      SELECT data_type FROM information_schema.columns
      WHERE table_name = 'events' AND column_name = 'date'
    `;
    const { rows } = await client.query(checkColumnTypeQuery);

    if (rows.length > 0 && rows[0].data_type === 'date') {
      // Alter the column type to VARCHAR(255)
      const alterColumnTypeQuery = `
        ALTER TABLE events
        ALTER COLUMN date TYPE VARCHAR(255)
      `;
      await client.query(alterColumnTypeQuery);
      console.log('Column type updated successfully.');
    } else {
      console.log('Column type is already VARCHAR(255). No changes needed.');
    }
  } catch (error) {
    console.error('Error creating table:', error);
    console.error('Error altering column type:', error);
  }
}


async function closeDatabaseConnection() {
  try {
    await client.end();
    console.log('Disconnected from the database.');
  } catch (error) {
    console.error('Error closing database connection:', error);
  }
}
module.exports = { client, connectToDatabase, closeDatabaseConnection };