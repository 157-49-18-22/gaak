import './ProductsSolutions.css';

const PRODUCTS = [
  {
    icon: 'store',
    title: 'StorePulse',
    desc: 'Intelligent retail analytics platform powered by AI for footfall tracking, queue management, and store behaviour insights.',
  },
  {
    icon: 'photo_camera',
    title: 'CamStore',
    desc: 'Cloud-based surveillance storage solution offering scalable, secure video archiving with instant retrieval and remote access.',
  },
  {
    icon: 'videocam',
    title: 'CheckCam',
    desc: 'Smart video inspection system for automated quality checks and process compliance in industrial environments.',
  },
  {
    icon: 'camera_outdoor',
    title: 'Video Surveillance Solutions',
    desc: 'End-to-end CCTV and IP camera ecosystems with centralised monitoring, AI-powered alerts, and seamless VMS integration.',
  },
  {
    icon: 'psychology',
    title: 'AI and Storage Solutions',
    desc: 'Deep learning analytics on the edge, integrated with high-capacity NAS/SAN storage for real-time threat intelligence.',
  },
  {
    icon: 'fingerprint',
    title: 'Biometric Solutions',
    desc: 'Multi-modal biometric systems—fingerprint, face, iris—for secure access control, attendance, and identity verification.',
  },
];

export default function ProductsSolutions() {
  return (
    <section className="products">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">What We Offer</p>
          <h2 className="section-title">Our Products &amp; Solutions</h2>
          <p className="section-subtitle">
            A comprehensive portfolio of technology solutions engineered for
            security, efficiency, and scalability across every sector.
          </p>
        </div>

        <div className="products__grid">
          {PRODUCTS.map((p, i) => (
            <div key={p.title} className="product-card">
              <span className="product-card__num">0{i + 1}</span>
              <div className="product-card__icon">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {p.icon}
                </span>
              </div>
              <h3 className="product-card__title">{p.title}</h3>
              <p className="product-card__desc">{p.desc}</p>
              <a href="#" className="product-card__link">
                Learn More <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
