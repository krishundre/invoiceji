import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
// Import other pages if needed
import Home from './Components/Home';
// import About from './Components/About';
// import Services from './Components/Services';
// import Pricing from './Components/Pricing';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define routes for your pages */}
          <Route path="/" element={<Home />} /> Uncomment when Home page is available
          {/* <Route path="/about" element={<About />} /> Uncomment when About page is available */}
          {/* <Route path="/services" element={<Services />} /> Uncomment when Services page is available */}
          {/* <Route path="/pricing" element={<Pricing />} /> Uncomment when Pricing page is available */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
