import { React,useState } from 'react';
import HamburgerMenu from "../HamburgerMenu";
import AnimatedPage from "../AnimatedPage";
import OrangeButton from '../OrangeButton';
import "../css/AddAdmin.css"
import swal from 'sweetalert';
function App() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)

    if (inputs.email !== undefined && inputs.username !== undefined && inputs.password !== undefined && inputs.Confirm_password !== undefined ) {

      if (inputs.password === inputs.Confirm_password){

        swal("Success", "Add Succes", "success", {
          buttons: false,
          timer: 1000,
        })    .then(() => {
          // window.location.href = "/admin/rent";
        });

      } else {
        swal("Failed", "Password does not match Confirm Password.", "error");
      }

    console.log(inputs)
  } else {
    swal("Failed", "Please complete the information.", "error");
  }
  }

  return (
    <AnimatedPage>
      <div className="App">
        <header className="App-header">
          <div className="add-admin-container" style={{backgroundColor: '#dddddd'}}>
            <h1>Add Admin</h1>

            <form onSubmit={handleSubmit}>
              <label>Username :</label>
              <input
                type="text"
                name="username"
                value={inputs.username || ""} 
                onChange={handleChange}
                placeholder="Enter Username"              
              />
              <label>Email :</label>
              <input
                type="email"
                name="email"
                value={inputs.email || ""} 
                onChange={handleChange}
                placeholder="Enter Email"       
              />
              <label>Password :</label>
              <input
                type="password"
                name="password"
                value={inputs.password || ""} 
                onChange={handleChange}
                placeholder="Enter Password"              
              />
              <label>Confirm Password :</label>
              <input
                type="password"
                name="Confirm_password"
                value={inputs.Confirm_password || ""} 
                onChange={handleChange}
                placeholder="Enter Password"              
              />

              <div className="add-admin-container-button">
                <button className='add-admin-button'>Confirm</button>
              </div>
            </form>
            <HamburgerMenu />
          </div>
        </header>
      </div>
    </AnimatedPage>
  );
}

export default App;
