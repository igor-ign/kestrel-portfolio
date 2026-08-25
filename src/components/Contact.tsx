import { EnvelopeIcon, ClockIcon } from '@phosphor-icons/react/dist/ssr';
import { ContactForm } from '@/components/ContactForm';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[#0E0C0A] px-6 py-16 md:py-22"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <p className="mb-6 font-sans text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">
            GET IN TOUCH
          </p>
          <h2 className="mb-6 font-fraunces text-3xl font-light text-[#D7D2C9] md:text-5xl">
            Let&apos;s build something{' '}
            <span className="block bg-linear-to-r from-[#C9A84C] to-[#967d35] bg-clip-text italic text-transparent">
              together.
            </span>
          </h2>
          <p className="mb-10 max-w-md text-base text-[#7B6E63]">
            Have a project in mind or want to explore how we can help? Drop us a
            message — we&apos;d love to hear about what you&apos;re building.
          </p>
          <div className="flex flex-col gap-4">
            <div className='flex items-center gap-3 text-[#C9A84C]'>
              <EnvelopeIcon size={20} weight="regular" className='text-[#C9A84C]' />
              <span className='text-[#7B6E63]'>igor@kestreldev.co</span>
            </div>
            <div className="flex items-center gap-3 text-[#7B6E63]">
              <ClockIcon size={20} weight="regular" className='text-[#C9A84C]' />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};
