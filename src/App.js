import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import { HashRouter } from 'react-router-dom';
import routes from './routes';


function App(){

    return (
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
    );
}

export default App;
