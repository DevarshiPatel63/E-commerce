import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  IconButton
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from '@mui/material/Rating';

const ProductDisplay = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [favClick,setFavClick] = useState(false);
  
  const handleFavClick = () => {
    console.log('clicked')
    setFavClick(true)
  }

  const fetchProducts = async () => {
    let api = 'https://fakestoreapi.com/products';
    if (category && category !== 'All') {
      api = `https://fakestoreapi.com/products/category/${category}`;
    }
    try {
      const response = await fetch(api);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => { 
    fetchProducts();
  },[category]);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <Box borderRadius={4} p={1} height="100%" sx={{'&:hover': { boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)' },cursor:'pointer'}}>
            <Card sx={{ height: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
                <IconButton color="inherit" onClick={handleFavClick}>
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>
              <Box sx={{ height: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "center", height: "50%" }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    style={{ maxWidth: "60%", objectFit: "contain" }}
                  />
                </Box>
                <CardContent sx={{ height: "50%" }}>
                  <Typography gutterBottom variant="subtitle2" component="div" sx={{overflow: "hidden" ,textOverflow: 'ellipsis',overflow:'hidden',whiteSpace:'nowrap'}}>
                    {product.title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2" component="div">
                    ${product.price}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Rating name="read-only" value={product.rating.rate} readOnly />
                    <Typography variant="body2" component="span" sx={{ ml: 1 }}>
                      ({product.rating.count})
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                    <Button
                      sx={{
                        color: "white",
                        width: "100%",
                        backgroundColor: "#0A2647",
                        "&:hover": {
                          backgroundColor: "#0A2699",
                        },
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductDisplay;
