import axios from "axios";
import {useState, useEffect } from "react";
import './products.css'


const Products = () =>{
const [data, setData] = useState([])



useEffect(() => {
    const fetchApi = async () =>{
      try{
            const respone = await axios.get('https://fakestoreapi.com/products')
            setData(respone.data)
            console.log(respone.data)
        }catch(err){
            console.log(err)
        }
    }
    fetchApi()
    
},[])

    
    return(
        <div className="mainDiv">
        {data.map(product =>(
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
    )
}

export default Products