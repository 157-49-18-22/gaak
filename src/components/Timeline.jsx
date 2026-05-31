import './Timeline.css';

const EVENTS = [
  {
    year: '2008',
    icon: 'fingerprint',
    title: 'Biometric at Scale',
    desc: 'Received work order for biometric attendance system for a state municipal department, covering 150,000 employees across indoor and outdoor environments.',
  },
  {
    year: '2011',
    icon: 'badge',
    title: 'Aadhaar Enrolment',
    desc: 'Executed a contract for the supply of Aadhaar kits for a state nodal agency and generated more than 5.8 million Aadhaar IDs as an enrolment agency.',
  },
  {
    year: '2015',
    icon: 'school',
    title: 'EdTech Deployment',
    desc: 'Deployed information and communication technology project for 204 schools in Srikakulam, Andhra Pradesh, integrating smart classrooms and biometrics.',
  },
  {
    year: '2017',
    icon: 'gavel',
    title: 'Judiciary Systems',
    desc: 'Executed a biometric attendance system project for one of the state judiciaries, ensuring secure and accurate workforce management.',
  },
  {
    year: '2019',
    icon: 'account_balance',
    title: 'Banking & Postal Reach',
    desc: 'Supplied Aadhaar enrolment kits to major public and private sector banks, postal circles and education departments across various states.',
  },
  {
    year: '2023',
    icon: 'videocam',
    title: '20,000 CCTV Cameras',
    desc: 'Installation and commissioning of 20,000 CCTV Cameras at a state public works department — one of the largest single surveillance deployments.',
  },
  {
    year: '2024',
    icon: 'how_to_reg',
    title: 'Aadhaar-Enabled Biometrics',
    desc: 'Received order to develop Aadhaar-enabled biometric attendance systems for a state public sector undertaking, expanding digital governance.',
  },
  {
    year: '2025',
    icon: 'local_police',
    title: 'Delhi Police Stations',
    desc: 'Installation and commissioning of 1,720 CCTV Cameras at 11 police stations across Delhi, strengthening public safety infrastructure in the capital.',
  },
];

export default function Timeline() {
  return (
    <section className="timeline">
      {/* Header */}
      <div className="timeline__hero">
        <div className="container">
          <p className="section-eyebrow section-eyebrow--light">Our Journey</p>
          <h2 className="timeline__heading">Major Events &amp; Milestones</h2>
          <p className="timeline__subheading">
            Two decades of pioneering technology solutions across India's most critical sectors
          </p>
        </div>
      </div>

      {/* Track */}
      <div className="timeline__body">
        <div className="container">
          <div className="timeline__track">
            {/* Centre glow line */}
            <div className="timeline__line" />

            {EVENTS.map((ev, i) => (
              <div
                key={ev.year}
                className={`tl-item ${i % 2 === 0 ? 'tl-item--left' : 'tl-item--right'}`}
              >
                {/* Card */}
                <div className="tl-card">
                  <div className="tl-card__inner">
                    <div className="tl-card__icon-row">
                      <span
                        className="material-symbols-outlined tl-card__icon"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {ev.icon}
                      </span>
                    </div>
                    <h3 className="tl-card__title">{ev.title}</h3>
                    <p className="tl-card__desc">{ev.desc}</p>
                  </div>
                  {/* connector arrow */}
                  <div className="tl-card__arrow" />
                </div>

                {/* Centre node */}
                <div className="tl-node">
                  <div className="tl-node__ring" />
                  <span className="tl-node__year">{ev.year}</span>
                </div>

                {/* Spacer (opposite side) */}
                <div className="tl-spacer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
