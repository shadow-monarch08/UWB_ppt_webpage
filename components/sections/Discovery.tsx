import React from 'react';
import FadeIn from '../ui/FadeIn';
import Badge from '../ui/Badge';
import { SectionProps } from '../../types';
import { DoorOpen } from 'lucide-react';

const Discovery: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <section className="h-full w-full flex items-center px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
         
         {/* Left: The Referral */}
         <div>
            <FadeIn delay={0.1}>
               <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-sapphire mb-8">
                  <DoorOpen size={24} />
               </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
               <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8">
                  And then came that one moment of hope.
               </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
               <div className="flex flex-wrap gap-3 mb-8">
                  <Badge text="A friend." variant="outline" />
                  <Badge text="A senior." variant="outline" />
                  <Badge text="A teacher." variant="outline" />
               </div>
            </FadeIn>

            <FadeIn delay={0.4}>
               <p className="text-xl md:text-2xl text-neutral-grey font-light leading-relaxed">
                  Someone told us: <br/>
                  <span className="text-charcoal font-medium italic">‘There’s a place that will believe in you.’</span><br/>
                  That place… was UWB and FSF.
               </p>
            </FadeIn>
         </div>

         {/* Right: The Experience */}
         <div className="relative">
            <FadeIn delay={0.5}>
               <div className="bg-charcoal text-white p-10 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
                  {/* Decorative Circle */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-sapphire rounded-full blur-3xl opacity-20"></div>
                  
                  <blockquote className="relative z-10 space-y-8">
                     <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        From the moment we applied, we weren’t treated like numbers or cases. <br/>
                        <span className="text-white font-bold">We were heard. Understood. We were treated like family.</span>
                     </p>
                     
                     <div className="h-px w-20 bg-gray-600"></div>

                     <p className="text-2xl md:text-3xl font-bold text-sapphire leading-tight">
                        FSF–UWB didn’t just check documents. <br/>
                        <span className="text-white">They checked our dreams.</span>
                     </p>
                  </blockquote>
               </div>
            </FadeIn>
         </div>

      </div>
    </section>
  );
};

export default Discovery;