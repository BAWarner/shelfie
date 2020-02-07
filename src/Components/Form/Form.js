import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component{
    // Constructor
    constructor(){
        super();
        // State
        this.state = {
            image_url: '',
            product_name: '',
            price: ''
        }

        // Function Binding
        this.resetForm = this.resetForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        // Set State
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit(){
        let body =  this.state;
        // Axios
        axios
        .post('/api/products', body)
        .then( () => console.log('Party on, Wayne!') )
        .catch( err => console.log(err) );
        
    }
    resetForm(e){
        e.preventDefault();
        // Set State
        this.setState({
            image_url: '',
            product_name: '',
            price: ''
        })
    }
    render(){

        // Destructure
        let { image_url, product_name, price } = this.state;

        return(
            <section className='form-wrap'>
                <form id="productForm" onSubmit={this.handleSubmit}>
                    <div className="image-wrap">
                        <img
                            src={ 
                                image_url !== '' 
                                    ? image_url 
                                    : 'https://s3.amazonaws.com/bloc-global-assets/almanac-assets/bootcamps/logos/000/002/656/original/DevMountain.jpg?1467187319' 
                                }
                            alt={`${product_name}`}
                        />
                        <input
                            type='text'
                            name='image_url'
                            onChange={ this.handleChange }
                            value={ image_url }
                        />
                    </div>
                    <input
                        type='text'
                        name='product_name'
                        onChange={ this.handleChange }
                        value={ product_name }
                    />
                    <input 
                        type='text'
                        name='price'
                        onChange={ this.handleChange }
                        value={ price }
                    />
                    <div className="button-wrap">
                        <button onClick={ this.resetForm } className="cancel">Cancel</button>
                        <input type="submit" value="Add to Inventory" />
                    </div>
                </form>
            </section>
        );
    }
}

export default Form;