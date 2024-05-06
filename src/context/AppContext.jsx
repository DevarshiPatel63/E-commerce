import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  //For seleting particular category and to display all the categories
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [favourites , setFavourites] = useState([]);

  const handleFav = (id) =>{
    if (favourites.includes(id)) {
      setFavourites((prev) => prev.filter((favId) => favId !== id));
    } else {
      setFavourites((prev) => [...prev, id]);
    }
  }

  const fetchProducts = async () => {
    let api = "https://fakestoreapi.com/products";
    if (selectedCategory && selectedCategory !== "All") {
      api = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    }
    try {
      const response = await fetch(api);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

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
    <AppContext.Provider
      value={{
        handleCategoryClick,
        fetchCategories,
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        products,
        setProducts,
        fetchProducts,
        handleFav,
        favourites
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
