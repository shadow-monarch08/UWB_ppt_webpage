import React from 'react';
import FadeIn from '../ui/FadeIn';
import Badge from '../ui/Badge';
import { SectionProps } from '../../types';
import images from '@/constants/images';

const Origin: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <section className="h-full w-full flex flex-col justify-center relative px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">

      {/* 1. Primary Focus: The Headline */}
      <div className="w-full mb-12 lg:mb-16">
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-8">
            <Badge text="2005" variant="secondary" />
            <span className="text-sm font-medium text-neutral-grey tracking-widest uppercase">Founding Story</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-charcoal leading-[0.95] max-w-6xl">
            Education Should <br />
            <span className="text-sapphire">Never Be a Luxury.</span>
          </h1>
        </FadeIn>
      </div>

      {/* 2. Secondary Layer: Context & Visuals */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

        {/* Narrative Column */}
        <div className="lg:col-span-5 relative z-10 pb-4">
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-neutral-grey leading-relaxed mb-8 border-l-4 border-sapphire/20 pl-6">
              It began with a simple observation and an honest realization shared worldwide: talent is universal, yet access, support, and opportunity rarely are available.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-charcoal mb-1">The Founders</h3>
                <p className="text-sm text-neutral-grey leading-snug">Driven by the belief that money shouldn't dictate a future.</p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">Initial Model</h3>
                <p className="text-sm text-neutral-grey leading-snug">Direct scholarships for students in acute need.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Visual Anchor (Cinematic & Subtle) */}
        <div className="lg:col-span-7 w-full">
          <FadeIn delay={0.5}>
            <div className="relative w-full aspect-video md:aspect-[2.35/1] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
              {/* Overlay to keep it subtle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sapphire/20 to-transparent mix-blend-multiply z-10 pointer-events-none"></div>
              <img
                src={images.heroImage}
                alt="Early days of the foundation"
                className="w-full h-full object-cover opacity-70 hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute bottom-4 left-6 z-20">
                <p className="text-white text-xs md:text-sm font-medium tracking-wide drop-shadow-md opacity-90">
                  "We wanted to create a ripple effect that starts with one student."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default Origin;