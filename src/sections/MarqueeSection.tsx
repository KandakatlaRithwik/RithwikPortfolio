import { useEffect, useRef } from 'react';
import { projects, techTiles } from '../data';

const TILE_W = 420;
const GAP = 12;

// Row 1: project screenshots (2 passes so one set is wider than a large screen)
const row1 = [...projects, ...projects].map((p) => p.image);
// Row 2: the tech stack as typographic tiles
const row2 = techTiles;

const gradients = [
  'linear-gradient(135deg, #18011F 0%, #7621B0 100%)',
  'linear-gradient(135deg, #1a0a02 0%, #BE4C00 100%)',
  'linear-gradient(135deg, #0C0C0C 0%, #B600A8 100%)',
  'linear-gradient(135deg, #101826 0%, #646973 100%)',
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      if (r1.current) r1.current.style.transform = `translateX(${offset - 200}px)`;
      if (r2.current) r2.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Each row is tripled; shifting left by one full set keeps content on both sides of the viewport.
  const setWidth1 = row1.length * (TILE_W + GAP);
  const setWidth2 = row2.length * (TILE_W + GAP);

  return (
    <section
      ref={sectionRef}
      aria-label="Selected work and tech stack"
      className="flex flex-col gap-3 pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ background: '#0C0C0C', overflow: 'hidden' }}
    >
      <div ref={r1} className="flex w-max gap-3" style={{ willChange: 'transform', marginLeft: -setWidth1 }}>
        {[...row1, ...row1, ...row1].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            draggable={false}
            className="h-[270px] w-[420px] shrink-0 rounded-2xl border border-[#D7E2EA]/15 object-cover object-top"
          />
        ))}
      </div>

      <div ref={r2} className="flex w-max gap-3" style={{ willChange: 'transform', marginLeft: -setWidth2 }}>
        {[...row2, ...row2, ...row2].map((t, i) => (
          <div
            key={i}
            className="flex h-[270px] w-[420px] shrink-0 flex-col justify-between rounded-2xl border border-[#D7E2EA]/15 p-7"
            style={{ background: gradients[i % row2.length % gradients.length] }}
          >
            <span className="text-sm font-light uppercase tracking-widest text-[#D7E2EA]/70">{t.group}</span>
            <span className="text-5xl font-black uppercase leading-none tracking-tight text-[#D7E2EA]">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
