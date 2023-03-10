import React from 'react';
import './App.css';
import HamburgerMenu from './components/HamburgerMenu';
import AnimatedRouter from './components/AnimatedRouter'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
        <HamburgerMenu/>
        <AnimatedRouter />
    </Router>
  );
}

export default App;
