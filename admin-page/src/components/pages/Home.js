import React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage'
import kmutnb from '../image/kmutnb.png';
import ece from '../image/ece.png';
import SquareImage from '../SquareImage';
import { NextUIProvider } from '@nextui-org/react'
import FilterComponent from '../FilterComponent';
import axios from 'axios';

import '../css/Home.css'
function App() {

  const [products,setProducts] = React.useState([])
  const isImage = (image) => image === null
  // const config = {
  //   headers: { 
  //     'Cookie': 'csrftoken=xiWboHDyASPhrFR7GqNz3MhWOGolGGa6'
  //   }
  // }
  
  const [options, setOptions] = React.useState([]);
  const [source, setSource] = React.useState([]);
  const [category, setCategory] = React.useState([]);


  const fetchData = async()=>{
    await
    axios
    .get("http://localhost:3000/productItem")
    .then(response=>{
      console.log(response.data)
      setProducts(response.data)
    })
    .catch(err=>alert(err))
    axios.get("http://localhost:3000/products")
        .then(response => {
            const options = response.data.map(item => ({
            value: item.id,
            label: item.name
            }));
            setOptions(options);
        })
        .catch(error => {
            console.error(error);})
    axios
    .get("http://localhost:3000/source")
    .then(response => {
        const source = response.data.map(item => ({
        value: item.id,
        label: item.name
        }));
        setSource(source);
    })
    .catch(error => {
        console.error(error);})     
    axios
    .get("http://localhost:3000/category")
    .then(response => {
        const category = response.data.map(item => ({
        value: item.id,
        label: item.title
        }));
        setCategory(category);
    })
    .catch(error => {
        console.error(error);})  
    
  }

  React.useEffect(()=>{
    // if (products.length = 0){
    //   fetchData()// eslint-disable-next-line
    // }
    fetchData()// eslint-disable-next-line
  },[])


    

  return (
    <NextUIProvider>
      <AnimatedPage>
        <div className='logo-container'>
          <img src={kmutnb} alt="kmutnb" className="kmutnb-logo" />
          <img src={ece} alt="ece" className="ece-logo" />
        </div>
        <div className="Home-header">
            <header>
              <h1>ยืมหน่อยถือว่าขอร้อง</h1>
              
            </header>
            <p>by cpr.e kmutnb 18 - 19</p>
        </div>
        <FilterComponent options={options} source={source} category={category} onUpdateData={setProducts}/>
        <div className="product-container">
          {products.slice(0).map((data, index) => (
            <SquareImage
            imageUrl={data.product.image ? data.product.image : "https://png.pngtree.com/png-vector/20190120/ourlarge/pngtree-gallery-vector-icon-png-image_470660.jpg"}
            // imageUrl="https://png.pngtree.com/png-vector/20190120/ourlarge/pngtree-gallery-vector-icon-png-image_470660.jpg"
            title={data.product.name}
            description={data.product.description}
            amount = {data.product.availableAmount}
            total_amount = {data.product.totalAmount}
            usage_freq = {data.product.usageFrequency}
            serialNo = {data.serialNumber}
            room = {data.room.name}
            source = {data.source.name}
            />
          ))}
          
          {/* <BootTest/> */}
        </div>
      </AnimatedPage>
    </NextUIProvider>
  );
}

export default App;
