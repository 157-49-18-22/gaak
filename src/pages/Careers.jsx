import { useRef, useState } from 'react';
import './Careers.css';

/* ── Why Join Data ──────────────────────────────── */
const WHY_JOIN = [
  {
    id: 'talent',
    icon: 'group',
    title: 'Developing Talent to continuously reskill team members',
    desc: 'Developing talent is to continuously reskill team members to be ready and relevant for current and future business needs.',
    bg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
  },
  {
    id: 'skills',
    icon: 'lightbulb',
    title: 'Focus on building technology skills',
    desc: 'Focus on building technology skills coupled with domain awareness to foster innovation and expertise.',
    bg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
  },
  {
    id: 'learning',
    icon: 'school',
    title: 'Robust Learning and Development',
    desc: 'We have a robust learning and development ecosystem that encourages each IT professional to improve their understanding and competency.',
    bg: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80',
  },
  {
    id: 'safety',
    icon: 'verified_user',
    title: 'Safe and Healthy working conditions',
    desc: 'Our work force is a critical factor in maintaining quality, productivity and safety, which strengthens our competitive position.',
    bg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
  },
];

const OFFICES = [
  { city: 'New Delhi', label: 'Head Office' },
  { city: 'Navi Mumbai', label: 'Branch Office' },
  { city: 'Hyderabad', label: 'Branch Office' },
];

/* ── Component ──────────────────────────────────── */
export default function Careers() {
  const openingsRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (file) setFileName(file.name);
  };

  const scrollToOpenings = () =>
    openingsRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="careers-page">

      {/* ── 1. HERO ─────────────────────────────────── */}
      <section className="car-hero">
        <div className="car-hero__bg">
          <img src="/bg.png" alt="Careers Background" />
          <div className="car-hero__overlay" />
        </div>

        <div className="car-hero__content container">
          {/* Left */}
          <div className="car-hero__left">
            <span className="car-hero__badge">
              <span className="car-hero__dot" />
              Welcome to Gaak Technologies
            </span>
            <h1 className="car-hero__title">
              Career<br />Opportunities
            </h1>
            <p className="car-hero__para">
              At Gaak Technologies, we are committed to maintaining high
              standards of workplace health and safety. In addition, we have
              been certified ISO 14001: 2015 (environmental management system).
              As a socially responsible IT solutions company, we strive to drive
              sustainable and responsible business practices through our
              sustainability policies, practices, and reporting.
            </p>
            <p className="car-hero__para">
              We aim to prioritize energy-efficient solutions in our technology
              offerings, such as promoting energy-efficient servers, networking
              equipment, which helps customers reduce their carbon footprint and
              energy consumption.
            </p>
            <button className="car-hero__cta" onClick={scrollToOpenings}>
              Explore Current Openings
            </button>
          </div>

          {/* Right — glass card */}
          <div className="car-hero__right">
            <div className="car-glass-card">
              <div className="car-glass-card__inner">
                <span className="material-symbols-outlined car-glass-card__icon">work</span>
                <h3>Join Our Team</h3>
                <p>Be part of India's leading technology-solutions company shaping the future of security and AI.</p>
                <div className="car-glass-card__stats">
                  <div className="car-glass-card__stat">
                    <span className="stat-val">500+</span>
                    <span className="stat-lbl">Employees</span>
                  </div>
                  <div className="car-glass-card__stat">
                    <span className="stat-val">18+</span>
                    <span className="stat-lbl">States</span>
                  </div>
                  <div className="car-glass-card__stat">
                    <span className="stat-val">23+</span>
                    <span className="stat-lbl">Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY JOIN ─────────────────────────────── */}
      <section className="car-why" ref={openingsRef}>
        <div className="container">
          <div className="car-why__header">
            <span className="car-eyebrow">Join Us</span>
            <h2 className="car-section-title">Why Join Gaak?</h2>
            <div className="car-divider" />
          </div>
          <div className="car-why__grid">
            {WHY_JOIN.map((w) => (
              <div key={w.id} className="car-why-card">
                {w.bg && <img src={w.bg} alt="" className="car-hover-bg" />}
                <div className="car-why-card__icon">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {w.icon}
                  </span>
                </div>
                <h3 className="car-why-card__title">{w.title}</h3>
                <p className="car-why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SUBMIT PROFILE + FORM ────────────────── */}
      <section className="car-contact">
        <div className="container">
          <div className="car-contact__inner">

            {/* Left — info */}
            <div className="car-contact__left">
              <h2 className="car-contact__heading">Submit Your<br />Profile</h2>
              <p className="car-contact__para">
                Can't find a role that matches your expertise? We're always
                looking for talented individuals who share our vision. Submit
                your profile, and let's explore how you can be a part of our
                journey toward innovation and excellence.
              </p>

              <div className="car-offices">
                <h4 className="car-offices__title">Find Us Across India</h4>
                {OFFICES.map((o) => (
                  <div key={o.city} className="car-offices__item">
                    <span className="material-symbols-outlined">location_on</span>
                    <span>{o.city} ({o.label})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="car-contact__right">
              <div className="car-form-card">
                <h3 className="car-form-card__title">Get In Touch</h3>
                <p className="car-form-card__sub">
                  Don't see a job that fits? We'd still love to hear from you.
                </p>

                <form className="car-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="car-form__row">
                    <div className="car-form__group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="car-form__group">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="car-form__row">
                    <div className="car-form__group">
                      <label>Email Address</label>
                      <input type="email" placeholder="Enter your email address" />
                    </div>
                    <div className="car-form__group">
                      <label>Post Applying For</label>
                      <input type="text" placeholder="Enter post applying for" />
                    </div>
                  </div>

                  <div className="car-form__group car-form__group--full">
                    <label>
                      Resume <span className="car-form__hint">(Only PDF, DOC, DOCX up to 5MB)</span>
                    </label>
                    <div
                      className={`car-form__drop${dragging ? ' car-form__drop--active' : ''}`}
                      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
                    >
                      <input
                        type="file"
                        id="resume-upload"
                        accept=".pdf,.doc,.docx"
                        className="car-form__file-input"
                        onChange={(e) => handleFile(e.target.files[0])}
                      />
                      <label htmlFor="resume-upload" className="car-form__file-btn">
                        <span className="material-symbols-outlined">upload</span>
                        Choose File
                      </label>
                      <p className="car-form__drop-text">
                        {fileName || 'Drag & drop your resume here'}
                      </p>
                    </div>
                  </div>

                  <div className="car-form__group car-form__group--full">
                    <label>Message</label>
                    <textarea placeholder="Tell us why you'd be a great fit..." rows={4} />
                  </div>

                  <button type="submit" className="car-form__submit">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
