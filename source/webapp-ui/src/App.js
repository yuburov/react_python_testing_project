import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserForm from "./components/Form";
import Admin from "./components/Admin";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import {useDispatch} from "react-redux";
import {authCheckState} from "./redux/actions/auth";

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authCheckState())
  },[])

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
