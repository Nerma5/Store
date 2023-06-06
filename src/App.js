import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Products from "./Components/Products";
import MenClth from "./Components/MenClth";
import WomenClth from "./Components/WomenClth";
import Electronics from "./Components/Electronics";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/men" element={<MenClth />} />
        <Route path="/women" element={<WomenClth />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
