import React from "react";
import { Routes, Route} from "react-router-dom"
import Home from "./pages/HomePage";
import Checkout from "./pages/CheckoutPage";
import Contact from "./pages/ContactPage";
import Layout from "./Components/Layout";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import CheckoutSuccess from "./pages/CheckoutSuccessPage";

function App() {

  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={< Layout />}>
          <Route path="/" element={< Home />} />
          <Route path="checkout" element={< Checkout />} />
          <Route path="contact" element={< Contact />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="checkoutSuccess" element={< CheckoutSuccess />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
