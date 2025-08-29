import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';


const ComparisonHome = lazy(() => import('./ComparisonHome'));
const NetSuite = lazy(() => import('./NetSuite'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));
const InventoryAging = lazy(() => import('./InventoryAging'));
const PaymentMatching = lazy(() => import('./PaymentMatching'));
const ECIntegration = lazy(() => import('./ECIntegration'));
const IndustryOMS = lazy(() => import('./IndustryOMS'));
const MaterialPlanning = lazy(() => import('./MaterialPlanning'));
const WarehouseIntegration = lazy(() => import('./WarehouseIntegration'));
const NetSuiteFeatures = lazy(() => import('./NetSuiteFeatures'));
const TermsOfUse = lazy(() => import('./TermsOfUse'));
const SecurityPrivacy = lazy(() => import('./SecurityPrivacy'));
const Services = lazy(() => import('./Services'));
const CaseStudies = lazy(() => import('./CaseStudies'));
const WhatIsNetSuite = lazy(() => import('./WhatIsNetSuite'));
const EvangSolStrengths = lazy(() => import('./EvangSolStrengths'));

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

          <Route path="/" element={<ComparisonHome />} />
          <Route path="/what-is-netsuite" element={<WhatIsNetSuite />} />
          <Route path="/netsuite" element={<NetSuite />} />
          <Route path="/netsuite/solutions" element={<NetSuite />} />
          <Route path="/evangsol-strengths" element={<EvangSolStrengths />} />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<NetSuiteFeatures />} />
          <Route path="/solutions/payment-matching" element={<PaymentMatching />} />
          <Route path="/solutions/ec-integration" element={<ECIntegration />} />
          <Route path="/solutions/industry-oms" element={<IndustryOMS />} />
          <Route path="/solutions/material-planning" element={<MaterialPlanning />} />
          <Route path="/solutions/warehouse-integration" element={<WarehouseIntegration />} />
          <Route path="/solutions/inventory-aging" element={<InventoryAging />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/security-privacy" element={<SecurityPrivacy />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
