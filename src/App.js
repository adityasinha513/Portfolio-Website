import { lazy, Suspense, useEffect, useState } from "react";
import "./styles/globals.css";

import Loader from "./components/Loader/Loader";
import StarsBackground from "./components/StarsBackground/StarsBackground";
import SocialSidebar from "./components/SocialSidebar/SocialSidebar";
import MobileDock from "./components/SocialSidebar/MobileDock";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const WhatIDo = lazy(() => import("./components/WhatIDo/WhatIDo"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const TechStack = lazy(() => import("./components/TechStack/TechStack"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));

const LOAD_DURATION = 1350;
const EXIT_START = 1030;

function SectionPlaceholder() {
  return <div className="min-h-[16rem]" aria-hidden />;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), EXIT_START);
    const loadTimer = setTimeout(() => setLoading(false), LOAD_DURATION);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return undefined;

    let frame = 0;
    let latestEvent;

    const move = (e) => {
      latestEvent = e;
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        document.body.style.setProperty("--x", `${latestEvent.clientX}px`);
        document.body.style.setProperty("--y", `${latestEvent.clientY}px`);
        frame = 0;
      });
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  if (loading) {
    return <Loader exiting={exiting} />;
  }

  return (
    <>
      {/* Fixed UI stays outside the animated content wrapper. */}
      <StarsBackground />
      <SocialSidebar />
      <MobileDock />
      <Navbar />

      <div className="app-enter">
        <main className="relative z-[1] pb-20 md:pb-0">
          <Hero />
          <div className="section-glow" />
          <Suspense fallback={<SectionPlaceholder />}>
            <WhatIDo />
          </Suspense>
          <div className="section-glow" />
          <Suspense fallback={<SectionPlaceholder />}>
            <Experience />
          </Suspense>
          <div className="section-glow" />
          <Suspense fallback={<SectionPlaceholder />}>
            <Projects />
          </Suspense>
          <div className="section-glow" />
          <Suspense fallback={<SectionPlaceholder />}>
            <TechStack />
          </Suspense>
          <div className="section-glow" />
          <Suspense fallback={<SectionPlaceholder />}>
            <About />
          </Suspense>
          <div className="section-glow" />
          <Suspense fallback={<SectionPlaceholder />}>
            <Contact />
          </Suspense>
        </main>
      </div>
    </>
  );
}

export default App;
