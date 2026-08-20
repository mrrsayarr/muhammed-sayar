import { motion, MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  personal, about, skills, experiences, educations, technologies,
} from './data/portfolioData'

type Contact = { label: string; href: string; external: boolean }

const contacts: Contact[] = [
  { label: 'mrsayarr@protonmail.com', href: 'mailto:mrsayarr@protonmail.com', external: false },
  { label: 'github.com/mrrsayarr', href: 'https://github.com/mrrsayarr', external: true },
  { label: 'linkedin.com/in/muhammed-sayar', href: 'https://www.linkedin.com/in/muhammed-sayar/', external: true },
  { label: 'instagram.com/mrrsayarr', href: 'https://instagram.com/mrrsayarr', external: true },
]

const row = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

function Prompt({ text }: { text: string }) {
  return (
    <p className="font-mono text-sm text-ink sm:text-[15px]">
      <span className="mr-2 text-accent">$</span>
      {text}
    </p>
  )
}

function SystemBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3 font-mono text-xs text-muted sm:px-6 sm:text-[13px]">
        <span className="tracking-tight">
          <span className="text-accent">sayar@net-hub</span>
          <span>: ~</span>
        </span>
        <span className="hidden sm:inline">istanbul · tr</span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden />
          online
        </span>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
      className="border-b border-line pb-12 sm:pb-16"
    >
      <motion.p variants={row} className="mb-6 font-mono text-sm text-muted">
        <span className="mr-2 text-accent">$</span>
        ~/whoami
        <span
          className="animate-cursor ml-1.5 inline-block h-4 w-2 translate-y-[3px] bg-accent"
          aria-hidden
        />
      </motion.p>

      <motion.h1
        variants={row}
        className="font-mono text-[clamp(2.6rem,10vw,4.9rem)] font-bold leading-[0.95] tracking-tight text-ink"
      >
        MUHAMMED<span className="text-accent">.</span>
        <br />
        SAYAR
      </motion.h1>

      <motion.p variants={row} className="mt-5 max-w-xl font-mono text-base text-muted sm:text-lg">
        sistem &amp; ağ mühendisi
        <span className="text-accent"> · </span>
        siber güvenlik
      </motion.p>

      <motion.p variants={row} className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink/85 sm:text-base">
        {personal.bio}
      </motion.p>

      <motion.div variants={row} className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
        <span className="inline-flex w-fit items-center gap-2.5 border border-line bg-surface px-3 py-1.5 font-mono text-[13px] text-ink">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden />
          aktif iş arayışında
        </span>
        <span className="inline-flex w-fit items-center gap-2.5 border border-line bg-surface px-3 py-1.5 font-mono text-[13px] text-muted">
          <span className="h-2 w-2 rounded-full border border-muted" aria-hidden />
          {personal.location}
        </span>
      </motion.div>
    </motion.section>
  )
}

function Section({ command, children }: { command: string; children: ReactNode }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-70px' }}
      transition={{ staggerChildren: 0.06 }}
      className="mt-14 sm:mt-16"
    >
      <motion.div variants={row} className="mb-3 flex items-baseline gap-3">
        <Prompt text={command} />
        <span className="hidden flex-1 border-b border-dotted border-line sm:block" aria-hidden />
      </motion.div>
      <motion.div variants={row} className="border border-line bg-surface p-5 sm:p-7">
        {children}
      </motion.div>
    </motion.section>
  )
}

function About() {
  return (
    <Section command="cat about.log">
      <div className="space-y-4 text-[15px] leading-relaxed text-ink/85 sm:text-base">
        {about.map((p, i) => (
          <p key={i}>
            <span className="mr-2 select-none font-mono text-accent">›</span>
            {p}
          </p>
        ))}
      </div>
    </Section>
  )
}

function Stack() {
  return (
    <Section command="cat stack.log">
      <ul className="grid grid-cols-2 gap-x-8 gap-y-3 font-mono text-sm sm:grid-cols-3">
        {technologies.map((t) => (
          <li key={t.name} className="flex items-center gap-2.5 text-ink/85">
            <span className={`text-base leading-none ${t.colorClass}`}>▮</span>
            {t.name}
          </li>
        ))}
      </ul>
    </Section>
  )
}
function Skills() {
  return (
    <Section command="ls skills/">
      <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 font-mono text-sm sm:grid-cols-2">
        {skills.map((s) => (
          <li key={s} className="flex items-baseline gap-2.5 text-ink/85">
            <span className="select-none text-accent">▸</span>
            {s}
          </li>
        ))}
      </ul>
    </Section>
  )
}

function LogEntry({
  period,
  title,
  detail,
}: {
  period: string
  title: string
  detail: string
}) {
  return (
    <li className="flex h-full flex-col border-l-2 border-accent bg-paper/50 px-5 py-5">
      <p className="font-mono text-xs text-accent">{period}</p>
      <h3 className="mt-3 font-mono font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{detail}</p>
    </li>
  )
}

function Experience() {
  return (
    <Section command="cat experience.log">
      <ul className="grid gap-4">
        {experiences.map((e) => (
          <LogEntry
            key={e.title}
            period={e.period}
            title={e.title}
            detail={e.description}
          />
        ))}
      </ul>
    </Section>
  )
}

function Education() {
  return (
    <Section command="cat education.log">
      <ul className="grid gap-4">
        {educations.map((e) => (
          <LogEntry
            key={e.school}
            period={e.period}
            title={e.school}
            detail={e.department}
          />
        ))}
      </ul>
    </Section>
  )
}

function Contact() {
  return (
    <Section command="net · iletişim">
      <ul className="font-mono text-sm sm:text-[15px]">
        {contacts.map((c) => (
          <li key={c.label} className="border-b border-line py-3.5 first:pt-0 last:border-b-0 last:pb-0">
            <a
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="group inline-flex items-center gap-3 text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              <span className="w-3 select-none text-accent transition-transform group-hover:translate-x-1">
                ›
              </span>
              {c.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-5 font-mono text-[13px] text-muted">
        <span className="mr-2 text-accent">$</span>
        tüm yollar açık — işbirliği ve görüşlere hazırım.
      </p>
    </Section>
  )
}

function Foot() {
  return (
    <footer className="mt-16 border-t border-line py-8">
      <div className="flex flex-col gap-2 font-mono text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {personal.name}</p>
        <p className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          uptime: aktif çalışıyor
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-paper font-sans text-ink antialiased">
        <SystemBar />
        <main id="main" className="mx-auto max-w-3xl px-5 pb-8 pt-12 sm:px-6 sm:pt-16">
          <Hero />
          <About />
          <Stack />
          <Skills />
          <Experience />
          <Education />
          <Contact />
          <Foot />
        </main>
      </div>
    </MotionConfig>
  )
}