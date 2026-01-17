import React from 'react';
import FadeIn from '../ui/FadeIn';
import { SectionProps } from '../../types';
import { ArrowRight } from 'lucide-react';
import CountUp from '../ui/CountUp';

const Impact: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center relative px-6 md:px-20 text-center overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 pointer-events-none"></div>

      <div className="max-w-4xl relative z-10">
        <FadeIn delay={0.1}>
          <p className="text-sapphire font-bold tracking-widest uppercase mb-4 text-sm">The Milestone</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-8 tracking-tight">
            21 Years of UFSF—<br />
            And We're Just <span className="text-sapphire">Getting Started.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-10 border-y border-gray-100 py-8">
            <div className="space-y-1">
              <span className="block text-3xl md:text-4xl font-bold text-charcoal">
                <CountUp end={1500} suffix="+" isActive={isActive} />
              </span>
              <span className="text-xs md:text-sm text-neutral-grey uppercase tracking-wide">Students Supported</span>
            </div>
            <div className="space-y-1">
              <span className="block text-3xl md:text-4xl font-bold text-charcoal">
                <CountUp end={30} prefix="₹" suffix=" Cr+" isActive={isActive} />
              </span>
              <span className="text-xs md:text-sm text-neutral-grey uppercase tracking-wide">Disbursed</span>
            </div>
            <div className="space-y-1">
              <span className="block text-3xl md:text-4xl font-bold text-charcoal">
                <CountUp end={98} suffix="%" isActive={isActive} />
              </span>
              <span className="text-xs md:text-sm text-neutral-grey uppercase tracking-wide">Repayment Rate</span>
            </div>
            <div className="space-y-1">
              <span className="block text-3xl md:text-4xl font-bold text-charcoal">
                <CountUp end={20} isActive={isActive} />
              </span>
              <span className="text-xs md:text-sm text-neutral-grey uppercase tracking-wide">Years Strong</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-neutral-grey max-w-2xl mx-auto mb-9 leading-relaxed">
            Our vision for the next decade is simple: to scale our impact through technology while keeping the human heart of our community beating stronger than ever.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col items-center gap-4">
            <button className="bg-charcoal text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors flex items-center gap-2 group">
              Join the Mission
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-sapphire font-medium mt-4">Because education changes everything.</p>
          </div>
        </FadeIn>
      </div>

      {/* Decorative large text background */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.03] select-none">
        <span className="text-[20vw] font-bold text-charcoal leading-none whitespace-nowrap transform translate-y-1/4 block text-center">
          21 YEARS
        </span>
      </div>

    </section>
  );
};

export default Impact;