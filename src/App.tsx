import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const InventoryAging = lazy(() => import('./InventoryAging'));
const PaymentMatching = lazy(() => import('./PaymentMatching'));
const ECIntegration = lazy(() => import('./ECIntegration'));
const IndustryOMS = lazy(() => import('./IndustryOMS'));
const MaterialPlanning = lazy(() => import('./MaterialPlanning'));
const WarehouseIntegration = lazy(() => import('./WarehouseIntegration'));
const TermsOfUse = lazy(() => import('./TermsOfUse'));
const SecurityPrivacy = lazy(() => import('./SecurityPrivacy'));
const NetSuiteUnified = lazy(() => import('./NetSuiteUnified'));
const EvangsolApp = lazy(() => import('./evangsol/EvangsolApp'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<NetSuiteUnified />} />
          <Route path="/solutions/payment-matching" element={<PaymentMatching />} />
          <Route path="/solutions/ec-integration" element={<ECIntegration />} />
          <Route path="/solutions/industry-oms" element={<IndustryOMS />} />
          <Route path="/solutions/material-planning" element={<MaterialPlanning />} />
          <Route path="/solutions/warehouse-integration" element={<WarehouseIntegration />} />
          <Route path="/solutions/inventory-aging" element={<InventoryAging />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/security-privacy" element={<SecurityPrivacy />} />
          <Route path="/netsuite-unified" element={<NetSuiteUnified />} />
          <Route path="/evangsol/*" element={<EvangsolApp />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
