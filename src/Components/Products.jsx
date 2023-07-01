import axios from "axios";
import {useState } from "react";
import './products.css'
import SearchBar from "./SearchBar";
import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";



const fetchApi = async () =>{
        const respone = await axios.get('https://fakestoreapi.com/products')
        const data = respone.data
        return data
}

const Products = () =>{
const{data, isLoading, isError,error} = useQuery('products' , fetchApi)

const[searchBar, setSearchBar] = useState('')

const handleSearch = (s) =>{
    setSearchBar(s)
}

const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchBar.toLowerCase())
)
    if(isLoading){
        return(<Box sx={{ display: "flex", }}>
        <CircularProgress />
      </Box>)
    }

    if(isError){
        return <div> Error : {error.message}</div>
    }

    return(
        <>
            <SearchBar handleSearch={handleSearch}  />
        <div className="mainDiv">
        {filteredData.map(product =>(
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
        </>
    )
}

export default Products