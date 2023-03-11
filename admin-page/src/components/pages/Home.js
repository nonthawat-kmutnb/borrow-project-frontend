import React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage'
import kmutnb from '../image/kmutnb.png';
import ece from '../image/ece.png';
import SquareImage from '../SquareImage';
import { NextUIProvider } from '@nextui-org/react'
import FilterComponent from '../FilterComponent';

import '../css/Home.css'
function App() {
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
          <SquareImage
            imageUrl="https://picsum.photos/200/200"
            title="Example Image"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis mauris ut sapien fringilla, sit amet efficitur turpis tristique. Nam nec velit in massa sagittis gravida."
          />
          <SquareImage
            imageUrl="https://picsum.photos/200/200"
            title="Example Image"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis mauris ut sapien fringilla, sit amet efficitur turpis tristique. Nam nec velit in massa sagittis gravida."
          />
          <SquareImage
            imageUrl="https://picsum.photos/200/200"
            title="Example Image"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis mauris ut sapien fringilla, sit amet efficitur turpis tristique. Nam nec velit in massa sagittis gravida."
          />
          <SquareImage
            imageUrl="https://picsum.photos/200/200"
            title="Example Image"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis mauris ut sapien fringilla, sit amet efficitur turpis tristique. Nam nec velit in massa sagittis gravida."
          />
          <SquareImage
            imageUrl="https://picsum.photos/200/200"
            title="Example Image"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis mauris ut sapien fringilla, sit amet efficitur turpis tristique. Nam nec velit in massa sagittis gravida."
          />
          <SquareImage
            imageUrl="https://picsum.photos/200/200"
            title="Example Image"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis mauris ut sapien fringilla, sit amet efficitur turpis tristique. Nam nec velit in massa sagittis gravida."
          />
          {/* <BootTest/> */}
        </div>
      </AnimatedPage>
    </NextUIProvider>
  );
}

export default App;
