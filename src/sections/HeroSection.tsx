import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import FramedPortrait from '../components/FramedPortrait';
import { ContactButton } from '../components/Buttons';
import { profile } from '../data';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#/education' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen min-h-[560px] flex-col"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      <FadeIn y={-20} delay={0}>
        <nav className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[10.5px] font-medium uppercase tracking-normal text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-sm sm:tracking-wider md:text-lg lg:text-[1.4rem]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn y={40} delay={0.15}>
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center font-black uppercase leading-none tracking-tight text-[10.6vw] sm:mt-4 sm:text-[11.4vw] md:-mt-1 md:text-[12vw] lg:text-[12.6vw]">
            Hi, i&rsquo;m {profile.firstName}
          </h1>
        </FadeIn>
      </div>

      <div className="flex-1" />

      <div className="relative z-20 flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn y={20} delay={0.35}>
          <p
            className="max-w-[150px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-none"
            style={{ fontSize: 'clamp(0.7rem, 1.4vw, 1.5rem)' }}
          >
            {profile.roleLines.map((line, i) => (
              <span key={line} className={`block sm:whitespace-nowrap ${i === 0 ? 'font-semibold' : ''}`}>
                {line}
              </span>
            ))}
          </p>
        </FadeIn>
        <FadeIn y={20} delay={0.5}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait: full photo, framed with gradient outline + corner brackets */}
      <div
        className="absolute bottom-[140px] left-1/2 z-10 w-[min(280px,33vh)] -translate-x-1/2 sm:bottom-7 sm:w-[min(430px,40vh)]"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out" className="!block">
          <FramedPortrait src={profile.photo} alt="Portrait of Rithwik Kandakatla" ratio={1133 / 1467} />
        </Magnet>
      </div>
    </section>
  );
}
