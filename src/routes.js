import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';


export default (
    <Switch>
        <Route
            path='/edit/:id'
            component={Form}
        />
        <Route
            path='/add'
            component={Form}
        />
        <Route 
            path='/'
            component={Dashboard}
        />
        <Route
            render={ () =>  <img width="300px" src="https://assets.vogue.com/photos/5deec371e52fbd00086eb68b/1:1/w_2968,h_2968,c_limit/promo-banana.jpg" alt='banana art'/> }
        />
    </Switch>
)