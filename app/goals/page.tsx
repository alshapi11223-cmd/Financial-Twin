'use client';

type GoalStatus = 'track' | 'warning';
type GoalIconType = 'car' | 'fund' | 'wallet';

type Goal = {
  id: number;
  title: string;
  icon: GoalIconType;
  current: string;
  target: string;
  remaining: string;
  duration: string;
  progress: number;
  status: GoalStatus;
};

const goals: Goal[] = [
  {
    id: 1,
    title: 'شراء سيارة',
    icon: 'car',
    current: '18,000',
    target: '40,000',
    remaining: '22,000',
    duration: '14 شهر',
    progress: 55,
    status: 'track',
  },
  {
    id: 2,
    title: 'صندوق الطوارئ',
    icon: 'fund',
    current: '8,000',
    target: '12,000',
    remaining: '4,000',
    duration: '8 أشهر',
    progress: 67,
    status: 'warning',
  },
  {
    id: 3,
    title: 'الادخار الشهري',
    icon: 'wallet',
    current: '1,800',
    target: '2,000',
    remaining: '5,000',
    duration: 'شهران',
    progress: 60,
    status: 'track',
  },
];

/* زر الرجوع */
function BackIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5L16 12L9 19"
        stroke="#FAFAFB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* السهم الوردي داخل بطاقات الأهداف */
function SmallArrowIcon() {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 2L3.5 9L10.5 16"
        stroke="#FF9D8E"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* الأيقونة الأصلية بجانب عنوان التقدم العام */
function ChartIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.793 4L14.293 2.5L15 3.2055L13.5 4.706L12.793 4ZM8 10.25L5.5 7.7695L6.295 6.9845L8 8.6745L11.705 5L12.5 5.7895L8 10.25Z"
        fill="white"
      />
      <path
        d="M2 14V12.7065L5.207 9.5L4.5 8.7925L2 11.2925V1H1V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H15V14H2Z"
        fill="white"
      />
    </svg>
  );
}

/* سهم حالة الهدف: على المسار */
function TrackIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.375 14.25L6.53125 10.0938L9.5 13.0625L16.625 5.9375"
        stroke="#65E6D0"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4688 5.9375H16.625V10.0938"
        stroke="#65E6D0"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* مثلث يحتاج انتباه */
function WarningIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 2.375L17.2188 16.625H1.78125L9.5 2.375Z"
        stroke="#FFC234"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 7.125V11.2812"
        stroke="#FFC234"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9.5" cy="14.25" r="0.8" fill="#FFC234" />
    </svg>
  );
}

/* أيقونة لم يبدأ */
function NotStartedIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9.5"
        cy="9.5"
        r="7.5"
        stroke="#B8C8DA"
        strokeWidth="1.4"
      />
      <circle cx="6.3" cy="9.5" r="0.9" fill="#B8C8DA" />
      <circle cx="9.5" cy="9.5" r="0.9" fill="#B8C8DA" />
      <circle cx="12.7" cy="9.5" r="0.9" fill="#B8C8DA" />
    </svg>
  );
}

/* أيقونة السيارة الأصلية */
function CarIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.781 8.27441H16.5935C16.1559 8.27441 15.7771 8.51488 15.5711 8.86816H3.57138L5.12997 4.71191H9.46851V3.52441H5.12997C4.88845 3.52517 4.65285 3.59919 4.45429 3.73669C4.25572 3.87418 4.10355 4.06869 4.01788 4.29451L2.52519 8.27441H1.15601V9.46191H2.34351V14.8057C2.34351 15.46 2.8761 15.9932 3.53101 15.9932V17.7744H4.71851V15.9932H14.2185V17.7744H15.406V15.9932C16.0603 15.9932 16.5935 15.46 16.5935 14.8057V9.46191H17.781V8.27441ZM3.53101 14.8057V13.0244H5.31226V11.8369H3.53101V10.0557H15.406V11.8369H13.6248V13.0244H15.406V14.8057H3.53101Z"
        fill="#FAFAFB"
      />
      <path
        d="M7.11255 11.8399H11.8625V13.0274H7.11255V11.8399ZM17.5376 1.49976L13.6248 5.41257L12.087 3.87476L11.2498 4.71194L13.6248 7.08694L18.3748 2.33694L17.5376 1.49976Z"
        fill="#FAFAFB"
      />
    </svg>
  );
}

