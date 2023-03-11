import React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage'
import kmutnb from '../image/kmutnb.png';
import ece from '../image/ece.png';
import SquareImage from '../SquareImage';
import { NextUIProvider } from '@nextui-org/react'

import '../css/Home.css'
function App() {
  return (
    <NextUIProvider>
    <AnimatedPage>
      <div className='logo-container'>
        <img src={kmutnb} alt="kmutnb" className="kmutnb-logo"/>
        <img src={ece} alt="ece" className="ece-logo"/>
      </div>
      

      <div className="App">
        
        <header className="Home-header">
          <h1>ยืมหน่อยถือว่าขอร้อง</h1>
          
        </header>
        <main>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Suspendisse potenti. Sed in justo in quam bibendum venenatis.</p>
          <p>Donec quis felis eu sapien rutrum congue ac id mi.</p>
          <p>Ut eget ex vel nisi semper bibendum ac a velit.</p>
          <p>Aliquam blandit sapien vel lacus interdum rhoncus.</p>
          <p>Phasellus gravida nisi sed nunc dapibus lacinia.</p>
          <p>Proin id lectus vel erat aliquam bibendum.</p>
          <p>Integer semper lorem vel erat facilisis, in auctor felis pulvinar.</p>
        </main>
      </div>
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
