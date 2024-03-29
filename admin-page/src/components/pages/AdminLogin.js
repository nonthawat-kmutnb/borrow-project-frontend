import React, { useState } from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage'
import Login from "../css/Login.css"
import kmutnb from '../image/kmutnb.png';
import ece from '../image/ece.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axiosInstance from 'axios';

function App() {

  // const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const config = {
    headers: {
      'Content-Type': 'application/json',
        'Accept': '*/*',
    }
  };
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const handleSubmit = async e =>  {
    
    e.preventDefault();
    
    var raw = JSON.stringify({
      "email": email,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:3000/admin`, requestOptions)
      .then(response =>response.json())
      .then(result => 

        {if ('token' in result){
          
          localStorage.setItem('token',result.token);
          
          swal("Success", "Login Succes", "success", {
            buttons: false,
            timer: 1000,
          })
          .then((value) => {
            window.location.href = "/admin/rent";
          });

        }else {

          swal("Failed", result.message, "error", {
            buttons: false,
            timer: 1000,
          })

        }
          
        console.log(result)})
  }

  return (

    <AnimatedPage>
      <div className='logo-container'>
        <img src={kmutnb} alt="kmutnb" className="kmutnb-logo" />
        <img src={ece} alt="ece" className="ece-logo" />
      </div>

    <div class="float-container">

      <div class="float-child_left" style={{backgroundColor: '#dddddd'}}>

      <img className="LoginImg" alt="complex" src="https://www.smoengineer.net/wp-content/uploads/2014/08/front_of_eng_bld.jpg" 
      style={{ alignItems: 'center',display: 'flex', justifyContent: 'center',height: '50vh',}}/>

      </div>
      
      <div class="float-child_right" style={{backgroundColor: '#dddddd'}}>
          <div className='float-Subchild'>
            <h1>Login admin account</h1>
          </div>
          <div>

              <form noValidate onSubmit={handleSubmit}>

                <div className='float-Subchild'>
                <label>Email :</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  onChange={e => setEmail(e.target.value)}/>
                <label>password :</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  onChange={e => setPassword(e.target.value)}/>
                </div >
                <div  className='float-Subchild' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit"  className='Login-button' style={{ color: 'white' ,backgroundColor: '#ff6004'} }>Confirm</button>
                </div>

              </form>
            </div>
      </div>
      
    </div>

    </AnimatedPage>

  );
}

export default App;
