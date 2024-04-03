import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import axios from 'axios';

function SellerForm() {
  const [propertyInfo, setPropertyInfo] = useState({
    name: '',
    email: '',
    propertyType: '',
    location: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/sellers', propertyInfo);
      console.log(response.data);
      alert('Property submitted successfully');
      // Reset form
      setPropertyInfo({ name: '', email: '', propertyType: '', location: '', price: '' });
    } catch (error) {
      console.error('Error submitting property:', error);
      alert('Error submitting property');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sell Your Property
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            autoComplete="name"
            name="name"
            required
            fullWidth
            label="Your Name"
            autoFocus
            margin="normal"
            value={propertyInfo.name}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            margin="normal"
            value={propertyInfo.email}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            label="Property Type"
            name="propertyType"
            margin="normal"
            value={propertyInfo.propertyType}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            label="Location"
            name="location"
            margin="normal"
            value={propertyInfo.location}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            label="Asking Price"
            name="price"
            margin="normal"
            value={propertyInfo.price}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit Property
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default SellerForm;