import React from 'react';

const listings = [
  { id: 1, title: "Cozy Cottage", price: "£250,000", location: "Countryside" },
  { id: 2, title: "Urban Apartment", price: "£300,000", location: "City Center" },
];

function ListingsPage() {
  return (
    <div>
      <h1>Listings</h1>
      {listings.map(listing => (
        <div key={listing.id}>
          <h2>{listing.title}</h2>
          <p>Price: {listing.price}</p>
          <p>Location: {listing.location}</p>
        </div>
      ))}
    </div>
  );
}

export default ListingsPage;