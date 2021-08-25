import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import Hero from "./components/Hero";
import {productData} from './components/Products/data';
import {productDataTwo} from './components/Products/data';
import Products from "./components/Products";
import Feature from "./components/Features";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose Your Favourite' data={productData}/>
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo}/>
      <Footer />
    </Router>

  );
}

export default App;
