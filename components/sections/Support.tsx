import React from 'react';
import FadeIn from '../ui/FadeIn';
import { SectionProps } from '../../types';
import { Heart, HandHeart, Home } from 'lucide-react';

const Support: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center px-6 md:px-20 lg:px-32 max-w-6xl mx-auto text-center">
      
      <FadeIn delay={0.1}>
         <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
            What FSF offered us was <span className="text-sapphire">more than money.</span>
         </h2>
         <p className="text-xl text-neutral-grey mb-16">It was emotional support. Mentorship.</p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
         {/* Card 1 */}
         <FadeIn delay={0.2} className="h-full">
            <div className="bg-gray-50 p-8 rounded-2xl h-full flex flex-col items-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
               <div className="p-4 bg-white rounded-full shadow-sm text-sapphire mb-6">
                  <Heart size={24} />
               </div>
               <p className="text-lg text-charcoal font-medium leading-relaxed">
                  When we doubted ourselves — <br/>
                  <span className="text-neutral-grey">they reminded us of our worth.</span>
               </p>
            </div>
         </FadeIn>

         {/* Card 2 */}
         <FadeIn delay={0.3} className="h-full">
            <div className="bg-gray-50 p-8 rounded-2xl h-full flex flex-col items-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
               <div className="p-4 bg-white rounded-full shadow-sm text-sapphire mb-6">
                  <HandHeart size={24} />
               </div>
               <p className="text-lg text-charcoal font-medium leading-relaxed">
                  When we stumbled — <br/>
                  <span className="text-neutral-grey">they extended a hand.</span>
               </p>
            </div>
         </FadeIn>

         {/* Card 3 */}
         <FadeIn delay={0.4} className="h-full">
            <div className="bg-gray-50 p-8 rounded-2xl h-full flex flex-col items-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
               <div className="p-4 bg-white rounded-full shadow-sm text-sapphire mb-6">
                  <Home size={24} />
               </div>
               <p className="text-lg text-charcoal font-medium leading-relaxed">
                  When we succeeded — <br/>
                  <span className="text-neutral-grey">they celebrated like family.</span>
               </p>
            </div>
         </FadeIn>
      </div>

      <FadeIn delay={0.6}>
         <div className="mt-16 py-6 px-10 border-t border-b border-divider">
            <p className="text-2xl md:text-3xl font-serif italic text-charcoal">
               “FSF gave us a safe space, an environment, a second home.”
            </p>
         </div>
      </FadeIn>

    </section>
  );
};

export default Support;