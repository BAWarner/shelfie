import React from 'react';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';

class App extends React.Component {
  // Constructor
  constructor(){
    super();
    this.state = {
      products: []
    }
  }
  // Lifecycle: Component Did Mount
  componentDidMount(){
    // Axios
    axios
    .get('/api/products')
    .then( res => /* Set State */ this.setState( { products: res.data } ) )
    .catch( err => console.log(err) )
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Dashboard
          products={this.state.products}
        />
        <Form />
      </div>
    );
  }
}

export default App;
