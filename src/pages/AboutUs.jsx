import './AboutUs.css';
import '../index.css';

/* ─── Board of Directors Data ─────────────────────────── */
const BOARD_MEMBERS = [
  {
    id: 'arun-gupta',
    name: 'Mr. Arun Gupta',
    role: 'Chairman & Managing Director',
    photo: '/about/ceo.png',
    bio: 'Mr. Arun Gupta, the Promoter and Chairman & Managing Director of Gaak Technologies Ltd., has been an integral part of the Company since its inception. Appointed as a Director on February 2, 2001, he has played a pivotal role in steering the Company\'s growth and diversification.',
    bio2: 'With over 23 years of rich experience in the information technology, surveillance, biometrics, and system integration sectors, Mr. Gupta has been instrumental in positioning the Company as a trusted solutions provider. His leadership blends strategic vision with hands-on industry expertise, enabling the Company to achieve consistent innovation and market expansion.',
    featured: true,
  },
];

const DIRECTORS = [
  { id: 'drishti-gupta',      name: 'Ms. Drishti Gupta',      role: 'Non-Executive Director',  photo: '/about/drishti-gupta-min.png' },
  { id: 'satish-sharma',      name: 'Mr. Satish Sharma',       role: 'Non-Executive Director',  photo: '/about/satish-sharma.jpg' },
  { id: 'girish-ahuja',       name: 'Mr. Girish Kumar Ahuja',  role: 'Independent Director',    photo: '/about/girish-ahuja.jpg' },
  { id: 'shankar-sharma',     name: 'Mr. Shankar Sharma',      role: 'Independent Director',    photo: '/about/shankar-sharma.jpg' },
  { id: 'rojina-thapa',       name: 'Ms. Rojina Thapa',        role: 'Independent Director',    photo: '/about/rojina-thapa.jpg' },
  { id: 'asha-agarwal',       name: 'Mrs. Asha Anil Agarwal',  role: 'Independent Director',    photo: '/about/asha-agarwal.jpg' },
];

/* ─── Key Managerial Personnel ───────────────────── */
const KMP = [
  { id: 'arjun-bisht',    name: 'Mr. Arjun Singh Bisht', role: 'Chief Financial Officer',              photo: '/about/arjunsingh-min.jpg' },
  { id: 'preeti-kataria', name: 'Ms. Preeti Kataria',     role: 'Company Secretary & Compliance Officer', photo: '/about/preeti-mam.jpg' },
];

/* ─── Leadership Team ─────────────────────────────── */
const LEADERSHIP = [
  { id: 'rajesh-kumar',  name: 'Mr. Rajesh Kumar',    role: 'Director (Govt Surveillance Business)',  photo: '/about/rajeshkumar-min.jpg' },
  { id: 'ramnath-rao',   name: 'Mr. K. Ramnath Rao',  role: 'Vice President (Software Development)',   photo: '/about/ramnathrao-min.jpg' },
  { id: 'rakesh-jain',   name: 'Mr. Rakesh Jain',      role: 'Vice President (Project Services)',       photo: '/about/rakeshjain-min.jpg' },
  { id: 'rajan-verma',   name: 'Mr. Rajan Verma',      role: 'Vice President (Enterprises & Retail)',   photo: '/about/rajanverma-min.jpg' },
];

