import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import Home from './pages/Home';
import About from './pages/About';

import Services from './pages/Services';
import Contact from './pages/Contact';



function App() {
  return (
    <Router>
     
      <ConditionalHeader />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
      <ConditionalFooter />
     
      
    </Router>
  );
}

// Helper component to conditionally render Footer
function ConditionalFooter() {
  const location = useLocation();
  const hideFooterOnRoutes = ["/adm/auth/login","/adm/msgs"]; // Add all paths where you want to hide the footer

  if (hideFooterOnRoutes.includes(location.pathname)) {
    return null; // Don't render the footer
  }

  return <Footer />; // Render the footer
}


function ConditionalHeader() {
  const location = useLocation();
  const hideFooterOnRoutes = ["/adm/auth/login","/adm/msgs"]; // Add all paths where you want to hide the footer

  if (hideFooterOnRoutes.includes(location.pathname)) {
    return null; // Don't render the footer
  }

  return <Header/>; // Render the footer
}

export default App;
