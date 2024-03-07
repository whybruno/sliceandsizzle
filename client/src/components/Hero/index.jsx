import React from 'react';
import '../Hero/index.css';
import pizzaslices from "../../assets/Heroimage/pizza-hero-3.jpeg";
// import logo from "../../assets/Logo/OP-1-removebg-preview.png";
import Logo from "../../assets/Logo/slice-logo.png";

function App() {
  return (
    <div className="vh-100 text-white" id="Hero"style={{
      background: `url(${pizzaslices}) center/cover no-repeat`, // Set background image
    }} >
      <div className="container d-flex align-items-center h-100">
        <div className="d-flex mx-auto flex-column align-items-center">
          <img src={Logo} className='img-fluid p-5'></img>
          <a href="#Menu">
            <button
              className="bg-color-2 text-white fw-bold rounded-full">
              See Our Full Menu
            </button>
          </a>
            <div id="Supersellers"></div>
        </div>
      </div>
    </div >
  );
 }
 
 export default App

