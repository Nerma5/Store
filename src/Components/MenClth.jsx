import axios from "axios";
import React, { useEffect, useState } from "react";

const MenClth = () => {
  const [data, setData] = useState([]);

  const fetchMen = async () => {
    try {
      const respone = await axios.get(
        `https://fakestoreapi.com/products/category/men's%20clothing`
      );
      setData(respone.data);
      console.log(respone.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMen();
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

export default MenClth;
