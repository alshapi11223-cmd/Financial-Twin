"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

type Scenario = "base" | "car" | "recommended" | "safe";

type ScenarioData = {
  score: number;
  status: string;
  flexibility: number;
  liabilities: number;
  saving: number;
  flexTag: string;
  liabilityTag: string;
  savingTag: string;
  message: string;
  note: string;
};

const scenarios: Record<Scenario, ScenarioData> = {
  base: {
    score: 78,
    status: "مستقر",
    flexibility: 65,
    liabilities: 18,
    saving: 1500,
    flexTag: "متوسط",
    liabilityTag: "منخفض",
    savingTag: "جيد",
    message: "وضعك المالي في المسار الصحيح، ممتاز!",
    note: "جزءاً كبيراً من إنفاقك يذهب إلى المصروفات المتغيرة، لذا قد يساعدك اختبار محاكاة قرار مالي على اختيار الخطة الأنسب لتحقيق أهدافك.",
  },
  car: {
    score: 70,
    status: "منخفض",
    flexibility: 45,
    liabilities: 32,
    saving: 1500,
    flexTag: "متوسط",
    liabilityTag: "مرتفع",
    savingTag: "جيد",
    message: "شراء السيارة ممكن حالياً، لكن تأثيره واضح على الادخار والاستقرار المالي.",
    note: "شراء السيارة مباشرة بالقسط الحالي سيؤدي إلى انخفاض الادخار الشهري بشكل ملحوظ وقد يؤخر بعض أهدافك المالية.",
  },
  recommended: {
    score: 85,
    status: "ممتاز",
    flexibility: 70,
    liabilities: 29,
    saving: 2350,
    flexTag: "متوسط",
    liabilityTag: "متوسط",
    savingTag: "جيد",
    message: "الخطة الموصى بها تحافظ على استقرارك المالي وتسرّع تحقيق أهدافك.",
    note: "نوصي باعتماد القسط المقترح مع تقليل المصروفات غير الأساسية بمقدار 850 ريال شهرياً.",
  },
  safe: {
    score: 82,
    status: "جيد",
    flexibility: 72,
    liabilities: 20,
    saving: 2350,
    flexTag: "متوسط",
    liabilityTag: "منخفض",
    savingTag: "جيد",
    message: "الخطة المحافظة تقلل الضغط المالي وتحافظ على أهدافك.",
    note: "تأجيل شراء السيارة لمدة 6 أشهر يساعد على زيادة الدفعة الأولى وتقليل قيمة التمويل.",
  },
};

const C = {
  canvas: "#0B5A83",
  page: "#02253D",
  card: "#0A466A",
  border: "#364153",
  white: "#F2F2F7",
  secondary: "#7E848D",
  coral: "#FF9D8E",
  coralMuted: "#CF7F78",
  green: "#34C759",
  greenSoft: "#CDFFE9",
  turquoise: "#00C8B3",
  yellow: "#FFCC00",
  yellowSoft: "#FFF4B5",
  blueTrack: "#50B5FF",
  avatar: "#173E78",
};

export default function FinancialSummaryPage() {
  const [selected, setSelected] = useState<Scenario>("car");
  const [active, setActive] = useState<Scenario>("base");
  const current = scenarios[active];

  return (
    <main style={styles.canvas}>
      <section dir="rtl" style={styles.phone}>
        <Header />
        <p style={styles.intro}>قراءة سريعة لوضعك المالي الحالي بناءً على البيانات المدخلة.</p>
        <HealthCard current={current} />

        <div style={styles.statsRow}>
          <StatCard icon={<WalletIcon />} title="الادخار الشهري" value={`﷼ ${current.saving.toLocaleString("en-US")}`} tag={current.savingTag} tagKind="green" />
          <StatCard icon={<BarsIcon />} title="نسبة الالتزامات" value={`${current.liabilities}%`} tag={current.liabilityTag} tagKind={current.liabilityTag === "مرتفع" ? "yellow" : "green"} />
          <StatCard icon={<LineIcon />} title="المرونة المالية" value={`${current.flexibility}%`} tag={current.flexTag} tagKind="yellow" />
        </div>

        <NawaNote note={current.note} />
        <SimulationCard selected={selected} setSelected={setSelected} />

        <button type="button" onClick={() => setActive(selected)} style={styles.startButton}>ابدأ المحاكاة</button>
      </section>
    </main>
  );
}

