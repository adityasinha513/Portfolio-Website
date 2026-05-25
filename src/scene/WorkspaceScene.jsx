import { memo, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { consoleFloatingTech } from "../data/content";

const SYNTAX = {
  endpoint: "#7df9ff",
  keyword: "#b68cff",
  value: "#34d399",
  string: "#facc6b",
  muted: "rgba(148, 163, 184, 0.58)",
  plain: "#dce7f7",
};

const token = (text, color = SYNTAX.plain) => ({ text, color });
const line = (...tokens) => ({ tokens, delay: 78 });
const command = (...tokens) => ({ tokens, typed: true, delay: 34, after: 280 });
const waitLine = (delay, ...tokens) => ({ tokens, delay });

const STORY_STEPS = [
  {
    id: "profile",
    latency: "18 ms",
    lines: [
      command(token("> ", SYNTAX.value), token("GET ", SYNTAX.keyword), token("/api/profile", SYNTAX.endpoint)),
      waitLine(430, token("Fetching profile...", SYNTAX.muted)),
      waitLine(150, token("HTTP/1.1 ", SYNTAX.muted), token("200 OK", SYNTAX.value)),
      line(token("{")),
      line(token('  "name"', SYNTAX.keyword), token(": "), token('"Aditya Sinha"', SYNTAX.string), token(",")),
      line(token('  "role"', SYNTAX.keyword), token(": "), token('"System Engineer"', SYNTAX.string), token(",")),
      line(token('  "specialization"', SYNTAX.keyword), token(": "), token('"Java Backend Engineering"', SYNTAX.string), token(",")),
      line(token('  "company"', SYNTAX.keyword), token(": "), token('"Infosys"', SYNTAX.string), token(",")),
      line(token('  "skills"', SYNTAX.keyword), token(": [")),
      line(token('    "Java", "Spring Boot", "REST APIs",', SYNTAX.string)),
      line(token('    "Docker", "CI/CD"', SYNTAX.string)),
      line(token("  ]")),
      line(token("}")),
    ],
  },
  {
    id: "focus",
    latency: "11 ms",
    lines: [
      command(token("> ", SYNTAX.value), token("GET ", SYNTAX.keyword), token("/api/current-focus", SYNTAX.endpoint)),
      waitLine(360, token("Resolving focus...", SYNTAX.muted)),
      line(token("HTTP/1.1 ", SYNTAX.muted), token("200 OK", SYNTAX.value)),
      line(token("{")),
      line(token('  "learning"', SYNTAX.keyword), token(": "), token('"System Design"', SYNTAX.string), token(",")),
      line(token('  "building"', SYNTAX.keyword), token(": "), token('"Scalable Backend Systems"', SYNTAX.string), token(",")),
      line(token('  "interest"', SYNTAX.keyword), token(": "), token('"DevOps + AI"', SYNTAX.value)),
      line(token("}")),
    ],
  },
];

const TAG_SLOTS = [
  { left: "2%", top: "6%", color: "#7df9ff", drift: 0.68 },
  { right: "2%", top: "7%", color: "#b68cff", drift: 0.6 },
  { left: "0%", top: "25%", color: "#38bdf8", drift: 0.8 },
  { right: "0%", top: "27%", color: "#60a5fa", drift: 0.72 },
  { left: "1%", top: "69%", color: "#34d399", drift: 0.62 },
  { right: "1%", top: "68%", color: "#fb7185", drift: 0.74 },
  { left: "7%", top: "88%", color: "#34d399", drift: 0.56 },
  { right: "5%", top: "87%", color: "#b68cff", drift: 0.66 },
];

function buildPartialTokens(tokens, characterCount) {
  const result = [];
  let remaining = characterCount;

  for (const currentToken of tokens) {
    if (remaining <= 0) break;
    result.push({
      ...currentToken,
      text: currentToken.text.slice(0, remaining),
    });
    remaining -= currentToken.text.length;
  }

  return result;
}

function TypedStory({ step, onFinished }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    setLineIndex(0);
    setCharacterIndex(0);
    setDisplayedLines([]);
  }, [step.id]);

  useEffect(() => {
    const activeLine = step.lines[lineIndex];

    if (!activeLine) {
      const pause = setTimeout(onFinished, 2300);
      return () => clearTimeout(pause);
    }

    const text = activeLine.tokens.map((currentToken) => currentToken.text).join("");
    const typing = activeLine.typed && characterIndex < text.length;
    const delay = typing ? activeLine.delay : activeLine.typed ? activeLine.after : activeLine.delay;
    const timer = setTimeout(() => {
      setDisplayedLines((previousLines) => {
        const nextLines = [...previousLines];
        nextLines[lineIndex] = typing
          ? buildPartialTokens(activeLine.tokens, characterIndex + 1)
          : activeLine.tokens;
        return nextLines;
      });

      if (!typing) {
        setLineIndex((currentLine) => currentLine + 1);
        setCharacterIndex(0);
      } else {
        setCharacterIndex((currentCharacter) => currentCharacter + 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [characterIndex, lineIndex, onFinished, step.lines]);

  return (
    <div style={{ minHeight: "250px" }}>
      {displayedLines.map((displayedLine, index) => (
        <div key={`${step.id}-${index}`} style={{ display: "flex", lineHeight: "1.75", whiteSpace: "pre" }}>
          <span
            style={{
              width: "30px",
              marginRight: "18px",
              textAlign: "right",
              flexShrink: 0,
              color: "rgba(100, 120, 150, 0.42)",
              userSelect: "none",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>
            {displayedLine.map((currentToken, tokenIndex) => (
              <span key={`${step.id}-${index}-${tokenIndex}`} style={{ color: currentToken.color }}>
                {currentToken.text}
              </span>
            ))}
            {index === displayedLines.length - 1 && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.72, repeat: Infinity }}
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "14px",
                  marginLeft: "3px",
                  verticalAlign: "middle",
                  background: SYNTAX.endpoint,
                  boxShadow: "0 0 10px #7df9ff",
                }}
              />
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

const BackendConsole = memo(function BackendConsole() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = STORY_STEPS[stepIndex];

  const advanceStory = useCallback(() => {
    setStepIndex((currentStep) => (currentStep + 1) % STORY_STEPS.length);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "18px",
        border: "1px solid rgba(125,249,255,0.18)",
        background: "linear-gradient(145deg, rgba(6,10,28,0.94), rgba(7,12,31,0.84))",
        backdropFilter: "blur(25px)",
        boxShadow:
          "0 0 0 1px rgba(125,249,255,0.05), 0 28px 90px rgba(0,0,0,0.62), 0 0 70px rgba(62,43,205,0.14), inset 0 1px 0 rgba(255,255,255,0.07)",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        fontSize: "clamp(10.5px, 1.1vw, 12px)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.55,
          backgroundImage:
            "linear-gradient(rgba(125,249,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(125,249,255,0.02) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "13px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.018)",
        }}
      >
        {["#f87171", "#fbbf24", "#34d399"].map((color) => (
          <span
            key={color}
            style={{
              width: "10px",
              height: "10px",
              display: "inline-block",
              borderRadius: "50%",
              background: color,
              boxShadow: `0 0 7px ${color}`,
            }}
          />
        ))}
        <span style={{ marginLeft: "12px", color: "#dce7f7", fontSize: "10px", letterSpacing: "0.16em" }}>
          BACKEND SESSION
        </span>
        <span style={{ flex: 1 }} />
        <motion.span
          key={step.id}
          initial={{ opacity: 0, x: 5 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ color: SYNTAX.endpoint, fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em" }}
        >
          LIVE
        </motion.span>
      </div>

      <div style={{ position: "relative", padding: "17px 18px 12px 7px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32 }}
          >
            <TypedStory step={step} onFinished={advanceStory} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "15px",
          padding: "9px 16px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.22)",
          letterSpacing: "0.12em",
          fontSize: "9.5px",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "7px", color: SYNTAX.value }}>
          <motion.span
            animate={{ opacity: [1, 0.3, 1], scale: [1, 0.85, 1] }}
            transition={{ duration: 1.45, repeat: Infinity }}
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              display: "inline-block",
              background: SYNTAX.value,
              boxShadow: "0 0 10px #34d399",
            }}
          />
          BUILD PASSING
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={step.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ color: "rgba(148,163,184,0.6)" }}
          >
            REQ {String(stepIndex + 1).padStart(3, "0")}/002 | {step.latency}
          </motion.span>
        </AnimatePresence>
        <span style={{ marginLeft: "auto", color: "rgba(148,163,184,0.58)" }}>SPRING | PROD</span>
      </div>
    </motion.div>
  );
});

function FloatTag({ label, slot, index, parallaxX, parallaxY }) {
  const { color, drift, ...position } = slot;

  return (
    <motion.div
      className="hidden lg:block"
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: parallaxX * drift,
        y: parallaxY * drift,
      }}
      transition={{
        opacity: { delay: 0.18 + index * 0.08, duration: 0.4 },
        scale: { delay: 0.18 + index * 0.08, duration: 0.45, ease: "backOut" },
        x: { type: "spring", stiffness: 135, damping: 22 },
        y: { type: "spring", stiffness: 135, damping: 22 },
      }}
      style={{
        position: "absolute",
        ...position,
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3.6 + index * 0.22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.15,
        }}
        style={{
          padding: "8px 13px",
          border: `1px solid ${color}33`,
          borderRadius: "10px",
          background: "rgba(6,10,28,0.76)",
          backdropFilter: "blur(14px)",
          boxShadow: `0 0 25px ${color}18, inset 0 1px 0 rgba(255,255,255,0.06)`,
          color,
          fontSize: "10.5px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          fontFamily: "'JetBrains Mono', monospace",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

const GridBackground = memo(function GridBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(125,249,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(125,249,255,0.035) 1px, transparent 1px)",
        backgroundSize: "46px 46px",
        maskImage: "radial-gradient(ellipse 82% 82% at 50% 50%, black 28%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 82% 82% at 50% 50%, black 28%, transparent 100%)",
      }}
    />
  );
});

export default function WorkspaceScene({ parallaxX = 0, parallaxY = 0 }) {
  const [showTags, setShowTags] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setShowTags(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div
      className="relative w-full select-none"
      style={{ minHeight: "clamp(440px, 45vw, 560px)", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <GridBackground />

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(ellipse 72% 62% at ${50 + parallaxX * 0.34}% ${48 + parallaxY * 0.25}%, rgba(125,249,255,0.11), rgba(91,53,215,0.08) 40%, transparent 72%)`,
          transition: "background 0.2s ease-out",
        }}
      />

      {showTags && consoleFloatingTech.map((label, index) => (
        <FloatTag
          key={label}
          label={label}
          slot={TAG_SLOTS[index]}
          index={index}
          parallaxX={parallaxX}
          parallaxY={parallaxY}
        />
      ))}

      <motion.div
        style={{
          width: "100%",
          maxWidth: "540px",
          position: "relative",
          zIndex: 5,
          transform: `translate(${parallaxX * 0.36}px, ${parallaxY * 0.28}px)`,
          transition: "transform 0.14s ease-out",
        }}
      >
        <BackendConsole />
      </motion.div>
    </div>
  );
}
