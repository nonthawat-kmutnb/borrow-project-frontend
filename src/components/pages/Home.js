import React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage'

function App() {
  return (
    <AnimatedPage>
      <div className="App">
        <header className="App-header">
          <h1>My App</h1>
          <HamburgerMenu />
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
    </AnimatedPage>

  );
}

export default App;
