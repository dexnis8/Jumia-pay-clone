import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Airtime from "./components/services/Airtime";
import PaymentSummary from "./components/services/PaymentSummary";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="airtime" element={<Airtime />} />
        <Route path="order-summary" element={<PaymentSummary />} />
      </Routes>
    </>
  );
}

export default App;
