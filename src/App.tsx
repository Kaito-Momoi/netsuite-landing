import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NetSuite from './NetSuite';
import About from './About';
import Contact from './Contact';
import InventoryAging from './InventoryAging';
import PaymentMatching from './PaymentMatching';
import ECIntegration from './ECIntegration';
import IndustryOMS from './IndustryOMS';
import MaterialPlanning from './MaterialPlanning';
import WarehouseIntegration from './WarehouseIntegration';
import ScrollToTop from './ScrollToTop';
import NetSuiteFeatures from './NetSuiteFeatures';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<NetSuite />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<NetSuiteFeatures />} />
        <Route path="/solutions/payment-matching" element={<PaymentMatching />} />
        <Route path="/solutions/ec-integration" element={<ECIntegration />} />
        <Route path="/solutions/industry-oms" element={<IndustryOMS />} />
        <Route path="/solutions/material-planning" element={<MaterialPlanning />} />
        <Route path="/solutions/warehouse-integration" element={<WarehouseIntegration />} />
        <Route path="/solutions/inventory-aging" element={<InventoryAging />} />
      </Routes>
    </Router>
  );
}

export default App;
