import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ListingsPage from './components/ListingsPage';
import BuyerForm from './components/BuyerForm';
import SellerForm from './components/SellerForm';
import Navbar from './components/Navbar';
import BuyersList from './components/BuyersList';
import SellersList from './components/SellersList';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/buyers" element={<BuyerForm />} />
          <Route path="/sellers" element={<SellerForm />} />
          <Route path="/buyerslist" element={<BuyersList />} />
          <Route path="/sellerslist" element={<SellersList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
