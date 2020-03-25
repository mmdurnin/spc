import React from "react";
import "../App.css";
import Banner from "./banner/banner";
import About from "./about/about";
import PhotoIndex from "./media/photo-index-home"

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <PhotoIndex />
    </div>
  );
}

export default Home;
