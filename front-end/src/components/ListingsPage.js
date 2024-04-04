import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Container } from '@mui/material';
import listings from '../sampleData';

const ListingsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Property Listings
      </Typography>
      <Grid container spacing={4}>
        {listings.map((listing) => (
          <Grid item key={listing.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={listing.imageUrl}
                alt={listing.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {listing.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {listing.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  {listing.price}
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">View Details</Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListingsPage;