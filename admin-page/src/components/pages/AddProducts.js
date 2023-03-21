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
  
  const [inputs, setInputs] = useState({});
  const [postimage, setPostImage] = useState(null);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

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
  const config_img = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
    }
  };
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);
  function onImageChange(e) {

    setPostImage({
      image: e.target.files,
    });

    setImages([...e.target.files]);
  }

  console.log("Images : ", images);
  console.log("imageURLs : ", imageURLs);
  // console.log(postimage)
  let formData = new FormData();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)

    if ( inputs.name !== undefined && postimage != null) {

      axiosInstance.post(`${process.env.REACT_APP_API}/products`, inputs, config).then(response=>{

      console.log(response.data.id)
      console.log(`${process.env.REACT_APP_API}/products/${response.data.id}/image`)
      formData.append('product', postimage.image[0]);
      axiosInstance.post(`${process.env.REACT_APP_API}/products/${response.data.id}/image`, formData, config_img);

    }).then(() => {
      swal("Success", "Add Products Succes", "success", {
        buttons: false,
        timer: 2000,
      })
      window.location.href = "/admin/add-products";
    });

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

            <label>Image :</label>
            <input type="file" accept="image/*" onChange={onImageChange} id="image" name="image"/>
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










            {/* <label>SerialNumber :</label>
            <input
              type="text"
              name="serialNumberRef" 
              value={inputs.serialNumberRef || ""} 
              onChange={handleChange}
              placeholder="Enter SerialNumber"/>
            <label>Category :</label>
            <select
                name="categoryId" 
                value={inputs.categoryId || ""} 
                onChange={handleChange}
                >
                <option value="1">ครุภัณฑ์ไฟฟ้าและวิทยุ</option>
                <option value="2">ครุภัณฑ์โรงงาน</option>
                <option value="3 ">ครุภัณฑ์การศึกษา</option>
                <option value="4">ครุภัณฑ์วิทยาศาสตร์และการแพทย์</option>
                <option value="5">ครุภัณฑ์คอมพิวเตอร์</option>
                <option value="6">ครุภัณฑ์สำนักงาน</option>
                <option value="">-</option>

              </select> */}
              {/* <label>source :</label>
            <select
                name="sourceId" 
                value={inputs.sourceId || ""} 
                onChange={handleChange}
                >
                <option value="1">center</option>
                <option value="2">department</option>
                <option value="3 ">personal</option>
                <option value="4">ภาควิชาวิศวกรรมไฟฟ้า</option>
                <option value="5">สำนักงานภาควิชาวิศวกรรมไฟฟ้า</option>
                <option value="6">นายสิทธิพร    เกิดสำอางค์</option>
                
              </select>
              <label>source :</label>
              <select
                  name="roomId" 
                  value={inputs.roomId || ""} 
                  onChange={handleChange}
                  >
                  <option value="1">room1</option>
                  <option value="2">room2</option>
                  <option value="3 ">room3</option>
                  
                </select>

                <label>Products :</label> */}