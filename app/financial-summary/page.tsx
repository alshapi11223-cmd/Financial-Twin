"use client";

import { useRouter } from "next/navigation";
import {
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export default function FinancialSummaryPage() {
  const router = useRouter();

  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const targetScore = 78;
    const duration = 1400;
    const startTime = performance.now();

    const animateScore = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentScore = Math.round(targetScore * easedProgress);

      setAnimatedScore(currentScore);

      if (progress < 1) {
        requestAnimationFrame(animateScore);
      }
    };

    const animationId = requestAnimationFrame(animateScore);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <main style={styles.page}>
      <section dir="rtl" style={styles.phone}>
        {/* شريط الحالة */}
        <div dir="ltr" style={styles.statusBar}>
          <span style={styles.time}>9:41</span>

          <div style={styles.statusIcons}>
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>

        {/* الجرس */}
        <div style={styles.bellCircle}>
          <BellIcon />
        </div>

        {/* بيانات المستخدم */}
       <div style={styles.avatar}>
  <div style={{ transform: "translateY(-3px)" }}>
    ج م
  </div>
</div>

        <div style={styles.profileText}>
          <p style={styles.name}>جمانه</p>
          <p style={styles.welcome}>مرحباً بعودتك،</p>
        </div>

        {/* العنوان */}
        <h1 style={styles.mainTitle}>ملخصك المالي</h1>

        <p style={styles.lastUpdate}>آخر تحديث اليوم 9:41</p>

        <p style={styles.description}>
          قراءة سريعة لوضعك المالي الحالي بناءً على البيانات المدخلة.
        </p>

        {/* بطاقة الصحة المالية */}
        <section style={styles.healthCard}>
         

          {/* الدائرة يسار */}
          <div style={styles.scoreArea}>
            <svg
              width="138"
              height="138"
              viewBox="0 0 138 138"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx="69"
                cy="69"
                r="61"
                fill="none"
                stroke="#50B5FF"
                strokeWidth="9"
                opacity="0.1"
              />

              <circle
                cx="69"
                cy="69"
                r="61"
                fill="none"
                stroke="#FF9D8E"
                strokeWidth="9"
                strokeLinecap="round"
                strokeDasharray={`${(animatedScore / 100) * 384} 384`}
              />
            </svg>

            <span style={styles.scoreNumber}>{animatedScore}%</span>
          </div>

          {/* الكلام يمين */}
          <div style={styles.healthContent}>
            <p style={styles.healthLabel}>مؤشر الصحة المالية</p>

            <p style={styles.healthStatus}>مستقر</p>

            <p style={styles.healthMessage}>
              وضعك المالي في المسار الصحيح، ممتاز!
            </p>
          </div>
        </section>

        {/* بطاقات المؤشرات */}
        <section style={styles.statsRow}>
          <StatCard
            icon={<WalletIcon />}
            title="الادخار الشهري"
            value="﷼ 1,500"
            tag="جيد"
            tagStyle="green"
          />

          <StatCard
            icon={<BarsIcon />}
            title="نسبة الالتزامات"
            value="18%"
            tag="منخفض"
            tagStyle="green"
          />

          <StatCard
            icon={<LineIcon />}
            title="المرونة المالية"
            value="65%"
            tag="متوسط"
            tagStyle="yellow"
          />
        </section>

        {/* ملاحظة نوى */}
        <section style={styles.noteCard}>
          <div style={styles.noteHeading}>
            <NawaIcon />
            <span>ملاحظة نوى</span>
          </div>

          <p style={styles.noteText}>
            جزءاً كبيراً من إنفاقك يذهب إلى المصروفات المتغيرة، لذا قد يساعدك
            اختبار محاكاة قرار مالي على اختيار الخطة الأنسب لتحقيق أهدافك.
          </p>
        </section>

        {/* محاكاة القرار المالي */}
        <section style={styles.simulationCard}>
          <div style={styles.arrow}>
            <ArrowIcon />
          </div>

          <h2 style={styles.simulationTitle}>محاكاة قرار مالي</h2>

          <p style={styles.simulationText}>
            اختبر أثر قرار جديد على ادخارك وأهدافك.
          </p>

          {/* أشكال ثابتة فقط وليست أزرار */}
         <div dir="ltr" style={styles.staticChoices}>
  <StaticChoice>
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.9375 13.0625H13.0625V14.4375H8.9375V13.0625Z"
        fill="#FAFAFB"
        fillOpacity="0.66"
      />
      <path
        d="M17.49 9.625L16.6169 6.49687C16.5337 6.21011 16.3599 5.958 16.1214 5.7783C15.883 5.59859 15.5927 5.50095 15.2941 5.5H6.70587C6.40741 5.5011 6.11732 5.59881 5.87901 5.7785C5.64069 5.9582 5.46697 6.21022 5.38381 6.49687L4.49006 9.625H2.75V11H4.125V15.8125C4.12555 16.177 4.27059 16.5264 4.52833 16.7842C4.78608 17.0419 5.13549 17.187 5.5 17.1875V19.25H6.875V17.1875H15.125V19.25H16.5V17.1875C16.8645 17.187 17.2139 17.0419 17.4717 16.7842C17.7294 16.5264 17.8745 16.177 17.875 15.8125V11H19.25V9.625H17.49ZM6.70656 6.875H15.2948L16.2766 10.3125H5.72413L6.70656 6.875ZM16.5 14.4375V15.8125H5.5V14.4375H6.875V13.0625H5.5V11.6875H16.5V13.0625H15.125V14.4375H16.5Z"
        fill="#FAFAFB"
        fillOpacity="0.66"
      />
    </svg>
  </StaticChoice>

  <StaticChoice>
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.125 1.0625H1.0625V14.875C1.0625 15.1568 1.17444 15.427 1.3737 15.6263C1.57296 15.8256 1.84321 15.9375 2.125 15.9375H15.9375V14.875H2.125V1.0625Z"
        fill="#FAFAFB"
        fillOpacity="0.66"
      />
      <path
        d="M15.9375 4.78125H12.2188V5.84375H14.1259L10.0938 9.87594L7.81469 7.59156C7.7653 7.54177 7.70654 7.50225 7.64181 7.47528C7.57707 7.44831 7.50763 7.43442 7.4375 7.43442C7.36737 7.43442 7.29793 7.44831 7.23319 7.47528C7.16846 7.50225 7.1097 7.54177 7.06031 7.59156L3.1875 11.4697L3.93656 12.2188L7.4375 8.71781L9.71656 11.0022C9.76595 11.052 9.82471 11.0915 9.88944 11.1185C9.95418 11.1454 10.0236 11.1593 10.0938 11.1593C10.1639 11.1593 10.2333 11.1454 10.2981 11.1185C10.3628 11.0915 10.4216 11.052 10.4709 11.0022L14.875 6.59281V8.5H15.9375V4.78125Z"
        fill="#FAFAFB"
        fillOpacity="0.66"
      />
    </svg>
  </StaticChoice>

  <StaticChoice>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5625 13.5H11.8125V15.75H9.5625V13.5ZM13.5 13.5H15.75V15.75H13.5V13.5ZM9.5625 9.5625H11.8125V11.8125H9.5625V9.5625ZM13.5 9.5625H15.75V11.8125H13.5V9.5625Z"
        fill="white"
        fillOpacity="0.66"
      />
      <path
        d="M15.75 6.1875H12.375V3.9375C12.375 2.98125 11.6438 2.25 10.6875 2.25H7.3125C6.35625 2.25 5.625 2.98125 5.625 3.9375V6.1875H2.25C1.9125 6.1875 1.6875 6.4125 1.6875 6.75V6.8625L2.75625 13.6687C2.8125 14.2312 3.31875 14.625 3.88125 14.625H8.4375V13.5H3.88125L2.925 7.3125H15.75V6.1875ZM6.75 3.9375C6.75 3.6 6.975 3.375 7.3125 3.375H10.6875C11.025 3.375 11.25 3.6 11.25 3.9375V6.1875H6.75V3.9375Z"
        fill="white"
        fillOpacity="0.66"
      />
    </svg>
  </StaticChoice>
</div> 
        </section>

        {/* الزر الوحيد التفاعلي */}
        <button
          type="button"
          style={styles.startButton}
          onClick={() => router.push("/simulation")}
        >
          ابدأ المحاكاة
        </button>
      </section>
    </main>
  );
}

