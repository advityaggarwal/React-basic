import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li> <Link to={'/'}>Home</Link></li>
            <li> <Link to={'/login'}>Login</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
