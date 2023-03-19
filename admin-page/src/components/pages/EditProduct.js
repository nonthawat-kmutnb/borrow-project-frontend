import React from "react";
import { useState, useEffect } from "react";
import HamburgerMenu from "../HamburgerMenu";
import AnimatedPage from "../AnimatedPage";
import EditProduct from "../css/EditProduct.css";
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';
import axiosInstance from 'axios';

function App() {

  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [inputs, setInputs] = useState({});
  const config = {
    headers: {
        'Accept': '*/*',
        'Content-Type': 'multipart/form-data',
    }
};

  const initialFormData = Object.freeze({
    name: '',
  });

  const handleChange = (event) => {

    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
  });

  }

  const [formData, updateFormData] = useState(initialFormData);
  useEffect(() => {

    axiosInstance.get(`http://localhost:3000/productItem/id/${id}`, config).then((res) => {
			updateFormData({
				...formData,
				['name']: res.data.product.name,
        ['serialNumber']: res.data.serialNumber,

			});

			console.log(res.data);
		}, [updateFormData]);

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

    swal("Success", "Edit products Succes", "success", {
      buttons: false,
      timer: 1000,

    })
    .then((value) => {
      window.location.href = "/admin/Products";
    });
    console.log(inputs)
  } else {
    swal("Failed", "Please complete the information.", "error");
  }
  }

  return (
    <AnimatedPage>
      <div
        className="EditProduct-container-Content"
        style={{ backgroundColor: "#dddddd" }}
      >
        <div className="EditProduct-container-Head">
          <div>
            <h1>Edit Product</h1>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="sub-con">

              <label>Name :</label>
              <input type="text"               
              name="name" 
              value={formData.name } 
              onChange={handleChange}
              placeholder="Enter Name" />

              <label>SerialNumber :</label>
              <input type="text" 
              name="serialNumberRef" 
              value={formData.serialNumber || ""} 
              onChange={handleChange}
              placeholder="Enter SerialNumber" />

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
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={onImageChange}
              />
              {imageURLs.map((imageSrc, idx) => (
                <img key={idx} width="640" height="360" src={imageSrc} />
              ))}
            </div>
            <div
              className="sub-con"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <button
                type="submit"
                className="Confirm-button"
                style={{ color: "white", backgroundColor: "#ff6004" }}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
      <HamburgerMenu />
    </AnimatedPage>
  );
}

export default App;
