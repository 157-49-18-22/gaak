import { useEffect, useRef, useState } from 'react';
import './Stats.css';

const STATS = [
  { target: 371, suffix: 'Cr+', label: 'Empowering Growth with', highlight: '371+ Crores Annual Revenue', duration: 1800 },
  { target: 3,   suffix: '+',   label: 'Built on',              highlight: '3+ Proprietary Softwares',  duration: 800  },
  { target: 290, suffix: '+',   label: 'Trusted by',            highlight: '290+ Valued Customers',     duration: 1600 },
  { target: 25,  suffix: '',    label: 'Delivering Excellence for', highlight: 'Over Two Decades',       duration: 1200 },
];

function useCountUp(target, duration, started) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const startVal = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (target - startVal) + startVal));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatItem({ stat }) {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const count = useCountUp(stat.target, stat.duration, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats__item" ref={ref}>
      <p className="stats__value">
        {count}
        <span className="stats__suffix">{stat.suffix}</span>
      </p>
      <p className="stats__sub">{stat.label}</p>
      <p className="stats__highlight">{stat.highlight}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__grid container">
        {STATS.map((s) => (
          <StatItem key={s.highlight} stat={s} />
        ))}
      </div>
    </section>
  );
}
