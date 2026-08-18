'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ListIcon, XIcon } from '@phosphor-icons/react';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstNavLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      firstNavLinkRef.current?.focus();
    } else {
      toggleButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0E0C0A] px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/kestrel.svg"
            alt="Kestrel logo"
            width={32}
            height={32}
          />
          <span className="font-fraunces text-lg font-semibold tracking-[0.04em] text-[#D7D2C9]">
            KESTREL
          </span>
        </div>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-[#7B6E63] font-semibold text-sm"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#C9A84C] transition-all duration-250 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden rounded bg-linear-to-r from-[#C9A84C] to-[#967d35] px-4 py-2 text-sm font-medium text-[#0E0C0A] transition-opacity duration-200 hover:opacity-90 md:inline-block"
        >
          Start a project
        </a>

        <button
          ref={toggleButtonRef}
          type="button"
          className="md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <XIcon size={28} className="text-[#C9A84C]" />
          ) : (
            <ListIcon size={28} className="text-[#C9A84C]" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-0 top-full w-full bg-[#0E0C0A] px-6 pb-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href}>
                <a
                  ref={index === 0 ? firstNavLinkRef : undefined}
                  href={link.href}
                  className="text-[#7B6E63] hover:underline decoration-[#C9A84C]"
                  onClick={handleNavLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-4 block rounded bg-[#C9A84C] px-4 py-2 text-center text-sm font-medium text-[#0E0C0A]"
            onClick={handleNavLinkClick}
          >
            Start a project
          </a>
        </nav>
      )}
    </header>
  );
};
