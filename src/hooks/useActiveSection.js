import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observed = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0 }
    );

    const observeMountedSections = () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element && !observed.has(element)) {
          observed.add(element);
          observer.observe(element);
        }
      });
    };

    observeMountedSections();
    const mountObserver = new MutationObserver(observeMountedSections);
    mountObserver.observe(document.getElementById("root"), { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mountObserver.disconnect();
    };
  }, [sectionIds]);

  return active;
}
