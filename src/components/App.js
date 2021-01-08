import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import MainProduct from "./MainProduct";
import productJson from "../product.json";
import productAttributesJson from "../attributeSets.json";
import createProductObject from "../functions/createProductObject"

function App() {
  const [product, setProduct] = useState({
    data: {
      Base: {},
      Media: {}
    }
  })

  useEffect(() => {
    setProduct(createProductObject(productJson, productAttributesJson))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <MainProduct product={product}></MainProduct>
    </div>
  );
}

export default App;
