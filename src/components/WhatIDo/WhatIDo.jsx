import { motion } from "framer-motion";
import { whatIDo } from "../../data/content";
import SectionHeaderRow from "../ui/SectionHeaderRow";

const CARD_RADIUS = "rounded-2xl";

const icons = {
  backend: (
    <svg className="h-8 w-8 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  ai: (
    <svg className="h-8 w-8 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l.259 1.035a3.375 3.375 0 004.68 2.573l1.036-.259a.75.75 0 011.155.67l.259 1.035a3.375 3.375 0 002.573 4.68l1.035.259a.75.75 0 01.67 1.155l-1.035.259a3.375 3.375 0 00-2.573 4.68l-.259 1.035a.75.75 0 01-1.155.67l-1.036-.259a3.375 3.375 0 00-4.68 2.573l-.259 1.035a.75.75 0 01-.67 1.155l.259-1.035a3.375 3.375 0 002.573-4.68l-1.035-.259a.75.75 0 01-.67-1.155l1.036-.259a3.375 3.375 0 004.68-2.573l.259-1.035a.75.75 0 011.155-.67l1.036.259a3.375 3.375 0 002.573-4.68l1.035-.259a.75.75 0 01.67-1.155z" />
    </svg>
  ),
  design: (
    <svg className="h-8 w-8 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25m-9.75 0v9m9.75-9v9m0 0l-5.571 3m5.571-3L21.75 12l-4.179 2.25m0 0l-5.571 3m5.571-3v4.5" />
    </svg>
  ),
  devops: (
    <svg className="h-8 w-8 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhatIDo() {
  return (
    <section id="skills" className="section-padding relative bg-navy">
      <SectionHeaderRow title="What I Do" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
      >
        {whatIDo.map((card) => (
          <motion.article
            key={card.title}
            variants={item}
            whileHover={{ y: -4 }}
            className={`group relative overflow-hidden border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:border-accent-cyan/30 hover:shadow-[0_16px_32px_rgba(0,0,0,0.22)] ${CARD_RADIUS}`}
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div className="relative z-10">
              <div className="icon-glow-box mb-6 shadow-[0_0_28px_rgba(125,249,255,0.12)]">
                {icons[card.icon]}
              </div>
              <h3 className="font-display text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {card.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
