import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product';

class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            products: [],
            editId: null
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    // Lifecycle: Component Did Mount
    componentDidMount(){
        // Axios
        axios
        .get('/api/products')
        .then( res => /* Set State */ this.setState( { products: res.data } ) )
        .catch( err => console.log(err) )
    }
    handleDelete(removeId){
        // Axios
        axios
        .delete(`/api/products/${removeId}`)
        .then( res => /* Set State */ this.setState({products: res.data}) )
        .catch( err => console.log(err) );
    }
    handleEdit(editId){
        this.setState({ editId })         
    }
    render(){
        let { products } = this.state;
        let productsMapped = products.map( (product, i) => {
                return(
                    // Nested Component
                    <Product
                        key={i}
                        product={product}
                        handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit}
                    />
                );
            }
        );
        return(
            <div>
                <h1>Dashboard Component</h1>
                {productsMapped}
            </div>
        );
    }
    
}

export default Dashboard;