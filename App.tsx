import React, { useState, useEffect, useRef } from 'react';
import Origin from './components/sections/Origin';
import Growth from './components/sections/Growth';
import Modernization from './components/sections/Modernization';
import Community from './components/sections/Community';
import Struggle from './components/sections/Struggle';
import Discovery from './components/sections/Discovery';
import Support from './components/sections/Support';
import Outcomes from './components/sections/Outcomes';
import Impact from './components/sections/Impact';
import Navigation from './components/Navigation';
import Header from './components/Header';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sections configuration
  const sections = [
    'Origin',
    'Growth',
    'Modernization',
    'Community',
    'Struggle',
    'Discovery',
    'Support',
    'Outcomes',
    'Impact'
  ];

  // Manual scroll handling
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        const windowHeight = window.innerHeight;
        // Determine which section is mostly visible
        const index = Math.round(scrollPosition / windowHeight);
        if (index !== activeSection && index >= 0 && index < sections.length) {
          setActiveSection(index);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeSection, sections.length]);

  const scrollToSection = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  // Auto - scroll logic: 10s delay per section, loops back to top
  useEffect(() => {
    const autoScrollTimer = setInterval(() => {
      const nextIndex = (activeSection + 1) % sections.length;
      scrollToSection(nextIndex);
    }, 15000);

    return () => clearInterval(autoScrollTimer);
  }, [activeSection, sections.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        const nextIndex = (activeSection + 1) % sections.length;
        scrollToSection(nextIndex);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        const prevIndex = activeSection === 0 ? sections.length - 1 : activeSection - 1;
        scrollToSection(prevIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, sections.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* Fixed Header */}
      <Header />

      {/* Navigation / Progress Indicator */}
      <Navigation
        totalSections={sections.length}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Scroll Container */}
      <div
        ref={containerRef}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth focus:outline-none"
        tabIndex={0}
      >
        <div className="snap-start h-screen w-full">
          <Origin isActive={activeSection === 0} id="origin" />
        </div>
        <div className="snap-start h-screen w-full">
          <Growth isActive={activeSection === 1} id="growth" />
        </div>
        <div className="snap-start h-screen w-full">
          <Modernization isActive={activeSection === 2} id="modernization" />
        </div>
        <div className="snap-start h-screen w-full">
          <Community isActive={activeSection === 3} id="community" />
        </div>

        <div className="snap-start h-screen w-full">
          <Struggle isActive={activeSection === 4} id="struggle" />
        </div>
        <div className="snap-start h-screen w-full">
          <Discovery isActive={activeSection === 5} id="discovery" />
        </div>
        <div className="snap-start h-screen w-full">
          <Support isActive={activeSection === 6} id="support" />
        </div>
        <div className="snap-start h-screen w-full">
          <Outcomes isActive={activeSection === 7} id="outcomes" />
        </div>

        <div className="snap-start h-screen w-full">
          <Impact isActive={activeSection === 8} id="impact" />
        </div>
      </div>
    </div>
  );
};

export default App;