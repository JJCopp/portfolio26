import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  Cpu,
  Github,
  Globe,
  type LucideIcon,
  MapPin,
  Smartphone,
  Sparkles,
  Wrench,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

type HeroLink = {
  href: string
  label: string
  external?: boolean
}

type Strength = {
  title: string
  description: string
  proof: string
  icon: LucideIcon
}

type VisualTone = 'paper' | 'ink' | 'accent'

type VisualMockup = {
  eyebrow: string
  title: string
  detail: string
  caption: string
  metric: string
  tone: VisualTone
}

type Subproject = {
  title: string
  category: string
  summary: string
  outcome: string
}

type CaseLink = {
  href: string
  label: string
  external?: boolean
}

type FeaturedCase = {
  id: 'pooldrop' | 'studio' | 'daicel'
  title: string
  label: string
  thesis: string
  role: string
  context: string
  problem: string
  constraints: string[]
  approach: string[]
  outcomes: string[]
  stack: string[]
  visuals: VisualMockup[]
  links: CaseLink[]
  subprojects?: Subproject[]
  icon: LucideIcon
  surface: 'ink' | 'paper'
}

type ContactLink = {
  href: string
  label: string
  note: string
  external?: boolean
}

const heroContent = {
  eyebrow: 'Phoenix, AZ — Available for new work',
  headline: 'Hardware, mobile, and web —',
  headlineAccent: 'built with real-world instincts.',
  body:
    'I build across mechanical, hardware, mobile, and web — products and systems that feel resolved on the surface and stay calm under the integrations, state, and edge cases that usually break them.',
  links: [
    { href: '#work', label: 'See flagship work' },
    {
      href: 'https://github.com/JJCopp',
      label: 'GitHub',
      external: true,
    },
  ] satisfies HeroLink[],
  marquee: [
    'React',
    'React Native',
    'Expo',
    'TypeScript',
    'Astro',
    'Cloudflare',
    'Stripe',
    'TanStack',
    'Robotics',
    'CAD / SolidWorks',
    'Mechanical design',
    'Prototyping',
    'Embedded systems',
    'Automation',
  ],
}

const strengths: Strength[] = [
  {
    title: 'Interfaces that explain themselves',
    description:
      'I care about message hierarchy, better first reads, and flows that feel obvious before they feel clever.',
    proof:
      'Most visible in the studio case, where clarity has to carry business value fast.',
    icon: Code2,
  },
  {
    title: 'Mobile flows with real technical edges',
    description:
      'Authentication, payments, camera behavior, native configuration, and release-minded structure all need to work together.',
    proof: 'PoolDrop is the strongest proof that I can handle that full stack of product difficulty.',
    icon: Smartphone,
  },
  {
    title: 'Systems thinking under pressure',
    description:
      'Manufacturing and automation work trained me to look for weak handoffs, failure modes, and hidden fragility early.',
    proof: 'Daicel is the case that explains why I am less casual about reliability than most portfolio sites sound.',
    icon: Cpu,
  },
  {
    title: 'Lean stacks that still ship cleanly',
    description:
      'React, React Native, Astro, TypeScript, and Cloudflare when the goal is a sharp outcome without excess weight.',
    proof: 'I prefer delivery stacks that are fast to build, easy to maintain, and credible after launch.',
    icon: Cloud,
  },
]