function Header() {
  return (
    <>
      <div style={styles.statusTime}>9:41</div>
      <div style={styles.statusIcons}><SignalIcon /><WifiIcon /><BatteryIcon /></div>
      <button type="button" aria-label="الإشعارات" style={styles.bellButton}><BellIcon /></button>
      <div style={styles.avatar}>ج م</div>
      <div style={styles.welcome}>
        <div style={styles.name}>جمانه</div>
        <div style={styles.welcomeText}>مرحباً بعودتك،</div>
      </div>
      <h1 style={styles.title}>ملخصك المالي</h1>
      <p style={styles.updated}>آخر تحديث اليوم 9:41</p>
    </>
  );
}

function HealthCard({ current }: { current: ScenarioData }) {
  return (
    <section style={styles.healthCard}>
      <InfoIcon style={styles.infoIcon} />
      <ScoreCircle score={current.score} />
      <p style={styles.healthLabel}>مؤشر الصحة المالية</p>
      <p style={styles.healthStatus}>{current.status}</p>
      <p style={styles.healthMessage}>{current.message}</p>
    </section>
  );
}

function ScoreCircle({ score }: { score: number }) {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference * (score / 100);
  return (
    <div style={styles.scoreWrap}>
      <svg width="134" height="132" viewBox="0 0 134 132" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="67" cy="66" r={radius} fill="none" stroke={C.blueTrack} strokeOpacity="0.10" strokeWidth="6" />
        <circle cx="67" cy="66" r={radius} fill="none" stroke={C.coral} strokeWidth="6" strokeLinecap="round" strokeDasharray={`${progress} ${circumference - progress}`} style={{ transition: "stroke-dasharray 240ms ease" }} />
      </svg>
      <div style={styles.scoreText}>{score}%</div>
    </div>
  );
}

function StatCard({ icon, title, value, tag, tagKind }: { icon: ReactNode; title: string; value: string; tag: string; tagKind: "green" | "yellow" }) {
  return (
    <article style={styles.statCard}>
      <div style={styles.statIcon}>{icon}</div>
      <p style={styles.statTitle}>{title}</p>
      <p style={styles.statValue}>{value}</p>
      <span style={{ ...styles.statTag, background: tagKind === "green" ? C.greenSoft : C.yellowSoft, color: tagKind === "green" ? C.green : "#B59B00" }}>{tag}</span>
    </article>
  );
}

function NawaNote({ note }: { note: string }) {
  return (
    <section style={styles.noteCard}>
      <div style={styles.noteHeading}><NawaIcon /><span>ملاحظة نوى</span></div>
      <p style={styles.noteBody}>{note}</p>
    </section>
  );
}

function SimulationCard({ selected, setSelected }: { selected: Scenario; setSelected: (scenario: Scenario) => void }) {
  return (
    <section style={styles.simCard}>
      <button type="button" aria-label="السابق" style={styles.arrowButton}><ArrowIcon /></button>
      <h2 style={styles.simTitle}>محاكاة قرار مالي</h2>
      <p style={styles.simText}>اختبر أثر قرار جديد على ادخارك وأهدافك.</p>
      <div style={styles.choices}>
        <Choice active={selected === "car"} onClick={() => setSelected("car")}><CarIcon /></Choice>
        <Choice active={selected === "recommended"} onClick={() => setSelected("recommended")}><AnalyticsIcon /></Choice>
        <Choice active={selected === "safe"} onClick={() => setSelected("safe")}><DataIcon /></Choice>
      </div>
    </section>
  );
}

function Choice({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" onClick={onClick} style={{ ...styles.choice, background: active ? C.coral : C.coralMuted, borderColor: active ? C.coral : C.coralMuted, transform: active ? "scale(1.05)" : "scale(1)" }}>{children}</button>
  );
}

