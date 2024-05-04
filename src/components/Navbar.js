import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Menu, MenuItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Navbar = () => {
  const categories = ["Women's Clothing","Men's Clothing", "Jewelry","Electronics" ];

  
  return (
    <AppBar sx={{ backgroundColor: '#0A2647' }} position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ marginRight: '10px', height: '40px' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            E-commerce
          </Typography>
        </Box>


        {/* Right side: Shopping Cart icon (Always visible) */}
        <Box sx={{display:'flex',justifyContent:'flex-end'}}>
        <IconButton color="inherit">
          <FavoriteBorderIcon/>
          </IconButton>
        <IconButton color="inherit">
          <ShoppingCartIcon />
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
