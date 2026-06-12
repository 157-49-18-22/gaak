import React from 'react';

export default function Careers() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at center, #0a192f 0%, #020c1b 100%)',
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
      fontFamily: '"Inter", sans-serif'
    }}>
      {/* Background Animated Orbs */}
      <div style={{ position: 'absolute', top: '10%', left: '20%', width: '300px', height: '300px', background: 'rgba(100, 255, 218, 0.1)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '20%', width: '400px', height: '400px', background: 'rgba(2, 132, 199, 0.15)', filter: 'blur(120px)', borderRadius: '50%' }}></div>

      <style>
        {`
          @keyframes marqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
      <main style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1200px',
        flexGrow: 1
      }}>
        {/* COMING text (Solid, Behind Ribbons) */}
        <div style={{
          position: 'relative',
          fontSize: 'clamp(6rem, 18vw, 15rem)',
          lineHeight: '0.8',
          letterSpacing: '-0.05em',
          fontWeight: '900',
          textTransform: 'uppercase',
          textAlign: 'center',
          userSelect: 'none',
          color: '#ccd6f6',
          zIndex: 10,
          textShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
          COMING
        </div>

        {/* Diagonal Ribbon 1 (Rising) */}
        <div style={{
          position: 'absolute',
          width: '150%',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#020c1b',
          borderTop: '2px solid #64ffda',
          borderBottom: '2px solid #64ffda',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
          zIndex: 20,
          top: '48%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-10deg)',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            gap: '3rem',
            width: 'max-content',
            fontSize: '1.5rem',
            fontWeight: '900',
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
            color: '#64ffda',
            paddingRight: '3rem',
            animation: 'marqueeLeft 15s linear infinite'
          }}>
            {Array(16).fill('COMING SOON').map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </div>
        </div>

        {/* Diagonal Ribbon 2 (Falling) */}
        <div style={{
          position: 'absolute',
          width: '150%',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#020c1b',
          borderTop: '2px solid #0ea5e9',
          borderBottom: '2px solid #0ea5e9',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
          zIndex: 20,
          top: '52%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(8deg)',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            gap: '3rem',
            width: 'max-content',
            fontSize: '1.5rem',
            fontWeight: '900',
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
            color: '#0ea5e9',
            paddingRight: '3rem',
            animation: 'marqueeRight 15s linear infinite'
          }}>
            {Array(16).fill('COMING SOON').map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </div>
        </div>

        {/* SOON text (Outline only, In Front of Ribbons) */}
        <div style={{
          position: 'relative',
          fontSize: 'clamp(6rem, 18vw, 15rem)',
          lineHeight: '0.8',
          letterSpacing: '-0.05em',
          fontWeight: '900',
          textTransform: 'uppercase',
          textAlign: 'center',
          userSelect: 'none',
          color: 'transparent',
          WebkitTextStroke: '4px #ccd6f6',
          zIndex: 30
        }}>
          SOON
        </div>
      </main>
    </div>
  );
}
