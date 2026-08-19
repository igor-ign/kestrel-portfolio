import { DesktopIcon, CodeIcon, StackIcon } from '@phosphor-icons/react/dist/ssr';
import { SectionHeading } from './SectionHeading';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const SERVICES: ServiceCard[] = [
  {
    icon: <DesktopIcon size={20} className="text-[#C9A84C]" />,
    title: 'Web Design',
    description:
      'Interfaces that convert. Every pixel earns its place — designed for clarity, built to impress the people who matter most to your business.',
    tags: ['UI/UX', 'Prototyping', 'Design Systems'],
  },
  {
    icon: <CodeIcon size={20} className="text-[#C9A84C]" />,
    title: 'Fullstack Development',
    description:
      'From database schema to deployment pipeline. We ship production-grade software that scales with your ambitions, not against them.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: <StackIcon size={20} className="text-[#C9A84C]" />,
    title: 'Custom Applications',
    description:
      'Off-the-shelf software has off-the-shelf limitations. We build the exact tool your workflow demands — precise, maintainable, and yours.',
    tags: ['SaaS', 'Internal Tools', 'Integrations'],
  },
];

export const Services = () => {
  return (
    <section id="services" className="w-full bg-[#0E0C0A] px-6 py-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="WHAT WE DO"
          title="Precision work across"
          highlight="every layer"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-sm border border-[#c9a84c26] bg-[#12110A] p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#C9A84C4D] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_60px_rgba(201,168,76,0.05)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-[#c9a84c26] bg-[#211D0F]">
                {card.icon}
              </div>
              <h3 className="mt-4 font-fraunces text-lg text-white">
                {card.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[#7B6E63]">
                {card.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-[#c9a84c26] bg-[#211D0F] px-3 py-1 font-sans text-xs text-[#C9A84C]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
