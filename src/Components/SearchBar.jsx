import React from "react";
//funkciju

const SearchBar = ({ handleSearch }) => {


    const textHandler = (e) =>{
        const search= (e.target.value)
        handleSearch(search)
    }


  return (
    <div>
      <input placeholder="Search products" onChange={textHandler}></input>
    </div>
  );
};

export default SearchBar;
