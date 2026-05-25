import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import WorkspaceScene from "../../scene/WorkspaceScene";
import useMouseParallax from "../../hooks/useMouseParallax";
import { floatingTech, socialLinks, personalInfo } from "../../data/content";

const CARD_RADIUS = "rounded-2xl";

const cardPositions = [
  "top-[10%] left-[6%]",
  "top-[14%] right-[2%]",
  "bottom-[18%] left-[2%]",
  "bottom-[14%] right-[6%]",
  "top-[46%] right-[-4%]",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  }),
};

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute right-[-5%] top-[20%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(125,249,255,0.12)_0%,transparent_65%)] blur-3xl" />
      <div className="absolute left-[10%] top-[10%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.1)_0%,transparent_65%)] blur-3xl" />
      <div className="absolute bottom-[15%] left-1/2 h-[320px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(125,249,255,0.06)_0%,transparent_70%)] blur-2xl" />
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent-cyan/40"
          style={{
            left: `${8 + (i * 5.2) % 88}%`,
            top: `${12 + (i * 7.3) % 76}%`,
          }}
          animate={{ opacity: [0.15, 0.55, 0.15], y: [0, -20 - (i % 3) * 8, 0] }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function HeroVisual() {
  const { x, y } = useMouseParallax(22);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 order-2 mt-12 w-full max-md:max-w-full sm:mt-16 lg:mt-0 lg:w-[56%]"
    >
      <div
        className="relative mx-auto min-h-[450px] max-w-[680px] sm:aspect-square sm:min-h-0"
        style={{ transform: `translate(${x}px, ${y}px)` }}
      >
        <div className="relative h-full w-full">
          <WorkspaceScene parallaxX={x} parallaxY={y} />

          {floatingTech.map((label, i) => (
            <motion.div
              key={label}
              className={`glass absolute ${cardPositions[i]} z-20 ${CARD_RADIUS} border-white/[0.1] px-4 py-3 text-xs font-semibold text-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl md:px-5 md:py-3.5 md:text-sm`}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4.5 + i * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.25,
              }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 32px rgba(125,249,255,0.28)",
                borderColor: "rgba(125,249,255,0.35)",
              }}
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const goToProjects = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-[6%] pt-28 pb-28 max-md:pb-32 md:pt-28 lg:flex-row lg:items-center lg:gap-10 xl:gap-12 xl:pb-28"
    >
      <HeroBackground />

      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative z-10 order-1 w-full shrink-0 lg:w-[44%]"
      >
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-5 text-xl font-medium tracking-wide text-accent-cyan md:text-2xl"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display font-bold leading-[0.88] tracking-[-0.045em] text-white"
          style={{ fontSize: "clamp(4rem, 11vw, 8.5rem)" }}
        >
          ADITYA
          <br />
          <span className="gradient-text">SINHA</span>
        </motion.h1>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className={`glass mt-10 inline-flex items-center ${CARD_RADIUS} border-accent-cyan/10 px-7 py-3.5 shadow-[0_0_32px_rgba(125,249,255,0.06)]`}
        >
          <span className="mr-3 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-200 md:text-sm">
            Backend Engineer &amp; Problem Solver
          </span>
        </motion.div>

        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 max-w-xl text-lg leading-[1.75] text-gray-400 md:text-[1.35rem]"
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-wrap gap-5"
        >
          <motion.button
            type="button"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 28px rgba(125,249,255,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={goToProjects}
            className={`btn-dark ${CARD_RADIUS}`}
          >
            Explore My Work
            <FaArrowRight className="text-accent-cyan" size={12} />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{
              scale: 1.04,
              borderColor: "rgba(125,249,255,0.5)",
              boxShadow: "0 0 28px rgba(125,249,255,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open(socialLinks.github, "_blank")}
            className={`btn-ghost text-xs uppercase tracking-[0.14em] ${CARD_RADIUS}`}
          >
            <FaGithub className="text-lg" />
            View GitHub
          </motion.button>
        </motion.div>
      </motion.div>

      <HeroVisual />

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        onClick={goToProjects}
        className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-gray-500 transition-colors hover:text-accent-cyan lg:flex"
        aria-label="Scroll to explore projects"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.28em]">
          Scroll to Explore
        </span>
        <motion.div
          className="flex h-12 w-6 items-start justify-center rounded-full border border-white/10 p-1.5"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          <motion.div
            className="h-2 w-1 rounded-full bg-accent-cyan"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.button>
    </section>
  );
}
