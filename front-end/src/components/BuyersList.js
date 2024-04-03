import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BuyersList() {
    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        fetchBuyers();
    }, []);

    const fetchBuyers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/buyers');
            setBuyers(response.data);
        } catch (error) {
            console.error("Error fetching buyers:", error);
        }
    };

    return (
        <div>
            <h2>Buyers</h2>
            <ul>
                {buyers.map(buyer => (
                    <li key={buyer.id}>{buyer.name} - {buyer.email} - Interested in: {buyer.interest}</li>
                ))}
            </ul>
        </div>
    );
}

export default BuyersList;