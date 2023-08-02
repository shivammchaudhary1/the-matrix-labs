import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PairAddress from "../pages/PairAddress";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pair" element={<PairAddress />} />
    </Routes>
  );
};

export default AllRoutes;
