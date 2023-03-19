import { React,useState } from 'react';
import HamburgerMenu from "../HamburgerMenu";
import AnimatedPage from "../AnimatedPage";
import OrangeButton from '../OrangeButton';
import Password from "../css/Password.css"
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

    if (inputs.password !== undefined && inputs.Confirm_password !== undefined ) {

      if (inputs.password === inputs.Confirm_password){

        swal("Success", "Change password Succes", "success", {
          buttons: false,
          timer: 1000,
        })    .then(() => {
          window.location.href = "/admin/rent";
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
      <div className="Password-container" style={{backgroundColor: '#dddddd'}}>
        <header className="Password">
          <h1>Change Password</h1>
          </header>
          
          <form onSubmit={handleSubmit}>
          <div className="Password-form">
            <label>Password :</label>
            <input
              type="password"
              name="password"
              value={inputs.password || ""} 
              onChange={handleChange}
              placeholder="Enter Password"/>
            <label>New Password :</label>
            <input
              type="password"
              name="Confirm_password"
              value={inputs.Confirm_password || ""} 
              onChange={handleChange}
              placeholder="Enter new Password"/>
            </div>
            <div className="Password-contain-button" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className='Password-button'>Confirm</button>
            </div>
            </form>
            
          <HamburgerMenu />
        
      </div>
    </AnimatedPage>

  );
}
export default App;