import './CTA.css';

export default function CTA() {
  return (
    <section className="cta" id="demo-section">
      <div className="cta__deco" />
      <div className="container cta__inner">
        {/* Left */}
        <div className="cta__left">
          <h2 className="cta__title">Schedule Your System Consultation</h2>
          <p className="cta__subtitle">
            Speak with our system architects to design an end-to-end
            surveillance ecosystem tailored to your facility's unique risk
            profile.
          </p>

          <div className="cta__contacts">
            <div className="cta__contact-item">
              <span className="cta__contact-icon">
                <span className="material-symbols-outlined">call</span>
              </span>
              <div>
                <p className="cta__contact-label">Call Us Directly</p>
                <p className="cta__contact-value">+1 (800) PROVIGIL</p>
              </div>
            </div>
            <div className="cta__contact-item">
              <span className="cta__contact-icon">
                <span className="material-symbols-outlined">mail</span>
              </span>
              <div>
                <p className="cta__contact-label">Email Our Experts</p>
                <p className="cta__contact-value">solutions@provigil.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right – Form */}
        <div className="cta__form-wrap">
          <form className="cta__form">
            <div className="cta__form-row">
              <div className="cta__form-group">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="cta__form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>
            <div className="cta__form-group">
              <label>Company Email</label>
              <input type="email" placeholder="john.doe@company.com" />
            </div>
            <div className="cta__form-group">
              <label>Industry</label>
              <select>
                <option>BFSI</option>
                <option>Smart Cities</option>
                <option>Transportation</option>
                <option>Manufacturing</option>
                <option>Other</option>
              </select>
            </div>
            <div className="cta__form-group">
              <label>Message (Optional)</label>
              <textarea rows="3" placeholder="Tell us about your requirements..." />
            </div>
            <button type="submit" className="cta__submit">
              Schedule System Audit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
