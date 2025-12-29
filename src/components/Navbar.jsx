import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-950/60 border-b border-slate-800/80 transition-all duration-500
      ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            ChafiChouaib.dev
          </span>
        </a>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-700 px-2 py-1 text-slate-200"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Open menu</span>
          ☰
        </button>

        <div className="hidden md:flex items-center gap-4 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 px-4 py-1.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:brightness-110 transition"
          >
            Hire me
          </a>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800/80 hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
