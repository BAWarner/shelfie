/*****************************************************/
const express = require('express');
const app = express();
const massive = require('massive');
const dotenv = require('dotenv');
dotenv.config();

let { SERVER_PORT, CONNECTION_STRING } =  process.env;

app.listen(SERVER_PORT, () => console.log(`Party on, Wayne!`));

/*****************************************************/

app.use(express.json());

massive(CONNECTION_STRING)
.then( db => {
    app.set('db', db);
    console.log('Database connection successful');
} )
.catch( () => console.log('Looks like you didn\'t connect to the database properly. Try again.') );