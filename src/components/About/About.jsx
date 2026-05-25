import { motion } from "framer-motion";
import { aboutStats, personalInfo } from "../../data/content";

const TRAITS = [
  { icon: "API", label: "Systems Thinker" },
  { icon: "SEC", label: "Security First" },
  { icon: "AI", label: "AI Explorer" },
  { icon: "CI", label: "Reliable Delivery" },
];

const WHAT_I_DO = [
  {
    title: "Backend Engineering",
    desc: "Spring Boot microservices, REST APIs, and JPA/Hibernate built for production with transactional consistency and fault tolerance.",
    accent: "#7df9ff",
    icon: "/>",
  },
  {
    title: "Financial Systems",
    desc: "ACID-compliant payment workflows, KYC pipelines, fraud detection, and role-based access in high-stakes fintech environments.",
    accent: "#a78bfa",
    icon: "$",
  },
  {
    title: "AI Integration",
    desc: "Spring AI agents, LLM-powered risk scoring, and intelligent automation layered onto backend infrastructure.",
    accent: "#34d399",
    icon: "{}",
  },
];

function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 }}
      style={{
        background: "rgba(6,10,28,0.9)",
        border: "1px solid rgba(125,249,255,0.15)",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 0 0 1px rgba(125,249,255,0.04), 0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        fontFamily: "'JetBrains Mono','Fira Code',monospace",
        fontSize: "12px",
      }}
    >
      {/* title bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: "6px",
        padding: "10px 14px",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(255,255,255,0.02)",
      }}>
        {["#f87171","#fbbf24","#34d399"].map(c => (
          <span key={c} style={{ width:9, height:9, borderRadius:"50%", background:c, display:"inline-block", boxShadow:`0 0 6px ${c}` }} />
        ))}
        <span style={{ marginLeft:8, color:"rgba(156,163,175,0.4)", fontSize:"9.5px", letterSpacing:"0.1em" }}>aditya@finpay ~ </span>
      </div>

      {/* content */}
      <div style={{ padding: "16px 18px", lineHeight: "2" }}>
        {[
          { prompt: "$ ", cmd: "whoami", out: null },
          { prompt: null, cmd: null, out: "Aditya Sinha - Backend Engineer" },
          { prompt: "$ ", cmd: "cat role.txt", out: null },
          { prompt: null, cmd: null, out: "System Engineer @ Infosys | Banking" },
          { prompt: "$ ", cmd: "ls skills/", out: null },
          { prompt: null, cmd: null, out: "java/  spring/  postgres/  docker/  ai/" },
          { prompt: "$ ", cmd: "echo $PASSION", out: null },
          { prompt: null, cmd: null, out: <span style={{ color:"#7df9ff" }}>Building things that actually work at scale<motion.span animate={{ opacity:[1,0,1] }} transition={{ duration:0.8, repeat:Infinity }} style={{ display:"inline-block", width:6, height:12, background:"#7df9ff", marginLeft:3, verticalAlign:"middle", boxShadow:"0 0 8px #7df9ff" }} /></span> },
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.35 }}
            style={{ display:"flex", gap:"6px", color: line.prompt ? "#a78bfa" : "rgba(156,163,175,0.7)" }}
          >
            {line.prompt && <span style={{ color:"#34d399", flexShrink:0 }}>{line.prompt}</span>}
            {line.cmd   && <span style={{ color:"#e2e8f0" }}>{line.cmd}</span>}
            {line.out   && <span>{line.out}</span>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function TraitBadges() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      style={{ display:"flex", flexWrap:"wrap", gap:"10px", marginTop:"24px" }}
    >
      {TRAITS.map((t, i) => (
        <motion.div
          key={t.label}
          initial={{ opacity:0, scale:0.8 }}
          whileInView={{ opacity:1, scale:1 }}
          viewport={{ once: true }}
          whileHover={{ y:-3, boxShadow:"0 0 20px rgba(125,249,255,0.15)" }}
          transition={{ delay: 0.5 + i*0.07, duration:0.3, ease:"backOut" }}
          style={{
            display:"flex", alignItems:"center", gap:"7px",
            padding:"8px 14px",
            background:"rgba(125,249,255,0.04)",
            border:"1px solid rgba(125,249,255,0.12)",
            borderRadius:"8px",
            fontSize:"12px",
            color:"rgba(200,216,232,0.85)",
            fontWeight:600,
            letterSpacing:"0.04em",
            cursor:"default",
          }}
        >
          <span style={{ fontSize:"14px" }}>{t.icon}</span>
          {t.label}
        </motion.div>
      ))}
    </motion.div>
  );
}

function WhatIDoCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity:0, y:20 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.1, duration:0.6 }}
      whileHover={{ y:-4, borderColor:`${item.accent}40` }}
      style={{
        padding:"22px 22px",
        background:"rgba(6,10,28,0.6)",
        border:"1px solid rgba(255,255,255,0.07)",
        borderRadius:"12px",
        backdropFilter:"blur(16px)",
        transition:"border-color 0.3s, transform 0.3s",
        position:"relative",
        overflow:"hidden",
      }}
    >
      {/* top accent line */}
      <motion.div
        initial={{ scaleX:0 }}
        whileInView={{ scaleX:1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + index * 0.1, duration:0.5 }}
        style={{
          position:"absolute", top:0, left:0, right:0, height:"2px",
          background:`linear-gradient(90deg, ${item.accent}, transparent)`,
          transformOrigin:"left",
        }}
      />
      <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"10px" }}>
        <span style={{ color:item.accent, fontSize:"18px", fontWeight:700 }}>{item.icon}</span>
        <span style={{ color:"#f3f4f6", fontSize:"13px", fontWeight:700, letterSpacing:"0.04em" }}>{item.title}</span>
      </div>
      <p style={{ color:"rgba(156,163,175,0.8)", fontSize:"13px", lineHeight:"1.75" }}>{item.desc}</p>
    </motion.div>
  );
}

