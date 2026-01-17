import React from 'react';

interface NavigationProps {
  totalSections: number;
  activeSection: number;
  onNavigate: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ totalSections, activeSection, onNavigate }) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className="group relative flex items-center justify-center w-4 h-4 focus:outline-none"
          aria-label={`Go to section ${index + 1}`}
        >
          <div 
            className={`
              absolute rounded-full transition-all duration-300 ease-out
              ${activeSection === index ? 'w-2 h-2 bg-sapphire' : 'w-1.5 h-1.5 bg-gray-300 group-hover:bg-gray-400 group-hover:scale-125'}
            `}
          />
          {/* Tooltip or Label could go here if needed, but keeping it minimal */}
        </button>
      ))}
    </div>
  );
};

export default Navigation;