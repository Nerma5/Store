import axios from "axios";
import "./Electronics.css";
import { useQuery } from "react-query";

const fetchELec = async () => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/category/electronics`
    );
    const data = res.data
    return data
}
const Electronics = () => {
const{data,isLoading, isError, error} = useQuery("products", fetchELec)

if(isLoading){
  return <>Loading..</>
}

if(isError){
  return <>Error : {error.message}</>
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

export default Electronics;
