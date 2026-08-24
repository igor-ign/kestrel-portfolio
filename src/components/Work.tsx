import Image from 'next/image';
import { ArrowRight, ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';
import { SectionHeading } from './SectionHeading';

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  tag: string;
  image: string;
  imageAlt: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Meridian Finance',
    category: 'Fullstack / Dashboard',
    description:
      'A real-time analytics dashboard helping financial advisors track portfolios, surface insights, and act faster.',
    tag: 'Case study',
    image: '/work/meridian-finance.svg',
    imageAlt: 'Meridian Finance dashboard interface',
  },
  {
    title: 'Sola Health',
    category: 'Web Design / SaaS',
    description:
      'A patient-first wellness platform that simplifies booking, billing, and care coordination for modern clinics.',
    tag: 'Case study',
    image: '/work/sola-health.svg',
    imageAlt: 'Sola Health platform overview',
  },
  {
    title: 'Apex Logistics',
    category: 'Custom Application',
    description:
      'A live shipment tracking system giving operations teams full visibility from warehouse to final delivery.',
    tag: 'Case study',
    image: '/work/apex-logistics.svg',
    imageAlt: 'Apex Logistics tracking application',
  },
];

export const Work = () => {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full bg-[#0E0C0A] px-6 py-8 md:py-22"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="work-heading"
          label="SELECTED WORK"
          title="Work that speaks"
          highlight="for itself"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study) => (
            <a
              key={study.title}
              href="#"
              className="group h-full rounded-sm focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:outline-none"
            >
              <article className="flex flex-col h-full bg-[#12110A] border border-[#C9A84C1A] rounded-sm overflow-hidden">
                <div className="h-72 md:h-80 relative overflow-hidden bg-[#1A1710]">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                    <span className="text-sm text-[#C9A84C]">
                      {study.tag}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A84C]">
                      <ArrowRightIcon size={20} className="text-[#C9A84C]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8 min-h-45">
                  <span className="text-sm font-regular text-[#5e544b]">
                    {study.category}
                  </span>
                  <h3 className="mt-2 font-fraunces text-2xl font-light text-white">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#7B6E63] min-h-10">
                    {study.description}
                  </p>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
