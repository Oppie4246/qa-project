import React from 'react';
import { Typography, Button, Container, Box, } from '@mui/material';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="main">
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="text.primary" gutterBottom>
            Find Your Dream Home
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Browse through our listings to find your perfect home.
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" component={Link} to="/listings">
              Browse Listings
            </Button>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default HomePage;