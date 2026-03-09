import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEDDING_DATE = new Date('2025-09-06T14:00:00');

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'дней', value: timeLeft.days, emoji: '🌸' },
    { label: 'часов', value: timeLeft.hours, emoji: '⏰' },
    { label: 'минут', value: timeLeft.minutes, emoji: '✨' },
    { label: 'секунд', value: timeLeft.seconds, emoji: '💫' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {units.map(({ label, value, emoji }, i) => (
        <div
          key={label}
          className="flex flex-col items-center"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div
            className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl text-3xl md:text-4xl font-bold"
            style={{
              background: 'white',
              border: '2px solid var(--ink)',
              color: 'var(--ink)',
              fontFamily: 'Playfair Display, serif',
              boxShadow: '4px 4px 0 var(--gold)',
            }}
          >
            <span className="text-3xl md:text-4xl">{String(value).padStart(2, '0')}</span>
            <span className="absolute -top-3 -right-3 text-lg">{emoji}</span>
          </div>
          <span
            className="mt-2 text-sm font-medium"
            style={{ color: 'var(--gold)', fontFamily: 'Lora, serif', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.65rem' }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}