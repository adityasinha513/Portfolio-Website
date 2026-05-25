import { useEffect, useState } from "react";

export default function useMouseParallax(intensity = 30) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
        const x = (latestEvent.clientX / window.innerWidth - 0.5) * intensity;
        const y = (latestEvent.clientY / window.innerHeight - 0.5) * intensity;
        setPosition({ x, y });
        frame = 0;
      });
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [intensity]);

  return position;
}
