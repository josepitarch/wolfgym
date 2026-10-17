import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const phrases = [
  'Tu gimnasio de barrio',
  'Entrena sin límites',
  'Donde la fuerza se construye',
  'Más que un gimnasio',
];

export default function Typewriter() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: phrases,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
      startDelay: 800,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span
      ref={el}
      className="text-lg md:text-xl font-light tracking-[0.15em] text-gray-300"
    />
  );
}
