import React from 'react';
import FadeIn from '../ui/FadeIn';
import Badge from '../ui/Badge';
import { SectionProps } from '../../types';
import { TrendingUp, Users, BookOpen } from 'lucide-react';

const Growth: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <section className="h-full w-full flex flex-col justify-center px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">

      <div className="mb-16 max-w-3xl">
        <FadeIn delay={0.1}>
          <Badge text="Evolution" variant="outline" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-charcoal tracking-tight">
            Growing Wider, Deeper, <br />
            and <span className="text-sapphire">More Structured.</span>
          </h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline Item 1 */}
        <FadeIn delay={0.3}>
          <div className="group relative p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition-all duration-300 h-full">
            <div className="absolute top-8 right-8 p-2 bg-white rounded-lg shadow-sm text-sapphire">
              <TrendingUp size={20} />
            </div>
            <span className="block text-4xl font-bold text-sapphire/20 mb-6 group-hover:text-sapphire/40 transition-colors">01</span>
            <h3 className="text-xl font-bold text-charcoal mb-3">Impact That Scales</h3>
            <p className="text-neutral-grey text-sm leading-relaxed mb-6">
              Adopting a sustainable interest-free loan model that keeps support circulating, allowing more students to benefit over time.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge text="Sustainability" variant="secondary" />
              <Badge text="Dignity" variant="secondary" />
            </div>
          </div>
        </FadeIn>

        {/* Timeline Item 2 */}
        <FadeIn delay={0.4}>
          <div className="group relative p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition-all duration-300 h-full">
            <div className="absolute top-8 right-8 p-2 bg-white rounded-lg shadow-sm text-sapphire">
              <Users size={20} />
            </div>
            <span className="block text-4xl font-bold text-sapphire/20 mb-6 group-hover:text-sapphire/40 transition-colors">02</span>
            <h3 className="text-xl font-bold text-charcoal mb-3">Mentorship</h3>
            <p className="text-neutral-grey text-sm leading-relaxed mb-6">
              Recognizing that money solves only half the problem. We introduced guidance to navigate academic and career choices.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge text="Guidance" variant="secondary" />
              <Badge text="Support" variant="secondary" />
            </div>
          </div>
        </FadeIn>

        {/* Timeline Item 3 */}
        <FadeIn delay={0.5}>
          <div className="group relative p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition-all duration-300 h-full">
            <div className="absolute top-8 right-8 p-2 bg-white rounded-lg shadow-sm text-sapphire">
              <BookOpen size={20} />
            </div>
            <span className="block text-4xl font-bold text-sapphire/20 mb-6 group-hover:text-sapphire/40 transition-colors">03</span>
            <h3 className="text-xl font-bold text-charcoal mb-3">Family Culture</h3>
            <p className="text-neutral-grey text-sm leading-relaxed mb-6">
              Establishing the foundation not as a bank, but as a family. Students aren't numbers; they are members of a lifelong community.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge text="Belonging" variant="secondary" />
              <Badge text="Care" variant="secondary" />
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.6} className="mt-12 flex items-center gap-4 text-sm text-neutral-grey border-t border-divider pt-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-sapphire"></div>
          <span>2005 Founded</span>
        </div>
        <div className="w-12 h-px bg-gray-200"></div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-sapphire"></div>
          <span>2010 Formalized</span>
        </div>
        <div className="w-12 h-px bg-gray-200"></div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-sapphire"></div>
          <span>2015 Expanded</span>
        </div>
      </FadeIn>

    </section>
  );
};

export default Growth;