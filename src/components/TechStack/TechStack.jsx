import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DiJava } from "react-icons/di";
import { FaJava, FaCheckCircle } from "react-icons/fa";
import {
  SiSpringboot,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiMicrosoftazure,
  SiGit,
  SiJenkins,
  SiRedis,
  SiSonarqube,
  SiApachemaven,
  SiLinux,
  SiSwagger,
  SiHibernate,
  SiSpringsecurity,
  SiOpenai,
} from "react-icons/si";
import { TbApi, TbLayersLinked, TbKey, TbDatabase, TbSparkles } from "react-icons/tb";
import { techStackFeatured, techStackCategories } from "../../data/content";
import SectionHeaderRow from "../ui/SectionHeaderRow";

const CARD_RADIUS = "rounded-2xl";

const iconMap = {
  java: DiJava,
  springboot: SiSpringboot,
  python: SiPython,
  cplusplus: SiCplusplus,
  javascript: SiJavascript,
  sql: TbDatabase,
  api: TbApi,
  microservices: TbLayersLinked,
  springsecurity: SiSpringsecurity,
  jwt: TbKey,
  hibernate: SiHibernate,
  swagger: SiSwagger,
  junit: FaJava,
  mockito: FaCheckCircle,
  sonar: SiSonarqube,
  react: SiReact,
  typescript: SiTypescript,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  mysql: SiMysql,
  redis: SiRedis,
  docker: SiDocker,
  azure: SiMicrosoftazure,
  git: SiGit,
  jenkins: SiJenkins,
  maven: SiApachemaven,
  linux: SiLinux,
  springai: TbSparkles,
  copilot: SiOpenai,
  chatgpt: SiOpenai,
  claude: TbSparkles,
};

const iconColors = {
  java: "#f89820",
  springboot: "#6db33f",
  python: "#3776ab",
  cplusplus: "#00599c",
  javascript: "#f7df1e",
  sql: "#7df9ff",
  api: "#7df9ff",
  microservices: "#a78bfa",
  springsecurity: "#6db33f",
  jwt: "#fbbf24",
  hibernate: "#59666c",
  swagger: "#85ea2d",
  junit: "#25a162",
  mockito: "#9b59b6",
  sonar: "#4e9bcd",
  react: "#61dafb",
  typescript: "#3178c6",
  postgresql: "#4169e1",
  mongodb: "#47a248",
  mysql: "#00758f",
  redis: "#dc382d",
  docker: "#2496ed",
  azure: "#0078d4",
  git: "#f05032",
  jenkins: "#d24939",
  maven: "#c71d23",
  linux: "#fcc624",
  springai: "#6db33f",
  copilot: "#7df9ff",
  chatgpt: "#10a37f",
  claude: "#a78bfa",
};

function FeaturedChip({ skill }) {
  const Icon = iconMap[skill.icon];
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.03 }}
      className={`flex min-w-[120px] shrink-0 flex-col items-center gap-3 border border-white/[0.08] bg-white/[0.03] px-5 py-5 backdrop-blur-xl transition-all duration-300 hover:border-accent-cyan/35 hover:shadow-[0_0_28px_rgba(125,249,255,0.12)] ${CARD_RADIUS}`}
    >
      <div className="flex h-10 w-10 items-center justify-center">
        {Icon && (
          <Icon size={28} style={{ color: iconColors[skill.icon] }} aria-hidden />
        )}
      </div>
      <span className="text-xs font-medium text-gray-300">{skill.name}</span>
    </motion.div>
  );
}

function TechCard({ skill }) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col items-center border border-white/[0.08] bg-white/[0.03] px-3 py-6 backdrop-blur-xl transition-all duration-300 hover:border-accent-cyan/35 hover:shadow-[0_0_24px_rgba(125,249,255,0.1)] ${CARD_RADIUS}`}
    >
      <motion.div
        animate={{ scale: hovered ? 1.1 : 1 }}
        className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]"
      >
        {Icon && (
          <Icon size={26} style={{ color: iconColors[skill.icon] }} aria-hidden />
        )}
      </motion.div>
      <span className="text-center text-xs font-medium text-gray-300">
        {skill.name}
      </span>
      <AnimatePresence>
        {hovered && skill.tooltip && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-2 left-1/2 z-10 w-max -translate-x-1/2 rounded-xl border border-accent-cyan/20 bg-navy px-2 py-1 text-[10px] text-gray-400"
          >
            {skill.tooltip}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TechStack() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="tech" className="section-padding relative overflow-hidden bg-navy">
      <SectionHeaderRow
        title="Tech Stack"
        actionLabel={showAll ? "Show Less" : "View All Skills"}
        onAction={() => setShowAll((v) => !v)}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-navy to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-navy to-transparent" />

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none md:justify-center md:overflow-visible md:flex-wrap">
          {techStackFeatured.map((skill) => (
            <FeaturedChip key={skill.name} skill={skill} />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-14 space-y-10 overflow-hidden"
          >
            {techStackCategories.map((category) => (
              <div key={category.title}>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent-cyan">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4">
                  {category.skills.map((skill) => (
                    <TechCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
