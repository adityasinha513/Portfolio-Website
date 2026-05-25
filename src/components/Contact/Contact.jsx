import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personalInfo, socialLinks } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative bg-navy pb-28 md:pb-32">
      <div className="glass mx-auto max-w-3xl rounded-[2rem] px-5 py-12 text-center sm:px-8 md:px-16 md:py-16">
        <SectionHeading
          label="Connect"
          title="Let's Build Something"
          subtitle="Open for opportunities, collaborations, and challenging backend problems."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href={socialLinks.email}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
          >
            <FaEnvelope />
            Email Me
          </motion.a>
          <motion.a
            href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-ghost w-full justify-center sm:w-auto"
          >
            <FaPhone />
            {personalInfo.phone}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08 }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-gray-400 hover:border-accent-cyan/40 hover:text-accent-cyan"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </motion.a>
          <motion.a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08 }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-gray-400 hover:border-accent-cyan/40 hover:text-accent-cyan"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </motion.a>
          <motion.a
            href={socialLinks.leetcode}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08 }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-gray-400 hover:border-accent-cyan/40 hover:text-accent-cyan"
            aria-label="LeetCode"
          >
            <SiLeetcode size={18} />
          </motion.a>
          <motion.a
            href={`${process.env.PUBLIC_URL}${personalInfo.resumePath}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            className="btn-ghost text-xs uppercase tracking-[0.12em]"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      <footer className="mt-16 text-center text-xs text-gray-600">
        Designed &amp; built by {personalInfo.name}
      </footer>
    </section>
  );
}
