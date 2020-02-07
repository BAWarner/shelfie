import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <div>
                <h1>Dashboard Component</h1>
                <Product />
            </div>
        );
    }
}

export default Dashboard;