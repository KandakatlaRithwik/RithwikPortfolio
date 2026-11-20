import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

export function ContactButton({
  href = '#contact',
  label = 'Contact Me',
}: {
  href?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      className="inline-block whitespace-nowrap rounded-full px-6 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-300 hover:scale-105 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  );
}

export function GhostButton({
  href,
  children,
  icon = true,
}: {
  href: string;
  children: ReactNode;
  icon?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      {children}
      {icon && <ArrowUpRight size={18} />}
    </a>
  );
}

export const LiveProjectButton = ({ href }: { href: string }) => (
  <GhostButton href={href}>Live Project</GhostButton>
);
