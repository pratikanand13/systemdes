// write a function to create a users table in your database.
import { Client } from 'pg'
async function insertData() {
const client = new Client({
    connectionString: 'postgresql://postgres:123@localhost:5434/nest?schema=public'
  })


try {
    await client.connect(); // Ensure client connection is established
    const insertQuery = "INSERT INTO userss (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();