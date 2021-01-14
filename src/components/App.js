import React, { useState } from "react";
import NavBar from "./NavBar";
import MainProduct from "./MainProduct";
import Footer from "./Footer"

function App() {
  const [product, setProduct] = useState({
    data: {
      Base: {},
      Media: {}
    }
  })

  return (
    <div className="App">
      <NavBar setProduct={setProduct}/>
      {product.primaryId && <MainProduct product={product} />}
      <Footer />
    </div>
  );
}

export default App;