const featuredCases: FeaturedCase[] = [
  {
    id: 'pooldrop',
    title: 'PoolDrop',
    label: '01 / Mobile product',
    thesis:
      'A mobile case study about making the ugly parts of product work feel disciplined instead of improvised.',
    role: 'Product engineering, interface design, and implementation structure',
    context:
      'PoolDrop is a cross-platform Expo app where the value is not just visual polish. The product has to hold together across onboarding, camera capture, payment logic, notifications, and release-safe configuration.',
    problem:
      'A lot of portfolio apps stay clean by skipping the engineering edges that make real mobile work difficult. This one needed to feel calm on the surface while carrying the integrations and state complexity underneath.',
    constraints: [
      'Auth, camera, and payment flows all introduce fragile states if the architecture is loose.',
      'Native behavior has to stay credible across iOS and Android instead of working only in happy-path demos.',
      'The system should look launchable, not like a prototype with one polished screen.',
    ],
    approach: [
      'Structured the work around product flows rather than isolated component demos.',
      'Used Expo, Clerk, Stripe, TanStack Query, and secure storage in a way that supports real mobile delivery.',
      'Kept the interface clean where trust matters most: account state, transaction moments, and image-driven steps.',
    ],
    outcomes: [
      'Shows end-to-end product execution where UI taste and integration-heavy implementation both matter.',
      'Demonstrates that I can build around real mobile constraints without letting the experience feel technical.',
      'Acts as the clearest proof for teams that need a product engineer, not just a screen designer.',
    ],
    stack: [
      'Expo',
      'React Native',
      'TypeScript',
      'Clerk',
      'Stripe',
      'TanStack Query',
    ],
    visuals: [
      {
        eyebrow: 'Flow system',
        title: 'Account and scheduling surface',
        detail:
          'A cleaner service-selection and account-entry experience built to keep the first action obvious.',
        caption: 'Trust starts before checkout.',
        metric: 'Auth + scheduling',
        tone: 'paper',
      },
      {
        eyebrow: 'State complexity',
        title: 'Payment and status layers',
        detail:
          'Transaction steps, service state, and confirmation messaging are designed to stay legible under pressure.',
        caption: 'Money flows need calm UX.',
        metric: 'Payments + state',
        tone: 'accent',
      },
      {
        eyebrow: 'Native reality',
        title: 'Camera and device behavior',
        detail:
          'Mobile capture flows, secure storage, and release configuration treated as core product work, not afterthoughts.',
        caption: 'Native edges are part of the product.',
        metric: 'Camera + runtime',
        tone: 'ink',
      },
    ],
    links: [
      {
        href: 'https://github.com/JJCopp',
        label: 'See GitHub profile',
        external: true,
      },
    ],
    icon: Smartphone,
    surface: 'ink',
  },
  {
    id: 'studio',
    title: 'Web Dev Studio',
    label: '02 / Business-facing web',
    thesis:
      'One flagship case that rolls up the landing-page and service-site work into a sharper studio story with actual business intent.',
    role: 'Positioning, information architecture, visual direction, and front-end delivery',
    context:
      'Instead of scattering several similar landing pages across the portfolio, this case reframes them as one body of work: focused websites for businesses that need more trust, better explanation, and cleaner conversion paths.',
    problem:
      'A pile of landing pages reads like output. A studio case needs to show a repeatable method: understand the offer fast, simplify the message, create trust, and remove hesitation before the inquiry moment.',
    constraints: [
      'Service-business sites need to explain the offer quickly without flattening the brand.',
      'Pages have to convert without bloating the build or turning into design-system wallpaper.',
      'The case study needs enough range to prove method without diluting the portfolio into too many small projects.',
    ],
    approach: [
      'Merged the best site and landing-page work into one studio case with a consistent thesis.',
      'Used sharper positioning, stronger section sequencing, and clearer offer framing to turn design into business leverage.',
      'Kept the stack lean with Astro and Cloudflare-oriented delivery so the work remains maintainable after launch.',
    ],
    outcomes: [
      'Presents the service-business work as a real specialty instead of a collection of unrelated pages.',
      'Shows a repeatable operating model for trust, conversion, and message hierarchy.',
      'Balances freelance-client appeal with enough design and systems thinking to stay credible for hiring teams.',
    ],
    stack: ['Astro', 'TypeScript', 'Tailwind/CSS', 'Cloudflare Pages', 'SEO'],
    visuals: [
      {
        eyebrow: 'Studio trailer',
        title: 'Offer-first landing structure',
        detail:
          'Big headline, sharp offer framing, and section pacing built to reduce bounce and make inquiry feel low friction.',
        caption: 'Clarity is the design feature.',
        metric: 'Messaging + trust',
        tone: 'accent',
      },
      {
        eyebrow: 'Content architecture',
        title: 'Service business page system',
        detail:
          'Service pages, FAQ, local reassurance, and contact flow designed as one conversion system instead of disconnected pages.',
        caption: 'Every section has a job.',
        metric: 'IA + conversion',
        tone: 'paper',
      },
      {
        eyebrow: 'Delivery',
        title: 'Lean production stack',
        detail:
          'Fast front ends, simple hosting, and maintenance-friendly structure that business owners can actually live with.',
        caption: 'Clean build, cleaner handoff.',
        metric: 'Astro + Cloudflare',
        tone: 'ink',
      },
    ],
    links: [
      {
        href: 'https://github.com/JJCopp',
        label: 'Explore GitHub work',
        external: true,
      },
    ],
    subprojects: [
      {
        title: 'Mobile Vet Phoenix',
        category: 'Trust-focused service site',
        summary:
          'Production Astro website built around reassurance, SEO structure, and a calmer path to inquiry.',
        outcome:
          'Shows how a business site can feel premium without burying the offer under decorative noise.',
      },
      {
        title: 'Phoenix Golf Simulators',
        category: 'Lead-generation landing page',
        summary:
          'Offer-driven landing page that explains the service quickly and keeps packages and FAQs working toward contact.',
        outcome:
          'Proves I can design for action, not just aesthetics.',
      },
      {
        title: 'Studio operating model',
        category: 'Positioning system',
        summary:
          'A reusable way of building business-facing websites around message hierarchy, proof, trust, and low-friction calls to action.',
        outcome:
          'Turns several standalone pages into one clearer studio capability.',
      },
    ],
    icon: Sparkles,
    surface: 'paper',
  },
  {
    id: 'daicel',
    title: 'Daicel',
    label: '03 / Manufacturing systems',
    thesis:
      'The manufacturing case that explains why my software work is more disciplined about reliability, handoffs, and system failure.',
    role: 'Engineering contributor shaped by manufacturing, automation, and process reality',
    context:
      'My time around Daicel and adjacent manufacturing environments mattered because the feedback loop was different. Ambiguity, weak documentation, and sloppy execution stop being abstract when throughput, reliability, and safety are involved.',
    problem:
      'Many portfolios talk about rigor, but the language stays vague. The manufacturing case provides the missing origin story: I learned to value process clarity because confusing systems create real downstream cost.',
    constraints: [
      'Engineering decisions had to survive actual operators, actual process limits, and real handoffs.',
      'Reliability mattered more than presentation, which changes how you evaluate a design choice.',
      'The work rewarded clearer documentation, stronger system logic, and less tolerance for hidden fragility.',
    ],
    approach: [
      'Worked from constraints outward rather than polishing the surface first.',
      'Paid attention to process clarity, repeatability, and where a system could fail under normal use.',
      'Carried that mindset into product engineering, where the best interface is backed by a system that stays calm when conditions are imperfect.',
    ],
    outcomes: [
      'Creates a credible bridge between hardware-minded systems thinking and front-end/product work.',
      'Explains why I naturally bias toward cleaner flows, better states, and fewer fragile assumptions.',
      'Adds a dimension most portfolios cannot claim: engineering taste formed outside software-only environments.',
    ],
    stack: ['Systems thinking', 'Process rigor', 'Documentation', 'Reliability', 'Automation mindset'],
    visuals: [
      {
        eyebrow: 'Process view',
        title: 'Constraint mapping',
        detail:
          'A manufacturing-style read on system behavior: inputs, handoffs, risk points, and where ambiguity starts to hurt.',
        caption: 'Good systems are explicit.',
        metric: 'Inputs + outputs',
        tone: 'ink',
      },
      {
        eyebrow: 'Operational clarity',
        title: 'Repeatable handoff logic',
        detail:
          'Cleaner communication and documentation framing that makes process knowledge more durable.',
        caption: 'Handoffs deserve design too.',
        metric: 'Process + documentation',
        tone: 'paper',
      },
      {
        eyebrow: 'Translation to product',
        title: 'Failure-aware software thinking',
        detail:
          'The reason my software work cares so much about edge states, confidence, and the parts most people leave fuzzy.',
        caption: 'Rigor is a design input.',
        metric: 'Reliability mindset',
        tone: 'accent',
      },
    ],
    links: [
      {
        href: 'https://github.com/JJCopp',
        label: 'View broader work',
        external: true,
      },
    ],
    icon: Wrench,
    surface: 'paper',
  },
]

