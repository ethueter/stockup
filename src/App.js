import React, { useState, useEffect } from 'react';
import { Router } from "react-router-dom";
import './App.css';
import "fontsource-roboto";

import history from './services/history';
import Routes from './routes';
import { withFirebase } from './components/Firebase';
import Navbar from './components/Navbar';
import Header from './components/Header';

const App = ({ firebase }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser 
        ? setAuthUser(authUser) 
        : setAuthUser(null);
    });
  }, [firebase.auth])


  return (
    <Router history={history}>
      <Header />
      <Navbar />
      <Routes authUser={authUser} />
    </Router>
  );
}

export default withFirebase(App);
