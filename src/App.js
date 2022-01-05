import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/Checkout" element={<><Header /><p>Checkout Page</p></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