function StatCard({
  icon,
  title,
  value,
  tag,
  tagStyle,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  tag: string;
  tagStyle: "green" | "yellow";
}) {
  return (
    <article style={styles.statCard}>
      <div style={styles.statIcon}>{icon}</div>

      <p style={styles.statTitle}>{title}</p>

      <p style={styles.statValue}>{value}</p>

      <span
        style={{
          ...styles.statTag,
          background:
            tagStyle === "green"
              ? "rgba(205,255,233,0.95)"
              : "rgba(255,244,181,0.95)",
          color: tagStyle === "green" ? "#34C759" : "#B59B00",
        }}
      >
        {tag}
      </span>
    </article>
  );
}

function StaticChoice({ children }: { children: ReactNode }) {
  return <div style={styles.staticChoice}>{children}</div>;
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    margin: 0,
    background: "#0B5A83",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflowX: "auto",
  },

  phone: {
    position: "relative",
    width: 375,
    minWidth: 375,
    height: 812,
    minHeight: 812,
    overflow: "hidden",
    background: "#02253D",
    color: "#F2F2F7",
    fontFamily: '"Segoe UI", Tahoma, Arial, sans-serif',
  },

  statusBar: {
    position: "absolute",
    top: 14,
    left: 22,
    right: 18,
    height: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 5,
  },

  time: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: "18px",
  },

  statusIcons: {
    display: "flex",
    alignItems: "center",
    gap: 5,
  },

  bellCircle: {
    position: "absolute",
    top: 55,
    left: 17,
    width: 42,
    height: 42,
    borderRadius: "50%",
    background: "#111B35",
    display: "grid",
    placeItems: "center",
  },

 avatar: {
  position: "absolute",
  top: 51,
  right: 17,
  width: 50,
  height: 50,
  borderRadius: 14,
  background: "#173E78",
  border: "1px solid rgba(255,255,255,0.12)",
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "#FFFFFF",
  fontSize: 21,
  fontWeight: 600,

  lineHeight: 1,       // بدل "21px"
  paddingTop: 0,
  paddingBottom: 0,

  textAlign: "center",
  
}
, 
 profileText: {
  position: "absolute",
  top: 57,
  right: 78,
  width: 100,
  textAlign: "right",
  zIndex: 4,
},
  name: {
    margin: 0,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 700,
    lineHeight: "19px",
  },

  welcome: {
    margin: "2px 0 0",
    color: "rgba(255,255,255,0.74)",
    fontSize: 10,
    lineHeight: "13px",
  },

  mainTitle: {
    position: "absolute",
    top: 117,
    right: 17,
    margin: 0,
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: 700,
    lineHeight: "29px",
    whiteSpace: "nowrap",
  },

  lastUpdate: {
    position: "absolute",
    top: 130,
    left: 16,
    margin: 0,
    color: "rgba(255,255,255,0.48)",
    fontSize: 10,
    lineHeight: "14px",
    whiteSpace: "nowrap",
  },

  description: {
    position: "absolute",
    top: 163,
    right: 16,
    width: 343,
    margin: 0,
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: 500,
    lineHeight: "16px",
    textAlign: "right",
    whiteSpace: "nowrap",
  },

  healthCard: {
    position: "absolute",
    top: 186,
    left: 13,
    width: 350,
    height: 171,
    borderRadius: 14,
    overflow: "hidden",
    background: "#0A466A",
    borderTop: "1px solid #364153",
    boxSizing: "border-box",
  },

  infoIcon: {
    position: "absolute",
    top: 15,
    left: 15,
    width: 24,
    height: 24,
    zIndex: 2,
  },

  scoreArea: {
    position: "absolute",
    top: 16,
    left: 20,
    width: 138,
    height: 138,
    display: "grid",
    placeItems: "center",
  },

  scoreNumber: {
    position: "absolute",
    direction: "ltr",
    color: "#FAFAFB",
    fontSize: 34,
    fontWeight: 600,
    lineHeight: "40px",
  },

  healthContent: {
    position: "absolute",
    top: 18,
    right: 14,
    width: 194,
    height: 145,
    textAlign: "right",
  },

  healthLabel: {
    margin: 0,
    color: "#FFFFFF",
    fontSize: 10,
    lineHeight: "14px",
    fontWeight: 500,
  },

  healthStatus: {
  margin: "31px 0 0",
  color: "#FFFFFF",
  fontSize: 20,
  lineHeight: "25px",
  fontWeight: 600,
  textAlign: "center",
  width: 150,
  transform: "translateX(-16px)",
},
  healthMessage: {
    margin: "27px 0 0",
    width: 194,
    color: "#34C759",
    fontSize: 10,
    lineHeight: "18px",
    fontWeight: 500,
  },

  statsRow: {
  position: "absolute",
  top: 370,
  left: 13,
  width: 350,
  height: 113,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  direction: "rtl",
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
},

