import { useState } from 'react';
import './Circulars.css';

const CIRCULARS_DATA = [
  {
    id: 1,
    type: 'RELEASE',
    date: 'AUGUST 28, 2026',
    title: 'StorePulse v4.0 Full Release featuring Generative Insights',
    desc: 'We are thrilled to announce the rollout of StorePulse version 4.0. This release integrates generative AI capabilities directly into your dashboard, allowing retail managers to query camera feeds in natural language.',
    icon: 'memory',
    color: '#3b82f6', // blue
    bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    type: 'COMPLIANCE',
    date: 'AUGUST 10, 2026',
    title: 'Updated Facial Recognition Privacy Mandates',
    desc: 'In accordance with recent regional regulations, our CheckCam and biometric infrastructure tools have been updated with automated data-anonymization protocols. Please review the updated documentation before your next deployment.',
    icon: 'verified_user',
    color: '#10b981', // green
    bg: 'https://images.unsplash.com/photo-1510511459019-5efa32cc40bf?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    type: 'ANNOUNCEMENT',
    date: 'JULY 22, 2026',
    title: 'Partnership with National Highway Authorities',
    desc: 'Gaak Technologies has secured a landmark contract to deploy our AI-powered Traffic Monitoring System (TMS) across 5,000 kilometers of national highway, bridging the gap between hardware sensors and centralized analytics.',
    icon: 'domain',
    color: '#3b82f6',
    bg: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    type: 'UPDATE',
    date: 'JUNE 15, 2026',
    title: 'Scheduled Maintenance for CamStore Cloud Storage',
    desc: 'We will be performing scheduled backend maintenance on our CamStore remote storage servers on Sunday, June 20, from 02:00 to 04:00 AM IST. No downtime is expected for existing streams, but archival exports will be temporarily paused.',
    icon: 'dns',
    color: '#d946ef', // purple
    bg: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    type: 'AWARD',
    date: 'MAY 05, 2026',
    title: 'Recognized as \'Smart City Innovator of the Year\'',
    desc: 'We are humbled to receive the \'Smart City Innovator of the Year\' award at the 2026 International Tech Summit for our continuous work on integrated IoT municipal systems and public safety infrastructure.',
    icon: 'emoji_events',
    color: '#eab308', // yellow
    bg: 'https://images.unsplash.com/photo-1496309732348-3627f3f040ee?auto=format&fit=crop&q=80'
  }
];

const FILTERS = ['ALL', 'RELEASE', 'COMPLIANCE', 'ANNOUNCEMENT', 'UPDATE', 'AWARD'];

export default function Circulars() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredData = activeFilter === 'ALL' 
    ? CIRCULARS_DATA 
    : CIRCULARS_DATA.filter(item => item.type === activeFilter);

  return (
    <div className="circ-page">
      
      {/* ── HERO ────────────────────────────────────── */}
      <section className="circ-hero">
        <div className="circ-hero__bg">
          <img src="/bg.png" alt="Background" />
          <div className="circ-hero__overlay" />
        </div>
        <div className="circ-hero__content container">
          <span className="circ-badge">
            <span className="material-symbols-outlined">notifications</span>
            OFFICIAL COMMUNICATIONS
          </span>
          <h1 className="circ-title">
            Circulars &amp; <span className="text-gradient-cyan">Notifications</span>
          </h1>
          <p className="circ-desc">
            Stay informed with the latest announcements, compliance mandates, software releases, and essential operational updates from Gaak.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────── */}
      <section className="circ-main">
        <div className="container">
          
          {/* Filters Area */}
          <div className="circ-filters-wrapper">
            <div className="circ-filters">
              <div className="circ-filters__label">
                <span className="material-symbols-outlined">filter_alt</span>
                FILTER BY
              </div>
              <div className="circ-filters__btns">
                {FILTERS.map(f => (
                  <button 
                    key={f} 
                    className={`circ-filter-btn ${activeFilter === f ? 'circ-filter-btn--active' : ''}`}
                    onClick={() => setActiveFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline / List */}
          <div className="circ-list">
            <div className="circ-list__line" />
            
            {filteredData.map((item) => (
              <div key={item.id} className="circ-item">
                {/* Node */}
                <div className="circ-item__node" style={{ borderColor: item.color }}>
                  <div className="circ-item__icon-wrap" style={{ color: item.color }}>
                     <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="circ-card">
                  {item.bg && <img src={item.bg} alt="" className="circ-hover-bg" />}
                  <div className="circ-card__header">
                    <span className="circ-card__tag">{item.type}</span>
                    <span className="circ-card__date">{item.date}</span>
                  </div>
                  <h3 className="circ-card__title">{item.title}</h3>
                  <p className="circ-card__desc">{item.desc}</p>
                  
                  <div className="circ-card__footer">
                    <a href="#" className="circ-card__link">
                      READ FULL DETAILS 
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                    <button className="circ-card__download">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredData.length === 0 && (
              <div className="circ-empty">No notifications found for this category.</div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
