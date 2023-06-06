import axios from "axios";
import React, { useState, useEffect } from "react";
import "./womanClth.css";

const WomanClth = () => {
  const [data, setData] = useState([]);

  const fetchWoman = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/women's%20clothing`
      );
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWoman();
  }, []);

  return (
    <div className="mainDiv">
      {data.map((product) => (
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

export default WomanClth;
