import './Capabilities.css';

const IMG_CITY =
  'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=800';

const IMG_AI =
  'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800';

const CAPABILITIES = [
  {
    icon: 'security',
    title: 'Next-Gen Surveillance',
    desc: 'AI-powered IP camera networks with deep learning analytics, real-time anomaly detection, and remote monitoring.',
    tags: ['IP CCTV', 'AI Analytics', 'VMS'],
    accent: '#8b5cf6',
  },
  {
    icon: 'wifi',
    title: 'Network Infrastructure',
    desc: 'End-to-end structured cabling, fibre optic networks, and wireless systems engineered for maximum uptime and resilience.',
    tags: ['Structured Cabling', 'Fiber', 'Wi-Fi 6'],
    accent: '#10b981',
  },
  {
    icon: 'support_agent',
    title: '24×7 Command Centre',
    desc: 'Round-the-clock remote monitoring by trained virtual guards, handling alerts, escalations and incident response in real time.',
    tags: ['200+ Guards', 'NOC', 'Incident Mgmt'],
    accent: '#ef4444',
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities">
      {/* Background blobs */}
      <div className="cap-blob cap-blob--1" />
      <div className="cap-blob cap-blob--2" />

      <div className="container cap-container">
        {/* Header */}
        <div className="cap-header">
          <p className="section-eyebrow section-eyebrow--light">Core Capabilities</p>
          <h2 className="cap-heading">Specialized Infrastructure<br />Integration</h2>
          <p className="cap-subheading">
            A full-spectrum technology partner — from design and supply to
            installation, integration and 24×7 managed services.
          </p>
        </div>

        {/* Hero image + stat strip */}
        <div className="cap-hero-row">
          <div className="cap-hero-img">
            <img src={IMG_CITY} alt="Smart City Infrastructure" />
            <div className="cap-hero-img__overlay" />
            <div className="cap-hero-img__badge">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                location_city
              </span>
              Smart City Command Centre
            </div>
          </div>

          <div className="cap-hero-img cap-hero-img--sm">
            <img src={IMG_AI} alt="AI Surveillance" />
            <div className="cap-hero-img__overlay" />
            <div className="cap-hero-img__badge">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                psychology
              </span>
              AI-Powered Detection
            </div>
          </div>
        </div>

        {/* 6-card grid */}
        <div className="cap-grid">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="cap-item" style={{ '--accent': c.accent }}>
              <div className="cap-item__glow" />
              <div className="cap-item__top">
                <div className="cap-item__icon">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {c.icon}
                  </span>
                </div>
                <div className="cap-item__tags">
                  {c.tags.map((t) => (
                    <span key={t} className="cap-item__tag">{t}</span>
                  ))}
                </div>
              </div>
              <h3 className="cap-item__title">{c.title}</h3>
              <p className="cap-item__desc">{c.desc}</p>
              <div className="cap-item__line" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="cap-cta">
          <a href="#demo-section" className="cap-cta__btn">
            Explore All Services
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
