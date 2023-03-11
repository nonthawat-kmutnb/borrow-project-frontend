import React from 'react';
import { useState, useEffect } from "react";
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage';
import AddProduct from '../css/AddProducts.css'

function AddProducts() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

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
  return (
    <AnimatedPage>
      <div className="AddProducts">
        <header className="App-header">
          <h1>Add Products</h1>
          <form>
            <label>Name :</label>
            <input
              type="text"
              placeholder="Enter Name"/>
            <label>SerialNumber :</label>
            <input
              type="text"
              placeholder="Enter SerialNumber"/>
            <label>Category :</label>
            <select>
              <option value="Circuit Breakers">Circuit Breakers</option>
              <option value="Magnetic Starters">Magnetic Starters</option>
              <option value="Lighting ">Lighting </option>
              <option value="Cabling">Cabling</option>
              <option value="Panel Boards">Panel Boards</option>
              <option value="Transformers">Transformers</option>
              <option value="Switches">Switches</option>
              <option value="Relays">Relays</option>
            </select>
            <label>Type :</label>
            <select>
              <option value="Circuit Breakers">Circuit Breakers</option>
              <option value="Magnetic Starters">Magnetic Starters</option>
              <option value="Lighting ">Lighting </option>
              <option value="Cabling">Cabling</option>
              <option value="Panel Boards">Panel Boards</option>
              <option value="Transformers">Transformers</option>
              <option value="Switches">Switches</option>
              <option value="Relays">Relays</option>
            </select>
            <label>Image :</label>
            <input type="file" multiple accept="image/*" onChange={onImageChange} />
            {imageURLs.map((imageSrc, idx) => (
            <img key={idx} width="640" height="360" src={imageSrc} />))}
            <button>Add</button>
          </form>
          <HamburgerMenu />
        </header>
      </div>
    </AnimatedPage>

  );
}


export default AddProducts;
