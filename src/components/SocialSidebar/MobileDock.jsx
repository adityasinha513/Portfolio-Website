import { motion } from "framer-motion";
import { FaBriefcase, FaEnvelope, FaHome, FaLayerGroup, FaServer } from "react-icons/fa";
import { scrollSections } from "../../data/content";
import useActiveSection from "../../hooks/useActiveSection";

const items = [
  { id: "home", label: "Home", Icon: FaHome, activeIds: ["home"] },
  { id: "work", label: "Work", Icon: FaBriefcase, activeIds: ["work"] },
  { id: "skills", label: "Skills", Icon: FaLayerGroup, activeIds: ["skills", "tech", "about"] },
  { id: "experience", label: "Career", Icon: FaServer, activeIds: ["experience"] },
  { id: "contact", label: "Contact", Icon: FaEnvelope, activeIds: ["contact"] },
];

export default function MobileDock() {
  const active = useActiveSection(scrollSections);

  return (
    <motion.nav
      initial={{ y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.35, duration: 0.45 }}
      className="fixed bottom-3 left-3 right-3 z-[200] rounded-2xl border border-white/[0.08] bg-navy/90 px-2 py-2 shadow-[0_12px_36px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:hidden"
      aria-label="Page sections"
    >
      <div className="mx-auto flex max-w-md items-center justify-around">
        {items.map(({ id, label, Icon, activeIds }) => {
          const isActive = activeIds.includes(active);

          return (
            <motion.button
              key={id}
              type="button"
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
              aria-label={`Go to ${label}`}
              aria-current={isActive ? "location" : undefined}
              whileTap={{ scale: 0.94 }}
              className={`relative flex h-12 min-w-[56px] flex-col items-center justify-center gap-1 rounded-xl text-[9px] font-medium uppercase tracking-[0.12em] transition-colors ${
                isActive ? "text-accent-cyan" : "text-gray-500"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-current"
                  className="absolute inset-0 rounded-xl border border-accent-cyan/15 bg-accent-cyan/[0.06]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <Icon className="relative text-sm" />
              <span className="relative">{label}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
