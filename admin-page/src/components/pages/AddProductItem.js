import React from 'react';
import { useState, useEffect } from "react";
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage';
import AddProductItem from '../css/AddProductItem.css'
import swal from 'sweetalert';
import axiosInstance from 'axios';
import axios from 'axios';


function AddProducts() {

  const token = localStorage.getItem('token');
  if(!token) {
    window.location.href = "/admin";
  }
  
  const [inputs, setInputs] = useState({});
  const [productItem,SetproductItem] = useState([]);
  const [source,Setsource] = useState([]);
  const [lab,Setlab] = useState([]);

  const handleChange = (event) => { 
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const config = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': "application/json"
    }
};

const fetchData = async()=>{

    axios
    .get(`${process.env.REACT_APP_API}/products`)
    .then(response=>{
      console.log(response.data)
      SetproductItem(response.data)
    })
    .catch(err=>alert(err))

    axios
    .get(`${process.env.REACT_APP_API}/source`)
    .then(response=>{
      console.log(response.data)
      Setsource(response.data)
    })
    .catch(err=>alert(err))

    axios
    .get(`${process.env.REACT_APP_API}/lab`)
    .then(response=>{
      console.log(response.data)
      Setlab(response.data)
    })
    .catch(err=>alert(err))


  }
  useEffect(()=>{
    fetchData()// eslint-disable-next-line
  },[])

  // console.log(postimage)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)

    if ( inputs.serialNumberRef !== undefined && inputs.ProductId !== undefined && inputs.LabId !== undefined && inputs.SourceId !== undefined) {

      axiosInstance.post(`${process.env.REACT_APP_API}/productItem`, inputs, config).then(response=>{
        console.log(response)
    }).then(() => {
      swal("Success", "Add Products Succes", "success", {
        buttons: false,
        timer: 1000,
      })
      window.location.href = "/admin/add-productItem";
    }).catch(respon=>      
        swal("Failed", respon.response.data.message, "error", {
        buttons: false,
        timer: 2000,
  
      }));

  } else {
    swal("Failed", "Please complete the information.", "error");
  }
  }

  return (
    <AnimatedPage>
      <div className="AddProductItem" style={{backgroundColor: '#dddddd'}}>

          <h1>Add ProductItem</h1>
          
          <form onSubmit={handleSubmit}>
            <label>SerialNumber :</label>
            <input
              type="text"
              name="serialNumberRef" 
              value={inputs.serialNumberRef || ""} 
              onChange={handleChange}
              placeholder="Enter SerialNumber"/>

            <label>Source :</label>

              <select name="SourceId" value={inputs.SourceId || ''} onChange={handleChange}>

                    {source.map((source) => (

                    <option value={source.id}>{source.name}</option>

                    ))}

                </select>  

              <label>Lab :</label>
              <select name="LabId" value={inputs.LabId || ''} onChange={handleChange}>

                    {lab.map((lab) => (

                    <option value={lab.id}>{lab.name}</option>

                    ))}

                </select>

                <label>Product :</label>
                <select name="ProductId" value={inputs.ProductId || ''} onChange={handleChange}>

                    {productItem.map((productItem) => (

                    <option value={productItem.id}>{productItem.name}</option>

                    ))}

                </select>


            <button>Add</button>
          </form>
          <HamburgerMenu />
        
      </div>
    </AnimatedPage>

  );
}


export default AddProducts;


