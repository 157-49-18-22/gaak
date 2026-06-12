import React from 'react';

export default function Circulars() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)',
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
      fontFamily: '"Inter", sans-serif'
    }}>
      {/* Background Animated Orbs */}
       <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2338bdf8\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', opacity: 0.5 }}></div>
      <div style={{ position: 'absolute', top: '10%', left: '20%', width: '300px', height: '300px', background: 'rgba(56, 189, 248, 0.1)', filter: 'blur(100px)', borderRadius: '50%' }}></div>

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
          color: '#f8fafc',
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
          backgroundColor: '#020617',
          borderTop: '2px solid #38bdf8',
          borderBottom: '2px solid #38bdf8',
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
            color: '#38bdf8',
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
          backgroundColor: '#020617',
          borderTop: '2px solid #818cf8',
          borderBottom: '2px solid #818cf8',
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
            color: '#818cf8',
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
          WebkitTextStroke: '4px #f8fafc',
          zIndex: 30
        }}>
          SOON
        </div>
      </main>
    </div>
  );
}
