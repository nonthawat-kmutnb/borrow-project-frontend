import React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage';
import Rent from "../css/Rent.css"

function Rental() {
  return (
    <AnimatedPage>
      <div className="Rent">
        <header className="App-header">
          <h1>Rental Form</h1>
          <form>
            <label>Name :</label>
            <input
              type="text"
              placeholder="Enter Name"/>
            <label>StudentID :</label>
            <input
              type="text"
              placeholder="Enter StudentID"/>
            <label>Tel :</label>
            <input
              type="text"
              placeholder="Enter Telephone number"/>
            <label>E-Mail :</label>
            <input
              type="text"
              placeholder="Enter E-mail"/>
            <label>SerialNumber :</label>
            <input
              type="text"
              placeholder="Enter SerialNumber"/>
            <button>Confirm</button>
            </form>
          <HamburgerMenu />
        </header>
      </div>
    </AnimatedPage>

  );
}

export default Rental;