statCard: {
  width: 90,
  minWidth: 90,
  height: 113,
  padding: 0,
  margin: 0,
  borderRadius: 14,
  background: "#0A466A",
  borderTop: "1px solid #364153",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  textAlign: "center",
},
 statIcon: {
  width: 19,
  height: 19,
  marginTop: 8,
  display: "grid",
  placeItems: "center",
  flexShrink: 0,
},

 statTitle: {
  width: 90,
  margin: "5px 0 0",
  color: "#FFFFFF",
  fontSize: 10,
  fontWeight: 500,
  lineHeight: "18px",
  textAlign: "center",
  whiteSpace: "nowrap",
}, 

 statValue: {
  direction: "rtl",
  margin: "2px 0 0",
  color: "#FAFAFB",
  fontSize: 17,
  fontWeight: 600,
  lineHeight: "21px",
  textAlign: "center",
  whiteSpace: "nowrap",
},

 statTag: {
  width: 64,
  height: 19,
  marginTop: 5,
  borderRadius: 10,
  display: "grid",
  placeItems: "center",
  fontSize: 10,
  lineHeight: "12px",
  flexShrink: 0,
},

  noteCard: {
    position: "absolute",
    top: 491,
    left: 17,
    width: 344,
    height: 69,
    padding: "8px 12px",
    boxSizing: "border-box",
    borderRadius: 14,
    background: "rgba(10,70,106,0.22)",
    border: "1px solid #364153",
    textAlign: "right",
  },

  noteHeading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
    color: "#00C8B3",
    fontSize: 11,
    fontWeight: 600,
    lineHeight: "14px",
  },

  noteText: {
    margin: "5px 0 0",
    color: "#FFFFFF",
    fontSize: 9.5,
    fontWeight: 500,
    lineHeight: "14px",
    textAlign: "right",
  },

  simulationCard: {
    position: "absolute",
    top: 568,
    left: 13,
    width: 350,
    height: 122,
    borderRadius: 14,
    overflow: "hidden",
    background: "#0A466A",
    borderTop: "1px solid #364153",
    boxSizing: "border-box",
  },

  simulationTitle: {
    position: "absolute",
    top: 15,
    right: 20,
    margin: 0,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 600,
    lineHeight: "20px",
  },

  simulationText: {
    position: "absolute",
    top: 43,
    right: 20,
    width: 270,
    margin: 0,
    color: "rgba(242,242,247,0.48)",
    fontSize: 12,
    lineHeight: "20px",
    textAlign: "right",
  },

  arrow: {
    position: "absolute",
    top: 52,
    left: 8,
    width: 18,
    height: 22,
    display: "grid",
    placeItems: "center",
  },

  staticChoices: {
    position: "absolute",
    top: 76,
    left: 56,
    height: 29,
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  staticChoice: {
    width: 29,
    height: 29,
    borderRadius: "50%",
    background: "rgba(255,157,142,0.79)",
    border: "1.67px solid rgba(255,157,142,0.79)",
    display: "grid",
    placeItems: "center",
    pointerEvents: "none",
  },

  startButton: {
  position: "absolute",
  top: 699,
  left: 20,
  width: 336,
  height: 56,
  padding: 0,
  border: 0,
  borderRadius: 16,
  background: "#FF9D8E",
  color: "#02253D",
  fontSize: 14,
  fontWeight: 600,
  lineHeight: "20px",
  cursor: "pointer",
},
};


function BellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 8A6 6 0 0 0 6 8c0 7-3 7-3 9h18c0-2-3-2-3-9Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 21h4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#F2F2F7"
        strokeWidth="2"
      />
      <path
        d="M12 10v7"
        stroke="#F2F2F7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 7h.01"
        stroke="#F2F2F7"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NawaIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M6.125 8.31251C4.91881 8.31251 3.9375 7.33119 3.9375 6.12501C3.9375 4.91882 4.91881 3.93751 6.125 3.93751C7.33119 3.93751 8.3125 4.91882 8.3125 6.12501C8.3125 7.33119 7.33119 8.31251 6.125 8.31251ZM12.25 6.12501C12.25 2.74751 9.5025 0 6.125 0C5.31602 0 4.51492 0.158963 3.76863 0.471195L4.10637 1.27882C4.74567 1.0112 5.43195 0.873912 6.125 0.875007C8.8725 0.875007 11.1344 2.99688 11.3575 5.68751H9.1875V6.56251H12.25V6.12501ZM8.48137 11.7788L8.14363 10.9712C7.50433 11.2388 6.81805 11.3761 6.125 11.375C3.3775 11.375 1.11562 9.25313 0.8925 6.56251H3.0625V5.68751H0V6.12501C0 9.50251 2.7475 12.25 6.125 12.25C6.9405 12.25 7.73369 12.0916 8.48137 11.7788Z"
        fill="#00C8B3"
        fillOpacity="0.69"
      />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0625 10.0938H14.25V11.2812H13.0625V10.0938Z"
        fill="white"
      />
      <path
        d="M16.625 4.75H2.375V2.96875H15.4375V1.78125H2.375C2.06006 1.78125 1.75801 1.90636 1.53531 2.12906C1.31261 2.35176 1.1875 2.65381 1.1875 2.96875V15.4375C1.1875 15.7524 1.31261 16.0545 1.53531 16.2772C1.75801 16.4999 2.06006 16.625 2.375 16.625H16.625C16.9399 16.625 17.242 16.4999 17.4647 16.2772C17.6874 16.0545 17.8125 15.7524 17.8125 15.4375V5.9375C17.8125 5.62256 17.6874 5.32051 17.4647 5.09781C17.242 4.87511 16.9399 4.75 16.625 4.75ZM2.375 15.4375V5.9375H16.625V7.71875H11.875C11.5601 7.71875 11.258 7.84386 11.0353 8.06656C10.8126 8.28926 10.6875 8.59131 10.6875 8.90625V12.4688C10.6875 12.7837 10.8126 13.0857 11.0353 13.3084C11.258 13.5311 11.5601 13.6562 11.875 13.6562H16.625V15.4375H2.375ZM16.625 8.90625V12.4688H11.875V8.90625H16.625Z"
        fill="white"
      />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.125 10.6875H5.9375V3.5625H4.15625V10.6875H2.96875V2.375H7.125V10.6875ZM12.4688 15.4375H11.2812V7.125H9.5V13.0595H8.3125V5.9375H12.4688V15.4375ZM17.8125 15.4375H16.625V10.6875H14.8438V15.4375H13.6562V9.5H17.8125V15.4375ZM2.375 11.875V13.0625H5.09794L1.1875 16.9729L2.02706 17.8125L5.9375 13.9021V16.625H7.125V11.875H2.375Z"
        fill="#FAFAFB"
      />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.71875 8.90625C8.60047 8.90625 9.23519 9.79509 9.90731 10.7356C10.6863 11.8263 11.5698 13.0625 13.0625 13.0625C16.4291 13.0625 17.6819 6.65594 17.8125 5.9375L16.644 5.72494C16.3578 7.29244 15.0777 11.875 13.0625 11.875C12.1808 11.875 11.5461 10.9862 10.8739 10.0457C10.0949 8.95494 9.21144 7.71875 7.71875 7.71875C5.23331 7.71875 3.29828 12.1149 2.375 14.7024V1.1875H1.1875V16.625C1.18797 16.9398 1.31323 17.2416 1.53583 17.4642C1.75843 17.6868 2.0602 17.812 2.375 17.8125H17.8125V16.625H2.99488C3.89144 13.5713 5.91612 8.90625 7.71875 8.90625Z"
        fill="#FAFAFB"
      />
    </svg>
  );
}

function ShoppingIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5625 13.5H11.8125V15.75H9.5625V13.5ZM13.5 13.5H15.75V15.75H13.5V13.5ZM9.5625 9.5625H11.8125V11.8125H9.5625V9.5625ZM13.5 9.5625H15.75V11.8125H13.5V9.5625Z"
        fill="white"
        fillOpacity="0.66"
      />
      <path
        d="M15.75 6.1875H12.375V3.9375C12.375 2.98125 11.6438 2.25 10.6875 2.25H7.3125C6.35625 2.25 5.625 2.98125 5.625 3.9375V6.1875H2.25C1.9125 6.1875 1.6875 6.4125 1.6875 6.75V6.8625L2.75625 13.6687C2.8125 14.2312 3.31875 14.625 3.88125 14.625H8.4375V13.5H3.88125L2.925 7.3125H15.75V6.1875ZM6.75 3.9375C6.75 3.6 6.975 3.375 7.3125 3.375H10.6875C11.025 3.375 11.25 3.6 11.25 3.9375V6.1875H6.75V3.9375Z"
        fill="white"
        fillOpacity="0.66"
      />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.125 1.0625H1.0625V14.875C1.0625 15.1568 1.17444 15.427 1.3737 15.6263C1.57296 15.8256 1.84321 15.9375 2.125 15.9375H15.9375V14.875H2.125V1.0625Z"
        fill="#FAFAFB"
        fillOpacity="0.66"
      />
      <path
        d="M15.9375 4.78125H12.2188V5.84375H14.1259L10.0938 9.87594L7.81469 7.59156C7.7653 7.54177 7.70654 7.50225 7.64181 7.47528C7.57707 7.44831 7.50763 7.43442 7.4375 7.43442C7.36737 7.43442 7.29793 7.44831 7.23319 7.47528C7.16846 7.50225 7.1097 7.54177 7.06031 7.59156L3.1875 11.4697L3.93656 12.2188L7.4375 8.71781L9.71656 11.0022C9.76595 11.052 9.82471 11.0915 9.88944 11.1185C9.95418 11.1454 10.0236 11.1593 10.0938 11.1593C10.1639 11.1593 10.2333 11.1454 10.2981 11.1185C10.3628 11.0915 10.4216 11.052 10.4709 11.0022L14.875 6.59281V8.5H15.9375V4.78125Z"
        fill="#FAFAFB"
        fillOpacity="0.66"
      />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.9375 13.0625H13.0625V14.4375H8.9375V13.0625Z"
        fill="#FAFAFB"
        fillOpacity="0.66"
      />
      <path
        d="M17.49 9.625L16.6169 6.49687C16.5337 6.21011 16.3599 5.958 16.1214 5.7783C15.883 5.59859 15.5927 5.50095 15.2941 5.5H6.70587C6.40741 5.5011 6.11732 5.59881 5.87901 5.7785C5.64069 5.9582 5.46697 6.21022 5.38381 6.49687L4.49006 9.625H2.75V11H4.125V15.8125C4.12555 16.177 4.27059 16.5264 4.52833 16.7842C4.78608 17.0419 5.13549 17.187 5.5 17.1875V19.25H6.875V17.1875H15.125V19.25H16.5V17.1875C16.8645 17.187 17.2139 17.0419 17.4717 16.7842C17.7294 16.5264 17.8745 16.177 17.875 15.8125V11H19.25V9.625H17.49ZM6.70656 6.875H15.2948L16.2766 10.3125H5.72413L6.70656 6.875ZM16.5 14.4375V15.8125H5.5V14.4375H6.875V13.0625H5.5V11.6875H16.5V13.0625H15.125V14.4375H16.5Z"
        fill="#FAFAFB"
        fillOpacity="0.66"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
      <path
        d="M9 3L3 9L9 15"
        stroke="#FF9D8E"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="white">
      <rect x="0" y="8" width="3" height="4" rx="1" />
      <rect x="5" y="6" width="3" height="6" rx="1" />
      <rect x="10" y="3" width="3" height="9" rx="1" />
      <rect x="15" y="0" width="3" height="12" rx="1" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="17" height="13" viewBox="0 0 20 14" fill="none">
      <path
        d="M2 4.5C6.7.5 13.3.5 18 4.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 8C7.8 5.8 12.2 5.8 15 8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="10" cy="12" r="1.5" fill="white" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="24" height="12" viewBox="0 0 26 13" fill="none">
      <rect
        x="1"
        y="1"
        width="21"
        height="11"
        rx="3"
        stroke="white"
        strokeWidth="1.5"
      />
      <rect x="3" y="3" width="17" height="7" rx="1.5" fill="white" />
      <rect x="23" y="4" width="2" height="5" rx="1" fill="white" />
    </svg>
  );
}
