import './Strengths.css';

const STRENGTHS = [
  {
    icon: 'business_center',
    title: 'Established Operations',
    desc: 'Established operations in fast-growing video surveillance, biometrics, and IoT markets.',
  },
  {
    icon: 'groups',
    title: 'Diversified Customer Base',
    desc: 'Diverse customer base across multiple end-use sectors including government and enterprise.',
  },
  {
    icon: 'science',
    title: 'In-house R&D Capabilities',
    desc: 'Demonstrated in-house R&D capabilities with proprietary technology solutions and patents.',
  },
  {
    icon: 'trending_up',
    title: 'Robust Financial Performance',
    desc: 'Robust financial performance supported by strong cash flows and access to capital markets.',
  },
  {
    icon: 'handshake',
    title: 'Strong Vendor Relations',
    desc: 'Strong vendor relationships with a reliable, global sourcing network for key components.',
  },
];

export default function Strengths() {
  return (
    <section className="strengths">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Why Choose Us</p>
          <h2 className="section-title">Our Strengths</h2>
          <p className="section-subtitle">Inspiring Innovation, Trust, and Impact</p>
        </div>

        <div className="strengths__grid">
          {STRENGTHS.map((s, i) => (
            <div key={s.title} className="strength-card" data-num={`0${i + 1}`}>
              <div className="strength-card__icon">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {s.icon}
                </span>
              </div>
              <h3 className="strength-card__title">{s.title}</h3>
              <p className="strength-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
