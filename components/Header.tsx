import images from "@/constants/images";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center pointer-events-none">
      {/* Background with blur - optional, can be adjusted or removed if a completely transparent look is desired */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl"></div>

      {/* Left Logo Placeholder */}
      <div className="relative z-10 flex items-center pointer-events-auto">
        <div className="h-10 w-16 md:h-12 md:w-20 bg-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
          {/* Replace src with actual logo later */}
          <img
            src={images.UwbLogo}
            alt="Left Logo"
            className="h-full w-full object-contain"
          />
        </div>
        <span className="ml-3 font-semibold text-charcoal hidden md:block">
          United Way of Baroda
        </span>
      </div>

      {/* Right Logo Placeholder */}
      <div className="relative z-10 flex items-center pointer-events-auto">
        <span className="mr-3 font-semibold text-charcoal hidden md:block">
          Fusion Study Foundation
        </span>
        <div className="h-10 w-16 md:h-12 md:w-20 bg-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
          {/* Replace src with actual logo later */}
          <img
            src={images.FsfLogo}
            alt="Right Logo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
