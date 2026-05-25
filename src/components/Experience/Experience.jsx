import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceTimeline } from "../../data/content";
import ExperienceWorkspace from "./ExperienceWorkspace";

const CARD_RADIUS = "rounded-2xl";

const contentVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 24 : -24,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -24 : 24,
  }),
};

function TimelineCard({ item, isSelected, onClick }) {
  return (
    <motion.button
      layout
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      whileHover={{ scale: 1.015, x: 2 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full border px-4 py-4 text-left transition-all duration-500 md:px-5 ${CARD_RADIUS} ${
        isSelected
          ? "border-accent-cyan/50 bg-accent-cyan/5 shadow-[0_0_28px_rgba(125,249,255,0.18)]"
          : "border-white/[0.08] bg-white/[0.03] hover:border-accent-cyan/25"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <p
          className={`text-sm font-semibold ${
            isSelected ? "text-accent-cyan" : "text-white"
          }`}
        >
          {item.year}
        </p>
        {item.status && (
          <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-300">
            {item.status}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-gray-300">{item.role}</p>
      {item.company && (
        <p className="mt-1 text-xs font-medium text-accent-purple">
          {item.company} | {item.location}
        </p>
      )}
    </motion.button>
  );
}

export default function Experience() {
  const [selectedId, setSelectedId] = useState(experienceTimeline[0].id);
  const [direction, setDirection] = useState(0);

  const selectedIndex = experienceTimeline.findIndex((e) => e.id === selectedId);
  const active = experienceTimeline[selectedIndex] || experienceTimeline[0];

  const selectEntry = (id) => {
    const nextIndex = experienceTimeline.findIndex((e) => e.id === id);
    setDirection(nextIndex > selectedIndex ? 1 : -1);
    setSelectedId(id);
  };

  return (
    <section id="experience" className="section-padding relative bg-navy">
      <div className="mb-12">
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-accent-cyan">
          Career
        </span>
        <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-[0.1em] text-white md:text-3xl">
          Experience
        </h2>
        <p className="mt-3 max-w-xl text-base text-gray-400">
          Enterprise banking systems, agile delivery, and production-grade backend engineering.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        layout
        className={`overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl ${CARD_RADIUS} p-5 sm:p-6 md:p-10`}
      >
        <div className="flex flex-col gap-8 xl:grid xl:grid-cols-[minmax(220px,0.92fr)_1.9fr_minmax(250px,1fr)] xl:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-3 hidden h-full min-h-[280px] xl:order-1 xl:block"
          >
            <ExperienceWorkspace />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="order-2 relative xl:border-x xl:border-white/[0.06] xl:px-10"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 xl:hidden">
              Role Details
            </p>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-xl font-bold text-accent-cyan sm:text-2xl md:text-3xl">
                    {active.company}
                  </span>
                  {active.status && (
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                      {active.status}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {active.role}
                </h3>
                <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-400 md:text-base">
                  <span>{active.domain}</span>
                  <span className="text-white/20">|</span>
                  <span>{active.location}</span>
                  <span className="text-white/20">|</span>
                  <span>{active.year}</span>
                </p>

                <ul className="mt-7 space-y-4">
                  {active.bullets.map((bullet, i) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.06 }}
                      className="flex gap-3 text-sm leading-relaxed text-gray-300 md:text-[15px]"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple shadow-[0_0_8px_rgba(125,249,255,0.5)]" />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  layout
                  className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5"
                >
                  {active.tech.map((technology, index) => (
                    <motion.span
                      key={technology}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 + index * 0.035 }}
                      className="rounded-full border border-accent-cyan/15 bg-accent-cyan/[0.06] px-3 py-1.5 text-[11px] font-medium text-gray-300"
                    >
                      {technology}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="order-1 flex flex-col xl:order-3">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Timeline
            </p>

            <div className="relative flex gap-3 overflow-x-auto pb-2 scrollbar-none md:grid md:grid-cols-3 md:overflow-visible md:pb-0 xl:flex xl:flex-col xl:gap-0">
              {experienceTimeline.map((item, i) => (
                <div key={item.id} className="relative flex min-w-[250px] gap-4 md:min-w-0">
                  <div className="hidden flex-col items-center pt-5 xl:flex">
                    <motion.div
                      animate={{
                        scale: selectedId === item.id ? 1.2 : 1,
                        boxShadow:
                          selectedId === item.id
                            ? "0 0 20px rgba(125,249,255,0.55)"
                            : "0 0 0px rgba(125,249,255,0)",
                      }}
                      className={`h-4 w-4 shrink-0 rounded-full border-2 transition-colors duration-500 ${
                        selectedId === item.id
                          ? "border-accent-cyan bg-accent-cyan"
                          : "border-white/20 bg-navy"
                      }`}
                    />
                    {i < experienceTimeline.length - 1 && (
                      <div className="my-2 w-px flex-1 min-h-[24px] bg-gradient-to-b from-accent-cyan/50 to-white/10 md:min-h-[16px]" />
                    )}
                  </div>
                  <div className="flex-1 xl:pb-4">
                    <TimelineCard
                      item={item}
                      isSelected={selectedId === item.id}
                      onClick={() => selectEntry(item.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
