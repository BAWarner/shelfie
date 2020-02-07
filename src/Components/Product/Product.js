import React, { Component } from 'react';

class Product extends Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        // Destructure props
        let { image_url, product_name, price } = this.props.product;
        return(
            <div className='single-product flex align-top justify-center'>
                <img
                    src={ image_url }
                    className='product-image'
                    alt={`${product_name}`}
                />
                <span className='block product-name'>{ product_name }</span>
                <span className='block price'>{ price }</span>

            </div>
        );
    }
}

export default Product;