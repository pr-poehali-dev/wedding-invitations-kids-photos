import { useState } from 'react';
import Countdown from '@/components/Countdown';
import Icon from '@/components/ui/icon';

const MOON_ILLUSTRATION = 'https://cdn.poehali.dev/projects/1cacb459-2045-4177-93bd-a2743e5d82d7/files/fa5fe2ca-cebf-4750-9eb3-dfc242bbfbb9.jpg';
const GROOVY_ILLUSTRATION = 'https://cdn.poehali.dev/projects/1cacb459-2045-4177-93bd-a2743e5d82d7/files/baf08665-914d-4499-b8da-9e9b61beb2a4.jpg';

const TILTS = ['-2.5deg', '1.8deg', '-1.2deg', '2.8deg', '-3.1deg', '1.4deg'];

const PHOTOS = [
  { caption: 'Алёша, 3 года' },
  { caption: 'Маша, 2 года' },
  { caption: 'Алёша, 6 лет' },
  { caption: 'Маша, 5 лет' },
  { caption: 'Алёша, 9 лет' },
  { caption: 'Маша, 8 лет' },
];

const GIFTS = [
  { symbol: '⌂', title: 'Наш дом', desc: 'Мечтаем о собственном гнёздышке — любой вклад приближает нас к мечте.' },
  { symbol: '✈', title: 'Путешествие', desc: 'Нас ждёт медовый месяц в дальних краях — помоги нам добраться!' },
  { symbol: '♡', title: 'Твоё присутствие', desc: 'Честно — видеть тебя рядом дороже любого подарка на свете.' },
];

