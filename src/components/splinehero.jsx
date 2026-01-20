import Spline from '@splinetool/react-spline';

export default function SplineHero() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    // Delay Spline loading until interaction or after 3s
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    
    const handleInteraction = () => {
      setIsLoaded(true);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      clearTimeout(timer);
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('scroll', handleInteraction, { once: true });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="spline-hero-wrapper" 
      style={{ 
        width: '100%', 
        height: '1100px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#d2f2b3'
      }}
    >
      {isLoaded ? <Spline scene="https://draft.spline.design/bLAZ8OQgI4ETVhl3/scene.splinecode" /> : null}
      {/* SEO H1 - hidden but indexable */}
      <h1 style={{
        position: 'absolute',
        left: '-9999px',
        top: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}>
        Premium Pergolas and Outdoor Living Solutions
      </h1>
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

 