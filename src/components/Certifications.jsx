import './Certifications.css';

const CERTS = [
  {
    icon: 'workspace_premium',
    label: 'ISO/IEC 270001:2013',
    color: '#1a7dc4',
    desc: 'Information Security Management',
  },
  {
    icon: 'verified',
    label: 'ISO 9001:2015',
    color: '#1a7dc4',
    desc: 'Quality Management System',
  },
  {
    icon: 'eco',
    label: 'ISO 14001:2015',
    color: '#1a7dc4',
    desc: 'Environmental Management',
  },
  {
    icon: 'shield',
    label: 'ISO/IEC 20000-1:2018',
    color: '#1a7dc4',
    desc: 'IT Service Management',
  },
  {
    icon: 'favorite',
    label: 'Great Place To Work',
    color: '#e63329',
    desc: 'Certified Workplace Culture',
    special: true,
  },
];

export default function Certifications() {
  return (
    <section className="certifications">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Certifications &amp; Recognitions</h2>
          <p className="section-subtitle">
            Industry-recognised standards that validate our commitment to quality
          </p>
        </div>

        <div className="coming-soon-banner" style={{ 
          textAlign: 'center', 
          padding: '60px 40px', 
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)', 
          borderRadius: '16px', 
          border: '1px solid rgba(255,255,255,0.2)', 
          color: '#fff', 
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)', animation: 'spin 20s linear infinite' }}></div>
          <style>{"@keyframes spin { 100% { transform: rotate(360deg); } }"}</style>
          <span className="material-symbols-outlined" style={{ fontSize: '48px', marginBottom: '16px', display: 'inline-block', opacity: 0.9 }}>hourglass_empty</span>
          <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '16px', letterSpacing: '0.5px', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Something Amazing is Coming</h3>
          <p style={{ opacity: 0.85, fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>We are currently updating our certifications and recognitions to reflect our latest achievements. Stay tuned!</p>
        </div>
      </div>
    </section>
  );
}
