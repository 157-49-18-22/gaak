import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './components/shared.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* Home page sections */
import Hero from './components/Hero';
import ProductsSolutions from './components/ProductsSolutions';
import Capabilities from './components/Capabilities';
import Industries from './components/Industries';
import Strengths from './components/Strengths';
import Certifications from './components/Certifications';
import Impact from './components/Impact';
import CaseStudies from './components/CaseStudies';

import CTA from './components/CTA';

/* Pages */
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Circulars from './pages/Circulars';

function HomePage() {
  return (
    <main>
      <Hero />
      <ProductsSolutions />
      <Capabilities />
      <Industries />
      <Strengths />
      <Certifications />
      <Impact />
      <CaseStudies />

      <CTA />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/circulars" element={<Circulars />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
