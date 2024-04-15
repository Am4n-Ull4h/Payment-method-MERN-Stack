
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PricePlan from "./pages/Priceplan/pricePlan"; // Corrected import and component name
import "./App.css"
import PaymentForm from "./pages/Payment/PaymentForm";
import Social from "./pages/social/Social";
import Success from "./pages/success/Success";
import Welcome from "./pages/welcomePage/Welcome";
import UserState from "./context/userState";
import PricingCards from "./pages/pricingCards/pricingCards"

import ProtectedDashboard from "./pages/ProtectedDashboard/ProtectedDashboard";

const App = () => {
  return (
    <UserState>

   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/price" element={<PricePlan />} />  */}
        <Route path="/payment" element={<PaymentForm />} /> 
        <Route path="/social" element={<Social />} /> 
        <Route path="/success" element={<Success />} /> 
        <Route path="/welcome" element={<Welcome />} /> 
        <Route path="/dashboard" element={<ProtectedDashboard />} /> 
        <Route path="/price" element={<PricingCards />} /> 
      </Routes>
    </Router>
    </UserState>
  );
};

export default App;
