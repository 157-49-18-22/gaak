import './index.css';
import './components/shared.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProductsSolutions from './components/ProductsSolutions';
import Capabilities from './components/Capabilities';
import Industries from './components/Industries';
import Strengths from './components/Strengths';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Impact from './components/Impact';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ProductsSolutions />
        <Capabilities />
        <Industries />
        <Strengths />
        <Timeline />
        <Certifications />
        <Impact />
        <CaseStudies />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
