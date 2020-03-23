import React from 'react';
import '../App.css';
import Banner from './banner/banner';
import NavBar from './nav-bar/nav';
import About from './about/about';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
    </div>
  );
}

export default App;
