import { motion } from "framer-motion";
import useMouseParallax from "../../hooks/useMouseParallax";

const RADIUS = "rounded-2xl";

export default function ExperienceWorkspace() {
  const { x, y } = useMouseParallax(10);

  return (
    <motion.div
      className={`relative h-full min-h-[320px] overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl ${RADIUS} shadow-[0_0_40px_rgba(125,249,255,0.08)]`}
      style={{ transform: `translate(${x * 0.5}px, ${y * 0.5}px)` }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(125,249,255,0.12)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-40 w-40 rounded-full bg-accent-purple/15 blur-3xl" />

      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-accent-cyan/50"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 4) * 18}%`,
          }}
          animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -12, 0] }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.25,
          }}
        />
      ))}

      <div className="relative flex h-full flex-col justify-end p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(125,249,255,0.8)]" />
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent-cyan">
            Workstation
          </span>
        </div>

        <div className={`relative ${RADIUS} border border-white/[0.06] bg-[#070d18] p-4`}>
          <div className="absolute -top-8 left-6 h-16 w-28 rounded-full bg-accent-cyan/20 blur-2xl" />

          <div className="relative mx-auto max-w-[220px]">
            <div
              className={`${RADIUS} border border-white/10 bg-[#0c1220] p-3 shadow-[0_0_24px_rgba(125,249,255,0.1)]`}
              style={{ transform: "perspective(600px) rotateX(8deg)" }}
            >
              <div className="mb-2 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              </div>
              <div className="space-y-1 font-mono text-[8px] leading-relaxed">
                <p className="text-accent-cyan">@Service BankingAPI</p>
                <p className="text-gray-500">public class TransferService</p>
                <p className="text-accent-purple">@Valid TransferDto dto</p>
                <p className="text-emerald-400">return repository.save();</p>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple"
                  animate={{ width: ["30%", "85%", "30%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </div>

            <div className="mx-auto mt-1 h-2 w-[90%] rounded-b-lg bg-[#1a2235]" />
          </div>

          <div
            className={`absolute bottom-3 left-3 h-8 w-8 ${RADIUS} border border-white/10 bg-[#141c2b]`}
          />
          <div
            className={`absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center ${RADIUS} border border-accent-cyan/20 bg-accent-cyan/10`}
          >
            <div className="h-5 w-5 rounded-full border-2 border-accent-cyan/40" />
          </div>

          <div className="mt-6 h-2 w-full rounded-full bg-gradient-to-r from-[#0f1419] via-[#1a2235] to-[#0f1419]" />
        </div>

        <p className="mt-4 text-center font-display text-sm font-semibold text-white">
          Aditya Sinha
        </p>
        <p className="text-center text-xs text-gray-500">Backend Engineer</p>
      </div>
    </motion.div>
  );
}
