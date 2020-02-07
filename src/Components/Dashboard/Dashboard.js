import React from 'react';
import Product from '../Product/Product';

// Functional Component

function Dashboard(props){
    
    let { products } = props;
    let productsMapped = products.map( (product, i) => {
            return(
                // Nested Component
                <Product
                    key={i}
                    product={product}
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

export default Dashboard;