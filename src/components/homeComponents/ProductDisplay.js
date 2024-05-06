import React, { useState, useEffect , useContext} from "react";
import {
  Grid
} from "@mui/material";

import { AppContext } from "../../context/AppContext";
import ProductCard from "../ProductCard";

const ProductDisplay = ({ category }) => {

  const {selectedCategory , fetchProducts ,products} = useContext(AppContext)

  useEffect(() => { 
    fetchProducts();
  },[selectedCategory]);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <ProductCard product={product}/>
      ))}
    </Grid>
  );
};

export default ProductDisplay;