/* ─── Stats strip ─────────────────────────────────────── */
const STATS = [
  { value: '23+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '200+', label: 'Enterprise Clients' },
  { value: '18+', label: 'States Covered' },
];

/* ─── Helper: Avatar placeholder ─────────────────────── */
function Avatar({ photo, name, size = 'md' }) {
  const initials = name
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  if (photo) {
    return <img src={photo} alt={name} className={`avatar avatar--${size}`} />;
  }
  return (
    <div className={`avatar avatar--placeholder avatar--${size}`}>
      <span>{initials}</span>
    </div>
  );
}

/* ─── Component ───────────────────────────────────────── */
export default function AboutUs() {
  const chairman = BOARD_MEMBERS[0];

  return (
    <div className="about">

      {/* ── 1. HERO ────────────────────────────────────── */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <img src="/bg.png" alt="About Us Background" />
          <div className="about-hero__overlay" />
        </div>
        <div className="about-hero__content container">
          <span className="about-hero__badge">Who We Are</span>
          <h1 className="about-hero__title">
            Specialized Technology<br />Solution Provider
          </h1>
          <p className="about-hero__sub">
            Designing, developing, and deploying integrated security &amp;
            surveillance systems, biometric authentication platforms, and
            AI-driven software products since 2001.
          </p>
        </div>
      </section>

      {/* ── 2. STATS STRIP ─────────────────────────────── */}
      <section className="about-stats">
        <div className="about-stats__inner container">
          {STATS.map((s) => (
            <div key={s.label} className="about-stats__item">
              <span className="about-stats__value">{s.value}</span>
              <span className="about-stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. COMPANY OVERVIEW ────────────────────────── */}
      <section className="about-overview">
        <div className="about-overview__inner container">
          {/* Left — text */}
          <div className="about-overview__text">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-heading">
              Building a Safer, Smarter India
            </h2>
            <p>
              We are a specialized technology-solutions provider with a focus on
              designing, developing, and deploying integrated security and
              surveillance systems, biometric authentication platforms, and
              artificial intelligence–driven software products.
            </p>
            <p>
              Our business model generates revenue from multiple streams,
              including project-based system integration contracts, Software as a
              Service ("SaaS") subscriptions, sale of hardware and software
              products, and technical services such as annual maintenance and
              managed support.
            </p>
            <p>
              We have developed a portfolio of proprietary software tools—
              <strong> StorePulse</strong>, an AI powered video analytics
              platform; <strong>CamStore</strong>, a real-time video compression
              and storage optimization solution; and{' '}
              <strong>CheckCam</strong>, a CCTV network health monitoring
              system—which are offered as standalone cloud-deployed SaaS
              solutions or as part of integrated turnkey deployments.
            </p>
            <p>
              We serve a diverse customer base, including government agencies,
              public sector undertakings ("PSUs"), smart city authorities,
              educational institutions, and private enterprises in sectors such
              as transportation, retail, logistics, and telecommunications.
            </p>
          </div>

          {/* Right — team photo placeholder */}
          <div className="about-overview__photo">
            <div className="about-overview__img-wrap">
              <img src="/about/about-main.webp" alt="Team Info" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CHAIRMAN SECTION ────────────────────────── */}
      <section className="about-chairman">
        <div className="about-chairman__inner container">
          {/* Left — photo */}
          <div className="about-chairman__photo-wrap">
            <div className="about-chairman__photo-frame">
              {chairman.photo ? (
                <img src={chairman.photo} alt={chairman.name} />
              ) : (
                <div className="about-chairman__photo-placeholder">
                  <span className="material-symbols-outlined">person</span>
                  <p>Photo<br /><small>(Coming Soon)</small></p>
                </div>
              )}
            </div>
          </div>

          {/* Right — bio */}
          <div className="about-chairman__bio">
            <span className="section-eyebrow">Chairman &amp; Managing Director</span>
            <h2 className="about-chairman__name">{chairman.name}</h2>
            <p>{chairman.bio}</p>
            <p>{chairman.bio2}</p>
          </div>
        </div>
      </section>

      {/* ── 5. BOARD OF DIRECTORS ──────────────────────── */}
      <section className="about-board">
        <div className="container">
          <div className="about-board__header">
            <h2 className="section-heading">Board of Directors</h2>
            <div className="section-divider" />
          </div>

          <div className="about-board__grid">
            {DIRECTORS.map((d) => (
              <div key={d.id} className="director-card">
                <div className="director-card__avatar-wrap">
                  <Avatar photo={d.photo} name={d.name} size="lg" />
                </div>
                <h3 className="director-card__name">{d.name}</h3>
                <span className="director-card__role">{d.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. KEY MANAGERIAL PERSONNEL ─────────────── */}
      <section className="about-kmp">
        <div className="container">
          <div className="about-board__header">
            <h2 className="section-heading">Key Managerial Personnel</h2>
            <div className="section-divider" />
          </div>
          <div className="about-kmp__grid">
            {KMP.map((p) => (
              <div key={p.id} className="director-card kmp-card">
                <div className="director-card__avatar-wrap">
                  <Avatar photo={p.photo} name={p.name} size="lg" />
                </div>
                <h3 className="director-card__name">{p.name}</h3>
                <span className="director-card__role">{p.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. LEADERSHIP TEAM ──────────────────────── */}
      <section className="about-leadership">
        <div className="container">
          <div className="about-board__header">
            <h2 className="section-heading" style={{ color: '#fff' }}>Leadership Team</h2>
            <div className="section-divider" />
          </div>
          <div className="about-leadership__grid">
            {LEADERSHIP.map((p) => (
              <div key={p.id} className="director-card leader-card">
                <div className="director-card__avatar-wrap">
                  <Avatar photo={p.photo} name={p.name} size="lg" />
                </div>
                <h3 className="director-card__name">{p.name}</h3>
                <span className="director-card__role">{p.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
