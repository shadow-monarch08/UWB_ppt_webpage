import React from 'react';
import FadeIn from '../ui/FadeIn';
import { SectionProps } from '../../types';
import { AlertCircle } from 'lucide-react';

const Struggle: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <section className="h-full w-full flex flex-col justify-center px-6 md:px-20 lg:px-32 max-w-7xl mx-auto relative overflow-hidden">
       
       {/* Background subtle texture */}
       <div className="absolute -left-20 top-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50 -z-10"></div>

       <div className="max-w-4xl">
         <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-10 text-neutral-grey">
               <AlertCircle size={32} className="text-charcoal" />
               <span className="text-lg md:text-xl font-bold uppercase tracking-widest">The Reality</span>
            </div>
         </FadeIn>

         <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] mb-12">
               For many students, education isn’t just about books and exams — <span className="text-neutral-grey">it’s about fighting odds, breaking barriers, and daring to dream.</span>
            </h2>
         </FadeIn>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <FadeIn delay={0.3}>
               <div className="prose prose-lg">
                  <p className="text-xl text-charcoal font-medium border-l-2 border-sapphire pl-6 leading-relaxed mb-8">
                     Behind every student’s smile was a story — of sacrifice, stress, and silent battles.
                  </p>
                  <p className="text-neutral-grey">
                     The burden of tuition fees, books, travel, responsibilities — and the fear that our journey might end before it truly begins.
                  </p>
               </div>
            </FadeIn>

            <FadeIn delay={0.4}>
               <div className="bg-gray-50 p-8 rounded-2xl flex flex-col justify-end h-full">
                  <p className="text-2xl md:text-3xl font-bold text-charcoal">
                     But even in those uncertain moments, one thing stayed strong — <br/>
                     <span className="text-sapphire mt-2 block">our will to learn.</span>
                  </p>
               </div>
            </FadeIn>
         </div>
       </div>
    </section>
  );
};

export default Struggle;