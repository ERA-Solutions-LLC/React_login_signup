import logo from './logo.svg';
import './App.css';
import React from 'react';

import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
