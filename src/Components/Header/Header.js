import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <header>
                <ul>
                    <Link
                        to='/'
                    >
                        <li>Dashboard</li>
                    </Link>
                    <Link
                        to='/add'
                    >
                        <li>Add New</li>
                    </Link>
                </ul>
            </header>
        );
    }
}

export default Header;