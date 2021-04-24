import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserForm from "./components/Form";
import Admin from "./components/Admin";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <UserForm/>
          </Route>
          <Route path='/admin_page' exact>
            <Admin/>
          </Route>
          <Route path='/login' exact>
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
