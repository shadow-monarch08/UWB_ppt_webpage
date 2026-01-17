import React from 'react';
import FadeIn from '../ui/FadeIn';
import Badge from '../ui/Badge';
import { SectionProps } from '../../types';
import CountUp from '../ui/CountUp';
import images from '@/constants/images';
import icons from '@/constants/icons';

const Community: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <section className="h-full w-full flex items-center justify-center relative px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* Visual Content: Mosaic */}
        <div className="order-2 lg:order-1 relative">
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 translate-y-8">
                <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                  <img src={images.CommunityImage1} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Student gathering" />
                </div>
                <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden">
                  <img src={images.CommunityImage2} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Mentorship session" />
                </div>
              </div>
              <div className="space-y-4 -translate-y-8">
                <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden">
                  <img src={images.CommunityImage3} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Alumni event" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                  <img src={images.CommunityImage4} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Group discussion" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Floating Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur shadow-lg py-3 px-6 rounded-full whitespace-nowrap z-10 hidden lg:block">
            <span className="text-sapphire font-bold"><CountUp start={1} end={1500} isActive={isActive} /></span> <span className="text-neutral-grey font-medium">Community Members</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2">
          <FadeIn delay={0.1}>
            <div className="mb-6">
              <Badge text="Culture" variant="outline" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              A Community That <br />
              <span className="text-sapphire">Grows Together.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg text-neutral-grey mb-8 leading-relaxed">
              FSF isn't just about funds; it's about belonging. Through regular Get-Togethers, alumni mentorship, and a culture of "giving back," beneficiaries become benefactors.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-2 mb-10">
              <Badge text="Alumni Network" variant="secondary" />
              <Badge text="Mentorship" variant="secondary" />
              <Badge text="Pay it Forward" variant="secondary" />
              <Badge text="Annual Meets" variant="secondary" />
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="bg-gray-50 border-l-4 border-sapphire p-6 rounded-r-lg">
              <p className="text-lg text-charcoal italic mb-4">"I met my mentor here when I was struggling in my second year. Five years later, I returned to mentor a student just like me."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                  <img src={icons.profileIcon} className="w-full h-full object-cover" alt="Avatar" />
                </div>
                <div>
                  <p className="text-sm font-bold text-charcoal">Arjun K.</p>
                  <p className="text-xs text-neutral-grey">Alumni & Donor</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default Community;