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
  const fetchData = ()=>{


    axios
    .get("http://localhost:8080/productItem")
    .then(response=>{
      setProducts(response.data)
    })
    .catch(err=>alert(err))
    
  }

  React.useEffect(()=>{
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
        <FilterComponent />
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
