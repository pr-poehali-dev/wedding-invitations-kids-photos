import { useState } from 'react';
import Countdown from '@/components/Countdown';
import ConfettiBackground from '@/components/ConfettiBackground';
import Icon from '@/components/ui/icon';

const HERO_ILLUSTRATION = 'https://cdn.poehali.dev/projects/1cacb459-2045-4177-93bd-a2743e5d82d7/files/efd29476-ee6a-49ac-95c3-de8b31cbeaea.jpg';
const KIDS_ILLUSTRATION = 'https://cdn.poehali.dev/projects/1cacb459-2045-4177-93bd-a2743e5d82d7/files/12db111d-0757-4093-92c9-2233e58cfce3.jpg';

const PLACEHOLDER_PHOTOS = [
  { src: '/placeholder.jpg', caption: 'Алёша, 3 года', rotate: '-rotate-3' },
  { src: '/placeholder.jpg', caption: 'Маша, 2 года', rotate: 'rotate-2' },
  { src: '/placeholder.jpg', caption: 'Алёша, 6 лет', rotate: '-rotate-1' },
  { src: '/placeholder.jpg', caption: 'Маша, 5 лет', rotate: 'rotate-3' },
  { src: '/placeholder.jpg', caption: 'Алёша, 9 лет', rotate: '-rotate-2' },
  { src: '/placeholder.jpg', caption: 'Маша, 8 лет', rotate: 'rotate-1' },
];

const GIFTS = [
  { emoji: '🏡', title: 'Мечта о доме', desc: 'Копим на уютное гнёздышко — вклад в общий котёл будет очень кстати!' },
  { emoji: '✈️', title: 'Медовый месяц', desc: 'Нас ждёт путешествие мечты — поможете нам добраться туда?' },
  { emoji: '💝', title: 'Просто обнимите нас', desc: 'Ваше присутствие и радость — лучший подарок на свете!' },
];

