import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Github } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { GhostButton, LiveProjectButton } from '../components/Buttons';
import { projects } from '../data';
import type { Project } from '../data';

function useIsDesktop() {
  const [v, setV] = useState(() => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches);
  useEffect(() => {
    const m = window.matchMedia('(min-width: 768px)');
    const on = () => setV(m.matches);
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, []);
  return v;
}

const inner = 'rounded-[28px] md:rounded-[36px]';
const radius = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function Card({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const range: [number, number] = [index / total, 1];
  const scale = useTransform(progress, range, [1, targetScale]);
  const desktop = useIsDesktop();

  return (
    <div
      className={`mb-6 md:sticky md:mb-0 ${index === total - 1 ? '' : 'md:h-[80vh]'}`}
      style={desktop ? { top: 96 + index * 28 } : undefined}
    >
      <motion.article
        className={`relative flex origin-top flex-col gap-4 border-2 border-[#D7E2EA] p-4 sm:gap-6 sm:p-6 md:p-8 ${radius}`}
        style={{ background: '#0C0C0C', ...(desktop ? { scale } : {}) }}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 7vw, 100px)' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/70 sm:text-sm">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          {project.live && (
            <div className="hidden sm:block">
              <LiveProjectButton href={project.live} />
            </div>
          )}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-3 md:h-[clamp(330px,46vh,470px)] md:flex-row">
          <div className="flex flex-col gap-3 md:w-[40%]">
            <div className={`border border-[#D7E2EA]/25 bg-[#D7E2EA]/[0.04] p-5 sm:p-6 ${inner}`}>
              <p
                className="font-light leading-relaxed text-[#D7E2EA]"
                style={{ fontSize: 'clamp(0.85rem, 1.15vw, 1.05rem)' }}
              >
                {project.description}
              </p>
            </div>
            <div
              className={`flex flex-1 flex-col justify-between gap-4 border border-[#D7E2EA]/25 p-5 sm:p-6 ${inner}`}
              style={{ background: 'linear-gradient(135deg, #18011F 0%, #0C0C0C 70%)' }}
            >
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-[#D7E2EA]/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#D7E2EA] sm:text-xs"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              {(project.live || project.github) && (
                <div className="flex flex-wrap gap-3">
                  {project.live && (
                    <div className="sm:hidden">
                      <LiveProjectButton href={project.live} />
                    </div>
                  )}
                  {project.github && (
                    <GhostButton href={project.github} icon={false}>
                      <Github size={18} /> Source
                    </GhostButton>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className={`relative overflow-hidden border border-[#D7E2EA]/25 md:w-[60%] ${radius}`}>
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              loading="lazy"
              draggable={false}
              className="aspect-[16/11] w-full object-cover object-top md:absolute md:inset-0 md:aspect-auto md:h-full"
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 pb-28 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-40 md:pt-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>
      <div ref={container} className="mx-auto max-w-[1400px]">
        {projects.map((p, i) => (
          <Card key={p.name} project={p} index={i} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