/* أيقونة صندوق الطوارئ الأصلية */
function FundIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0625 13.0625L10.0938 10.1175L11.0378 9.18531L13.0625 11.1922L17.4622 6.82812L18.4062 7.76625L13.0625 13.0625ZM14.25 1.1875H3.5625C2.90938 1.1875 2.375 1.72188 2.375 2.375V10.8656C2.375 13.1812 3.62187 15.3187 5.64062 16.5062L8.90625 18.4062L12.1125 16.5062C12.6587 16.1975 13.1456 15.7997 13.5731 15.3544L12.7656 14.5469C12.4153 14.9091 12.0175 15.2238 11.5781 15.4969L8.90625 17.1L6.23438 15.4969C4.57188 14.5469 3.5625 12.7656 3.5625 10.8656V2.375H14.25V5.34375H15.4375V2.375C15.4375 1.72188 14.9031 1.1875 14.25 1.1875Z"
        fill="white"
      />
    </svg>
  );
}

/* أيقونة المحفظة الأصلية */
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

function GoalIcon({ type }: { type: GoalIconType }) {
  if (type === 'car') return <CarIcon />;
  if (type === 'fund') return <FundIcon />;

  return <WalletIcon />;
}

/* شعار الريال الأصلي */
function RiyalIcon() {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.36633 2.59339C10.0415 1.83554 10.4564 1.4953 11.2713 1.06514V13.6848L9.36633 14.0784V2.59339Z"
        fill="#FAFAFB"
      />
      <path
        d="M15.4529 8.93793C15.8478 8.10434 15.8943 7.73386 16 6.87871L1.39805 10.0494C1.05179 10.8207 0.940326 11.2518 0.886964 12.0176L15.4529 8.93793Z"
        fill="#FAFAFB"
      />
      <path
        d="M15.4529 12.8033C15.8478 11.9697 15.8943 11.5992 16 10.744L9.43602 12.1334C9.38956 12.8975 9.44292 13.2895 9.38956 14.0552L15.4529 12.8033Z"
        fill="#FAFAFB"
      />
      <path
        d="M15.4529 16.668C15.8478 15.8345 15.8943 15.464 16 14.6088L10.0168 15.9077C9.7148 16.3245 9.52895 17.0191 9.38956 17.92L15.4529 16.668Z"
        fill="#FAFAFB"
      />
      <path
        d="M5.95136 15.3519C6.53213 14.6341 7.13614 13.7311 7.5543 12.9901L0.51109 14.5167C0.164822 15.2881 0.0533618 15.7192 0 16.4849L5.95136 15.3519Z"
        fill="#FAFAFB"
      />
      <path
        d="M5.64935 1.52825C6.32448 0.770398 6.73938 0.430158 7.5543 0V13.0364L5.64935 13.4301V1.52825Z"
        fill="#FAFAFB"
      />
    </svg>
  );
}

/* دائرة التقدم */
function ProgressCircle() {
  const size = 98;
  const stroke = 5.12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const yellowLength = circumference * 0.15;

  return (
    <div
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        flexShrink: 0,
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* الدائرة الخضراء */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#65E6A3"
          strokeWidth={stroke}
        />

        {/* الجزء الأصفر أعلى اليسار */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#FFC234"
          strokeWidth={stroke}
          strokeDasharray={`${yellowLength} ${circumference - yellowLength}`}
          strokeLinecap="butt"
          transform={`rotate(210 ${size / 2} ${size / 2})`}
        />
      </svg>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#FAFAFB',
            fontSize: '27px',
            fontWeight: 600,
            lineHeight: 1,
            direction: 'ltr',
          }}
        >
          85%
        </span>

        <span
          style={{
            marginTop: '5px',
            color: 'rgba(250,250,251,0.65)',
            fontSize: '7px',
          }}
        >
          إجمالي التقدم
        </span>
      </div>
    </div>
  );
}

