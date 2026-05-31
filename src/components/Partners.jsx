import './Partners.css';

const PARTNERS = ['AXIS', 'HIKVISION', 'MILESTONE', 'GENETEC', 'NVIDIA', 'CISCO'];

export default function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <p className="partners__label">Trusted Technology Partners</p>
        <div className="partners__grid">
          {PARTNERS.map((name) => (
            <div key={name} className="partners__logo">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
