import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import Badge from '../ui/Badge';
import { SectionProps } from '../../types';
import { Globe, ShieldCheck, Activity, Wifi } from 'lucide-react';
import gsap from 'gsap';
import CountUp from '../ui/CountUp';

const Modernization: React.FC<SectionProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);

  // Using framer-motion's useInView to detect visibility of the specific card element
  // amount: 0.2 ensures it triggers when 20% of the element is visible
  const isInView = useInView(containerRef, { amount: 0.2, once: false });

  useEffect(() => {
    let ctx: gsap.Context;

    if (isInView) {
      ctx = gsap.context(() => {
        const progressObj = { value: 0 };

        gsap.to(progressObj, {
          value: 100,
          duration: 6,
          delay: 1,
          ease: "power2.out",
          onUpdate: () => {
            const p = progressObj.value;

            // Logic for colors and text thresholds
            let color = "#EF4444"; // Red (Low)
            let label = "Low";

            if (p >= 33 && p < 66) {
              color = "#F59E0B"; // Amber (Moderate)
              label = "Moderate";
            } else if (p >= 66) {
              color = "#2E6FE7"; // Sapphire (High)
              label = "High";
            }

            // Direct DOM manipulation for high-performance updates
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${p}%`;
              progressBarRef.current.style.backgroundColor = color;
            }

            if (progressTextRef.current) {
              progressTextRef.current.innerText = label;
              progressTextRef.current.style.color = color;
            }
          }
        });
      }, containerRef);
    } else {
      // Reset logic when element goes out of view to ensure re-animation works next time
      if (progressBarRef.current) {
        gsap.set(progressBarRef.current, { width: "0%", backgroundColor: "#EF4444" });
      }
      if (progressTextRef.current) {
        progressTextRef.current.innerText = "Low";
        progressTextRef.current.style.color = "#EF4444";
      }
    }

    return () => {
      // Clean up GSAP context (kills all tweens created in this context)
      if (ctx) ctx.revert();
    };
  }, [isInView]);

  return (
    <section className="h-full w-full flex items-center relative px-6 md:px-20 lg:px-32 max-w-7xl mx-auto overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 skew-x-12 translate-x-1/4 opacity-50"></div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-4">
                <Badge text="Innovation" variant="primary" />
                <span className="text-xs font-semibold text-neutral-grey uppercase tracking-wider">Technology Era</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal">
                Modern Processes for <br /><span className="text-sapphire">Modern Students.</span>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="flex gap-12 text-right md:flex">
              <div>
                <CountUp end={100} suffix="%" isActive={isActive} className="text-4xl font-bold text-charcoal" />
                <p className="text-xs text-neutral-grey uppercase tracking-wide mt-1">Digital Intake</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-charcoal">0</p>
                <p className="text-xs text-neutral-grey uppercase tracking-wide mt-1">Drop-offs</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Digital Outreach */}
          <FadeIn delay={0.4}>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe size={120} />
              </div>

              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-sapphire mb-6 relative z-10">
                <Globe size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3 relative z-10">Digital Outreach</h3>
              <p className="text-base text-neutral-grey leading-relaxed relative z-10 mb-8">
                Transitioning from paper applications to a seamless online ecosystem, expanding our reach to remote villages where access was once impossible.
              </p>

              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between border border-gray-100 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Wifi size={16} className="text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-charcoal">System Active</div>
                    <div className="text-[10px] text-neutral-grey">Real-time access</div>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-sapphire/20 border-2 border-white flex items-center justify-center text-[8px] font-bold text-sapphire">+15</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: COVID Adaptation */}
          <FadeIn delay={0.6}>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={120} />
              </div>

              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-sapphire mb-6 relative z-10">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3 relative z-10">COVID Adaptation</h3>
              <p className="text-base text-neutral-grey leading-relaxed relative z-10 mb-8">
                When the world stopped, learning didn't. We pivoted instantly to support online classes, ensuring zero academic loss during the crisis.
              </p>

              {/* Animated Progress Bar Container */}
              <div ref={containerRef} className="bg-gray-50 rounded-lg p-4 flex items-center gap-4 border border-gray-100 relative z-10">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-charcoal">Response Efficiency</span>
                    <span
                      ref={progressTextRef}
                      className="text-xs font-bold transition-colors duration-300"
                      style={{ color: "#EF4444" }} // Initial state
                    >
                      Low
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      ref={progressBarRef}
                      className="h-full rounded-full"
                      style={{
                        width: "0%",
                        backgroundColor: "#EF4444" // Initial state
                      }}
                    ></div>
                  </div>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-sapphire" />
                  <span className="text-xs font-medium text-neutral-grey">Resilient</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.7}>
          <div className="flex gap-8 mt-8 md:hidden border-t border-divider pt-6">
            <div>
              <p className="text-2xl font-bold text-charcoal">100%</p>
              <p className="text-xs text-neutral-grey uppercase tracking-wide mt-1">Digital Intake</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-charcoal">0</p>
              <p className="text-xs text-neutral-grey uppercase tracking-wide mt-1">Drop-offs</p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Modernization;