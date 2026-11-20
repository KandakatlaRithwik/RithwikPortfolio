import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useRef } from 'react';

type Props = { text: string; className?: string; style?: React.CSSProperties };

function Char({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0" aria-hidden>
        {char}
      </span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }} aria-hidden>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });

  const words = text.split(' ');
  const total = text.length;
  let cursor = 0;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, wi) => {
        const wordStart = cursor;
        cursor += word.length + 1;
        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split('').map((c, ci) => (
              <Char key={ci} char={c} index={wordStart + ci} total={total} progress={scrollYProgress} />
            ))}
            {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        );
      })}
    </p>
  );
}
