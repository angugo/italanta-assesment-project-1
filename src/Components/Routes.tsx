import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Invest from './Pages/Invest';
import SocialImpact from './Pages/SocialImpact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/invest" element={<Invest />} />
      <Route path="/social-impact" element={<SocialImpact />} />
    </Routes>
  );
}

export default AppRoutes;