const contactLinks: ContactLink[] = [
  {
    href: 'https://github.com/JJCopp',
    label: 'GitHub / JJCopp',
    note: 'The cleanest live reference point right now.',
    external: true,
  },
  {
    href: '#work',
    label: 'Return to flagship work',
    note: 'Jump back into the three strongest proof points.',
  },
]

const backgroundPoints = [
  'B.S. in Robotics Engineering from Arizona State University.',
  'Time in the electrical makerspace building comfort with prototyping, constraints, and hands-on problem solving.',
  'Experience around manufacturing, automation, automotive, and energetic-material environments where sloppiness gets exposed quickly.',
  'Now focused on products and business-facing web work that need clearer structure and better execution.',
]

const caseTheme = {
  ink: {
    shell:
      'border-white/10 bg-[#111111] text-[#f6eede] shadow-[0_28px_90px_rgba(17,17,17,0.26)]',
    label: 'text-[#ff7a45]',
    muted: 'text-[#d9cdb9]',
    border: 'border-white/10',
    panel: 'border-white/10 bg-white/[0.06]',
    chip: 'border-white/[0.12] bg-white/[0.06] text-[#f1e6d4]',
    button:
      'border-white/[0.14] bg-white/[0.06] text-[#f6eede] hover:border-white/[0.24] hover:bg-white/10',
  },
  paper: {
    shell:
      'border-black/10 bg-white/[0.66] text-[#12110f] shadow-[0_28px_80px_rgba(17,17,17,0.10)]',
    label: 'text-[#d64d1c]',
    muted: 'text-[#5c5248]',
    border: 'border-black/10',
    panel: 'border-black/10 bg-[#f4ede4]',
    chip: 'border-black/10 bg-white/[0.76] text-[#433931]',
    button:
      'border-black/10 bg-white/[0.76] text-[#12110f] hover:border-[#12110f] hover:bg-white',
  },
} as const

