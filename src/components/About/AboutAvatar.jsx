import { motion } from "framer-motion";

export default function AboutAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center"
    >
      <motion.div
        className="absolute h-[280px] w-[280px] rounded-full border border-accent-cyan/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(125,249,255,0.15)_0%,transparent_70%)] blur-2xl" />

      <div className="relative z-10 w-full max-w-[300px] rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl">
        <div className="relative mx-auto flex w-[180px] flex-col items-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-accent-cyan/30 bg-gradient-to-br from-[#1a2235] to-[#0a1028] shadow-[0_0_32px_rgba(125,249,255,0.15)]">
            <div className="absolute inset-x-4 top-6 h-14 rounded-full bg-gradient-to-b from-[#2d3548] to-[#1a2030]" />
            <div className="absolute bottom-4 left-1/2 h-16 w-20 -translate-x-1/2 rounded-t-3xl bg-gradient-to-b from-accent-cyan/20 to-[#141c2b]" />
          </div>

          <div className="relative mt-6 w-full rounded-xl border border-white/[0.06] bg-[#070d18] p-3">
            <div className="mb-2 flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
            </div>
            <div className="space-y-1 font-mono text-[7px] text-gray-500">
              <p className="text-accent-cyan">{"// building impact"}</p>
              <p>engineer.solve();</p>
            </div>
            <motion.div
              className="absolute -right-3 -top-3 h-8 w-8 rounded-lg border border-accent-purple/30 bg-accent-purple/20 shadow-[0_0_16px_rgba(167,139,250,0.3)]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          <div className="mt-2 h-2 w-[85%] rounded-b-lg bg-[#1a2235]" />
        </div>
      </div>
    </motion.div>
  );
}
