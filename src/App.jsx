import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import Home from "./pages/Home";
import Products from "./components/product";
import MainLayout from "./layout/MainLayout";
import Cart from "./pages/cart";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CheckOut from "./pages/CheckOut";

const App = () => {
      const [cartItems, setCartItems] = useState([]);

  // Add to Cart function
   const addToCart = (product) => {
    // If product already exists in cart, increase quantity
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
