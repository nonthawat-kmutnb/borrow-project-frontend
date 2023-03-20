import { React,useState } from 'react';
import HamburgerMenu from "../HamburgerMenu";
import AnimatedPage from "../AnimatedPage";
import OrangeButton from '../OrangeButton';
import "../css/AddAdmin.css"
import swal from 'sweetalert';
import axiosInstance from 'axios';

function App() {
// Check login
  const token = localStorage.getItem('token');
  if(!token) {
    window.location.href = "/admin";
  }
// Form input
  const [inputs, setInputs] = useState({});
  const [Confirm_password,setConfirm_password] = useState('')

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
// header api
  const config = {
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    if (inputs.email !== undefined && inputs.name !== undefined && inputs.password !== undefined && Confirm_password !== '' ) {

      if (inputs.password === Confirm_password){

        axiosInstance.post(`http://localhost:3000/admin/addadmin`, inputs, config)
        .then(() => {
          swal("Success", "Add Succes", "success", {
            buttons: false,
            timer: 1000,
          }).then(()=>{
            window.location.href = "/admin/add-admin";
          })
        }).catch(respon=>      
          swal("Failed", respon.response.data.message, "error", {
          buttons: false,
          timer: 2000,
    
        }));

      } else {
        swal("Failed", "Password does not match Confirm Password.", "error");
      }

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
                name="name"
                value={inputs.name || ""} 
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
                onChange={e => setConfirm_password(e.target.value)}
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
