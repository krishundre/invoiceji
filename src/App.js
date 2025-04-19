import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignUp from './Components/SignUp';
// import LogIn from './Components/LogIn';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
// import About from './Components/About';
// import Services from './Components/Services';
import TemplatesPage from './Components/DownloadTemplates'
import BalanceSheetPage from './Components/BalanceSheetPage';
import ProfitLossPage from './Components/ProfitLossPage';
import GSTBillPage from './Components/GSTBillPage';
import CommercialInvoicePage from './Components/CommercialInvoicePage';
import IncomeStatementPage from './Components/IncomeStatementPage';
import OnlineBillGenerator from './Components/OnlineBillGenerator';
import FAQPage from './Components/faqpage';
import TermsOfService from './Components/TermsOfService';

import PricingPage from './Components/Pricing'
import Error404 from './Components/404';
import Profile from './Components/Profile';
import 'animate.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define routes for your pages */}
          {/* <Route path='/signup' element={<SignUp />} /> */}
          {/* <Route path='/login' element={<LogIn />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> Uncomment when About page is available */}
          {/* <Route path="/services" element={<Services />} /> Uncomment when Services page is available */}
          <Route path="/pricing" element={<PricingPage />} /> Uncomment when Pricing page is available
          <Route path="/contact" element={<Contact />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/balanceheetpage" element={<BalanceSheetPage />} />
          <Route path="/profitlosspage" element={<ProfitLossPage />} />
          <Route path="/gstbillpage" element={<GSTBillPage />} />
          <Route path="/commercialinvoicepage" element={<CommercialInvoicePage />} />
          <Route path="/incomestatementpage" element={<IncomeStatementPage />} />
          <Route path="/onlinebillpage" element={<OnlineBillGenerator />} />
          <Route path="/profile" element={<Profile />} />


          <Route path="/faqpage" element={<FAQPage />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />

          {/* Catch-all route for undefined pages */}
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
