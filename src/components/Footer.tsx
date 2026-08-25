import Image from 'next/image';
import { InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react/dist/ssr';

const INSTAGRAM_URL = process.env.INSTAGRAM_URL ?? '#';
const LINKEDIN_URL = process.env.LINKEDIN_URL ?? '#';

export const Footer = () => {
  return (
    <footer
      aria-label="Site footer"
      className="w-full border-t border-[#282419] bg-[#0E0C0A] px-6 py-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/kestrel.svg"
            alt="Kestrel logo"
            width={28}
            height={28}
          />
          <span className="font-fraunces text-lg font-semibold tracking-[0.04em] text-[#D7D2C9]">
            KESTREL SYSTEMS
          </span>
        </div>

        <p className="text-sm text-[#7B6E63]">
          © {new Date().getFullYear()} Kestrel Systems. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#7B6E63] transition-colors duration-200 hover:text-[#C9A84C] focus:text-[#C9A84C] outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0C0A] rounded-sm"
          >
            <InstagramLogoIcon size={24} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#7B6E63] transition-colors duration-200 hover:text-[#C9A84C] focus:text-[#C9A84C] outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0C0A] rounded-sm"
          >
            <LinkedinLogoIcon size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
