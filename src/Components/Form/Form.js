import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Form extends Component{
    // Constructor
    constructor(){
        super();
        // State
        this.state = {
            id: null,
            image_url: '',
            product_name: '',
            price: '',
            edit: false
        }

        // Function Binding
        this.resetForm = this.resetForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    componentDidMount(){
        if(this.props.match.path !== '/add'){
            let { id } = this.props.match.params;

            axios
            .get(`/api/products/${id}`)
            .then( res => {
                let { id, image_url, product_name, price } = res.data[0];
                this.setState({
                    id,
                    image_url,
                    product_name,
                    price,
                    edit: true
                });
                console.log(price, this.state.price);
            })
            .catch( err => console.log(err));
        }
    }
    handleChange(e){
        // Set State
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit(){
        let { image_url, product_name, price } = this.state;
        
        let body = {
            image_url: image_url,
            product_name: product_name,
            price: price
        }
        // Axios
        axios
        .post('/api/products', body)
        .then( (res) => console.log(res.data) )
        .catch( err => console.log(err) );
        
        this.props.history.push('/');
        
    }
    handleUpdate(){
        let { id, image_url, product_name, price } = this.state;
        
        let body = {
            id: id,
            image_url: image_url,
            product_name: product_name,
            price: price
        }
        axios
        .put(`/api/products/${id}`, body)
        .then( () => console.log('Party on, Wayne!') )
        .catch( err => console.log(err) );

        this.props.history.push('/');
    }
    resetForm(e){
        // Set State
        this.setState({
            image_url: '',
            product_name: '',
            price: ''
        })
    }
    render(){

        // Destructure
        let { image_url, product_name, price, edit } = this.state;

        return(
            <section className='form-wrap'>
                <form id="productForm">
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
                        <Link to='/' onClick={this.resetForm}>
                            <button className="cancel">Cancel</button>
                        </Link>
                        {
                            edit === true
                                ? <button name="updateProduct" onClick={ this.handleUpdate }>Save Changes</button>
                                : <button name="createProduct" onClick={ this.handleSubmit }>Add to Inventory</button>
                        }
                    </div>
                </form>
            </section>
        );
    }
}

export default Form;