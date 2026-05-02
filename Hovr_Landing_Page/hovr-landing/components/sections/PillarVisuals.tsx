import { pillars } from "@/lib/data";

type PillarType = (typeof pillars)[number];

export function PillarVisual({ pillar }: { pillar: PillarType }) {
  switch (pillar.num) {
    case "01":
      return <OverlayMock />;
    case "02":
      return <SocialMock />;
    case "03":
      return <UrgencyMock />;
    case "04":
      return <DeviceBridgeMock />;
    default:
      return null;
  }
}

/* ── Pillar 01: Overlay ──────────────────────────── */
function OverlayMock() {
  const files = ["FYP_Report_v3.docx", "lecture-notes.pdf", "github.com/hovr"];

  return (
    <div className="relative rounded-2xl bg-hovr-dark2 border border-white/[0.06] p-6 overflow-hidden min-h-[280px]">
      <div className="absolute inset-0 bg-gradient-to-br from-hovr-dark4/50 to-hovr-dark2/50" />
      <div
        className="relative ml-auto w-[220px] sm:w-[260px] rounded-xl bg-hovr-dark4/90 backdrop-blur-xl border border-white/[0.08] p-4 shadow-2xl shadow-black/50 animate-float"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-hovr-accent to-hovr-violet flex items-center justify-center text-[8px] font-bold text-white">
            H
          </div>
          <span className="text-[10px] font-mono text-hovr-text3">
            hovr overlay
          </span>
          <div className="ml-auto flex gap-1">
            <div className="w-2 h-2 rounded-full bg-hovr-success" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-3">
          {["Assignments", "Links", "Repos"].map((t, i) => (
            <span
              key={t}
              className={`text-[8px] px-2 py-1 rounded-md font-mono ${
                i === 0
                  ? "bg-hovr-accent/20 text-hovr-accent"
                  : "text-hovr-text3"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* File cards */}
        {files.map((f, i) => (
          <div
            key={f}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.04] mb-1.5 hover:bg-white/[0.06] transition-colors cursor-grab"
          >
            <div
              className={`w-3 h-3 rounded ${
                i === 2 ? "bg-hovr-success/30" : "bg-hovr-accent/20"
              }`}
            />
            <span className="text-[9px] font-mono text-hovr-text2 truncate">
              {f}
            </span>
          </div>
        ))}

        {/* Drop zone */}
        <div className="mt-2 border border-dashed border-hovr-accent/30 rounded-lg py-2 text-center">
          <span className="text-[8px] text-hovr-accent/60 font-mono">
            Drop files here
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Pillar 02: Social ───────────────────────────── */
function SocialMock() {
  const groups = [
    { name: "FYP Team", unread: 3, color: "#6C63FF" },
    { name: "DSA Study", unread: 0, color: "#06B6D4" },
    { name: "Networks Lab", unread: 12, color: "#F59E0B" },
  ];

  return (
    <div className="relative rounded-2xl bg-hovr-dark2 border border-white/[0.06] p-6 overflow-hidden min-h-[280px]">
      <div className="relative grid grid-cols-5 gap-3 h-full">
        {/* Group list */}
        <div className="col-span-2 rounded-xl bg-hovr-dark4/80 border border-white/[0.06] p-3">
          <div className="text-[9px] font-mono text-hovr-text3 mb-2 uppercase tracking-wider">
            Groups
          </div>
          {groups.map((g) => (
            <div
              key={g.name}
              className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer mb-1"
            >
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center text-[8px] font-bold"
                style={{
                  background: `${g.color}30`,
                  color: g.color,
                }}
              >
                {g.name[0]}
              </div>
              <span className="text-[10px] text-hovr-text2 flex-1 truncate">
                {g.name}
              </span>
              {g.unread > 0 && (
                <span className="text-[8px] bg-hovr-danger text-white rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {g.unread}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Chat */}
        <div className="col-span-3 rounded-xl bg-hovr-dark4/60 border border-white/[0.06] p-3 flex flex-col">
          <div className="text-[10px] font-bold text-white mb-2">FYP Team</div>
          <div className="flex-1 space-y-2">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-hovr-teal/30 shrink-0 mt-0.5" />
              <div className="bg-white/[0.04] rounded-lg rounded-tl-none px-2 py-1.5 max-w-[80%]">
                <span className="text-[9px] text-hovr-text2">
                  uploaded the final slides 📎
                </span>
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <div className="bg-hovr-accent/20 rounded-lg rounded-tr-none px-2 py-1.5 max-w-[80%]">
                <span className="text-[9px] text-hovr-text2">
                  nice! reviewing now 👀
                </span>
              </div>
            </div>
          </div>
          <div className="mt-2 flex gap-2">
            <div className="flex-1 bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-1.5 text-[9px] text-hovr-text3">
              Type a message...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Pillar 03: Urgency ──────────────────────────── */
function UrgencyMock() {
  return (
    <div className="relative rounded-2xl bg-hovr-dark2 border border-white/[0.06] p-6 overflow-hidden min-h-[280px]">
      <div className="space-y-3">
        {/* Overdue */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-hovr-danger animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-hovr-danger uppercase tracking-wider">
              Overdue
            </span>
          </div>
          <div className="px-3 py-2.5 rounded-xl bg-hovr-danger/[0.08] border border-hovr-danger/20">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-white">
                  Database Design Report
                </div>
                <div className="text-[9px] font-mono text-hovr-danger">
                  2 days overdue
                </div>
              </div>
              <div className="text-[9px] font-mono text-hovr-danger bg-hovr-danger/15 px-2 py-0.5 rounded-full">
                CRITICAL
              </div>
            </div>
          </div>
        </div>

        {/* Today */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-hovr-orange" />
            <span className="text-[10px] font-mono font-bold text-hovr-orange uppercase tracking-wider">
              Due Today
            </span>
          </div>
          <div className="px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-white">
                  Networks Lab Submission
                </div>
                <div className="text-[9px] font-mono text-hovr-orange">
                  Due in 4 hours
                </div>
              </div>
              <div className="w-4 h-4 rounded-md border-2 border-white/20 cursor-pointer hover:border-hovr-success transition-colors" />
            </div>
          </div>
        </div>

        {/* This week */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-hovr-warn" />
            <span className="text-[10px] font-mono font-bold text-hovr-warn uppercase tracking-wider">
              This Week
            </span>
          </div>
          <div className="px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-white">
                  FYP Presentation Slides
                </div>
                <div className="text-[9px] font-mono text-hovr-text3">
                  Due in 5 days
                </div>
              </div>
              <div className="text-[9px] font-mono text-hovr-warn bg-hovr-warn/15 px-2 py-0.5 rounded-full">
                HIGH
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Pillar 04: Device Bridge ────────────────────── */
function DeviceBridgeMock() {
  return (
    <div className="relative rounded-2xl bg-hovr-dark2 border border-white/[0.06] p-6 overflow-hidden min-h-[280px] flex items-center justify-center">
      <div className="flex items-center gap-6 sm:gap-10">
        {/* Desktop */}
        <div className="text-center">
          <div className="w-16 h-12 rounded-lg bg-hovr-dark4 border border-white/[0.08] flex items-center justify-center mb-1 mx-auto shadow-lg shadow-black/30">
            <div className="w-8 h-6 rounded bg-gradient-to-br from-hovr-accent/30 to-hovr-violet/20 flex items-center justify-center text-[8px] font-bold text-hovr-accent">
              H
            </div>
          </div>
          <div className="w-6 h-1 bg-white/10 rounded-full mx-auto mb-1" />
          <span className="text-[8px] font-mono text-hovr-text3">Desktop</span>
        </div>

        {/* Sync indicator */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1">
            <div className="w-8 h-px bg-gradient-to-r from-hovr-accent to-transparent" />
            <div className="w-2 h-2 rounded-full bg-hovr-success animate-pulse shadow-lg shadow-hovr-success/50" />
            <div className="w-8 h-px bg-gradient-to-l from-hovr-accent to-transparent" />
          </div>
          <span className="text-[7px] font-mono text-hovr-success">SYNCED</span>
        </div>

        {/* Phone */}
        <div className="text-center">
          <div className="w-8 h-14 rounded-lg bg-hovr-dark4 border border-white/[0.08] flex items-center justify-center mb-1 mx-auto shadow-lg shadow-black/30 animate-float">
            <div className="w-5 h-8 rounded bg-gradient-to-br from-hovr-accent/30 to-hovr-violet/20 flex items-center justify-center text-[6px] font-bold text-hovr-accent">
              H
            </div>
          </div>
          <span className="text-[8px] font-mono text-hovr-text3">Mobile</span>
        </div>
      </div>

      {/* QR badge */}
      <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-hovr-success/10 border border-hovr-success/20">
        <span className="text-[8px] font-mono text-hovr-success">
          QR paired ✓
        </span>
      </div>
    </div>
  );
}
