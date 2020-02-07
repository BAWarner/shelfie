getProducts = (req, res) => {
    let db = req.app.get('db');

    // Massive: SQL Commands
    db.getProducts()
    .then( allProducts => {
            res
            .status(200)
            .send(allProducts);
        }
    )
    .catch( () => console.log('Unable to get what you were looking for, try again.') );
}

getProduct = (req, res) => {
    let db = req.app.get('db');
    // Destructure
    // REST: Params
    let { id } = req.params;
    // Massive: SQL Commands
    db.getProduct(id)
    .then( singleProduct => {
            res
            .status(200)
            .send(singleProduct);
        }
    )
    .catch( () => console.log('Unable to get what you were looking for, try again.') );
}

createProduct = (req, res) => {
    let db = req.app.get('db');
    // Destructure
    // REST: Body
    let { image_url, product_name, price } = req.body;
    // Massive: SQL Commands
    db.createProduct( image_url, product_name, price )
    .then( () => res.sendStatus(200) )
    .catch( () => console.log('Couldn\'t make that product! Please try again.') )

}

updateProduct = (req, res) => {
    // Massive: SQL Commands
    // REST: Params

}

deleteProduct = (req, res) => {
    // Massive: SQL Commands
    // REST: Params

}
module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}