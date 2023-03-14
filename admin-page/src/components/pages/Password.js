import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import AnimatedPage from "../AnimatedPage";
import OrangeButton from '../OrangeButton';
import Password from "../css/Password.css"

function App() {
  return (
    <AnimatedPage>
      <div className="Password-container" style={{backgroundColor: '#dddddd'}}>
        <header className="Password">
          <h1>Change Password</h1>
          </header>
          
          <form>
          <div className="Password-form">
            <label>Password :</label>
            <input
              type="text"
              placeholder="Enter Password"/>
            <label>New Password :</label>
            <input
              type="text"
              placeholder="Enter new Password"/>
            </div>
            <div className="Password-button" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <OrangeButton to="/admin/rent" text="Confirm"/>
            </div>
            </form>
            
          <HamburgerMenu />
        
      </div>
    </AnimatedPage>

  );
}
export default App;