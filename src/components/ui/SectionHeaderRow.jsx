import { motion } from "framer-motion";

export default function SectionHeaderRow({
  title,
  action,
  actionLabel,
  onAction,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 flex flex-wrap items-end justify-between gap-4 ${className}`}
    >
      <h2 className="font-display text-2xl font-bold uppercase tracking-[0.12em] text-white md:text-3xl">
        {title}
      </h2>
      {actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-accent-cyan"
        >
          {actionLabel}
          <span className="transition-transform group-hover:translate-x-1">
            {action || "->"}
          </span>
        </button>
      )}
    </motion.div>
  );
}
