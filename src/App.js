import React from "react";
import Nav from "./Navbar";
import Hero from "./Hero";
import Port from "./Portfolio";
import Portgrid from "./Portgrid";
import About from './About';
import Contact from './Contact';
import Foot from "./Footer";
import './css/styles.css';


const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Port/>
      <Portgrid/>
      <About/>
      <Contact/>
      <Foot/>
    </div>
  );
};

export default App;