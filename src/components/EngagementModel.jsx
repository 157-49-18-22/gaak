import './EngagementModel.css';

const MODELS = [
  {
    icon: 'sync',
    iconBg: 'var(--primary-container)',
    title: 'Surveillance as a Service (OPEX)',
    desc: 'Zero upfront investment. We provide, manage, and maintain the entire ecosystem for a fixed monthly subscription.',
    features: [
      'Predictable monthly operating expenses',
      'No maintenance or hardware obsolescence risk',
      'Scalable as per site requirements',
      'Includes 24/7 proactive monitoring',
    ],
  },
  {
    icon: 'account_balance_wallet',
    iconBg: 'var(--medical-blue-dark)',
    title: 'Total Ownership (CAPEX)',
    desc: 'One-time investment for full asset ownership. Ideal for long-term deployments with dedicated on-premise infrastructure.',
    features: [
      'Full ownership of physical assets',
      'Lower long-term recurring costs',
      'Customizable maintenance & AMC plans',
      'Full control over system lifecycle',
    ],
  },
];

export default function EngagementModel() {
  return (
    <section className="engagement">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Engagement Models</p>
          <h2 className="section-title">Flexible Solutions for Every Enterprise</h2>
          <p className="section-subtitle">
            Choose the model that best fits your financial and operational requirements.
          </p>
        </div>

        <div className="engagement__grid">
          {MODELS.map((m) => (
            <div key={m.title} className="engagement-card">
              <div
                className="engagement-card__icon"
                style={{ background: m.iconBg }}
              >
                <span className="material-symbols-outlined">{m.icon}</span>
              </div>
              <h3 className="engagement-card__title">{m.title}</h3>
              <p className="engagement-card__desc">{m.desc}</p>
              <ul className="engagement-card__features">
                {m.features.map((f) => (
                  <li key={f}>
                    <span className="material-symbols-outlined feature-check">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
