import './CaseStudies.css';

const CASES = [
  {
    icon: 'videocam',
    title: 'Video Surveillance for Public Safety',
    desc: 'Deployed 20,000+ CCTV cameras across a state public works department, enabling real-time monitoring and incident response with centralised command control.',
    tags: ['CCTV', 'Government', 'Smart City'],
  },
  {
    icon: 'fingerprint',
    title: 'Biometric Attendance System',
    desc: 'Implemented a large-scale biometric attendance system for a state municipal department covering 150,000 employees at indoor and outdoor locations statewide.',
    tags: ['Biometrics', 'Government', 'HR Tech'],
  },
  {
    icon: 'storefront',
    title: 'StorePulse for a Leading Fashion Retail Brand',
    desc: 'Integrated StorePulse across 300+ retail outlets to deliver AI-driven footfall analytics, customer behaviour insights, and queue management in real time.',
    tags: ['Retail Analytics', 'AI', 'StorePulse'],
  },
];

export default function CaseStudies() {
  return (
    <section className="case-studies">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Success Stories</p>
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Real-World Impact: Transformative Case Studies
          </p>
        </div>

        <div className="coming-soon-banner" style={{ 
          textAlign: 'center', 
          padding: '60px 40px', 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)', 
          borderRadius: '16px', 
          border: '1px solid rgba(255,255,255,0.1)', 
          color: '#fff', 
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.15) 0%, transparent 70%)'}}></div>
          <span className="material-symbols-outlined" style={{ fontSize: '48px', marginBottom: '16px', display: 'inline-block', color: '#38bdf8' }}>rocket_launch</span>
          <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '16px', letterSpacing: '0.5px' }}>Case Studies Coming Soon</h3>
          <p style={{ opacity: 0.8, fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>We are preparing some incredible success stories that highlight our deep technological impact. They will be published shortly.</p>
        </div>
      </div>
    </section>
  );
}
