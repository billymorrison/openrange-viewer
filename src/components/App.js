import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Images from "./Images"
import productJson from "../product.json"

function App() {
  const [product, setProduct] = useState({})

  useEffect(() => {
    setProduct(productJson)
  }, [])

  return (
    <div className="App">
      Hello World
      <SearchBar />
      { product.Images && <Images images={product.Images}/>}
    </div>
  );
}

export default App;
