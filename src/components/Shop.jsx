import React from "react";
import OurProducts from "../components/OurProducts";

export default function Shop({ likedProducts, toggleLike }) {
  return (
    <div>
      <OurProducts likedProducts={likedProducts} toggleLike={toggleLike} />
    </div>
  );
}
