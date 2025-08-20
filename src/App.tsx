import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NetSuite from './NetSuite';
import About from './About';
import Contact from './Contact';
import InventoryAging from './InventoryAging';
import PaymentMatching from './PaymentMatching';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NetSuite />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inventory-aging" element={<InventoryAging />} />
        <Route path="/solutions/payment-matching" element={<PaymentMatching />} />
      </Routes>
    </Router>
  );
}

export default App;