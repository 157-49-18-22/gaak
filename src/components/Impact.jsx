import './Impact.css';

const HERO_IMG =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200';

const IMPACT_CARDS = [
  {
    title: 'Operational Impact',
    desc: 'Centralized visibility across sites and improved coordination between remote response teams.',
  },
  {
    title: 'Safety & Security',
    desc: 'Early detection of threats and anomalies with robust visual evidence for auditing.',
  },
  {
    title: 'Compliance & Efficiency',
    desc: 'Automated incident logging and improved audit readiness from existing infrastructure.',
  },
];

export default function Impact() {
  return (
    <section className="impact">
      {/* Background */}
      <div className="impact__bg">
        <img src={HERO_IMG} alt="Operational Impact" />
        <div className="impact__bg-overlay" />
      </div>

      <div className="impact__content container">
        {/* Left */}
        <div className="impact__left">
          <p className="section-eyebrow section-eyebrow--light">Impact Delivered</p>
          <h2 className="impact__heading">
            Measurable Impact.<br />Real-World Outcomes.
          </h2>
          <p className="impact__desc">
            Gaak delivers tangible improvements by transforming surveillance
            into intelligence that drives faster response, better coordination,
            and stronger compliance.
          </p>

          <div className="impact__metrics">
            <div className="impact__metric">
              <span className="impact__metric-icon material-symbols-outlined">trending_down</span>
              <div>
                <h5>Lower Dependency</h5>
                <p>Reduced manual monitoring costs by up to 60%.</p>
              </div>
            </div>
            <div className="impact__metric">
              <span className="impact__metric-icon material-symbols-outlined">bolt</span>
              <div>
                <h5>Rapid Response</h5>
                <p>40% faster emergency response via real-time alerts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="impact__right">
          {IMPACT_CARDS.map((c) => (
            <div key={c.title} className="impact-card">
              <h4 className="impact-card__title">{c.title}</h4>
              <p className="impact-card__desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
