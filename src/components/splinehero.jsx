import Spline from '@splinetool/react-spline';

export default function SplineHero() {
  return (
    <div className="spline-hero-wrapper" style={{ 
      width: '100%', 
      height: '1100px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Spline scene="https://draft.spline.design/bLAZ8OQgI4ETVhl3/scene.splinecode" />
      {/* Overlay to hide Spline logo */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        right: '0',
        width: '200px',
        height: '60px',
        backgroundColor: '#d2f2b3',
        zIndex: 99999,
        pointerEvents: 'none'
      }} />
      <style>{`
        .spline-hero-wrapper #logo,
        .spline-hero-wrapper a[href*="spline"],
        .spline-hero-wrapper canvas ~ div,
        .spline-hero-wrapper div[style*="position: absolute"][style*="bottom"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }
        
        /* Hide on mobile to save performance */
        @media (max-width: 1023px) {
          .spline-hero-wrapper {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

 