import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navigation = [
  { href: '#work', label: 'Work' },
  { href: '#strengths', label: 'What I Ship' },
  { href: '#about', label: 'Background' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(241,232,220,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
          <a href="#top" className="min-w-0">
            <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-[#7c6655] [font-family:var(--font-mono)]">
              Phoenix / Hardware · Mobile · Web
            </span>
            <span className="mt-2 block text-[1.08rem] leading-none font-semibold tracking-[-0.05em] text-[#11110f] sm:text-[1.16rem]">
              James <span className="text-[#d64d1c]">Coppinger</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#584b3f] [font-family:var(--font-mono)] md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:text-[#11110f]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://github.com/JJCopp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#11110f] px-5 py-3 text-sm font-semibold text-[#f4eadb] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Open GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center border border-black/10 bg-white/70 text-[#11110f] transition-colors duration-200 hover:border-[#11110f] md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#11110f]/45 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm transform flex-col bg-[#11110f] px-6 py-6 text-[#f4eadb] shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.3em] text-[#ff9a72] [font-family:var(--font-mono)]">
              Navigate
            </p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.04em]">
              James Coppinger
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/10 text-[#f4eadb] transition-colors duration-200 hover:border-[#ff7a45] hover:text-[#ff7a45]"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-2 py-8">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border border-white/10 px-4 py-4 text-lg font-medium transition-colors duration-200 hover:border-[#ff7a45] hover:text-[#ff7a45]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://github.com/JJCopp"
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsOpen(false)}
          className="inline-flex items-center justify-center gap-2 bg-[#ff7a45] px-5 py-3 text-sm font-semibold text-[#11110f]"
        >
          Open GitHub
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </aside>
    </>
  )
}
