import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import AnimatedPage from "../AnimatedPage";
import OrangeButton from '../OrangeButton';
import Password from "../css/Password.css"

function App() {
  return (
    <AnimatedPage>
      <div className="Password">
        <header className="Password">
          <h1>Password</h1>
          <form>
            <label>Password :</label>
            <input
              type="text"
              placeholder="Enter Password"/>
            <label>New Password :</label>
            <input
              type="text"
              placeholder="Enter new Password"/>
            <ul>
              <OrangeButton to="/admin/rent" text="Confirm"/>
            </ul>
            </form>
          <HamburgerMenu />
        </header>
      </div>
    </AnimatedPage>

  );
}
export default App;