export default function Index() {
  const [rsvp, setRsvp] = useState({ name: '', guests: '1', attending: 'yes', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-cream)' }}>
      <ConfettiBackground />

      {/* TICKER TAPE */}
      <div
        className="ticker-wrap py-2 relative z-10"
        style={{ background: 'var(--color-rose)', color: 'white' }}
      >
        <div className="animate-ticker inline-flex gap-8 text-sm font-medium" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem' }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-6">
              💍 Алексей &amp; Мария выходят замуж! &nbsp;✨ Только раз в жизни! &nbsp;🌸 Мы ждём именно тебя! &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="relative px-4 pt-16 pb-10 flex flex-col items-center text-center z-10">
        {/* Decorative blobs */}
        <div className="absolute top-10 left-5 w-32 h-32 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'var(--color-rose)', filter: 'blur(40px)' }} />
        <div className="absolute top-20 right-8 w-40 h-40 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'var(--color-mint)', filter: 'blur(50px)' }} />

        <img
          src={HERO_ILLUSTRATION}
          alt="Жених и невеста в детстве"
          className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full animate-float sticker-shadow mb-8"
          style={{ border: '5px solid var(--color-rose)', boxShadow: '6px 6px 0 var(--color-coral)' }}
        />

        <div className="animate-fade-slide-up">
          <p className="text-lg mb-2" style={{ color: 'var(--color-rose)', fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
            Когда-то два малыша выросли и...
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--color-deep)' }}
          >
            Алексей<br />
            <span style={{ color: 'var(--color-rose)' }}>&amp;</span>
            <br />Мария
          </h1>
          <p className="text-2xl mb-8" style={{ fontFamily: 'Caveat, cursive', color: 'var(--color-coral)' }}>
            приглашают тебя на свою свадьбу! 🎉
          </p>
        </div>

        {/* Info cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 w-full max-w-2xl">
          {[
            { icon: 'Calendar', label: 'Дата', value: '6 сентября 2025', emoji: '📅', bg: '#FFF0F5' },
            { icon: 'Clock', label: 'Время', value: '14:00', emoji: '⏰', bg: '#FFF8E7' },
            { icon: 'MapPin', label: 'Место', value: 'Ресторан «Сказка»\nМосква, ул. Весенняя, 12', emoji: '📍', bg: '#F0FFF8' },
          ].map(({ icon, label, value, emoji, bg }) => (
            <div
              key={label}
              className="flex-1 min-w-[140px] max-w-[200px] p-4 rounded-2xl text-center"
              style={{
                background: bg,
                border: '2px solid var(--color-rose)',
                boxShadow: '4px 4px 0 var(--color-rose)',
              }}
            >
              <div className="text-2xl mb-1">{emoji}</div>
              <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--color-rose)' }}>{label}</div>
              <div className="text-sm font-semibold whitespace-pre-line" style={{ color: 'var(--color-deep)' }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Countdown */}
        <div className="w-full max-w-xl">
          <p className="text-center mb-5 text-base" style={{ fontFamily: 'Caveat, cursive', color: 'var(--color-deep)', fontSize: '1.3rem' }}>
            До нашей свадьбы осталось... 🥹
          </p>
          <Countdown />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="text-center text-3xl py-4 tracking-widest opacity-60">
        ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿
      </div>

      {/* GALLERY */}
      <section className="px-4 py-10 max-w-4xl mx-auto z-10 relative">
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--color-deep)' }}
          >
            Мы с самого начала 👶
          </h2>
          <p style={{ fontFamily: 'Caveat, cursive', color: 'var(--color-rose)', fontSize: '1.2rem' }}>
            Посмотри, какими мы были маленькими!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {PLACEHOLDER_PHOTOS.map(({ src, caption, rotate }, i) => (
            <div
              key={i}
              className={`photo-card ${rotate} cursor-pointer`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  border: '3px solid white',
                  boxShadow: '5px 5px 0 var(--color-rose)',
                  background: 'white',
                  padding: '8px 8px 32px 8px',
                }}
              >
                <img
                  src={src}
                  alt={caption}
                  className="w-full h-36 md:h-44 object-cover rounded-xl"
                />
                <p
                  className="text-center mt-2 text-sm"
                  style={{ fontFamily: 'Caveat, cursive', color: 'var(--color-deep)', fontSize: '1rem' }}
                >
                  {caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p
            className="inline-block px-4 py-2 rounded-full text-sm"
            style={{
              background: 'var(--color-peach)',
              color: 'var(--color-deep)',
              fontFamily: 'Caveat, cursive',
              fontSize: '1.05rem',
              border: '2px dashed var(--color-rose)',
            }}
          >
            📸 Здесь будут ваши настоящие детские фото — просто загрузи их!
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="text-center text-3xl py-4 tracking-widest opacity-60">
        ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥
      </div>

      {/* RSVP */}
      <section className="px-4 py-10 max-w-xl mx-auto z-10 relative">
        <div className="text-center mb-8">
          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--color-deep)' }}
          >
            Ты придёшь? 🥺
          </h2>
          <p style={{ fontFamily: 'Caveat, cursive', color: 'var(--color-rose)', fontSize: '1.2rem' }}>
            Пожалуйста, подтверди своё присутствие до 1 августа
          </p>
        </div>

        {submitted ? (
          <div
            className="text-center p-8 rounded-3xl animate-pop-in"
            style={{
              background: 'white',
              border: '3px solid var(--color-mint)',
              boxShadow: '6px 6px 0 var(--color-mint)',
            }}
          >
            <div className="text-6xl mb-4 animate-heart inline-block">💌</div>
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--color-deep)' }}>
              Ура! Мы тебя ждём!
            </h3>
            <p style={{ color: 'var(--color-muted-foreground)', fontFamily: 'Caveat, cursive', fontSize: '1.2rem' }}>
              Спасибо, что подтвердил(а)! Увидимся на свадьбе 🎊
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl p-6 md:p-8"
            style={{
              background: 'white',
              border: '3px solid var(--color-rose)',
              boxShadow: '6px 6px 0 var(--color-rose)',
            }}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: 'var(--color-deep)' }}>
                  Твоё имя *
                </label>
                <input
                  type="text"
                  required
                  value={rsvp.name}
                  onChange={e => setRsvp({ ...rsvp, name: e.target.value })}
                  placeholder="Как тебя зовут?"
                  className="w-full px-4 py-3 rounded-xl outline-none text-sm"
                  style={{
                    border: '2px solid var(--color-rose)',
                    fontFamily: 'Golos Text, sans-serif',
                    color: 'var(--color-deep)',
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: 'var(--color-deep)' }}>
                  Придёшь? *
                </label>
                <div className="flex gap-3">
                  {[
                    { value: 'yes', label: '✅ Да, конечно!' },
                    { value: 'no', label: '😢 Не смогу' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setRsvp({ ...rsvp, attending: opt.value })}
                      className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all btn-fun"
                      style={{
                        background: rsvp.attending === opt.value ? 'var(--color-rose)' : 'var(--color-peach)',
                        color: rsvp.attending === opt.value ? 'white' : 'var(--color-deep)',
                        border: '2px solid var(--color-rose)',
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: 'var(--color-deep)' }}>
                  Количество гостей
                </label>
                <select
                  value={rsvp.guests}
                  onChange={e => setRsvp({ ...rsvp, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl outline-none text-sm"
                  style={{
                    border: '2px solid var(--color-rose)',
                    color: 'var(--color-deep)',
                    background: 'white',
                  }}
                >
                  {['1', '2', '3', '4', '5+'].map(n => (
                    <option key={n} value={n}>{n} {n === '1' ? 'человек' : 'человека'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: 'var(--color-deep)' }}>
                  Пожелание молодожёнам 💌
                </label>
                <textarea
                  rows={3}
                  value={rsvp.message}
                  onChange={e => setRsvp({ ...rsvp, message: e.target.value })}
                  placeholder="Напиши что-нибудь тёплое..."
                  className="w-full px-4 py-3 rounded-xl outline-none text-sm resize-none"
                  style={{
                    border: '2px solid var(--color-rose)',
                    fontFamily: 'Golos Text, sans-serif',
                    color: 'var(--color-deep)',
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-bold text-lg btn-fun"
                style={{
                  background: 'var(--color-rose)',
                  color: 'white',
                  border: '3px solid var(--color-deep)',
                  boxShadow: '4px 4px 0 var(--color-deep)',
                  fontFamily: 'Caveat, cursive',
                  fontSize: '1.3rem',
                }}
              >
                Отправить! 🚀
              </button>
            </div>
          </form>
        )}
      </section>

      {/* DIVIDER */}
      <div className="text-center text-3xl py-4 tracking-widest opacity-60">
        🎁 🎁 🎁 🎁 🎁 🎁 🎁 🎁 🎁
      </div>

      {/* GIFTS */}
      <section className="px-4 py-10 max-w-3xl mx-auto z-10 relative">
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--color-deep)' }}
          >
            Подарки 🎀
          </h2>
          <p style={{ fontFamily: 'Caveat, cursive', color: 'var(--color-rose)', fontSize: '1.2rem' }}>
            Ваше присутствие — уже лучший подарок!<br />Но если хочется что-то подарить...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {GIFTS.map(({ emoji, title, desc }, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl text-center photo-card cursor-default"
              style={{
                background: 'white',
                border: '3px solid var(--color-coral)',
                boxShadow: '5px 5px 0 var(--color-coral)',
              }}
            >
              <div className="text-5xl mb-3 animate-wiggle inline-block" style={{ animationDelay: `${i * 0.3}s` }}>
                {emoji}
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--color-deep)' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 px-4 relative z-10">
        <img
          src={KIDS_ILLUSTRATION}
          alt="Малыши жених и невеста"
          className="w-32 h-32 object-cover rounded-full mx-auto mb-6 sticker-shadow"
          style={{ border: '4px solid var(--color-yellow)', boxShadow: '4px 4px 0 var(--color-coral)' }}
        />
        <p
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--color-deep)' }}
        >
          До встречи на свадьбе!
        </p>
        <p
          className="text-xl mb-6 animate-pulse-soft"
          style={{ fontFamily: 'Caveat, cursive', color: 'var(--color-rose)' }}
        >
          6 сентября 2025 · Ресторан «Сказка» · 14:00 🌸
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="tel:+79001234567"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold btn-fun text-sm"
            style={{
              background: 'white',
              border: '2px solid var(--color-rose)',
              color: 'var(--color-rose)',
              textDecoration: 'none',
            }}
          >
            <Icon name="Phone" size={16} />
            Позвонить
          </a>
          <a
            href="https://t.me/username"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold btn-fun text-sm"
            style={{
              background: 'var(--color-rose)',
              border: '2px solid var(--color-deep)',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <Icon name="MessageCircle" size={16} />
            Telegram
          </a>
        </div>
        <p className="mt-8 text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
          Сделано с любовью ♥
        </p>
      </footer>
    </div>
  );
}
