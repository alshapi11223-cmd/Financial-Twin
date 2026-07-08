"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Onboarding() {
  const [currentPage, setCurrentPage] = useState(0);

  const router = useRouter();

  const pages = [
    {
      title: "استكشف مستقبلك المالي",
      text: "اكتشف كيف يمكن لقراراتك المالية اليوم أن تؤثر على تحقيق",
      highlight: "أهدافك المستقبلية",
    },
    {
      title: "محاكاة قراراتك قبل اتخاذها",
      text: "جرّب سيناريوهات مختلفة، مثل شراء سيارة أو زيادة مدخراتك أو الحصول على تمويل، قبل",
      highlight: "اتخاذ القرار",
    },
    {
      title: "توصيات مصممة لك",
      text: "احصل على توصيات ذكية وخطة مالية",
      highlight: "تناسب أهدافك",
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      router.push("/terms");
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="bg-[#015267] min-h-screen flex justify-center items-center">
      <div className="relative w-[375px] h-[812px] bg-[#02253D] overflow-hidden">

        {/* زر الرجوع */}
        {currentPage > 0 && (
          <button
            onClick={prevPage}
            className="
              absolute top-12 right-8
              w-11 h-11
              rounded-full
              bg-[#25384D]
              text-white
              text-2xl
              z-20
              transition-all duration-200
              active:scale-90
            "
          >
            ‹
          </button>
        )}

        {/* محتوى الصفحة مع الأنيميشن */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
            className="
              flex flex-col
              items-center
              text-center
              px-8
              pt-[230px]
            "
          >
            <h1 className="text-white text-[26px] font-semibold leading-[40px]">
              {pages[currentPage].title}
            </h1>

            <p className="mt-12 text-[14px] leading-[28px] text-[#7E848D]">
              {pages[currentPage].text}
              <br />

              <span className="text-[#01A9A5]">
                {pages[currentPage].highlight}
              </span>
            </p>

            {/* المؤشرات */}
            <div className="flex flex-row-reverse gap-2 mt-14">
              {[2, 1, 0].map((dot) => (
                <div
                  key={dot}
                  className={`transition-all duration-300 rounded-full ${
                    currentPage === dot
                      ? "w-5 h-2 bg-[#2D7FFF]"
                      : "w-2 h-2 bg-[#596674]"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* زر التالي */}
        <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2">
          <button
            onClick={nextPage}
            className="
              w-[335px]
              h-[56px]
              rounded-[18px]
              bg-[#FF9D8E]
              text-[#02253D]
              text-[16px]
              font-semibold
              transition-all duration-200
              active:scale-95
              active:translate-y-[2px]
            "
          >
            {currentPage === pages.length - 1 ? "متابعة" : "التالي"}
          </button>
        </div>
      </div>
    </main>
  );
}