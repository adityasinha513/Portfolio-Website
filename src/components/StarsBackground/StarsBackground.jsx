import { memo, useMemo } from "react";
import "./StarsBackground.css";

function StarsBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 44 }, (_, index) => ({
        id: index,
        left: `${(index * 37.7) % 100}%`,
        top: `${(index * 19.3 + 7) % 100}%`,
        delay: `${(index % 9) * 0.34}s`,
        duration: `${3.2 + (index % 6) * 0.55}s`,
      })),
    []
  );

  return (
    <div className="stars-field" aria-hidden>
      {stars.map((star) => (
        <span
          key={star.id}
          className="ambient-star"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}

export default memo(StarsBackground);
