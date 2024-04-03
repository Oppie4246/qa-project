import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          QA Estate Agents
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button color="inherit" component={RouterLink} to="/listings">Listings</Button>
        <Button color="inherit" component={RouterLink} to="/buyers">Buyers</Button>
        <Button color="inherit" component={RouterLink} to="/sellers">Sellers</Button>
        <Button color="inherit" component={RouterLink} to="/buyerslist">Buyers List</Button>
        <Button color="inherit" component={RouterLink} to="/sellerslist">Sellers List</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;