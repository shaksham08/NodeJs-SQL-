// const express = require("express");
const { Client } = require("pg");

const client = new Client({
  user: "shaksham",
  password: "newpassword",
  host: "localhost",
  port: 5432,
  database: "shaksham",
});

async function createTable() {
  await client.connect();
  const result = await client.query(
    `CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(50) UNIQUE NOT NULL,
      password VARCHAR(50) NOT NULL,
      creates_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`
  );
  console.log(result);
}

async function insertData() {
  await client.connect();
  const insertQuery =
    "Insert into users (username, email ,password) values ($1, $2, $3)";
  const result = await client.query(insertQuery, [
    "shaksham123",
    "shaksham@gmail.com",
    "password",
  ]);
  console.log(result);
}

insertData();

// const app = express();

// app.listen("3032", () => {
//   console.log("Server is running on port 3032");
// });
