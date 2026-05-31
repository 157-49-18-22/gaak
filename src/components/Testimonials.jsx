import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote:
      '"Provigil\'s integrated ecosystem has completely transformed our approach to facility security. The AI analytics reduced false alarms by 85%, allowing our team to focus only on critical events."',
    name: 'James Arrington',
    role: 'Chief Security Officer, Global Logistics Hub',
  },
  {
    quote:
      '"As a smart city initiative, we needed a partner who understood both infrastructure and intelligence. Provigil delivered a unified command center that manages thousands of devices flawlessly."',
    name: 'Sarah Chen',
    role: 'Director of Urban Safety, Municipal Council',
  },
  {
    quote:
      '"The OPEX model allowed us to upgrade our entire banking network without a massive upfront hit. Their virtual guards are a force multiplier for our physical security team."',
    name: 'Michael Rodriguez',
    role: 'Head of Operations, Premier Financial Services',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Client Testimonials</p>
          <h2 className="section-title">Trusted by Global Leaders</h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-card__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined star-icon">star</span>
                ))}
              </div>
              <p className="testimonial-card__quote">{t.quote}</p>
              <div>
                <p className="testimonial-card__name">{t.name}</p>
                <p className="testimonial-card__role">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
