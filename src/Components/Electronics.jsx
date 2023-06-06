import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Electronics.css";

const Electronics = () => {
  const [electronics, setElectronics] = useState([]);

  const fetchELec = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/electronics`
      );
      setElectronics(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchELec();
  });
  return (
    <div className="mainDiv">
      {electronics.map((product) => (
        <div className="card">
          <div key={product.id} className="images">
            <img src={product.image} alt=""></img>
          </div>
          <div className="title">
            <h1>{product.title}</h1>
          </div>
          <div className="text">
            <p>{product.description}</p>
            <p>{product.type}</p>
          </div>
          <div className="price">
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Electronics;
