import React ,{useContext}from 'react'
import ProductCard from '../ProductCard'
import { AppContext } from "../../context/AppContext";
import {
  Grid,
} from "@mui/material";


const DisplayFavItem = () => {
  const {products , favourites} = useContext(AppContext)
  const favoriteProducts = products.filter(product => favourites.includes(product.id));

  return (
    <div>
      <Grid container spacing={2}>
      {favoriteProducts.map((product) => (
        <ProductCard product={product}/>
      ))}
    </Grid>
    </div>
  )
}

export default DisplayFavItem
