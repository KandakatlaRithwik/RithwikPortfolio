import { ArrowUpRight, Award, GraduationCap } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { certifications, education } from '../data';

const radius = 'rounded-[40px] sm:rounded-[50px]';

export default function CredentialsSection() {
  return (
    <section id="education" className="scroll-mt-4 px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 md:pb-32" style={{ background: '#0C0C0C' }}>
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="mx-auto flex max-w-5xl flex-col gap-3">
        {education.map((e, i) => (
          <FadeIn key={e.degree} delay={i * 0.08}>
            <div
              className={`flex flex-col gap-5 border-2 p-6 sm:p-10 md:flex-row md:items-center md:justify-between ${radius} ${i === 0 ? 'border-[#D7E2EA]' : 'border-[#D7E2EA]/30'}`}
              style={i === 0 ? { background: 'linear-gradient(123deg, #18011F 7%, #0C0C0C 60%)' } : undefined}
            >
              <div className="flex items-start gap-5">
                <GraduationCap size={i === 0 ? 36 : 28} className="mt-1 shrink-0 text-[#B600A8]" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">{e.years}</span>
                  <h3
                    className="font-medium uppercase text-[#D7E2EA]"
                    style={{ fontSize: i === 0 ? 'clamp(1.1rem, 2.4vw, 2rem)' : 'clamp(1rem, 1.8vw, 1.5rem)' }}
                  >
                    {e.degree}
                  </h3>
                  <p className="font-light text-[#D7E2EA]/70" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)' }}>
                    {e.school}
                  </p>
                </div>
              </div>
              <div className="flex items-baseline gap-3">
                <span
                  className="hero-heading font-black leading-none"
                  style={{ fontSize: i === 0 ? 'clamp(3rem, 8vw, 110px)' : 'clamp(2rem, 5vw, 64px)' }}
                >
                  {e.score}
                </span>
                <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">{e.scoreLabel}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn y={30}>
        <div className="mt-10 flex justify-center">
          <a
            href="#/education"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
          >
            Full education details <ArrowUpRight size={18} />
          </a>
        </div>
      </FadeIn>

      <FadeIn y={40}>
        <h3 className="mb-10 mt-24 text-center text-sm font-light uppercase tracking-[0.3em] text-[#D7E2EA]/60 sm:mt-32 sm:text-base">
          Certifications
        </h3>
      </FadeIn>
      <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-2">
        {certifications.map((c, i) => (
          <FadeIn key={c.title} delay={(i % 2) * 0.1}>
            <div className={`flex h-full items-center gap-5 border border-[#D7E2EA]/25 p-6 sm:p-8 ${radius}`}>
              <Award size={30} className="shrink-0 text-[#B600A8]" />
              <div className="flex flex-col">
                <h4 className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 1.7vw, 1.4rem)' }}>
                  {c.title}
                </h4>
                <span className="text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">{c.detail}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
