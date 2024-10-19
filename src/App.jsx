import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";
import About from "./components/About";
import Contact from "./components/Contact";
import FilterData from "./components/FilterData";
import { ProductDetail } from "./components/ProductDetail";

const App = () => {
  const [order, setOrder] = useState(null);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/checkout"
          element={<Checkout setOrder={setOrder} />}
        ></Route>
        <Route
          path="/order-confirmation"
          element={<OrderConfirmation order={order} />}
        ></Route>
        <Route
          path="/filter-data"
          element={<FilterData order={order} />}
        ></Route>
        <Route
          path="/product/:id"
          element={<ProductDetail order={order} />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
