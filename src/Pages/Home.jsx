import React from "react";
import ProductDescription from "../Components/ProductDescription";
import ProductPreview from "../Components/ProductPreview";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <ProductPreview />
        <ProductDescription />
      </div>
    </div>
  );
}

export default Home;
