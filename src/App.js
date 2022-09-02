import React from 'react';
import './App.css';
import NavBar from './components/NavBar/index';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
      <NavBar/>
    </Router>
    
  );
};

export default App;
