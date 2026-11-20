import { FileDown, Github, Globe, Linkedin, Mail, Phone } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { ContactButton } from '../components/Buttons';
import { profile } from '../data';

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: Linkedin, label: 'linkedin.com/in/rithwik-kandakatla', href: profile.linkedin },
  { icon: Github, label: 'github.com/KandakatlaRithwik', href: profile.github },
  { icon: Globe, label: 'devframes.vercel.app', href: 'https://devframes.vercel.app/' },
  { icon: FileDown, label: 'Download resume', href: profile.resume },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-t-[40px] border-t border-[#D7E2EA]/15 px-5 pb-10 pt-20 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:rounded-t-[60px] md:px-10 md:pt-32"
      style={{ background: '#0C0C0C' }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 sm:gap-16">
        <FadeIn y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&rsquo;s connect
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="max-w-xl text-center font-light uppercase leading-snug tracking-wide text-[#D7E2EA]"
            style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.4rem)' }}
          >
            Open to AI engineering and software development roles. Let&rsquo;s build something incredible together.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ContactButton href={`mailto:${profile.email}`} label="Email Me" />
        </FadeIn>

        <ul className="grid w-full gap-3 sm:grid-cols-2">
          {links.map(({ icon: Icon, label, href }, i) => (
            <FadeIn key={label} as="li" delay={i * 0.08}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-full border border-[#D7E2EA]/25 px-6 py-4 text-sm font-medium tracking-wide text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:text-base"
              >
                <Icon size={20} className="shrink-0 text-[#B600A8]" />
                <span className="truncate">{label}</span>
              </a>
            </FadeIn>
          ))}
        </ul>

        <p className="pt-10 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/50">
          &copy; 2026 {profile.name}
        </p>
      </div>
    </section>
  );
}
