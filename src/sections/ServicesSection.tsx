import FadeIn from '../components/FadeIn';
import { expertise } from '../data';

export default function ServicesSection() {
  return (
    <section
      id="expertise"
      className="rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#0C0C0C' }}
        >
          Expertise
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {expertise.map((item, i) => (
          <FadeIn key={item.name} delay={i * 0.1}>
            <div
              className="flex items-start gap-5 py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
              style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)', ...(i === expertise.length - 1 ? { borderBottom: '1px solid rgba(12, 12, 12, 0.15)' } : {}) }}
            >
              <span
                className="font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#0C0C0C' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-3 pt-1 sm:gap-4">
                <h3
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: '#0C0C0C' }}
                >
                  {item.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', color: '#0C0C0C', opacity: 0.6 }}
                >
                  {item.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-[#0C0C0C]/25 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#0C0C0C]/70 sm:text-sm"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
