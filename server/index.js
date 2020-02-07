/*******************************************************************/
const express = require('express');
const app = express();
const massive = require('massive');
const dotenv = require('dotenv');
dotenv.config();

var controller = require('./controller');

let { SERVER_PORT, CONNECTION_STRING } =  process.env;

app.listen(SERVER_PORT, () => console.log(`Party on, Wayne!`));

/*******************************************************************/

app.use(express.json());

massive(CONNECTION_STRING)
.then( db => {
    app.set('db', db);
    console.log('Database connection successful');
} )
.catch( () => console.log('Looks like you didn\'t connect to the database properly. Try again.') );

// Import from Controller

var { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = controller;

// End Points

app.get('/api/products', getProducts);          // Read (All)
app.post('/api/products', createProduct);       // Create
app.get('/api/products/:id', getProduct);       // Read
app.put('/api/products/:id', updateProduct);   // Update
app.delete('/api/products/:id', deleteProduct); // Delete