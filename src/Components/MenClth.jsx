import axios from "axios";
import React, { useEffect, useState } from "react";



const MenClth = () => {

    const[data, setData] = useState([])

useEffect(()=>{
    const fetchMen = async () => {
        try{
            const res = await axios.get('https://fakestoreapi.com/products/category/mens%20clothing')
            setData(res.data)
            console.log(res.data)
        }catch(err){
            console.log(err)
        }
    }
    fetchMen()
},[])



    return(
        <div className="mainDiv">
            {data.map(product =>(
            <div className="card">
                <div key={product.id} className="images">
                    <img alt="" src={product.image}></img>
                </div>
                <div className="title">
                    <h2>{product.title}</h2>
                </div>
                <div className="text">
                    <p>{product.descripton}</p>
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


export default MenClth