import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import AnimatedPage from "../AnimatedPage";
import "./AddAdmin.css";

function App() {
  // const [email, setEmail] = useState('');

  // const handleInputChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleConfirmClick = () => {

  // };

  return (
    <AnimatedPage>
      <div className="App">
        <header className="App-header">
          <div className="add-admin-container">
            <h1>Add Admin</h1>
            <label>Email :</label>
            <input
              type="email"
              placeholder="Enter Email"
              // value={email}
              // onChange={handleInputChange}
            />
            <button>Add</button>
            <HamburgerMenu />
          </div>
        </header>
      </div>
    </AnimatedPage>
  );
}

export default App;
