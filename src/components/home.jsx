import React from "react";
import "../App.css";
import Banner from "./banner/banner";
import About from "./about/about";
import PhotoIndex from "./media/photo-index-home";
import Parrallax from "./media/parallax-home/parallax-home";

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <PhotoIndex />
      <Parrallax />
    </div>
  );
}

export default Home;
