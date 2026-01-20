import { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Notify loader that Spline is ready
    const notifyLoaderReady = () => {
      window.dispatchEvent(new CustomEvent('spline-ready'));
    };

    // Wait for DOM to be fully ready and container to have dimensions
    const checkAndLoad = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      // Check if container has actual dimensions
      if (rect.width > 0 && rect.height > 0) {
        setIsReady(true);
      }
    };

    // Initial check after a small delay
    const timer = setTimeout(checkAndLoad, 100);

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.boundingClientRect.width > 0) {
            // Only load when visible AND has dimensions
            setIsReady(true);
            setIsLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '100px',
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Also watch for resize to ensure dimensions are valid
    const handleResize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0 && !isReady) {
        setIsReady(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isReady]);

  const handleSplineLoad = () => {
    // Notify loader that Spline is fully loaded
    window.dispatchEvent(new CustomEvent('spline-ready'));
  };

  return (
    <div 
      ref={containerRef}
      className="spline-hero-wrapper" 
      style={{ 
        width: '100%', 
        height: '1100px',
        minHeight: '1100px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#d2f2b3'
      }}
    >
      {isReady && isLoaded && (
        <Spline 
          scene="https://draft.spline.design/bLAZ8OQgI4ETVhl3/scene.splinecode" 
          onLoad={handleSplineLoad}
        />
      )}
      
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
        
        .spline-hero-wrapper {
          display: block;
          width: 100%;
          height: 1100px;
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

 