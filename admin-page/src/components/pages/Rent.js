import { React,useState } from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage';
import Rent from "../css/Rent.css"
import swal from 'sweetalert';
function Rental() {


  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputs.email !== undefined && inputs.username !== undefined && inputs.StudentID !== undefined && inputs.phoneNumber !== undefined && inputs.location !== undefined && inputs.serialNumberRef !== undefined) {

    console.log(inputs.E_Mail)
    swal("Success", "Rent Succes", "success", {
      buttons: false,
      timer: 1000,

    })
    .then((value) => {
      window.location.href = "/admin/rent";
    });
    console.log(inputs)
  } else {
    swal("Failed", "Please complete the information.", "error");
  }
  }

  return (
    <AnimatedPage>
      <div className="Rent" >
        <header className="App-header">
          <h1>Rental Form</h1>
          
          <form onSubmit={handleSubmit}>
          <div className='Rent-form' style={{backgroundColor: '#dddddd'}}>
            <label>Name :</label>
            <input
              type="text"
              name="username" 
              value={inputs.username || ""} 
              onChange={handleChange}
              placeholder="Enter Name"/>
            <label>StudentID :</label>
            <input
              type="text"
              name="StudentID" 
              value={inputs.StudentID || ""} 
              onChange={handleChange}
              placeholder="Enter StudentID"/>
            <label>PhoneNumber :</label>
            <input
              type="text"
              name="phoneNumber" 
              value={inputs.phoneNumber || ""} 
              onChange={handleChange}
              placeholder="Enter Telephone number"/>
            <label>E-Mail :</label>
            <input
              type="email"
              name="email" 
              value={inputs.email || ""} 
              onChange={handleChange}
              placeholder="Enter E-mail"/>
            <label>Location :</label>
            <input
              type="text"
              name="location" 
              value={inputs.location || ""} 
              onChange={handleChange}
              placeholder="Enter Location"/>
            <label>SerialNumber :</label>
            <input
              type="text"
              name="serialNumberRef" 
              value={inputs.serialNumberRef || ""} 
              onChange={handleChange}
              placeholder="Enter SerialNumber"/>
            
            <button>Confirm</button>
            </div>
            </form>
          <HamburgerMenu />
        </header>
      </div>
    </AnimatedPage>

  );
}

export default Rental;
