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

        <div className="case-studies__grid">
          {CASES.map((c) => (
            <div key={c.title} className="case-card">
              <div className="case-card__icon">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                  {c.icon}
                </span>
              </div>
              <h3 className="case-card__title">{c.title}</h3>
              <p className="case-card__desc">{c.desc}</p>
              <div className="case-card__tags">
                {c.tags.map((t) => (
                  <span key={t} className="case-card__tag">{t}</span>
                ))}
              </div>
              <button className="case-card__btn">
                View More <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
