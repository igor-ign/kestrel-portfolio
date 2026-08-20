import { SectionHeading } from './SectionHeading';

interface ProcessStep {
  label: string;
  description: string;
}

const STEPS: ProcessStep[] = [
  {
    label: 'Discovery',
    description:
      'We listen before we build. Deep-dive sessions to understand your goals, constraints, and the outcomes that define success.',
  },
  {
    label: 'Design',
    description:
      'Wireframes evolve into high-fidelity prototypes you can interact with before a single line of production code is written.',
  },
  {
    label: 'Development',
    description:
      'Clean architecture, thorough testing, and weekly check-ins. You see progress every step of the way — no black-box builds.',
  },
  {
    label: 'Launch',
    description:
      'Deployment, documentation, and post-launch support. We hand over something you can confidently own and grow from.',
  },
];

export const Process = () => {
  return (
    <section id="process" className="w-full bg-[#0A0908] px-6 py-8 md:py-22">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="HOW WE WORK"
          title="From first call to"
          highlight="final deploy"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={step.label}>
              <span className="text-2xl md:text-4xl font-fraunces text-[#3A3218]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="my-6 h-px w-full bg-linear-to-r from-[#3A3218] to-[#15130B]" />
              <h3 className="mt-4 font-fraunces text-lg md:text-xl text-white">
                {step.label}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[#7B6E63]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
