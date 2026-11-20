import { ArrowLeft, Award, GraduationCap } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { certifications, education, skillGroups } from '../data';

const subjects = skillGroups.find((g) => g.title === 'Strong Subjects')?.items ?? [];
const radius = 'rounded-[40px] sm:rounded-[50px]';

export default function EducationPage() {
  return (
    <div className="min-h-screen px-5 pb-24 pt-6 sm:px-8 md:px-10 md:pt-8" style={{ background: '#0C0C0C' }}>
      <nav className="mx-auto flex max-w-5xl items-center justify-between">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity hover:opacity-70 md:text-lg"
        >
          <ArrowLeft size={20} /> Back
        </a>
        <a
          href="#contact"
          className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity hover:opacity-70 md:text-lg"
        >
          Contact
        </a>
      </nav>

      <FadeIn y={40}>
        <h1
          className="hero-heading mb-16 mt-12 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Education
        </h1>
      </FadeIn>

      <div className="mx-auto flex max-w-5xl flex-col gap-3">
        {education.map((e, i) => (
          <FadeIn key={e.degree} delay={i * 0.1}>
            <article
              className={`flex flex-col gap-8 border-2 p-6 sm:p-10 ${radius} ${i === 0 ? 'border-[#D7E2EA]' : 'border-[#D7E2EA]/30'}`}
              style={i === 0 ? { background: 'linear-gradient(123deg, #18011F 7%, #0C0C0C 60%)' } : undefined}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-5">
                  <GraduationCap size={i === 0 ? 38 : 30} className="mt-1 shrink-0 text-[#B600A8]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">{e.years}</span>
                    <h2 className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2rem)' }}>
                      {e.degree}
                    </h2>
                    <p className="font-light text-[#D7E2EA]/70" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)' }}>
                      {e.school}
                    </p>
                  </div>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="hero-heading font-black leading-none" style={{ fontSize: i === 0 ? 'clamp(3rem, 8vw, 110px)' : 'clamp(2.5rem, 6vw, 80px)' }}>
                    {e.score}
                  </span>
                  <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">{e.scoreLabel}</span>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {e.details.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-[#D7E2EA]/30 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] sm:text-sm"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-5xl sm:mt-28">
        <FadeIn>
          <h2 className="mb-8 text-sm font-light uppercase tracking-[0.3em] text-[#D7E2EA]/60 sm:text-base">Strong subjects</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ul className="flex flex-wrap gap-2">
            {subjects.map((s) => (
              <li key={s} className="rounded-full border border-[#D7E2EA]/30 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] sm:text-sm">
                {s}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      <div className="mx-auto mt-20 max-w-5xl sm:mt-28">
        <FadeIn>
          <h2 className="mb-8 text-sm font-light uppercase tracking-[0.3em] text-[#D7E2EA]/60 sm:text-base">Certifications</h2>
        </FadeIn>
        <div className="grid gap-3 md:grid-cols-2">
          {certifications.map((c, i) => (
            <FadeIn key={c.title} delay={(i % 2) * 0.1}>
              <div className={`flex h-full items-center gap-5 border border-[#D7E2EA]/25 p-6 sm:p-8 ${radius}`}>
                <Award size={30} className="shrink-0 text-[#B600A8]" />
                <div className="flex flex-col">
                  <h3 className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 1.7vw, 1.4rem)' }}>
                    {c.title}
                  </h3>
                  <span className="text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">{c.detail}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
