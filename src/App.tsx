import { useState, useEffect, type ReactNode } from 'react';
import {
  Menu,
  X,
  Monitor,
  Shield,
  Code2,
  Radio,
  Cog,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  GraduationCap,
  ExternalLink,
  Quote,
  Check,
  Building2,
  Newspaper,
} from 'lucide-react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

/* ─── Scroll Animation Wrapper ─── */
function AnimateOnScroll({
  children,
  className = '',
  animation = 'animate-rise',
  delay = '',
}: {
  children: ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
}) {
  const { ref, isVisible } = useScrollAnimation(0.12);
  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `${animation} ${delay}` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}

/* ─── Section Header ─── */
function SectionHeader({
  number,
  label,
  title,
  description,
}: {
  number?: string;
  label?: string;
  title: string;
  description?: string;
}) {
  return (
    <AnimateOnScroll className="mb-16 md:mb-24">
      <div className="flex items-start gap-4 md:gap-8">
        {number && (
          <span className="mt-1 hidden text-xs font-semibold tracking-widest text-muted md:block">
            {number}
          </span>
        )}
        <div className="max-w-2xl">
          {label && (
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {label}
            </span>
          )}
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>
          )}
        </div>
      </div>
    </AnimateOnScroll>
  );
}

/* ─── Data ─── */
const specialties = [
  {
    code: '06120100',
    titleKz: 'Есептеу техникасы және ақпараттық желілер',
    titleRu: 'Вычислительная техника и информационные сети',
    icon: Monitor,
  },
  {
    code: '06120200',
    titleKz: 'Ақпараттық қауіпсіздік жүйелері',
    titleRu: 'Системы информационной безопасности',
    icon: Shield,
  },
  {
    code: '06130100',
    titleKz: 'Бағдарламалық қамтамасыз ету',
    titleRu: 'Программное обеспечение',
    icon: Code2,
  },
  {
    code: '07140900',
    titleKz: 'Радиотехника, электроника және телекоммуникациялар',
    titleRu: 'Радиотехника, электроника и телекоммуникации',
    icon: Radio,
  },
  {
    code: '07151100',
    titleKz: 'Машиналар мен жабдықтарды пайдалану',
    titleRu: 'Эксплуатация машин и оборудования',
    icon: Cog,
  },
];

const reasons = [
  'Стандартты емес тәсіл',
  'Жеке көзқарас',
  'Сұраныс',
  'Қазіргі заманғы технологиялар',
  'Бір команда',
  'Жаһандық перспективалар',
  'Мансап мүмкіндіктері',
  'Тәжірибелік білім',
  'Кәсіби байланыстар',
  'Командалық жұмыс',
  'Инновациялық әдістер',
  'Болашаққа дайындық',
];

const newsItems = [
  {
    category: 'Іс-шара',
    title: 'Ашық есік күні',
    desc: 'Колледже оқу бағдарламалары мен оқытушылармен танысыңыз.',
  },
  {
    category: 'Жаңалық',
    title: 'Жаңа мамандықтар',
    desc: 'Оқу жоспарлары қазіргі жұмыс берушілердің сұраныстарына бейімделген.',
  },
  {
    category: 'Серіктестік',
    title: 'Колледжден кейін университетке',
    desc: 'Қазақстанның жетекші университеттеріне жеңілдетілген шарттармен түсу.',
  },
];

const partners = [
  'KAU', 'ATU', 'KIMEP',
  'NARHOZ', 'SDU', 'ALMAU', 
  'ҚАЗГУ', 'QU', 'CASPIAN', 
  'TURAN', 'MUIT', 'KBTU',
  'KDU', 'METAU', 'IITU'
];

const navLinks = [
  { label: 'Мамандықтар', href: '#specialties' },
  { label: 'Біз туралы', href: '#about' },
  { label: 'Жаңалықтар', href: '#news' },
  { label: 'Партнёры', href: '#partners' },
  { label: 'Байланыс', href: '#contact' },
];

const WHATSAPP_LINK =
  'https://wa.me/77071710800?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB(%D0%B0)%20%D0%B1%D1%8B%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%BF%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8...';

