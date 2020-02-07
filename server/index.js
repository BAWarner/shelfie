/*******************************************************************/
const express = require('express');
const app = express();
const massive = require('massive');
const dotenv = require('dotenv');
dotenv.config();

var controller = require('./controller');

let { SERVER_PORT, CONNECTION_STRING } =  process.env;

// Express: Server Running
app.listen(SERVER_PORT, () => console.log(`Party on, Wayne!`));

/*******************************************************************/
// REST: Body Parser
app.use(express.json());

// Massive: Connection
massive(CONNECTION_STRING)
.then( db => {
        app.set("db", db);
        console.log('Connection to database successful');
    } 
)
.catch( err => console.log(err) )
// Import from Controller

var { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = controller;

// End Points

app.get('/api/products', getProducts);          // Read (All) REST: Get
app.post('/api/products', createProduct);       // Create REST: Post
app.get('/api/products/:id', getProduct);       // Read REST: Get
app.put('/api/products/:id', updateProduct);    // Update REST: Put
app.delete('/api/products/:id', deleteProduct); // Delete REST: Delete