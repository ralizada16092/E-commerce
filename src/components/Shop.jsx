import React from "react";
import OurProducts from "../components/OurProducts";

export default function Shop({ likedProducts, toggleLike, addToCart }) {
  return (
    <div>
      <OurProducts likedProducts={likedProducts} toggleLike={toggleLike}  addToCart={addToCart}  />
    </div>
  );
}
 