import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { socialLinks, scrollSections } from "../../data/content";
import useActiveSection from "../../hooks/useActiveSection";
import "./SocialSidebar.css";

const sectionNav = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Capabilities" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "tech", label: "Tech Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const socialNav = [
  { Icon: FaGithub, href: socialLinks.github, label: "GitHub" },
  { Icon: FaLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { Icon: SiLeetcode, href: socialLinks.leetcode, label: "LeetCode" },
  { Icon: FaEnvelope, href: socialLinks.email, label: "Email" },
];

export default function SocialSidebar() {
  const active = useActiveSection(scrollSections);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="social-sidebar social-sidebar--enter" aria-label="Page navigation and social links">
      <nav className="social-sidebar__sections" aria-label="Page sections">
        {sectionNav.map((section) => {
          const isActive = active === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollTo(section.id)}
              className={`social-sidebar__section${isActive ? " is-active" : ""}`}
              aria-label={`Go to ${section.label}`}
              aria-current={isActive ? "location" : undefined}
            >
              <span className="social-sidebar__tip">{section.label}</span>
              <span className="social-sidebar__node">
                {isActive && (
                  <motion.span
                    layoutId="sidebar-current"
                    className="social-sidebar__node-active"
                    transition={{ type: "spring", stiffness: 340, damping: 30 }}
                  />
                )}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="social-sidebar__socials" aria-label="Social profiles">
        {socialNav.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            className="social-sidebar__link"
          >
            <Icon />
            <span className="social-sidebar__tip">{label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
