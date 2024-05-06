import React, { useContext} from "react";
import { Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import ProductDisplay from "./ProductDisplay";
import { AppContext } from "../../context/AppContext";

const Categories = () => {
  const {categories , selectedCategory ,  handleCategoryClick} = useContext(AppContext)

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
    </Box>
  );
};

export default Categories;