export default function Index() {
  const [rsvp, setRsvp] = useState({ name: '', guests: '1', attending: 'yes', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--ink)' }}>

      {/* TICKER */}
      <div className="ticker-wrap py-2" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
        <div
          className="animate-ticker inline-flex"
          style={{ fontFamily: 'Caveat, cursive', fontSize: '1.05rem', letterSpacing: '0.03em' }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-8">
              ✦ АЛЕКСЕЙ &amp; МАРИЯ ✦ 6 СЕНТЯБРЯ 2025 ✦ РЕСТОРАН «СКАЗКА» ✦
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="relative px-4 pt-16 pb-12 flex flex-col items-center text-center max-w-3xl mx-auto">
        <div
          className="absolute top-8 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full pointer-events-none opacity-10 animate-spin-slow"
          style={{ border: '2px dashed var(--gold)' }}
        />

        <div className="relative mb-10 animate-float">
          <img
            src={MOON_ILLUSTRATION}
            alt="Иллюстрация"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
            style={{ border: '4px solid var(--ink)', boxShadow: '8px 8px 0 var(--gold)' }}
          />
          <div
            className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center animate-stamp"
            style={{
              background: 'var(--rust)',
              border: '3px solid var(--ink)',
              color: 'var(--cream)',
              fontFamily: 'Caveat, cursive',
              fontSize: '0.65rem',
              lineHeight: 1.2,
              textAlign: 'center',
              padding: '8px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            <span>SEPT<br />2025<br />♡</span>
          </div>
        </div>

        <div className="animate-fade-up w-full">
          <p
            className="uppercase tracking-[0.3em] text-xs mb-4"
            style={{ color: 'var(--gold)', fontFamily: 'Lora, serif' }}
          >
            Вы приглашены на свадьбу
          </p>
          <h1
            className="leading-none mb-2"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              fontStyle: 'italic',
              color: 'var(--ink)',
            }}
          >
            Алексей
          </h1>
          <p className="my-1" style={{ fontFamily: 'Lora, serif', fontSize: '1.1rem', color: 'var(--gold)' }}>
            ✦ &amp; ✦
          </p>
          <h1
            className="leading-none mb-8"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              fontStyle: 'italic',
              color: 'var(--ink)',
            }}
          >
            Мария
          </h1>

          {/* Info strip */}
          <div
            className="flex flex-wrap justify-center mb-10 mx-auto max-w-xl"
            style={{ borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}
          >
            {[
              { label: 'Дата', value: '6 сентября 2025' },
              { label: 'Время', value: '14:00' },
              { label: 'Место', value: 'Ресторан «Сказка»' },
            ].map(({ label, value }, i, arr) => (
              <div
                key={label}
                className="flex-1 min-w-[110px] py-4 px-3"
                style={{ borderRight: i < arr.length - 1 ? '1px solid var(--ink)' : 'none' }}
              >
                <div
                  className="uppercase text-xs tracking-widest mb-1"
                  style={{ color: 'var(--gold)', fontFamily: 'Lora, serif' }}
                >
                  {label}
                </div>
                <div className="font-semibold text-sm" style={{ fontFamily: 'Lora, serif', color: 'var(--ink)' }}>
                  {value}
                </div>
              </div>
            ))}
          </div>

          <p className="mb-6 italic text-sm" style={{ color: 'var(--gold)', fontFamily: 'Lora, serif' }}>
            До торжества осталось...
          </p>
          <Countdown />
        </div>
      </section>

      {/* DIVIDER */}
      <Divider />

      {/* GALLERY */}
      <section className="px-4 py-10 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.25em] text-xs mb-3" style={{ color: 'var(--gold)', fontFamily: 'Lora, serif' }}>
            Архив воспоминаний
          </p>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontStyle: 'italic',
              color: 'var(--ink)',
            }}
          >
            Давным-давно...
          </h2>
          <p className="mt-2 text-sm italic" style={{ fontFamily: 'Lora, serif', color: 'var(--ink)', opacity: 0.55 }}>
            Маленькие дети, которые однажды встретились и влюбились
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {PHOTOS.map(({ caption }, i) => (
            <div
              key={i}
              className="photo-card"
              style={{ transform: `rotate(${TILTS[i]})` }}
            >
              <div
                className="p-3 pb-10"
                style={{
                  background: 'white',
                  border: '1.5px solid var(--ink)',
                  boxShadow: '4px 4px 0 rgba(28,16,8,0.2)',
                }}
              >
                <img
                  src="/placeholder.jpg"
                  alt={caption}
                  className="w-full h-36 md:h-44 object-cover"
                  style={{ display: 'block', filter: 'sepia(25%)' }}
                />
                <p
                  className="text-center mt-3 text-sm"
                  style={{ fontFamily: 'Caveat, cursive', color: 'var(--ink)', fontSize: '1rem' }}
                >
                  {caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <span
            className="text-xs italic"
            style={{
              color: 'var(--ink)',
              opacity: 0.45,
              fontFamily: 'Lora, serif',
              border: '1px dashed',
              borderColor: 'var(--gold)',
              display: 'inline-block',
              padding: '8px 20px',
            }}
          >
            📸 Здесь появятся ваши настоящие детские фото
          </span>
        </div>
      </section>

      {/* DIVIDER */}
      <Divider />

      {/* RSVP */}
      <section className="px-4 py-10 max-w-lg mx-auto">
        <div className="text-center mb-8">
          <p className="uppercase tracking-[0.25em] text-xs mb-3" style={{ color: 'var(--gold)', fontFamily: 'Lora, serif' }}>
            Подтверждение
          </p>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontStyle: 'italic',
              color: 'var(--ink)',
            }}
          >
            Ты придёшь?
          </h2>
          <p className="mt-2 text-sm italic" style={{ fontFamily: 'Lora, serif', color: 'var(--ink)', opacity: 0.55 }}>
            Просим подтвердить присутствие до 1 августа 2025
          </p>
        </div>

        {submitted ? (
          <div
            className="text-center py-12 animate-stamp"
            style={{
              border: '2px solid var(--ink)',
              background: 'white',
              boxShadow: '6px 6px 0 var(--gold)',
            }}
          >
            <div className="text-5xl mb-4">✉</div>
            <h3
              className="text-2xl font-bold italic mb-2"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--ink)' }}
            >
              Получено!
            </h3>
            <p className="text-sm italic" style={{ fontFamily: 'Lora, serif', color: 'var(--ink)', opacity: 0.65 }}>
              Мы с нетерпением ждём встречи с тобой 🥂
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8"
            style={{ border: '2px solid var(--ink)', background: 'white', boxShadow: '6px 6px 0 var(--gold)' }}
          >
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--gold)', fontFamily: 'Lora, serif' }}>
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  value={rsvp.name}
                  onChange={e => setRsvp({ ...rsvp, name: e.target.value })}
                  placeholder="Как вас зовут?"
                  className="w-full px-4 py-3 text-sm outline-none"
                  style={{ border: '1.5px solid var(--ink)', color: 'var(--ink)', background: 'var(--cream)' }}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--gold)', fontFamily: 'Lora, serif' }}>
                  Присутствие
                </label>
                <div className="flex gap-3">
                  {[
                    { value: 'yes', label: 'С радостью буду' },
                    { value: 'no', label: 'К сожалению, нет' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setRsvp({ ...rsvp, attending: opt.value })}
                      className="flex-1 py-3 text-xs uppercase tracking-wider font-semibold btn-stamp"
                      style={{
                        background: rsvp.attending === opt.value ? 'var(--ink)' : 'var(--cream)',
                        color: rsvp.attending === opt.value ? 'var(--cream)' : 'var(--ink)',
                        border: '1.5px solid var(--ink)',
                        fontFamily: 'Lora, serif',
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--gold)', fontFamily: 'Lora, serif' }}>
                  Количество гостей
                </label>
                <select
                  value={rsvp.guests}
                  onChange={e => setRsvp({ ...rsvp, guests: e.target.value })}
                  className="w-full px-4 py-3 text-sm outline-none"
                  style={{ border: '1.5px solid var(--ink)', color: 'var(--ink)', background: 'var(--cream)' }}
                >
                  {['1', '2', '3', '4', '5+'].map(n => (
                    <option key={n} value={n}>{n} {n === '1' ? 'человек' : 'человека'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--gold)', fontFamily: 'Lora, serif' }}>
                  Пожелания молодожёнам
                </label>
                <textarea
                  rows={3}
                  value={rsvp.message}
                  onChange={e => setRsvp({ ...rsvp, message: e.target.value })}
                  placeholder="Напишите тёплые слова..."
                  className="w-full px-4 py-3 text-sm outline-none resize-none"
                  style={{ border: '1.5px solid var(--ink)', color: 'var(--ink)', background: 'var(--cream)' }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-xs uppercase tracking-widest font-semibold btn-stamp"
                style={{
                  background: 'var(--ink)',
                  color: 'var(--cream)',
                  border: '2px solid var(--ink)',
                  fontFamily: 'Lora, serif',
                }}
              >
                Отправить подтверждение
              </button>
            </div>
          </form>
        )}
      </section>

      {/* DIVIDER */}
      <Divider />

      {/* GIFTS */}
      <section className="px-4 py-10 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.25em] text-xs mb-3" style={{ color: 'var(--gold)', fontFamily: 'Lora, serif' }}>
            Реестр подарков
          </p>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontStyle: 'italic',
              color: 'var(--ink)',
            }}
          >
            Пожелания
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {GIFTS.map(({ symbol, title, desc }, i) => (
            <div
              key={i}
              className="p-6 text-center"
              style={{ border: '1.5px solid var(--ink)', background: 'white', boxShadow: '4px 4px 0 var(--gold)' }}
            >
              <div className="text-4xl mb-4" style={{ color: 'var(--gold)' }}>{symbol}</div>
              <h3
                className="text-lg font-bold italic mb-3"
                style={{ fontFamily: 'Playfair Display, serif', color: 'var(--ink)' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Lora, serif', color: 'var(--ink)', opacity: 0.7 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-16 px-4 mt-8" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
        <img
          src={GROOVY_ILLUSTRATION}
          alt="Иллюстрация"
          className="w-24 h-24 object-cover rounded-full mx-auto mb-6"
          style={{ border: '3px solid var(--gold)', boxShadow: '4px 4px 0 var(--gold)', opacity: 0.9 }}
        />
        <p
          className="italic mb-1"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: 'var(--cream)' }}
        >
          До встречи!
        </p>
        <p
          className="text-xs uppercase tracking-widest mb-8 animate-pulse-soft"
          style={{ color: 'var(--gold)', fontFamily: 'Lora, serif' }}
        >
          6 СЕНТЯБРЯ 2025 · РЕСТОРАН «СКАЗКА» · 14:00
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="tel:+79001234567"
            className="flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider btn-stamp"
            style={{
              border: '1.5px solid var(--cream)',
              color: 'var(--cream)',
              textDecoration: 'none',
              fontFamily: 'Lora, serif',
              boxShadow: '3px 3px 0 var(--gold)',
            }}
          >
            <Icon name="Phone" size={14} />
            Позвонить
          </a>
          <a
            href="https://t.me/username"
            className="flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider btn-stamp"
            style={{
              background: 'var(--gold)',
              border: '1.5px solid var(--gold)',
              color: 'var(--ink)',
              textDecoration: 'none',
              fontFamily: 'Lora, serif',
              boxShadow: '3px 3px 0 var(--cream)',
            }}
          >
            <Icon name="Send" size={14} />
            Telegram
          </a>
        </div>

        <p className="mt-10 text-xs" style={{ color: 'var(--gold)', opacity: 0.4, fontFamily: 'Lora, serif' }}>
          Сделано с любовью ♡
        </p>
      </footer>

    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-4 px-8 py-6 max-w-2xl mx-auto">
      <div className="flex-1 h-px" style={{ background: 'var(--ink)', opacity: 0.18 }} />
      <span style={{ color: 'var(--gold)', fontSize: '1.3rem' }}>✦ ❧ ✦</span>
      <div className="flex-1 h-px" style={{ background: 'var(--ink)', opacity: 0.18 }} />
    </div>
  );
}
