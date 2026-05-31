import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* ── 1. HERO ─────────────────────────────────── */}
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <img src="/bg.png" alt="Contact Background" />
          <div className="contact-hero__overlay" />
        </div>
        <div className="contact-hero__content container">
          <h1 className="contact-hero__title">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="contact-hero__sub">
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
        </div>
      </section>

      {/* ── 2. CONTACT DETAILS & FORM ───────────────── */}
      <section className="contact-main">
        <div className="container contact-main__inner">
          {/* Left - Info Cards */}
          <div className="contact-info">
            <div className="contact-info__card">
              <h2 className="contact-info__title">Contact Information</h2>
              <div className="contact-info__bg-icon material-symbols-outlined">chat_bubble</div>
              
              <div className="contact-item">
                <div className="contact-item__icon">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="contact-item__content">
                  <h4>Corporate Office</h4>
                  <p>23-A Shivaji Marg, Third Floor,<br/>New Delhi 110015, India</p>
                  <div className="contact-item__meta">
                    <span><strong>CIN:</strong> U72900DL2001PLC109496</span>
                    <span><strong>GST:</strong> 07AAACT3687J1ZY</span>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div className="contact-item__content">
                  <h4>Phone Numbers</h4>
                  <p>+91 11-41500342 <span className="contact-badge">HQ</span></p>
                  <p>808 080 3988 <span className="contact-badge">SUPPORT</span></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div className="contact-item__content">
                  <h4>Email Addresses</h4>
                  <p>investor.relation@translineindia.com</p>
                  <p>support@translineindia.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form-wrap">
            <div className="contact-form-card">
              <h2 className="contact-form-card__title">Send us a Message</h2>
              <p className="contact-form-card__sub">
                Join forces with our team to create something amazing.
              </p>

              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label>Full Name</label>
                    <input type="text" />
                  </div>
                  <div className="contact-form__group">
                    <label>Phone Number</label>
                    <input type="tel" />
                  </div>
                </div>
                <div className="contact-form__group">
                  <label>Email Address</label>
                  <input type="email" />
                </div>
                <div className="contact-form__group">
                  <label>Subject</label>
                  <input type="text" />
                </div>
                <div className="contact-form__group">
                  <label>Your Message</label>
                  <textarea rows="4"></textarea>
                </div>
                <button type="submit" className="contact-form__submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MAP ──────────────────────────────────── */}
      <section className="contact-map">
        <div className="container">
          <h2 className="contact-section-title">
            Find Us <span className="text-gradient">Here</span>
          </h2>
          <div className="contact-divider" />
          <div className="contact-map__wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114828114674!2d77.13524671442116!3d28.653422055615676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a111bdfc0b%3A0xe54e60fc82a67e41!2sShivaji%20Marg%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1717260555365!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
