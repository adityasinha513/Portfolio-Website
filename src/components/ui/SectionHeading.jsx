import { motion } from "framer-motion";

export default function SectionHeading({ label, title, subtitle, align = "left" }) {
  const alignClass =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 flex max-w-3xl flex-col ${alignClass}`}
    >
      {label && (
        <span className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-cyan">
          {label}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
}