const visualToneClasses: Record<
  VisualTone,
  {
    shell: string
    text: string
    accent: string
    line: string
  }
> = {
  paper: {
    shell: 'border-black/10 bg-[#f7efe4]',
    text: 'text-[#1d1a16]',
    accent: 'bg-[#12110f]',
    line: 'bg-black/10',
  },
  ink: {
    shell: 'border-white/10 bg-[#171513]',
    text: 'text-[#f6ede0]',
    accent: 'bg-[#ff7a45]',
    line: 'bg-white/10',
  },
  accent: {
    shell: 'border-[#f16f3e]/30 bg-[linear-gradient(180deg,#ff7a45_0%,#e55b2b_100%)]',
    text: 'text-[#1b110d]',
    accent: 'bg-[#12110f]',
    line: 'bg-black/[0.14]',
  },
}

function App() {
  const [expandedCases, setExpandedCases] = useState<Record<FeaturedCase['id'], boolean>>({
    pooldrop: true,
    studio: false,
    daicel: false,
  })

  const toggleCase = (id: FeaturedCase['id']) => {
    setExpandedCases((current) => ({
      ...current,
      [id]: !current[id],
    }))
  }

  return (
    <main id="top" className="overflow-x-hidden pb-20">
      <section className="relative px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="hero-status-dot" aria-hidden="true" />
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#5c5142] [font-family:var(--font-mono)]">
              {heroContent.eyebrow}
            </p>
          </div>

          <h1 className="display mt-8 text-[3.4rem] font-semibold text-[#0e0e0c] sm:text-[5rem] lg:text-[6.4rem] xl:text-[7.6rem]">
            <span className="block">{heroContent.headline}</span>
            <span className="block text-[#0e0e0c]/55">
              {heroContent.headlineAccent}
            </span>
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <p className="max-w-2xl text-lg leading-[1.55] text-[#3d342b] sm:text-xl">
              {heroContent.body}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {heroContent.links.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className={
                    index === 0
                      ? 'group inline-flex items-center gap-2 rounded-full bg-[#0e0e0c] px-7 py-4 text-[0.95rem] font-semibold text-white shadow-[0_8px_24px_rgba(14,14,12,0.18)] transition-all duration-200 hover:bg-[#1d1c19] hover:shadow-[0_10px_28px_rgba(14,14,12,0.24)]'
                      : 'group inline-flex items-center gap-2 rounded-full border border-[#0e0e0c]/25 bg-white/60 px-7 py-4 text-[0.95rem] font-semibold text-[#0e0e0c] transition-all duration-200 hover:border-[#0e0e0c] hover:bg-white'
                  }
                >
                  {link.label}
                  {link.external ? (
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  ) : (
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <div className="flex items-center gap-6 border-t border-black/10 pt-6">
              <p className="shrink-0 text-[0.66rem] font-medium uppercase tracking-[0.3em] text-[#7c6c5b] [font-family:var(--font-mono)]">
                Working with
              </p>
              <div className="hero-marquee flex-1 overflow-hidden">
                <div className="hero-marquee-track flex w-max items-center gap-10 text-[1.05rem] font-medium tracking-tight text-[#43382d]">
                  {[...heroContent.marquee, ...heroContent.marquee].map((item, i) => (
                    <span key={`${item}-${i}`} className="flex items-center gap-10">
                      <span>{item}</span>
                      <span className="h-1 w-1 rounded-full bg-[#0e0e0c]/30" aria-hidden="true" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#7a6554] [font-family:var(--font-mono)]">
                Flagship work
              </p>
              <h2 className="mt-4 text-4xl leading-[0.92] tracking-[-0.06em] text-[#11110f] [font-family:var(--font-display)] sm:text-5xl lg:text-[3.6rem]">
                Three proof points, each carrying a different kind of credibility.
              </h2>
            </div>
            <p className="text-base leading-7 text-[#56493d]">
              PoolDrop proves product execution, the studio case proves business-facing web judgment, and Daicel explains the systems rigor underneath both.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {featuredCases.map((featuredCase, index) => {
              const theme = caseTheme[featuredCase.surface]
              const Icon = featuredCase.icon
              const isExpanded = expandedCases[featuredCase.id]

              return (
                <article
                  key={featuredCase.id}
                  className={`relative overflow-hidden border p-6 lg:p-8 ${theme.shell}`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,77,28,0.92),transparent)]" />

                  <div className="grid gap-8 xl:grid-cols-[220px_minmax(0,1fr)] xl:items-start">
                    <div className="flex h-full flex-col justify-between gap-6">
                      <div>
                        <p className={`text-[0.72rem] font-semibold uppercase tracking-[0.28em] [font-family:var(--font-mono)] ${theme.label}`}>
                          {featuredCase.label}
                        </p>
                        <div className={`mt-5 inline-flex h-14 w-14 items-center justify-center border ${theme.border} ${featuredCase.surface === 'ink' ? 'bg-white/[0.06] text-[#ff7a45]' : 'bg-[#11110f] text-[#f4eadb]'}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      <div className={`border p-4 ${theme.panel}`}>
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] [font-family:var(--font-mono)]">
                          Positioning
                        </p>
                        <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>
                          {featuredCase.thesis}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
                        <div>
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                              <h3 className="max-w-3xl text-[2.6rem] leading-[0.9] font-semibold tracking-[-0.065em] [font-family:var(--font-display)] sm:text-[3.35rem]">
                                {featuredCase.title}
                              </h3>
                              <p className={`mt-4 max-w-3xl text-base leading-7 ${theme.muted}`}>
                                {featuredCase.context}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className={`border p-4 ${theme.panel}`}>
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] [font-family:var(--font-mono)]">
                            Role
                          </p>
                          <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>{featuredCase.role}</p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        {featuredCase.visuals.map((visual) => {
                          const tone = visualToneClasses[visual.tone]

                          return (
                            <div
                              key={visual.title}
                              className={`relative overflow-hidden border p-4 shadow-[0_18px_36px_rgba(17,17,17,0.08)] ${tone.shell} ${tone.text}`}
                            >
                              <div className="flex items-center justify-between gap-4">
                                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] [font-family:var(--font-mono)]">
                                  {visual.eyebrow}
                                </p>
                                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] [font-family:var(--font-mono)]">
                                  {visual.metric}
                                </span>
                              </div>

                              <div className="mt-5 space-y-2">
                                <div className={`h-2 w-20 ${tone.accent}`} />
                                <div className={`h-2 w-full ${tone.line}`} />
                                <div className={`h-2 w-[82%] ${tone.line}`} />
                                <div className={`h-2 w-[56%] ${tone.line}`} />
                              </div>

                              <h4 className="mt-6 text-2xl leading-tight font-semibold tracking-[-0.05em] [font-family:var(--font-display)]">
                                {visual.title}
                              </h4>
                              <p className="mt-3 text-sm leading-6 opacity-90">{visual.detail}</p>
                              <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] opacity-72 [font-family:var(--font-mono)]">
                                {visual.caption}
                              </p>
                            </div>
                          )
                        })}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {featuredCase.stack.map((item) => (
                          <span
                            key={item}
                            className={`border px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] ${theme.chip}`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`${featuredCase.id}-details`}
                        onClick={() => toggleCase(featuredCase.id)}
                        className={`inline-flex items-center gap-3 border px-4 py-3 text-sm font-semibold transition-all duration-200 ${theme.button}`}
                      >
                        {isExpanded ? 'Collapse case study' : 'Open case study'}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </button>

                      {isExpanded ? (
                        <div
                          id={`${featuredCase.id}-details`}
                          className="grid gap-6 border-t pt-6 motion-safe:animate-[fade-up_420ms_ease-out] lg:grid-cols-[minmax(0,1.25fr)_320px]"
                        >
                          <div className="space-y-6">
                            <div>
                              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] [font-family:var(--font-mono)]">
                                Problem
                              </p>
                              <p className={`mt-3 max-w-3xl text-base leading-7 ${theme.muted}`}>
                                {featuredCase.problem}
                              </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                              <div className={`border p-5 ${theme.panel}`}>
                                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] [font-family:var(--font-mono)]">
                                  Constraints
                                </p>
                                <div className="mt-4 space-y-3">
                                  {featuredCase.constraints.map((item) => (
                                    <div key={item} className={`flex gap-3 text-sm leading-6 ${theme.muted}`}>
                                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d64d1c]" />
                                      <p>{item}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className={`border p-5 ${theme.panel}`}>
                                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] [font-family:var(--font-mono)]">
                                  Approach
                                </p>
                                <div className="mt-4 space-y-3">
                                  {featuredCase.approach.map((item) => (
                                    <div key={item} className={`flex gap-3 text-sm leading-6 ${theme.muted}`}>
                                      <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-[#d64d1c]" />
                                      <p>{item}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {featuredCase.subprojects ? (
                              <div className="grid gap-4 md:grid-cols-3">
                                {featuredCase.subprojects.map((project) => (
                                  <div
                                    key={project.title}
                                    className={`border p-5 shadow-[0_18px_40px_rgba(17,17,17,0.08)] ${theme.panel}`}
                                  >
                                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#d64d1c] [font-family:var(--font-mono)]">
                                      {project.category}
                                    </p>
                                    <h4 className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.05em] [font-family:var(--font-display)]">
                                      {project.title}
                                    </h4>
                                    <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>
                                      {project.summary}
                                    </p>
                                    <p className={`mt-4 text-sm leading-6 ${theme.muted}`}>
                                      {project.outcome}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </div>

                          <aside className="space-y-4">
                            <div className={`border p-5 ${theme.panel}`}>
                              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] [font-family:var(--font-mono)]">
                                Outcome / proof
                              </p>
                              <div className="mt-4 space-y-3">
                                {featuredCase.outcomes.map((item) => (
                                  <div key={item} className={`flex gap-3 text-sm leading-6 ${theme.muted}`}>
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d64d1c]" />
                                    <p>{item}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className={`border p-5 ${theme.panel}`}>
                              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] [font-family:var(--font-mono)]">
                                Links
                              </p>
                              <div className="mt-4 flex flex-col gap-3">
                                {featuredCase.links.map((link) => (
                                  <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.external ? '_blank' : undefined}
                                    rel={link.external ? 'noreferrer' : undefined}
                                    className={`inline-flex items-center justify-between gap-3 border px-4 py-3 text-sm font-semibold transition-colors ${theme.button}`}
                                  >
                                    {link.label}
                                    <ArrowUpRight className="h-4 w-4" />
                                  </a>
                                ))}
                              </div>
                            </div>

                            <div className={`border p-5 ${theme.panel}`}>
                              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] [font-family:var(--font-mono)]">
                                Case signal
                              </p>
                              <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>
                                0{index + 1} is here to make one argument quickly: {featuredCase.thesis.toLowerCase()}
                              </p>
                            </div>
                          </aside>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="strengths" className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="border border-black/10 bg-[#11110f] p-8 text-[#f4eadb] shadow-[0_28px_90px_rgba(17,17,17,0.18)] lg:p-10">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#ff9a72] [font-family:var(--font-mono)]">
                What I ship
              </p>
              <h2 className="mt-4 text-4xl leading-[0.92] tracking-[-0.06em] [font-family:var(--font-display)] sm:text-5xl">
                Stronger first reads, calmer systems, and front ends that feel intentional instead of assembled.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#dbcbb8]">
                These are the operating modes that actually show up across the work: clearer messaging, tougher systems, leaner delivery, and less tolerance for fragile thinking.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {strengths.map((strength) => {
                const Icon = strength.icon

                return (
                  <div
                    key={strength.title}
                    className="border border-black/10 bg-white/72 p-6 shadow-[0_20px_60px_rgba(17,17,17,0.08)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="max-w-[12rem] text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#866f60] [font-family:var(--font-mono)]">
                        Operating mode
                      </p>
                      <div className="flex h-11 w-11 items-center justify-center border border-black/10 bg-[#11110f] text-[#ff7a45]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="mt-5 text-[2rem] leading-[0.94] font-semibold tracking-[-0.055em] text-[#11110f] [font-family:var(--font-display)]">
                      {strength.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#4f4439]">{strength.description}</p>
                    <p className="mt-4 text-sm leading-7 text-[#735f50]">{strength.proof}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.12fr)_340px] lg:items-start">
            <div className="border border-black/10 bg-white/70 p-8 shadow-[0_24px_70px_rgba(17,17,17,0.08)] lg:p-10">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#866f60] [font-family:var(--font-mono)]">
                Background
              </p>
              <h2 className="mt-4 max-w-4xl text-4xl leading-[0.92] tracking-[-0.06em] text-[#11110f] [font-family:var(--font-display)] sm:text-5xl">
                My value in software comes from not starting in software alone.
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <p className="text-base leading-8 text-[#4f4439]">
                  I studied robotics engineering at Arizona State University and spent time in the electrical makerspace, which made building feel concrete early. I like work where ideas have to survive translation into something useful and reliable.
                </p>
                <p className="text-base leading-8 text-[#4f4439]">
                  Manufacturing, automation, automotive, and energetic-material contexts pushed that instinct further. The result is a product-engineering style that cares about hierarchy, system behavior, and whether the polished surface still holds when the easy assumptions disappear.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="border border-black/10 bg-[#11110f] p-6 text-[#f4eadb] shadow-[0_24px_70px_rgba(17,17,17,0.18)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#ff9a72] [font-family:var(--font-mono)]">
                  Snapshot
                </p>
                <div className="mt-5 space-y-4">
                  {backgroundPoints.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-[#dccdb9]">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ff7a45]" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-black/10 bg-[#efe3d4] p-6 shadow-[0_18px_48px_rgba(17,17,17,0.08)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#866f60] [font-family:var(--font-mono)]">
                  Best fit
                </p>
                <div className="mt-5 space-y-4 text-sm leading-6 text-[#4f4439]">
                  <div className="flex gap-3">
                    <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-[#d64d1c]" />
                    <p>Teams that need a product engineer who can handle mobile complexity without making the UX feel technical.</p>
                  </div>
                  <div className="flex gap-3">
                    <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[#d64d1c]" />
                    <p>Businesses that need their website to explain the offer better and convert with more confidence.</p>
                  </div>
                  <div className="flex gap-3">
                    <Cpu className="mt-0.5 h-5 w-5 shrink-0 text-[#d64d1c]" />
                    <p>Products where systems thinking, cleaner states, and stronger execution matter as much as the visuals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pt-16 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-7xl overflow-hidden border border-black/10 bg-[#11110f] px-8 py-10 text-[#f4eadb] shadow-[0_32px_100px_rgba(17,17,17,0.22)] lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#ff9a72] [font-family:var(--font-mono)]">
                Contact
              </p>
              <h2 className="mt-4 max-w-4xl text-4xl leading-[0.92] tracking-[-0.06em] [font-family:var(--font-display)] sm:text-5xl lg:text-[3.6rem]">
                If you need sharper product judgment, cleaner execution, or a better digital first impression, start here.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#dacbb8]">
                GitHub is the clearest live reference point today. It is the fastest way to see the work in motion and the right place to start if the direction here feels like a fit.
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="flex items-center justify-between gap-4 border border-white/10 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-[#f4eadb] transition-colors duration-200 hover:border-white/[0.18] hover:bg-white/10"
                >
                  <span className="flex min-w-0 flex-col">
                    <span>{link.label}</span>
                    <span className="mt-1 text-xs font-medium tracking-normal text-[#cfbfa9]">
                      {link.note}
                    </span>
                  </span>
                  {link.external ? (
                    <Github className="h-4 w-4 shrink-0 text-[#ff7a45]" />
                  ) : (
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#ff7a45]" />
                  )}
                </a>
              ))}

              <div className="border border-white/10 bg-white/[0.06] p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#ff9a72] [font-family:var(--font-mono)]">
                  Location
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#f4eadb]">
                  <MapPin className="h-4 w-4 text-[#ff7a45]" />
                  Phoenix, Arizona
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
