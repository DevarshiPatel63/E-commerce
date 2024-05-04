import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import ProductDisplay from "./ProductDisplay";


const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(["All", ...data]);
      console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <Box>
      <Box>
        <Stack
          direction="row"
          sx={{ justifyContent: "center", backgroundColor: "#205295" }}
        >
          <Box sx={{ display: { xs: "flex", md: "flex" } ,overflowX: 'auto'}}>
            {categories.map((category, index) => (
              <Button
                onClick={() => handleCategoryClick(category)}
                key={index}
                sx={{
                  textDecoration:
                    category === selectedCategory ||
                    (category === "All" && selectedCategory === null)
                      ? "underline"
                      : "none",
                  mx: 3,
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  '&:hover': {
                        backgroundColor: category === selectedCategory || (category === 'All' && selectedCategory === null) ? '#205295' : '#2C74B3',
                        textDecoration: category === selectedCategory || (category === 'All' && selectedCategory === null) ? 'underline' : 'none'
                                    },
                }}
                variant="text"
              >
                {category}
              </Button>
            ))}
          </Box>
        </Stack>
      </Box>
      <ProductDisplay  category={selectedCategory}/>
    </Box>
  );
};

export default Categories;