function GoalCard({ goal }: { goal: Goal }) {
  const isWarning = goal.status === 'warning';
  const statusColor = isWarning ? '#FFC234' : '#65E6D0';

  return (
    <article
      style={{
        position: 'relative',
        width: '350px',
        height: '127px',
        flexShrink: 0,
        overflow: 'hidden',
        border: '1px solid #364153',
        borderRadius: '14px',
        backgroundColor: '#0A466A',
        boxSizing: 'border-box',
      }}
    >
      {/* عنوان البطاقة */}
      <div
        style={{
          position: 'absolute',
          top: '11px',
          right: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
        }}
      >
        <GoalIcon type={goal.icon} />

        <h3
          style={{
            margin: 0,
            color: '#FAFAFB',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          {goal.title}
        </h3>
      </div>

      {/* شريط التقدم */}
      <div
        style={{
          position: 'absolute',
          top: '44px',
          left: '15px',
          width: '318px',
          height: '21px',
          display: 'flex',
          alignItems: 'center',
          gap: '9px',
          direction: 'ltr',
        }}
      >
        <RiyalIcon />

        <div
          style={{
            position: 'relative',
            width: '291px',
            height: '7px',
            overflow: 'visible',
            borderRadius: '999px',
            backgroundColor: '#052C48',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: `${goal.progress}%`,
              height: '7px',
              borderRadius: '999px',
              backgroundColor: '#FF9D8E',
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '-3px',
              right: `${goal.progress}%`,
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              backgroundColor: '#FAFAFB',
              transform: 'translateX(50%)',
            }}
          />

          <span
            style={{
              position: 'absolute',
              top: '-21px',
              right: `${goal.progress}%`,
              transform: 'translateX(50%)',
              color: '#FAFAFB',
              fontSize: '8px',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              direction: 'rtl',
            }}
          >
            المتبقي {goal.remaining}
          </span>
        </div>
      </div>

      {/* المبلغ والمدة */}
      <div
        style={{
          position: 'absolute',
          top: '67px',
          right: '16px',
          textAlign: 'right',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <RiyalIcon />

          <span
            style={{
              color: '#FAFAFB',
              fontSize: '15px',
              fontWeight: 500,
              direction: 'ltr',
              whiteSpace: 'nowrap',
            }}
          >
            {goal.target} / {goal.current}
          </span>
        </div>

        <p
          style={{
            margin: '4px 0 0',
            color: 'rgba(250,250,251,0.65)',
            fontSize: '11px',
            fontWeight: 400,
          }}
        >
          المدة المتوقعة: {goal.duration}
        </p>
      </div>

      {/* السهم الوردي داخل الكرت وتحت الشريط */}
      <button
        type="button"
        aria-label={`تفاصيل ${goal.title}`}
        style={{
          position: 'absolute',
          top: '71px',
          left: '18px',
          width: '18px',
          height: '20px',
          padding: 0,
          border: 0,
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <SmallArrowIcon />
      </button>

      {/* حالة الهدف في أسفل اليسار */}
      <div
        style={{
          position: 'absolute',
          left: '17px',
          bottom: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          whiteSpace: 'nowrap',
          direction: 'ltr',
        }}
      >
        {/* الأيقونة في أقصى اليسار */}
        {isWarning ? <WarningIcon /> : <TrackIcon />}

        <span
          style={{
            color: '#FAFAFB',
            fontSize: '10px',
            fontWeight: 400,
            direction: 'rtl',
          }}
        >
          حالة الهدف:
        </span>

        <span
          style={{
            color: statusColor,
            fontSize: '10px',
            fontWeight: 600,
            direction: 'rtl',
          }}
        >
          {isWarning ? 'يحتاج انتباه' : 'على المسار'}
        </span>
      </div>
    </article>
  );
}

export default function GoalsPage() {
  return (
    <main
      dir="rtl"
      style={{
        width: '100%',
        minHeight: '100vh',
        margin: 0,
        overflowX: 'hidden',
        backgroundColor: '#02253D',
        color: '#FAFAFB',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '375px',
          minHeight: '812px',
          margin: '0 auto',
          paddingTop: '84px',
          paddingBottom: '24px',
          overflow: 'hidden',
          backgroundColor: '#02253D',
          boxSizing: 'border-box',
        }}
      >
        {/* زر الرجوع */}
        <button
          type="button"
          aria-label="الرجوع"
          style={{
            position: 'absolute',
            top: '24px',
            right: '18px',
            zIndex: 10,
            width: '43px',
            height: '43px',
            padding: 0,
            border: 0,
            borderRadius: '50%',
            backgroundColor: '#211D46',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <BackIcon />
        </button>

        {/* العنوان والوصف */}
        <header
          style={{
            width: '350px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              margin: 0,
              color: '#FAFAFB',
              fontSize: '22px',
              fontWeight: 600,
              lineHeight: 1.25,
              textAlign: 'center',
            }}
          >
            أهدافك بعد تطبيق الخطة
          </h1>

          <p
            style={{
              margin: '7px auto 0',
              maxWidth: '340px',
              color: 'rgba(250,250,251,0.73)',
              fontSize: '10px',
              fontWeight: 400,
              lineHeight: 1.6,
              textAlign: 'center',
            }}
          >
            تطبيق هذه الخطة لم يؤثر على هدف السيارة فقط، بل انعكس أيضاً على
            تقدم أهدافك المالية الأخرى.
          </p>
        </header>

        {/* كرت التقدم العام */}
        <section 
          style={{
            position: 'relative',
            width: '350px',
            height: '160px',
            margin: '10px auto 0',
            border: '1px solid #364153',
            borderRadius: '14px',
            backgroundColor: '#0A466A',
            boxSizing: 'border-box',
          }}
        >
      {/* عنوان الكرت */}
<div
  style={{
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '4px',
    marginBottom: '8px',
    direction: 'ltr',
  }}
>
  <h2
    style={{
      margin: 0,
      fontSize: '12px',
      fontWeight: 600,
      color: '#FAFAFB',
      whiteSpace: 'nowrap',
    }}
  >
    التقدم العام للأهداف
  </h2>

  <ChartIcon />
</div>

{/* محتوى الكرت: القائمة والدائرة متقاربة */}
<div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '28px',
    paddingTop: '4px',
    direction: 'ltr',
  }}
>
  {/* القائمة */}
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '120px',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        direction: 'ltr',
      }}
    >
      <span
        style={{
          width: '26px',
          fontSize: '10px',
          fontWeight: 700,
          color: '#FAFAFB',
          textAlign: 'left',
        }}
      >
        85%
      </span>

      <span
        style={{
          fontSize: '10px',
          color: '#FAFAFB',
          whiteSpace: 'nowrap',
          direction: 'rtl',
        }}
      >
        على المسار
      </span>

      <TrackIcon />
    </div>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        direction: 'ltr',
      }}
    >
      <span
        style={{
          width: '26px',
          fontSize: '10px',
          fontWeight: 700,
          color: '#FAFAFB',
          textAlign: 'left',
        }}
      >
        15%
      </span>

      <span
        style={{
          fontSize: '10px',
          color: '#FAFAFB',
          whiteSpace: 'nowrap',
          direction: 'rtl',
        }}
      >
        يحتاج انتباه
      </span>

      <WarningIcon />
    </div>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        direction: 'ltr',
      }}
    >
      <span
        style={{
          width: '26px',
          fontSize: '10px',
          fontWeight: 700,
          color: '#FAFAFB',
          textAlign: 'left',
        }}
      >
        0%
      </span>

      <span
        style={{
          fontSize: '10px',
          color: '#FAFAFB',
          whiteSpace: 'nowrap',
          direction: 'rtl',
        }}
      >
        لم يبدأ
      </span>

      <NotStartedIcon />
    </div>
  </div>

  {/* الدائرة */}
  <ProgressCircle />
</div>
        </section>
        {/* بطاقات الأهداف */}
        <section
          style={{
            width: '350px',
            margin: '14px auto 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </section>

        {/* الزر السفلي */}
        <button
          type="button"
          style={{
            display: 'block',
            width: '335px',
            height: '56px',
            margin: '10px auto 0',
            border: 0,
            borderRadius: '16px',
            backgroundColor: '#FF9D8E',
            color: '#552C31',
            fontSize: '16px',
            fontWeight: 400,
            cursor: 'pointer',
          }}
        >
          تعديل بيانات المحاكاة
        </button>
      </div>
    </main>
  );
}