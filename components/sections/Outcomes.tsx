import React from 'react';
import FadeIn from '../ui/FadeIn';
import Badge from '../ui/Badge';
import { SectionProps } from '../../types';
import DistributionChart from '../ui/DistributionChart';

const Outcomes: React.FC<SectionProps> = ({ isActive }) => {
   return (
      <section className="h-full w-full flex flex-col justify-center px-6 md:px-20 lg:px-32 max-w-7xl mx-auto relative overflow-hidden">

         {/* Background Word Cloud (Subtle) */}
         <div className="absolute inset-0 z-0 opacity-[0.03] select-none pointer-events-none flex flex-wrap content-center justify-center gap-8 overflow-hidden p-10">
            {["Belief", "Safety", "Family", "Possibility", "Transformation", "Home", "Empowerment", "Everything"].map((word, i) => (
               <span key={i} className="text-6xl md:text-8xl font-bold uppercase">{word}</span>
            ))}
         </div>

         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

            {/* Left Side: Narrative & Identity */}
            <div className="flex flex-col justify-center h-full">
               <FadeIn delay={0.1}>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-5 leading-tight">
                     Today, we’ve grown.
                     <span className="text-sapphire">We’ve <br /> graduated.</span>
                  </h2>
               </FadeIn>

               {/* Moved Identity Chips here to replace Careers list */}
               <FadeIn delay={0.2}>
                  <div className="mb-5">
                     <p className="text-sm font-bold text-neutral-grey uppercase tracking-widest mb-4">What FSF means to us</p>
                     <div className="flex flex-wrap gap-3">
                        {["Belief", "Safety", "Family", "Possibility", "Transformation", "Home"].map((word, i) => (
                           <span key={i} className={`
                           px-4 py-2 rounded-full text-sm font-medium border transition-colors
                           ${i % 2 === 0 ? 'bg-sapphire/10 text-sapphire border-sapphire/20' : 'bg-white text-charcoal border-gray-200'}
                        `}>
                              {word}
                           </span>
                        ))}
                     </div>
                  </div>
               </FadeIn>

               <FadeIn delay={0.3}>
                  <p className="text-xl md:text-2xl font-medium text-charcoal mb-5 leading-snug">
                     Because someone once believed in us — <br />
                     <span className="text-sapphire underline decoration-2 underline-offset-4">we now believe in giving back.</span>
                  </p>
               </FadeIn>

               <FadeIn delay={0.4}>
                  <div className="bg-charcoal text-white p-8 rounded-2xl shadow-xl border border-gray-800">
                     <p className="text-lg font-medium mb-4 italic">
                        “We are proud to say... We are FSF students.”
                     </p>
                     <div className="h-px bg-white/20 w-full mb-4"></div>
                     <p className="text-sm text-gray-400">
                        To everyone behind FSF and United Way of Baroda — thank you.
                        <br /><br />
                        <span className="text-white font-semibold">You didn’t just support our education — You changed our lives.</span>
                     </p>
                  </div>
               </FadeIn>
            </div>

            {/* Right Side: Distribution Chart */}
            <div className="h-full flex items-center justify-center lg:pl-10">
               <FadeIn delay={0.5} className="w-full">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                     <div className="flex items-center justify-between mb-8">
                        <div>
                           <h3 className="text-xl font-bold text-charcoal">Field of Study</h3>
                           <p className="text-sm text-neutral-grey">Distribution of students across disciplines</p>
                        </div>
                        <Badge text="2024 Data" variant="secondary" />
                     </div>

                     {/* The Chart */}
                     <DistributionChart />

                     <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <p className="text-xs text-neutral-grey uppercase tracking-wider">Empowering diverse career paths</p>
                     </div>
                  </div>
               </FadeIn>
            </div>

         </div>
      </section>
   );
};

export default Outcomes;