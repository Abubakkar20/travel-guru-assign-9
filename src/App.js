import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PlaceDetails from './Components/PlaceDetail/PlaceDetails';
import HomeDetails from './Components/HomeDetails/HomeDetails';
import CreateAccount from './Components/CreateAccount/CreateAccount';

import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Hotel from './Components/Hotel/Hotel';



export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/homeDetails">
            <HomeDetails />
          </Route>
          <Route path="/PlaceDetails">
            <PlaceDetails />
          </Route>
          <Route path="/createAccount">
            <CreateAccount />
          </Route>
          <PrivateRoute path="/hotel">
            <Hotel></Hotel>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router >
    </UserContext.Provider>
  );
}
export default App;