/* ─── Main App ─── */
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowTop(window.scrollY > 700);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      {/* ─── HEADER ─── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-line bg-paper/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-ink bg-ink text-white transition-colors group-hover:bg-accent group-hover:border-accent">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="hidden leading-none sm:block">
              <div className="text-sm font-semibold tracking-tight text-ink">APC</div>
              <div className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-muted">
                Almaty Polytechnic College
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent hover:border-accent sm:inline-flex"
            >
              Жазылу
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-b border-line bg-paper px-6 pb-6 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-line py-3 text-base font-medium text-ink last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 border border-ink bg-ink px-5 py-3 text-sm font-medium text-white"
              >
                Жазылу <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section className="relative flex min-h-screen items-end pb-16 pt-32 md:items-center md:pb-0 md:pt-0">
        <div className="absolute top-0 right-0 h-1/2 w-1/2 bg-[radial-gradient(circle_at_top_right,_#e0e7ff_0%,_transparent_70%)] opacity-60" />
        <div className="absolute bottom-0 left-0 h-1/3 w-1/3 bg-[radial-gradient(circle_at_bottom_left,_#f3f4f6_0%,_transparent_70%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="animate-rise">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                  
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="animate-rise" delay="delay-200">
                <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
                  Өз жетістігіңізді{' '}
                  <span className="text-accent">бағдарламалаңыз</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll animation="animate-rise" delay="delay-400">
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                  Политехникалық колледж — сіздің болашағыңыздың бастауы.
                  Заманауи IT мамандықтары, тәжірибелік білім және жаһандық мүмкіндіктер.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="animate-rise" delay="delay-600">
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#specialties"
                    className="group inline-flex items-center gap-3 border border-ink bg-ink px-8 py-4 text-sm font-medium text-white transition-all hover:bg-accent hover:border-accent"
                  >
                    Мамандықтар
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-4 text-sm font-medium text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent"
                  >
                    Экскурсияға жазылу
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="flex flex-col justify-end lg:col-span-4">
              <AnimateOnScroll animation="animate-drift" delay="delay-500">
                <div className="border border-line bg-white p-6 md:p-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Неге біз?
                  </p>
                  <ul className="space-y-3">
                    {['Тәжірибелік оқыту', 'Вуз-партнёры', 'Заманауи технологиялар', 'Жұмысқа орналастыру'].map(
                      (item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-ink">
                          <Check className="h-4 w-4 shrink-0 text-accent" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          <AnimateOnScroll animation="animate-rise" delay="delay-700">
            <div className="mt-16 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
              {[
                { value: '5', label: 'Мамандық' },
                { value: '24+', label: 'Вуз-партнёр' },
                { value: '1000+', label: 'Студент' },
                { value: '100%', label: 'Практика' },
              ].map((stat) => (
                <div key={stat.label} className="bg-paper p-6 md:p-8">
                  <div className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-widest text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SPECIALTIES ─── */}
      <section id="specialties" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            number="01"
            label="Білім"
            title="Біздің мамандықтар"
            description="Сұранысқа ие техникалық мамандықтар — нарықтың нақты талаптарына негізделген оқу бағдарламалары."
          />

          <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {specialties.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <AnimateOnScroll
                  key={spec.code}
                  animation="animate-rise"
                  delay={`delay-${((i % 3) + 1) * 100}` as string}
                >
                  <div className="group relative h-full bg-paper p-8 transition-colors hover:bg-white md:p-10">
                    <div className="mb-8 flex items-center justify-between">
                      <Icon className="h-7 w-7 text-muted transition-colors group-hover:text-accent" />
                      <span className="text-xs font-semibold tracking-widest text-muted">
                        {spec.code}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold leading-snug text-ink md:text-xl">
                      {spec.titleKz}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{spec.titleRu}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      Толығырақ <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section id="about" className="border-t border-line bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionHeader
                number="02"
                label="Артықшылықтар"
                title="Неге бізді таңдау керек?"
                description="Біз тек білім бермейміз — әр студенттің жеке табыс траекториясын құрамыз."
              />

              <AnimateOnScroll animation="animate-drift" delay="delay-300">
                <blockquote className="mt-12 border-l-2 border-accent pl-6">
                  <Quote className="mb-4 h-6 w-6 text-accent" />
                  <p className="text-lg font-medium leading-relaxed text-ink md:text-xl">
                    Біздің түлектер әлемдік нарықта сұранысқа ие мамандар болады.
                  </p>
                </blockquote>
              </AnimateOnScroll>
            </div>

            <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {reasons.map((reason, i) => (
                <AnimateOnScroll
                  key={reason}
                  animation="animate-rise"
                  delay={`delay-${((i % 2) + 1) * 100}` as string}
                >
                  <div className="flex h-full items-center gap-4 bg-white p-6 transition-colors hover:bg-paper">
                    <span className="text-xs font-semibold text-muted">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-medium text-ink">{reason}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TOUR CTA ─── */}
      <section className="bg-brand py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
            <AnimateOnScroll animation="animate-rise">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                Ашық есік күні
              </p>
              <h2 className="text-balance text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                Біздің колледжді өз көзіңізбен көріңіз
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Біз әрқашан ашықпыз! Колледжді аралап, оқу бағдарламаларымен танысып, оқытушылармен сөйлесуге шақырамыз.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-rise" delay="delay-200">
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-sm font-semibold text-brand transition-all hover:bg-accent hover:text-white"
                >
                  Экскурсияға жазылу
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
                >
                  Байланыс деректері
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── NEWS ─── */}
      <section id="news" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            number="03"
            label="Жаңалықтар"
            title="Колледж өмірі"
            description="Біздің соңғы жаңалықтар, іс-шаралар және маңызды хабарландырулар."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {newsItems.map((news, i) => (
              <AnimateOnScroll
                key={news.title}
                animation="animate-rise"
                delay={`delay-${(i + 1) * 100}` as string}
              >
                <article className="group h-full border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent md:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <Newspaper className="h-5 w-5 text-muted" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-ink">{news.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{news.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                    Толығырақ <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section id="partners" className="border-t border-line bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            number="04"
            label="Партнёрлар"
            title="ЖОО-серіктестері"
            description="«Колледжден кейін - университетке» бағдарламасы бойынша сіз біліміңізді жеңілдікпен жалғастыра аласыз немесе оның мерзімін қысқарта аласыз."
          />
          <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {partners.map((partner, i) => (
              <AnimateOnScroll
                key={partner}
                animation="animate-rise"
                delay={`delay-${((i % 5) + 1) * 100}` as string}
              >
                <div className="flex h-24 items-center justify-center bg-paper px-4 transition-colors hover:bg-white">
                  <Building2 className="mr-2 h-4 w-4 shrink-0 text-muted" />
                  <span className="text-xs font-semibold tracking-wide text-ink">{partner}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <SectionHeader
                number="05"
                label="Байланыс"
                title="Бізді табу оңай"
                description="Сұрақтарыңыз бар ма? Біз әрқашан ашық және сенімді қарым-қатынаста болуға дайынбыз."
              />

              <AnimateOnScroll animation="animate-rise" delay="delay-300">
                <div className="mt-12 space-y-6">
                  <div className="flex items-start gap-5 border-b border-line pb-6">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-muted">Мекен-жай</p>
                      <p className="mt-1 text-base text-ink">г. Алматы, Казахстан</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 border-b border-line pb-6">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-muted">Телефон</p>
                      <a href="tel:+77071710800" className="mt-1 block text-base text-ink hover:text-accent">
                        +7 707 171 08 00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-muted">Email</p>
                      <a href="mailto:info@almatypolytech.edu.kz" className="mt-1 block text-base text-ink hover:text-accent">
                        info@almatypolytech.edu.kz
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-7">
              <AnimateOnScroll animation="animate-rise" delay="delay-400">
                <div className="aspect-[4/3] w-full border border-line bg-slate-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186055.7383866577!2d76.7410112!3d43.2178912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cbab%3A0x3d446a5a49c3875!2sAlmaty%2C%20Kazakhstan!5e0!3m2!1sen!2skz!4v1700000000000!5m2!1sen!2skz"
                    className="h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Almaty Polytechnic College Map"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-line bg-ink py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-white text-ink">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Almaty Polytechnic College</div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-white/50">
                    Болашақты баста
                  </div>
                </div>
              </div>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
                Біздің мақсатымыз — әр студентке сапалы техникалық білім беру және оларды
                жаһандық нарықта сұранысқа ие маман етіп дайындау.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Навигация
              </h4>
              <ul className="space-y-3">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-white/80 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Байланыс
              </h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>г. Алматы, Казахстан</li>
                <li>
                  <a href="tel:+77071710800" className="hover:text-white">
                    +7 707 171 08 00
                  </a>
                </li>
                <li>
                  <a href="mailto:info@almatypolytech.edu.kz" className="hover:text-white">
                    info@almatypolytech.edu.kz
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Almaty Polytechnic College. Барлық құқықтар қорғалған.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'YouTube', 'Telegram'].map((social) => (
                <a key={social} href="#" className="text-xs text-white/60 transition-colors hover:text-white">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ─── SCROLL TO TOP ─── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center border border-line bg-paper text-ink shadow-sm transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white ${
          showTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  );
}
