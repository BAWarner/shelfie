import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component{
    constructor(){
        super();
        this.state = {}
    }
    // Arrow Functions
    handleDelete = (removeId) => {
        this.props.handleDelete(removeId);
    }
    handleEdit = (editId) => {
        this.props.handleEdit(editId);
    }
    render(){
        // Destructure props
        let { id, image_url, product_name, price } = this.props.product;
        return(
            <div className='single-product flex align-top justify-center'>
                <img
                    src={ image_url }
                    className='product-image'
                    alt={`${product_name}`}
                />
                <span className='block product-name'>{ product_name }</span>
                <span className='block price'>{ price }</span>
                <div className='button-row flex justify-between align-center'>
                    <button onClick={(removeId) => this.handleDelete(id)}>Delete</button>
                    <Link to={`/edit/${id}`}>
                        <button>Edit</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Product;