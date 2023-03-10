import React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage';
import Rent from "./Rent.css";

function Rental() {
  return (
    <AnimatedPage>
      <div className="Rent">
        <header className="App-header">
          <h1>Rental Form</h1>
          <form>
            <label>Name :</label>
            <input
              type="text"/>
            <label>StudentID :</label>
            <input
              type="text"/>
            <label>Tel :</label>
            <input
              type="text"/>
            <label>E-Mail :</label>
            <input
              type="text"/>
            <label>SerialNumber :</label>
            <input
              type="text"/>
            <button>Add</button>
            </form>
          <HamburgerMenu />
        </header>
      </div>
    </AnimatedPage>

  );
}

export default Rental;
