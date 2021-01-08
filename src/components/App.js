import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import MainProduct from "./MainProduct";
import productJson from "../product.json";

function App() {
  const [product, setProduct] = useState({})

  useEffect(() => {
    setProduct(productJson)
  }, [])
  
  console.log(product)

  return (
    <div className="App">
      <NavBar />
      <MainProduct product={product}></MainProduct>
    </div>
  );
}

export default App;
