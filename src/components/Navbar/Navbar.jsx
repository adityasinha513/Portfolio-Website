import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
import { navLinks, personalInfo } from "../../data/content";
import useActiveSection from "../../hooks/useActiveSection";
import useScrolled from "../../hooks/useScrolled";

const NAV_SECTION_IDS = navLinks.map((link) => link.id);

export default function Navbar() {
  const scrolled = useScrolled();
  const active = useActiveSection(NAV_SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const openResume = () =>
    window.open(`${process.env.PUBLIC_URL}${personalInfo.resumePath}`, "_blank");

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 top-0 z-[999] flex h-[72px] w-full items-center justify-between px-[6%] transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.06] bg-navy/80 shadow-glass backdrop-blur-2xl"
            : "border-b border-transparent bg-navy/30 backdrop-blur-md"
        }`}
      >
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-2xl font-bold tracking-tight text-white"
          aria-label="Scroll to top"
        >
          AS<span className="text-accent-cyan">.</span>
        </button>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className={`relative flex items-center gap-2 py-1 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                active === link.id ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-dot"
                  className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(125,249,255,0.8)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={openResume}
            className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-accent-cyan/40 hover:shadow-[0_0_20px_rgba(125,249,255,0.15)] sm:inline-flex"
          >
            <FaDownload className="text-accent-cyan" size={12} />
            Resume
          </motion.button>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-white md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[998] bg-navy/80 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed right-0 top-0 z-[999] flex h-full w-[min(300px,85vw)] flex-col border-l border-white/[0.08] bg-navy/95 px-8 pb-10 pt-24 backdrop-blur-2xl md:hidden"
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className={`flex items-center gap-3 text-left text-sm font-medium uppercase tracking-[0.16em] ${
                      active === link.id ? "text-accent-cyan" : "text-gray-300"
                    }`}
                  >
                    {active === link.id && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                    )}
                    {link.label}
                  </button>
                ))}
              </nav>
              <button
                type="button"
                onClick={() => {
                  openResume();
                  setMenuOpen(false);
                }}
                className="btn-dark mt-10 w-full justify-center"
              >
                <FaDownload className="text-accent-cyan" size={12} />
                Resume
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
