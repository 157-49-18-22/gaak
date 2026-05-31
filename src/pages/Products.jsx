import './Products.css';

const SOLUTIONS = [
  {
    id: 'video-surveillance',
    icon: 'videocam',
    tag: 'Real-Time Monitoring',
    title: 'Video Surveillance',
    desc: 'We offer a suite of AI-based video surveillance solutions aimed at enhancing security, operational efficiency, and data insights.',
    hasBg: true,
    bg: '/bg.png',
  },
  {
    id: 'ai-storage',
    icon: 'science',
    tag: 'AI-Driven Tools',
    title: 'AI & Storage',
    desc: 'We offer customers AI-driven tools for real-time surveillance and operational optimization.',
    bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
  },
  {
    id: 'smart-cities',
    icon: 'grid_view',
    tag: 'IoT-Enabled Solutions',
    title: 'Smart Cities IoT',
    desc: 'We support various initiatives through IoT-enabled solutions that include traffic monitoring and people counting.',
    bg: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80',
  },
  {
    id: 'biometric',
    icon: 'fingerprint',
    tag: 'Enrolment & Authentication',
    title: 'Biometric Solutions',
    desc: 'We offer a range of biometric solutions that include biometric enrolment and authentication systems.',
    bg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
  },
  {
    id: 'it-infra',
    icon: 'dns',
    tag: 'IT Services',
    title: 'IT Infrastructure',
    desc: 'We offer our customers a comprehensive suite of IT services ranging from designing and deploying communication infrastructure.',
    bg: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
  },
  {
    id: 'e-surveillance',
    icon: 'security_camera',
    tag: 'Advanced Video Analytics',
    title: 'E-Surveillance',
    desc: 'We offer e-surveillance solutions that are designed to enhance security across diverse environments.',
    bg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
  },
];

/* ── Our Products ───────────────────────────────────── */
const PRODUCTS = [
  {
    id: 'storepulse',
    icon: 'storefront',
    tag: 'AI Video Analytics',
    title: 'StorePulse',
    desc: 'Our StorePulse software is an AI-powered video analytics tool that integrates with CCTV systems to cater to unique operational needs.',
    bg: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80',
  },
  {
    id: 'camstore',
    icon: 'photo_camera',
    tag: 'Video Data Optimization',
    title: 'CamStore',
    desc: 'Our CamStore is a real time video compression tool designed specifically for CCTV remote storage environments.',
    bg: 'https://images.unsplash.com/photo-1620023455799-d7790b4ad483?auto=format&fit=crop&q=80',
  },
  {
    id: 'checkcam',
    icon: 'account_tree',
    tag: 'Network Health Monitoring',
    title: 'CheckCam',
    desc: 'Our CheckCam software is a CCTV network health monitoring system designed to optimize and safeguard surveillance infrastructure.',
    bg: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80',
  },
  {
    id: 'id1',
    icon: 'badge',
    tag: 'Attendance Solution',
    title: 'Id1',
    desc: 'Our ID1 software provides a secure, contactless centralized attendance solution integrated with multiple biometric modalities.',
    bg: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80',
  },
];

/* ── Our Services ───────────────────────────────────── */
const SERVICES = [
  {
    id: 'project-mgmt',
    icon: 'assignment',
    tag: 'IT & Communications',
    title: 'Project Management',
    desc: 'We intend to plan and execute IT and communications project assignments and according to our customers\' guidelines.',
    bg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
  },
  {
    id: 'support',
    icon: 'manage_accounts',
    tag: 'End-To-End Support',
    title: 'Support Services',
    desc: 'We offer end-to-end support services that streamline technology and maintenance.',
    bg: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80',
  },
  {
    id: 'managed',
    icon: 'vpn_key',
    tag: 'Onsite Operational Support',
    title: 'Managed Services',
    desc: 'We offer our customers IT managed services where we provide technical manpower and offer annual maintenance services.',
    bg: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
  },
];

/* ── Component ──────────────────────────────────────── */
export default function Products() {
  return (
    <div className="prod-page">

      {/* ── 1. HERO ─────────────────────────────────── */}
      <section className="prod-hero">
        <div className="prod-hero__bg">
          <img src="/bg.png" alt="Products Background" />
          <div className="prod-hero__overlay" />
        </div>
        <div className="prod-hero__content container">
          <span className="prod-hero__badge">
            <span className="prod-hero__dot" />
            Empowering Industries
          </span>
          <h1 className="prod-hero__title">Products &amp; Solutions</h1>
          <p className="prod-hero__sub">
            Cutting-edge surveillance, advanced analytics, and robust IT solutions
            engineered for the future.
          </p>
        </div>
      </section>

      {/* ── 2. OUR SOLUTIONS ────────────────────────── */}
      <section className="prod-solutions">
        <div className="container">
          <h2 className="prod-section-title">Our Solutions</h2>
          <div className="prod-section-divider" />

          <div className="prod-solutions__grid">
            {SOLUTIONS.map((s) => (
              <div
                key={s.id}
                className={`sol-card${s.hasBg ? ' sol-card--has-bg' : ''}`}
              >
                {s.bg && !s.hasBg && (
                  <img src={s.bg} alt={s.title} className="card-hover-bg-img" />
                )}
                {s.hasBg && (
                  <>
                    <img src={s.bg} alt={s.title} className="sol-card__bg-img" />
                    <div className="sol-card__bg-overlay" />
                  </>
                )}
                <div className="sol-card__icon">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {s.icon}
                  </span>
                </div>
                <h3 className="sol-card__title">{s.title}</h3>
                <span className="sol-card__tag">{s.tag}</span>
                <p className="sol-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OUR PRODUCTS ─────────────────────────── */}
      <section className="prod-products">
        <div className="container">
          <h2 className="prod-section-title">Our Products</h2>
          <div className="prod-section-divider prod-section-divider--pink" />

          <div className="prod-products__grid">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="prod-card">
                {p.bg && <img src={p.bg} alt={p.title} className="card-hover-bg-img" />}
                <div className="prod-card__icon">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {p.icon}
                  </span>
                </div>
                <h3 className="prod-card__title">{p.title}</h3>
                <span className="prod-card__tag">{p.tag}</span>
                <p className="prod-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUR SERVICES ─────────────────────────── */}
      <section className="prod-services">
        <div className="container">
          <h2 className="prod-section-title">Our Services</h2>
          <div className="prod-section-divider prod-section-divider--teal" />

          <div className="prod-services__grid">
            {SERVICES.map((s) => (
              <div key={s.id} className="svc-card">
                {s.bg && <img src={s.bg} alt={s.title} className="card-hover-bg-img" />}
                <div className="svc-card__icon">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {s.icon}
                  </span>
                </div>
                <h3 className="svc-card__title">{s.title}</h3>
                <span className="svc-card__tag">{s.tag}</span>
                <p className="svc-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
