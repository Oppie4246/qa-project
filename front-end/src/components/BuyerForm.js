import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import axios from 'axios';

function BuyerForm() {
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    email: '',
    interest: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://13.42.150.65:8080/api/buyers', buyerInfo);
      console.log(response.data);
      alert('Submission successful');
      setBuyerInfo({ name: '', email: '', interest: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
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
      />
      <Typography component="h1" variant="h5">
        Buyer Information
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
          value={buyerInfo.name}
          onChange={handleChange}
        />
        <TextField
          autoComplete="email"
          name="email"
          required
          fullWidth
          label="Your Email"
          margin="normal"
          value={buyerInfo.email}
          onChange={handleChange}
        />
        <TextField
          autoComplete="interest"
          name="interest"
          required
          fullWidth
          label="Interest"
          margin="normal"
          value={buyerInfo.interest}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default BuyerForm;