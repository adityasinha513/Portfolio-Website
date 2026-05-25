import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projects } from "../../data/content";
import SectionHeaderRow from "../ui/SectionHeaderRow";
import ProjectPreview from "./ProjectPreviews";

const CARD_RADIUS = "rounded-2xl";

function ProjectCard({ project }) {
  return (
    <Tilt
      tiltMaxAngleX={3}
      tiltMaxAngleY={3}
      scale={1.01}
      transitionSpeed={1000}
      glareEnable
      glareMaxOpacity={0.04}
      glareColor="#7df9ff"
      className="h-full"
    >
      <article
        className={`group flex h-full flex-col overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-accent-cyan/35 hover:shadow-[0_18px_42px_rgba(0,0,0,0.26)] ${CARD_RADIUS}`}
      >
        <div className={`relative m-4 overflow-hidden ${CARD_RADIUS}`}>
          <div className="h-52 overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.03] md:h-56">
            <ProjectPreview type={project.preview} />
          </div>
        </div>

        <div className="flex flex-1 flex-col px-6 pb-6">
          <h3 className="font-display text-lg font-semibold text-white">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="flex h-10 items-center gap-2 rounded-xl border border-white/10 px-4 text-xs font-medium uppercase tracking-[0.12em] text-gray-400 transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
            >
              <FaGithub size={16} />
              Source
            </a>
            {project.demo !== project.github && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="flex h-10 items-center gap-2 rounded-xl border border-white/10 px-4 text-xs font-medium uppercase tracking-[0.12em] text-gray-400 transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
              >
                Demo
                <FaExternalLinkAlt size={12} />
              </a>
            )}
          </div>
        </div>
      </article>
    </Tilt>
  );
}

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  };

  return (
    <section id="work" className="section-padding relative bg-navy">
      <SectionHeaderRow title="Featured Projects" />

      <div className="relative mx-auto max-w-5xl">
        <div className="overflow-hidden md:px-8">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-lg"
            >
              <ProjectCard project={projects[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous project"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-gray-300 backdrop-blur-xl transition-all hover:border-accent-cyan/40 hover:text-accent-cyan"
          >
            <FaChevronLeft />
          </button>
          <div className="flex justify-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-accent-cyan shadow-[0_0_12px_rgba(125,249,255,0.6)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next project"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-gray-300 backdrop-blur-xl transition-all hover:border-accent-cyan/40 hover:text-accent-cyan"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
