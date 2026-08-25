import Image from 'next/image';

// TODO - Re-add stats when we have real data from real clients
// to show.
// interface Stat {
//   value: string;
//   label: string;
// }

// const STATS: Stat[] = [
//   { value: '40+', label: 'Projects shipped' },
//   { value: '98%', label: 'Client retention' },
//   { value: '5 yrs', label: 'Average relationship' },
// ];

const BODY_PARAGRAPHS = [
  'Kestrel was built on a single conviction: that the best software comes from close collaboration, not large headcounts. Every project is led directly by a senior engineer — no handoffs to junior staff, no communication lag through account managers.',
  'We take on fewer clients so we can go deeper. You get our full attention, genuine investment in your outcomes, and a product that reflects real craft — not a template shipped on a timeline.',
  'Quality over quantity, always. Direct communication, always. Premium delivery, without exception.',
];

export const About = () => {
  return (
    <section id="about" className="w-full bg-[#0A0908] px-6 py-16 md:py-22">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <figure className="relative flex flex-col items-center justify-center border border-[#3A3218] bg-[#0E0C0A] px-8 py-12">
              <div
                aria-hidden="true"
                className="absolute left-2 top-2 h-5 w-5 border-l border-t border-[#3A3218]"
              />
              <div
                aria-hidden="true"
                className="absolute right-2 top-2 h-5 w-5 border-r border-t border-[#3A3218]"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-2 left-2 h-5 w-5 border-b border-l border-[#3A3218]"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#3A3218]"
              />

              <Image
                src="/kestrel.svg"
                alt="Kestrel Systems logo"
                width={140}
                height={140}
              />
              <figcaption className="mt-4 font-sans text-sm tracking-widest text-[#7B6E63]">
                EST. 2026
              </figcaption>
            </figure>

            {/* <div className="mt-6 grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-[#3A3218] px-3 py-4 text-center"
                >
                  <span className="block font-fraunces text-xl md:text-2xl text-[#C9A84C]">
                    {stat.value}
                  </span>
                  <span className="mt-1 block font-sans text-xs text-[#7B6E63]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          <div>
            <p className="font-sans text-sm font-semibold tracking-widest text-[#C9A84C]">
              ABOUT
            </p>

            <blockquote className="mt-6 font-fraunces text-3xl font-light italic md:text-5xl">
              <span className="text-[#D7D2C9]">&ldquo;Small by choice.</span>
              <br />
              <span className="bg-linear-to-r from-[#C9A84C] to-[#967d35] bg-clip-text text-transparent">
                Not by limitation.
              </span>
              <span className="text-[#D7D2C9]">&rdquo;</span>
            </blockquote>

            <div className="mt-8 space-y-4 font-sans text-sm leading-relaxed text-[#7B6E63]">
              {BODY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <p className="font-sans text-sm font-bold text-white">
                Igor Ignácio
              </p>
              <p className="font-sans text-sm text-[#7B6E63]">
                Founder & Lead Engineer, Kestrel Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
