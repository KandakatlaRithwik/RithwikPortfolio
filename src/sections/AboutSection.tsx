import { GraduationCap, Briefcase, FolderGit2, Server } from 'lucide-react';
import type { ReactNode } from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import { ContactButton } from '../components/Buttons';
import { aboutText, stats } from '../data';

const icons: ReactNode[] = [
  <GraduationCap key="g" size={28} />,
  <Briefcase key="b" size={28} />,
  <FolderGit2 key="f" size={28} />,
  <Server key="t" size={28} />,
];

function StatCard({ value, label, icon, className }: { value: string; label: string; icon: ReactNode; className: string }) {
  return (
    <div
      className={`rounded-[28px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C]/60 p-4 text-[#D7E2EA] backdrop-blur-md md:rounded-[36px] md:p-6 ${className}`}
    >
      <div className="mb-2 text-[#B600A8]">{icon}</div>
      <div className="hero-heading text-4xl font-black leading-none sm:text-5xl md:text-6xl">{value}</div>
      <div className="mt-1 text-[10px] font-light uppercase tracking-widest sm:text-xs md:text-sm">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute left-[1%] top-[4%] sm:left-[2%] md:left-[4%]">
        <StatCard value={stats[0].value} label={stats[0].label} icon={icons[0]} className="relative" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute right-[1%] top-[4%] sm:right-[2%] md:right-[4%]">
        <StatCard value={stats[1].value} label={stats[1].label} icon={icons[1]} className="relative" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <StatCard value={stats[2].value} label={stats[2].label} icon={icons[2]} className="relative" />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
        <StatCard value={stats[3].value} label={stats[3].label} icon={icons[3]} className="relative" />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn y={40} delay={0}>
            <h2
              className="hero-heading text-center font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>
          <AnimatedText
            text={aboutText}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>
        <FadeIn>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
