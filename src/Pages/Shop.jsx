import React, { useEffect, useState } from "react";
import { CartItem, ProductCard } from "../components";

const Shop = () => {
  const [product, setProduct] = useState([]);

  // fetch all products
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="my-container">
      <div className="product-container">
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