const styles: Record<string, CSSProperties> = {
  canvas: { minHeight: "100vh", background: C.canvas, display: "flex", justifyContent: "center", alignItems: "flex-start", overflowX: "hidden" },
  phone: { position: "relative", width: 375, minWidth: 375, height: 812, overflow: "hidden", background: C.page, color: C.white, fontFamily: 'Poppins, "Segoe UI", Tahoma, Arial, sans-serif' },
  statusTime: { position: "absolute", left: 23, top: 16, fontSize: 14, lineHeight: "18px", fontWeight: 700, direction: "ltr" },
  statusIcons: { position: "absolute", right: 20, top: 16, display: "flex", alignItems: "center", gap: 5 },
  bellButton: { position: "absolute", left: 17, top: 57, width: 42, height: 42, padding: 0, border: 0, borderRadius: "50%", background: "#111B35", display: "grid", placeItems: "center" },
  avatar: { position: "absolute", right: 19, top: 54, width: 56, height: 56, borderRadius: 16, background: C.avatar, border: "1px solid rgba(255,255,255,0.10)", display: "grid", placeItems: "center", fontSize: 27, lineHeight: 1, fontWeight: 600 },
  welcome: { position: "absolute", right: 88, top: 60, width: 96, textAlign: "right" },
  name: { fontSize: 24, lineHeight: "29px", fontWeight: 700, whiteSpace: "nowrap" },
  welcomeText: { marginTop: 1, fontSize: 14, lineHeight: "18px", color: "rgba(242,242,247,0.78)", whiteSpace: "nowrap" },
  title: { position: "absolute", right: 15, top: 120, width: 199, height: 38, margin: 0, fontSize: 29, lineHeight: "38px", fontWeight: 700, textAlign: "right", whiteSpace: "nowrap" },
  updated: { position: "absolute", left: 17, top: 128, width: 145, height: 20, margin: 0, fontSize: 13, lineHeight: "20px", color: C.secondary, textAlign: "left", whiteSpace: "nowrap" },
  intro: { position: "absolute", right: 7, top: 158, width: 336, height: 18, margin: 0, fontSize: 13, lineHeight: "18px", fontWeight: 400, textAlign: "right", whiteSpace: "nowrap" },
  healthCard: { position: "absolute", left: 14, top: 186, width: 350, height: 171, borderRadius: 14, background: C.card, border: `1px solid ${C.border}`, overflow: "hidden" },
  infoIcon: { position: "absolute", left: 15, top: 15 },
  scoreWrap: { position: "absolute", left: 23, top: 18, width: 134, height: 132 },
  scoreText: { position: "absolute", inset: 0, display: "grid", placeItems: "center", fontSize: 40, lineHeight: "44px", fontWeight: 600, direction: "ltr", color: "#FAFAFB" },
  healthLabel: { position: "absolute", right: 17, top: 18, width: 157, height: 14, margin: 0, fontSize: 12, lineHeight: "14px", fontWeight: 400, textAlign: "right" },
  healthStatus: { position: "absolute", right: 17, top: 62, width: 110, height: 47, margin: 0, fontSize: 24, lineHeight: "47px", fontWeight: 500, textAlign: "right" },
  healthMessage: { position: "absolute", right: 17, bottom: 13, width: 198, margin: 0, fontSize: 12, lineHeight: "24px", fontWeight: 400, textAlign: "right", color: C.green },
  statsRow: { position: "absolute", left: 17, top: 370, width: 341, height: 113, display: "flex", direction: "rtl", justifyContent: "space-between" },
  statCard: { position: "relative", width: 90, height: 113, borderRadius: 14, background: C.card, border: `1px solid ${C.border}`, textAlign: "center", overflow: "hidden" },
  statIcon: { position: "absolute", left: 35, top: 6, width: 19, height: 19 },
  statTitle: { position: "absolute", left: 0, top: 30, width: 90, height: 20, margin: 0, fontSize: 12, lineHeight: "18px", fontWeight: 500, whiteSpace: "nowrap" },
  statValue: { position: "absolute", left: 0, top: 52, width: 90, height: 24, margin: 0, fontSize: 20, lineHeight: "24px", fontWeight: 600, whiteSpace: "nowrap", color: "#FAFAFB" },
  statTag: { position: "absolute", left: 13, top: 85, width: 64, height: 19, borderRadius: 10, display: "grid", placeItems: "center", fontSize: 12, lineHeight: "12px", fontWeight: 400 },
  noteCard: { position: "absolute", left: 17, top: 491, width: 344, height: 69, borderRadius: 14, background: "rgba(10,70,106,0.22)", border: `1px solid ${C.border}`, overflow: "hidden" },
  noteHeading: { position: "absolute", right: 13, top: 8, height: 15, display: "flex", direction: "rtl", alignItems: "center", gap: 6, color: C.turquoise, fontSize: 13, lineHeight: "14px", fontWeight: 600, whiteSpace: "nowrap" },
  noteBody: { position: "absolute", right: 13, top: 28, width: 318, margin: 0, fontSize: 12, lineHeight: "16px", fontWeight: 500, textAlign: "right" },
  simCard: { position: "absolute", left: 13, top: 568, width: 350, height: 122, borderRadius: 14, background: C.card, border: `1px solid ${C.border}`, overflow: "hidden" },
  arrowButton: { position: "absolute", left: 9, top: 53, width: 18, height: 29, padding: 0, border: 0, background: "transparent", display: "grid", placeItems: "center" },
  simTitle: { position: "absolute", right: 20, top: 15, width: 117, height: 18, margin: 0, fontSize: 18, lineHeight: "18px", fontWeight: 600, textAlign: "right", whiteSpace: "nowrap" },
  simText: { position: "absolute", right: 20, top: 44, width: 249, height: 24, margin: 0, fontSize: 14, lineHeight: "24px", fontWeight: 400, textAlign: "right", color: C.secondary, whiteSpace: "nowrap" },
  choices: { position: "absolute", left: 56, top: 76, height: 29, display: "flex", alignItems: "center", gap: 12, direction: "ltr" },
  choice: { width: 29, height: 29, padding: 0, borderRadius: "50%", border: "1.67px solid", display: "grid", placeItems: "center", transition: "transform 150ms ease" },
  startButton: { position: "absolute", left: 20, top: 699, width: 336, height: 56, padding: 0, border: 0, borderRadius: 16, background: C.coral, color: C.page, fontSize: 16, lineHeight: "24px", fontWeight: 600 },
};

function BellIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 7-3 9h18c0-2-3-2-3-9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 21h4" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>; }
function InfoIcon({ style }: { style?: CSSProperties }) { return <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke={C.white} strokeWidth="2" /><path d="M12 10V17" stroke={C.white} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="7" r="1.2" fill={C.white} /></svg>; }
function NawaIcon() { return <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.125 8.31251C4.91881 8.31251 3.9375 7.33119 3.9375 6.12501C3.9375 4.91882 4.91881 3.93751 6.125 3.93751C7.33119 3.93751 8.3125 4.91882 8.3125 6.12501C8.3125 7.33119 7.33119 8.31251 6.125 8.31251ZM12.25 6.12501C12.25 2.74751 9.5025 0 6.125 0C5.31602 0 4.51492 0.158963 3.76863 0.471195L4.10637 1.27882C4.74567 1.0112 5.43195 0.873912 6.125 0.875007C8.8725 0.875007 11.1344 2.99688 11.3575 5.68751H9.1875V6.56251H12.25V6.12501ZM8.48137 11.7788L8.14363 10.9712C7.50433 11.2388 6.81805 11.3761 6.125 11.375C3.3775 11.375 1.11562 9.25313 0.8925 6.56251H3.0625V5.68751H0V6.12501C0 9.50251 2.7475 12.25 6.125 12.25C6.9405 12.25 7.73369 12.0916 8.48137 11.7788Z" fill="#00C8B3" fillOpacity="0.69" /></svg>; }
function WalletIcon() { return <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="13" rx="2" stroke="white" strokeWidth="2" /><path d="M16 12H21V16H16C14.9 16 14 15.1 14 14C14 12.9 14.9 12 16 12Z" stroke="white" strokeWidth="2" /></svg>; }
function BarsIcon() { return <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M6 20V8M10 20V4M14 20V11M18 20V6" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>; }
function LineIcon() { return <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M4 18V6M4 18H20M7 15L11 11L14 14L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function CarIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 14L7 9H17L19 14" stroke="white" strokeWidth="2" /><rect x="4" y="14" width="16" height="5" rx="2" stroke="white" strokeWidth="2" /><circle cx="7" cy="19" r="1.4" fill="white" /><circle cx="17" cy="19" r="1.4" fill="white" /></svg>; }
function AnalyticsIcon() { return <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M4 18V6M4 18H20M7 15L11 11L14 14L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function DataIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="14" rx="2" stroke="white" strokeWidth="2" /><path d="M8 9H16M8 13H11M13 13H16" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>; }
function ArrowIcon() { return <svg width="12" height="18" viewBox="0 0 12 18" fill="none"><path d="M9.5 2L2.5 9L9.5 16" stroke={C.coral} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function SignalIcon() { return <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><rect x="0" y="8" width="3" height="4" rx="1" fill="white" /><rect x="5" y="5" width="3" height="7" rx="1" fill="white" /><rect x="10" y="2" width="3" height="10" rx="1" fill="white" /><rect x="15" y="0" width="3" height="12" rx="1" fill="white" /></svg>; }
function WifiIcon() { return <svg width="17" height="13" viewBox="0 0 17 13" fill="none"><path d="M1 4C5.2 0.4 11.8 0.4 16 4" stroke="white" strokeWidth="2" strokeLinecap="round" /><path d="M4 7C6.6 4.9 10.4 4.9 13 7" stroke="white" strokeWidth="2" strokeLinecap="round" /><circle cx="8.5" cy="11" r="1.3" fill="white" /></svg>; }
function BatteryIcon() { return <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><rect x="1" y="1" width="20" height="10" rx="2" stroke="white" strokeWidth="1.5" /><rect x="3" y="3" width="16" height="6" rx="1" fill="white" /><rect x="22" y="4" width="2" height="4" rx="1" fill="white" /></svg>; }
