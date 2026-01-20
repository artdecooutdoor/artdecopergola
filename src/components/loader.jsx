import React, { useState, useEffect } from 'react';

const LogoSVG = () => (
  <svg width="100%" height="100%" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="77.4258" height="77.4233" rx="16" fill="#2F8004"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M24.7875 45.0882H18.9694V39.1874H27.4927L37.7488 15.6562H39.7716L59.9371 61.6898H53.7966L46.6098 45.1549H31.05L23.8477 61.7682H17.4883L24.7875 45.0882ZM33.3681 39.153L38.7935 26.736L44.0991 39.174H33.3587L33.3681 39.153Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M24.7875 45.0882H18.9694V39.1874H27.4927L37.7488 15.6562H39.7716L59.9371 61.6898H53.7966L46.6098 45.1549H31.05L23.8477 61.7682H17.4883L24.7875 45.0882ZM33.3681 39.153L38.7935 26.736L44.0991 39.174H33.3587L33.3681 39.153Z" stroke="white" strokeWidth="0.216" strokeMiterlimit="2.61313" strokeLinejoin="bevel"/>
  </svg>
);

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Disable scrolling while loader is visible
    document.body.style.overflow = 'hidden';

    let loadTimer;
    let removeTimer;

    // Listen for Spline ready event
    const handleSplineReady = () => {
      setExiting(true);
      removeTimer = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = 'auto';
      }, 800); // Smooth exit animation
    };

    // Fallback: if Spline doesn't load in 3 seconds, hide loader anyway
    const fallbackTimer = setTimeout(() => {
      if (loading && !exiting) {
        setExiting(true);
        removeTimer = setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = 'auto';
        }, 800);
      }
    }, 3000);

    window.addEventListener('spline-ready', handleSplineReady);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(removeTimer);
      clearTimeout(fallbackTimer);
      window.removeEventListener('spline-ready', handleSplineReady);
      document.body.style.overflow = 'auto';
    };
  }, [loading, exiting]);

  if (!loading) return null;

  return (
    <div className={`loader-container ${exiting ? 'exit' : ''}`}>
      <div className="logo-wrapper">
        <LogoSVG />
      </div>
      <div className="loading-line-track">
        <div className="loading-line-bar"></div>
      </div>

      <style>{`
        :root {
          --brand-green: #2F8004;
          --bg-deep: #050E02;
          --ease-smooth: cubic-bezier(0.65, 0, 0.35, 1);
        }

        /* --- LOADER CONTAINER --- */
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--bg-deep);
          z-index: 999999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: radial-gradient(circle at center, #1a2e0a 0%, #050e02 60%);
        }

        /* --- LOGO WRAPPER --- */
        .logo-wrapper {
          width: 48px;
          height: 48px;
          position: relative;
          opacity: 0;
          animation: logoEnter 0.6s var(--ease-smooth) forwards;
        }

        /* --- LOADING LINE --- */
        .loading-line-track {
          width: 80px;
          height: 2px;
          background: rgba(255,255,255,0.1);
          margin-top: 24px;
          border-radius: 2px;
          overflow: hidden;
          opacity: 0;
          animation: fadeIn 0.5s ease 0.2s forwards;
        }

        .loading-line-bar {
          width: 0%;
          height: 100%;
          background: #fff;
          animation: loadProgress 2.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* Infinite progress animation - continues until Spline is ready */
        .loading-line-bar {
          animation: infiniteLoad 3s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        /* --- EXIT ANIMATIONS --- */
        .loader-container.exit {
          pointer-events: none;
          animation: containerFadeOut 0.8s ease forwards;
        }

        .loader-container.exit .logo-wrapper {
          animation: logoExit 0.6s var(--ease-smooth) forwards;
        }

        .loader-container.exit .loading-line-track {
          opacity: 0;
          transition: opacity 0.3s;
        }

        /* --- KEYFRAMES --- */
        @keyframes logoEnter {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes loadProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        /* Infinite progress bar - smoothly loops until Spline is ready */
        @keyframes infiniteLoad {
          0% { width: 10%; }
          50% { width: 85%; }
          100% { width: 100%; }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes logoExit {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; filter: blur(10px); }
        }

        @keyframes containerFadeOut {
          0% { opacity: 1; clip-path: inset(0 0 0 0); }
          100% { opacity: 0; clip-path: inset(0 0 0 0); }
        }
      `}</style>
    </div>
  );
}
