const RADIUS = "rounded-2xl";

export function FinPayPreview() {
  return (
    <div className={`relative h-full w-full overflow-hidden ${RADIUS} bg-[#071018]`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(125,249,255,0.12),transparent_50%)]" />
      <div className="flex h-full">
        <div className="flex w-[28%] flex-col gap-2 border-r border-white/[0.06] bg-[#0a121c] p-3">
          <div className="h-2 w-16 rounded bg-accent-cyan/40" />
          {["Dashboard", "Wallet", "Analytics", "Fraud"].map((item, i) => (
            <div
              key={item}
              className={`rounded-lg px-2 py-1.5 text-[8px] ${
                i === 0
                  ? "bg-accent-cyan/15 text-accent-cyan"
                  : "text-gray-500"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2 p-3">
          <div className="flex gap-2">
            {["Balance", "Transfers", "Risk"].map((label) => (
              <div
                key={label}
                className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.03] p-2"
              >
                <p className="text-[7px] text-gray-500">{label}</p>
                <p className="mt-1 font-display text-sm font-bold text-white">
                  {label === "Balance" ? "$24.8k" : label === "Transfers" ? "1.2k" : "Low"}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-1 gap-2">
            <div className="flex flex-1 flex-col justify-end rounded-xl border border-white/[0.06] bg-white/[0.02] p-2">
              <div className="flex h-20 items-end gap-1">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-accent-cyan/30 to-accent-cyan"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="mt-2 text-[7px] text-gray-500">Revenue Analytics</p>
            </div>
            <div className="flex w-[38%] flex-col gap-1.5">
              <div className="rounded-xl border border-accent-cyan/20 bg-accent-cyan/5 p-2">
                <p className="text-[7px] text-accent-cyan">Fintech Card</p>
                <p className="mt-1 font-mono text-[9px] text-white">**** 4821</p>
              </div>
              <div className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2">
                <div className="h-1.5 w-full rounded-full bg-white/10">
                  <div className="h-full w-[72%] rounded-full bg-accent-purple" />
                </div>
                <p className="mt-2 text-[7px] text-gray-500">Fraud Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AudiblePreview() {
  return (
    <div className={`relative h-full w-full overflow-hidden ${RADIUS} bg-[#0c0814]`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(167,139,250,0.15),transparent_55%)]" />
      <div className="flex h-full flex-col p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-purple/30 bg-accent-purple/10">
            <svg className="h-7 w-7 text-accent-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3v18M8 8l8 4-8 4" strokeLinecap="round" strokeLinejoin="round" />
              <ellipse cx="12" cy="12" rx="9" ry="6" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-[9px] text-gray-500">Now Playing</p>
            <p className="font-display text-xs font-semibold text-white">System Design Patterns</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-1 flex-1 rounded-full bg-white/10">
                <div className="h-full w-[38%] rounded-full bg-accent-purple" />
              </div>
              <span className="text-[7px] text-gray-500">12:40</span>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-1 gap-2">
          <div className="flex flex-1 flex-col gap-1.5">
            {["Chapter 4: APIs", "Chapter 5: Caching", "Chapter 6: Queues"].map(
              (title, i) => (
                <div
                  key={title}
                  className={`flex items-center gap-2 rounded-xl border px-2 py-2 ${
                    i === 0
                      ? "border-accent-purple/30 bg-accent-purple/10"
                      : "border-white/[0.06] bg-white/[0.02]"
                  }`}
                >
                  <div className="h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-accent-purple/30 to-navy" />
                  <div>
                    <p className="text-[8px] font-medium text-white">{title}</p>
                    <p className="text-[7px] text-gray-500">42 min</p>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="flex w-[42%] flex-col gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2">
            <p className="text-[7px] font-medium text-accent-purple">Library</p>
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex gap-1.5">
                <div className="h-6 w-6 rounded bg-white/10" />
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 w-full rounded bg-white/10" />
                  <div className="h-1 w-2/3 rounded bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScraperPreview() {
  return (
    <div className={`relative h-full w-full overflow-hidden ${RADIUS} bg-[#061210]`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(52,211,153,0.12),transparent_50%)]" />
      <div className="flex h-full gap-2 p-3">
        <div className="flex w-[55%] flex-col gap-2">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2">
            <p className="text-[7px] text-emerald-400">Profile Analytics</p>
            <div className="mt-2 flex gap-3">
              <div>
                <p className="font-display text-lg font-bold text-white">1.2k</p>
                <p className="text-[7px] text-gray-500">Solved</p>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-emerald-400">Top 5%</p>
                <p className="text-[7px] text-gray-500">Rank</p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-end gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2">
            {[55, 72, 48, 85, 60, 78, 90, 65].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/20 to-emerald-400"
                style={{ height: `${h * 0.7}%` }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col rounded-xl border border-white/[0.06] bg-[#0a1512] p-2 font-mono text-[7px] leading-relaxed">
          <p className="text-emerald-400">def aggregate_profiles():</p>
          <p className="text-gray-400 pl-2">data = fetch_all()</p>
          <p className="text-gray-400 pl-2">return analyze(data)</p>
          <div className="mt-auto space-y-1">
            {["LeetCode", "GitHub", "CodeChef"].map((p) => (
              <div
                key={p}
                className="flex justify-between rounded border border-white/[0.06] px-1.5 py-1"
              >
                <span className="text-gray-400">{p}</span>
                <span className="text-emerald-400">synced</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const previews = {
  finpay: FinPayPreview,
  audible: AudiblePreview,
  scraper: ScraperPreview,
};

export default function ProjectPreview({ type }) {
  const Component = previews[type] || FinPayPreview;
  return <Component />;
}
