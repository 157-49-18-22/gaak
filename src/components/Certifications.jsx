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

        <div className="certifications__grid">
          {CERTS.map((c) => (
            <div key={c.label} className={`cert-card${c.special ? ' cert-card--special' : ''}`}>
              <div className="cert-card__icon-ring" style={{ borderColor: c.color }}>
                <span
                  className="material-symbols-outlined"
                  style={{ color: c.color, fontVariationSettings: "'FILL' 1" }}
                >
                  {c.icon}
                </span>
              </div>
              <h4 className="cert-card__label" style={{ color: c.color }}>{c.label}</h4>
              <p className="cert-card__desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
