import { motion } from 'framer-motion';
import type { CSSProperties, ElementType, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
};

// motion.create() must not run on every render, so components are cached per tag.
const cache = new Map<ElementType, ReturnType<typeof motion.create>>();
const getMotion = (tag: ElementType) => {
  let c = cache.get(tag);
  if (!c) {
    c = motion.create(tag as 'div');
    cache.set(tag, c);
  }
  return c;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  as = 'div',
}: Props) {
  const Comp = getMotion(as) as ElementType;
  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Comp>
  );
}
