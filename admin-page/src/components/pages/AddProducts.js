import React from 'react';
import { useState, useEffect } from "react";
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage';
import AddProduct from '../css/AddProducts.css'
import swal from 'sweetalert';
import axiosInstance from 'axios';

function AddProducts() {
  const token = localStorage.getItem('token');
  if(!token) {
    window.location.href = "/admin";
  }
  
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const config = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
    }
};

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {

    setImages([...e.target.files]);
  }

  console.log("Images : ", images);
  console.log("imageURLs : ", imageURLs);

  const handleSubmit = (event) => {
    event.preventDefault();

    if ( inputs.name !== undefined && inputs.serialNumberRef !== undefined && images.length !== 0 && imageURLs.length !== 0 ) {

      axiosInstance.post(`http://localhost:3000/transaction`, inputs, config)
      
    swal("Success", "Add products Succes", "success", {
      buttons: false,
      timer: 1000,
    })
    .then((value) => {
      window.location.href = "/admin/add-products";
    });
    console.log(inputs)
  } else {
    swal("Failed", "Please complete the information.", "error");
  }
  }

  return (
    <AnimatedPage>
      <div className="AddProducts" style={{backgroundColor: '#dddddd'}}>

          <h1>Add Products</h1>
          
          <form onSubmit={handleSubmit}>
            <label>Name :</label>
            <input
              type="text"
              name="name" 
              value={inputs.name || ""} 
              onChange={handleChange}
              placeholder="Enter Name"/>
            <label>SerialNumber :</label>
            <input
              type="text"
              name="serialNumberRef" 
              value={inputs.serialNumberRef || ""} 
              onChange={handleChange}
              placeholder="Enter SerialNumber"/>
            <label>Category :</label>
            <select 
              name="category_object" 
              value={inputs.category_object || ""} 
              onChange={handleChange}
              >
              <option value="Circuit Breakers">Circuit Breakers</option>
              <option value="Magnetic Starters">Magnetic Starters</option>
              <option value="Lighting ">Lighting </option>
              <option value="Cabling">Cabling</option>
              <option value="Panel Boards">Panel Boards</option>
              <option value="Transformers">Transformers</option>
              <option value="Switches">Switches</option>
              <option value="Relays">Relays</option>
            </select>
            {/* <label>Type :</label>
            <select>
              <option value="Circuit Breakers">Circuit Breakers</option>
              <option value="Magnetic Starters">Magnetic Starters</option>
              <option value="Lighting ">Lighting </option>
              <option value="Cabling">Cabling</option>
              <option value="Panel Boards">Panel Boards</option>
              <option value="Transformers">Transformers</option>
              <option value="Switches">Switches</option>
              <option value="Relays">Relays</option>
            </select> */}
            <label>Image :</label>
            <input type="file" multiple accept="image/*" onChange={onImageChange} />
            {imageURLs.map((imageSrc, idx) => (
            <img key={idx} width="640" height="360" src={imageSrc} />))}
            <button>Add</button>
          </form>
          <HamburgerMenu />
        
      </div>
    </AnimatedPage>

  );
}


export default AddProducts;
