import { useEffect, useRef } from 'react';

const COLORS = ['#E8799B', '#F4A261', '#81C9B0', '#FFD166', '#C9B1FF', '#FF9EAF'];
const SHAPES = ['●', '★', '♥', '✿', '◆'];

export default function ConfettiBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pieces: HTMLSpanElement[] = [];
    for (let i = 0; i < 22; i++) {
      const el = document.createElement('span');
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const size = 10 + Math.random() * 14;
      const left = Math.random() * 100;
      const duration = 6 + Math.random() * 10;
      const delay = Math.random() * 8;

      el.textContent = shape;
      el.style.cssText = `
        position: fixed;
        left: ${left}vw;
        top: -30px;
        color: ${color};
        font-size: ${size}px;
        opacity: 0.7;
        pointer-events: none;
        z-index: 0;
        animation: confettiFall ${duration}s ${delay}s linear infinite;
        user-select: none;
      `;
      container.appendChild(el);
      pieces.push(el);
    }

    return () => {
      pieces.forEach(p => p.remove());
    };
  }, []);

  return <div ref={containerRef} className="pointer-events-none" />;
}
