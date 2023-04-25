import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './views/Home';
import Overlay from './components/Overlay';

function App() {
  return (
    <div className="App">
     <div className='main-container'>
      <Overlay />
     <div className='header-container bg-rose-900'>
     <div className='container mx-auto p-6'>
      <Header />
      </div>
      </div>
      <div className='body-container p-0'>
          <Home />
      </div>
      <div className='footer-container'>
     <div className='container mx-auto p-6'>
      <Footer />
      </div>
      </div>
     </div>
    </div>
  );
}

export default App;
