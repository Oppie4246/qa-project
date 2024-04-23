import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const PropertyForm = () => {
    const [property, setProperty] = useState({
        title: '',
        description: '',
        price: '',
        imageUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Adjust the URL to match your API endpoint
            const response = await axios.post('http://13.42.150.65:8080/api/properties', property);
            console.log(response.data);
            alert('Property added successfully');
            // Optionally reset form or redirect the user
        } catch (error) {
            console.error('There was an error adding the property:', error);
            alert('Error adding property');
        }
    };

    return (
        <Container component="main" maxWidth="sm">
            <Typography component="h1" variant="h5">
                Add New Property
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    autoFocus
                    value={property.title}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="description"
                    label="Description"
                    id="description"
                    multiline
                    rows={4}
                    value={property.description}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="price"
                    label="Price"
                    type="number"
                    id="price"
                    value={property.price}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="imageUrl"
                    label="Image URL"
                    id="imageUrl"
                    value={property.imageUrl}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Add Property
                </Button>
            </form>
        </Container>
    );
};

export default PropertyForm;