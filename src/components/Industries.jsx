import './Industries.css';

const INDUSTRIES = [
  { icon: 'factory', title: 'Manufacturing' },
  { icon: 'account_balance', title: 'Banking & Financial Services' },
  { icon: 'local_gas_station', title: 'Oil & Gas' },
  { icon: 'local_shipping', title: 'Logistics' },
  { icon: 'directions_railway', title: 'Railways' },
  { icon: 'storefront', title: 'Retail' },
  { icon: 'apartment', title: 'Smart Cities' },
  { icon: 'school', title: 'Education' },
  { icon: 'mail', title: 'Postal Department' },
  { icon: 'bolt', title: 'Coal Department' },
  { icon: 'lock', title: 'Prison Department' },
  { icon: 'local_police', title: 'Police Department' },
];

export default function Industries() {
  return (
    <section className="industries">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Industries We Serve</p>
          <h2 className="section-title">Aiming to Industries with Secure and Scalable Solutions</h2>
        </div>
        <div className="industries__grid">
          {INDUSTRIES.map((ind) => (
            <div key={ind.title} className="industry-card">
              <div className="industry-card__icon-wrap">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {ind.icon}
                </span>
              </div>
              <h4 className="industry-card__title">{ind.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
