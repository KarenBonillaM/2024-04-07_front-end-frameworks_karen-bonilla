import React from "react";
import { Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Contact from "./Components/Contact";
import Layout from "./Components/Layout";
import "./App.css";
import ProductPage from "./Components/Product";

function App() {

  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={< Layout />}>
        <Route path="home" element={< Home />} />
        <Route path="checkout" element={< Checkout />} />
        <Route path="contact" element={< Contact />} />
        <Route path="product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
