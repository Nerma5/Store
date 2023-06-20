import axios from "axios";
import "./womenClth.css";
import {  useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";


const fetchWoman = async () => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/category/women's%20clothing`
    );
    const data = res.data
    return data
  }

const WomanClth = () => {
const{data, isLoading, isError, error} = useQuery('products', fetchWoman)

if(isLoading){
  return(<Box sx={{ display: "flex", }}>
  <CircularProgress />
</Box>)
}

if(isError){
  return (<>Error :{error.message}</>)
}
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
