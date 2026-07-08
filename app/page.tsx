"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="bg-[#015267] min-h-screen flex justify-center items-center">
      <div className="relative w-[375px] h-[812px] bg-[#02253D] overflow-hidden">

        <div className="flex flex-col items-center mt-[250px]">
          <Image
            src="/Logo NAWA1.png"
            alt="NAWA Logo"
            width={216}
            height={184}
            priority
          />

          <p className="mt-3 text-[8px] text-[#FAFAFB]/65">
            Powered by Alinma bank
          </p>

          <p className="mt-14 text-[14px] text-center leading-[24px]">
            <span className="text-[#F2F2F7]">
              افهم أثر قراراتك المالية
            </span>

            <span className="text-[#00C8B3]">
              {" "}قبل تنفيذها
            </span>
          </p>
        </div>

        <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2">
          <button
            onClick={() => router.push("/onboarding")}
            className="
              w-[335px] h-[56px]
              rounded-[18px]
              bg-[#FF9D8E]
              text-[#02253D]
              text-[16px]
              font-semibold
              active:scale-95
            "
          >
            ابدأ
          </button>
        </div>

      </div>
    </main>
  );
}