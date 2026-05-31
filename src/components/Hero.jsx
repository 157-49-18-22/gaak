import './Hero.css';

const HERO_IMG = '/bg.png';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero__bg">
        <img src={HERO_IMG} alt="Smart Surveillance Backdrop" />
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__text">
          <span className="hero__badge">Master System Integration</span>
          <h1 className="hero__title">
            Engineering End-to-End Smart Surveillance Systems.
          </h1>
          <p className="hero__subtitle">
            Integrated surveillance ecosystems—combining AI analytics, network
            infrastructure, and command centers for complex, high-security
            environments.
          </p>
          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary">
              Explore Solutions
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="hero__btn hero__btn--outline">
              View Capabilities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