function StatsGrid() {
  return (
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>
      {aboutStats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity:0, scale:0.9 }}
          whileInView={{ opacity:1, scale:1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.06, duration:0.45, ease:"backOut" }}
          whileHover={{ y:-3, boxShadow:"0 0 28px rgba(125,249,255,0.1)" }}
          style={{
            padding:"20px",
            background:"rgba(6,10,28,0.7)",
            border:"1px solid rgba(255,255,255,0.07)",
            borderRadius:"12px",
            backdropFilter:"blur(16px)",
            transition:"all 0.3s",
          }}
        >
          <div style={{
            fontFamily:"'Orbitron','Space Grotesk',sans-serif",
            fontSize:"28px", fontWeight:900, lineHeight:1,
            background:"linear-gradient(135deg,#7df9ff,#a78bfa)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            backgroundClip:"text",
          }}>
            {stat.value}
          </div>
          <div style={{ marginTop:"6px", color:"rgba(156,163,175,0.7)", fontSize:"11.5px", lineHeight:1.4 }}>
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function About() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">

      {/* ambient blobs */}
      <div className="pointer-events-none absolute right-[-5%] top-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.07)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute left-[-5%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(125,249,255,0.06)_0%,transparent_70%)] blur-3xl" />

      {/* Section header */}
      <motion.div
        initial={{ opacity:0, y:16 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once: true }}
        transition={{ duration:0.6 }}
        style={{ marginBottom:"60px" }}
      >
        <span style={{
          fontFamily:"monospace", fontSize:"11px", letterSpacing:"0.3em",
          color:"#7df9ff", textTransform:"uppercase", display:"block", marginBottom:"12px",
        }}>About Me</span>
        <h2 className="font-display" style={{
          fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:900, lineHeight:1,
          color:"#fff",
        }}>
          The engineer behind the <span className="gradient-text">systems.</span>
        </h2>
      </motion.div>

      {/* Main grid */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit, minmax(min(100%,340px),1fr))",
        gap:"28px",
        alignItems:"start",
      }}>

        {/* Terminal and traits */}
        <div style={{ display:"flex", flexDirection:"column", gap:"0" }}>
          <TerminalCard />
          <TraitBadges />
        </div>

        {/* Engineering focus */}
        <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
          <motion.p
            initial={{ opacity:0, y:12 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration:0.6, delay:0.1 }}
            style={{ color:"rgba(156,163,175,0.85)", fontSize:"15px", lineHeight:"1.85", marginBottom:"8px" }}
          >
            {personalInfo.summary} I care about clean contracts between services,
            reliable transactions, systems that don't fail silently. Currently building
            backend capabilities for financial services at Infosys.
          </motion.p>
          {WHAT_I_DO.map((item, i) => <WhatIDoCard key={item.title} item={item} index={i} />)}
        </div>

        {/* Stats and CTA */}
        <div style={{ display:"flex", flexDirection:"column", gap:"20px" }}>
          <StatsGrid />

          <motion.div
            initial={{ opacity:0, y:16 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
            transition={{ delay:0.4, duration:0.6 }}
            style={{
              padding:"24px",
              background:"rgba(125,249,255,0.04)",
              border:"1px solid rgba(125,249,255,0.12)",
              borderRadius:"12px",
            }}
          >
            <div style={{ fontSize:"13px", color:"rgba(156,163,175,0.7)", marginBottom:"6px", fontFamily:"monospace" }}>
              Currently open to
            </div>
            <div style={{ fontSize:"15px", color:"#f3f4f6", fontWeight:700, marginBottom:"16px" }}>
              Interesting backend problems,<br/>AI integration work &amp; collaborations.
            </div>
            <motion.button
              type="button"
              whileHover={{ scale:1.03, boxShadow:"0 0 28px rgba(125,249,255,0.2)" }}
              whileTap={{ scale:0.97 }}
              onClick={scrollToContact}
              style={{
                width:"100%", padding:"12px",
                background:"rgba(125,249,255,0.1)",
                border:"1px solid rgba(125,249,255,0.3)",
                borderRadius:"8px",
                color:"#7df9ff",
                fontSize:"12px", fontWeight:700,
                letterSpacing:"0.14em", textTransform:"uppercase",
                cursor:"pointer",
                transition:"all 0.3s",
              }}
            >
              Get In Touch -&gt;
            </motion.button>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once: true }}
            transition={{ delay:0.55 }}
            style={{
              padding:"16px 18px",
              background:"rgba(6,10,28,0.6)",
              border:"1px solid rgba(255,255,255,0.06)",
              borderRadius:"12px",
              fontSize:"11.5px",
              color:"rgba(156,163,175,0.55)",
              fontFamily:"monospace",
              lineHeight:"1.8",
            }}
          >
            <span style={{ color:"rgba(125,249,255,0.5)", display:"block", marginBottom:"4px" }}>certifications</span>
            Azure AZ-204 (pursuing) | Java &amp; OOP | Spring Boot<br/>
            GitHub Copilot | React - Infosys LEX
          </motion.div>
        </div>
      </div>
    </section>
  );
}
