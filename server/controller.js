getProducts = (req, res) => {
    let db = req.app.get('db');

    // Massive: SQL Commands
    db.getProducts()
    .then( allProducts => {
            res
            // Status Code
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
            // Status Code
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
    .then( () =>  /* Status Code */ res.sendStatus(200) )
    .catch( () => console.log('Couldn\'t make that product! Please try again.') )

}

updateProduct = (req, res) => {
    let db = req.app.get('db')
    // REST: Params
    let { id, image_url, product_name, price } = req.body;
    console.log(id, image_url, product_name, price);
    // // Massive: SQL Commands
    db.updateProduct(id, image_url, product_name, price)
    .then( (allProducts) => /* Send Status Code */ res.status(200).send(allProducts) )
    .catch();

}

deleteProduct = (req, res) => {
    let db = req.app.get('db');
    // Destructure
    // REST: Params
    let { id } = req.params;

    // Massive: SQL Commands
    db.deleteProduct(id)
    .then( (allProducts) => /* Send Status Code */ res.status(200).send(allProducts) )
    .catch( () => console.log('The product you tried to delete...didn\'t delete. Try again later.') )


}
module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}