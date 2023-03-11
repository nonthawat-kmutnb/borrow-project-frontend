import React from 'react';
import './App.css';
import HamburgerMenu from './components/HamburgerMenu';
import AnimatedRouter from './components/AnimatedRouter'
import AdminRouter from './components/AdminRouter'
import UserRouter from './components/UserRouter'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <HamburgerMenu />
      <AdminRouter />
      <UserRouter />
    </Router>


  );
}

export default App;
