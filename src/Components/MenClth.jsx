import axios from "axios";
import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";


const fetchMen = async () => {
    const respone = await axios.get(
      `https://fakestoreapi.com/products/category/men's%20clothing`
    );
    const data = respone.data
    return data }

const MenClth = () => {


  const{data, isLoading, isError, error} = useQuery("products", fetchMen)

  if(isLoading){
    return(<Box sx={{ display: "flex", }}>
    <CircularProgress />
  </Box>)
  }

  if(isError){
    return <>Error {error.message}</>
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

export default MenClth;
