import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";

const fetchData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data;
  return data;
};

const QueryReact = () => {
  const { data, isLoading, isError, error } = useQuery("products", fetchData);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", }}>
        <CircularProgress />
      </Box>
    );
  }

  if(isError){
      return <div> Error: {error.message}</div>
  }
  return (
    <div>
      <h1>Products List</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default QueryReact;
