import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrowseRange from "./components/BrowseRange";
import OurProducts from "./components/OurProducts";
import BrowseProducts from "./components/BrowseProducts";
import CollageSection from "./components/CollageSection";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import ShopPage from "./components/ShopPage";
import Shop from "./components/Shop";
import AboutPage from "./components/AboutPage.jsx";
import LoginPage from "./components/LoginPage";
import { useState } from "react";
function App() {
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (product) => {
    setLikedProducts((prev) =>
      prev.find((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <Navbar
        likedProducts={likedProducts}
        toggleLike={toggleLike}
        cartItems={cartItems}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <BrowseRange />
              <OurProducts
                likedProducts={likedProducts}
                toggleLike={toggleLike}
                addToCart={addToCart}
              />
              <BrowseProducts />
              <CollageSection />
              <Footer />
            </>
          }
        />

        <Route path="/shop" element={
      <Shop likedProducts={likedProducts} toggleLike={toggleLike} />
    } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/cart"
          element={
            <ShopPage cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
