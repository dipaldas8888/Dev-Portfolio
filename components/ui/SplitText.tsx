'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | number[];
  splitType?: 'chars' | 'words';
  from?: { opacity?: number; y?: number; x?: number; scale?: number; filter?: string };
  to?: { opacity?: number; y?: number; x?: number; scale?: number; filter?: string };
  threshold?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 40,
  duration = 0.6,
  ease = [0.2, 0.65, 0.3, 0.9],
  splitType = 'chars',
  from = { opacity: 0, y: 35 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  tag = 'h2',
  textAlign,
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { amount: threshold, once: true });

  const Tag = motion[tag] as typeof motion.h2;

  if (splitType === 'words') {
    const words = text.split(' ');
    return (
      <Tag
        ref={ref as any}
        className={`inline-block ${className}`}
        style={{ textAlign }}
      >
        {words.map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            className="inline-block whitespace-pre"
            initial={from}
            animate={isInView ? to : from}
            transition={{
              duration,
              delay: (wordIndex * delay) / 1000,
              ease,
            }}
            onAnimationComplete={
              wordIndex === words.length - 1 ? onLetterAnimationComplete : undefined
            }
          >
            {word}{wordIndex < words.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </Tag>
    );
  }

  const words = text.split(' ');
  let charCounter = 0;

  return (
    <Tag
      ref={ref as any}
      className={`inline-block ${className}`}
      style={{ textAlign }}
    >
      {words.map((word, wordIndex) => {
        const chars = word.split('');
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {chars.map((char, charIndex) => {
              const charDelay = (charCounter * delay) / 1000;
              const isLast =
                wordIndex === words.length - 1 && charIndex === chars.length - 1;
              charCounter++;

              return (
                <motion.span
                  key={charIndex}
                  className="inline-block"
                  initial={from}
                  animate={isInView ? to : from}
                  transition={{
                    duration,
                    delay: charDelay,
                    ease,
                  }}
                  onAnimationComplete={isLast ? onLetterAnimationComplete : undefined}
                >
                  {char}
                </motion.span>
              );
            })}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </Tag>
  );
};

export default SplitText;
