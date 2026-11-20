import FadeIn from '../components/FadeIn';
import { experience, skillGroups } from '../data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32" style={{ background: '#0C0C0C' }}>
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {experience.map((job, i) => (
          <FadeIn key={job.role} delay={i * 0.1}>
            <div
              className="grid gap-4 py-8 sm:py-10 md:grid-cols-[220px_1fr] md:gap-12 md:py-12"
              style={{
                borderTop: '1px solid rgba(215, 226, 234, 0.18)',
                ...(i === experience.length - 1 ? { borderBottom: '1px solid rgba(215, 226, 234, 0.18)' } : {}),
              }}
            >
              <span className="pt-1 text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-base">
                {job.period}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1.1rem, 2.6vw, 2.1rem)' }}>
                  {job.role}
                </h3>
                <span className="hero-heading w-fit text-lg font-bold uppercase tracking-wider sm:text-xl">{job.company}</span>
                <ul className="mt-2 flex max-w-2xl list-disc flex-col gap-1.5 pl-5 font-light leading-relaxed text-[#D7E2EA]/70 marker:text-[#B600A8]" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)' }}>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Skill matrix */}
      <div className="mx-auto mt-24 max-w-5xl sm:mt-32">
        <FadeIn>
          <h3 className="mb-10 text-sm font-light uppercase tracking-[0.3em] text-[#D7E2EA]/60 sm:text-base">Technical skills</h3>
        </FadeIn>
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <FadeIn key={g.title} delay={(i % 2) * 0.1}>
              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium uppercase tracking-widest text-[#B600A8] sm:text-sm">{g.title}</span>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-[#D7E2EA]/30 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] sm:text-sm"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
