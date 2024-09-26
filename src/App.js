import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
// import About from './Components/About';
// import Services from './Components/Services';
// import Pricing from './Components/Pricing';
import Error404 from './Components/404';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define routes for your pages */}
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> Uncomment when About page is available */}
          {/* <Route path="/services" element={<Services />} /> Uncomment when Services page is available */}
          {/* <Route path="/pricing" element={<Pricing />} /> Uncomment when Pricing page is available */}
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all route for undefined pages */}
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
