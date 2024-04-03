import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SellersList() {
    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        fetchSellers();
    }, []);

    const fetchSellers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/sellers');
            setSellers(response.data);
        } catch (error) {
            console.error("Error fetching sellers:", error);
        }
    };

    return (
        <div>
            <h2>Sellers</h2>
            <ul>
                {sellers.map(seller => (
                    <li key={seller.id}>{seller.name} - Selling: {seller.propertyType} at {seller.location} for ${seller.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default SellersList;