"use client"

import CardTop from "@/components/cardTop"
import Circle from "@/components/gradientCircle";
import Image from "next/image";
import { MdOutlineDesignServices } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, [])

  return (
    <>
      <Circle></Circle>
      <div className="flex z-10 flex-col sm:flex-row w-[95%] h-fit p-4 sm:w-1/2 mx-auto mt-20">
        <div className="flex flex-col w-full sm:w-[60%]">
          <p className="text-4xl">Hey, I'm Na. 👋</p>
          <p className="mt-3" data-aos="fade-up">Welcome to my world. Every line of code, design, and project I develop is a reflection of my passion in this portfolio world.</p>
        </div>
        <div className="flex justify-left justify-center items-center w-full mt-3 sm:mt-0 sm:w-[40%]">
          <CardTop></CardTop>
        </div>
      </div>

      <div className="w-[95%] z-10 p-4 sm:w-1/2 mx-auto">
        <p className="font-semibold mb-3">About.</p>
        <p className="text-[grey]" data-aos="fade-up">
          I craft <span className="text-[white] underline cursor-pointer">digital experiences</span> that are uniquely tailored to your brand and vision. By blending creativity with functionality and embracing the <span className="text-[white] underline cursor-pointer">latest design trends</span>, I ensure every project is both visually striking and <span className="text-white underline cursor-pointer">seamlessly efficient</span>.
        </p>
      </div>

      <div className="flex flex-col sm:gap-2 gap-10 sm:w-1/2 w-[95%] h-auto p-4 mx-auto mt-5">
        <p className="font-semibold text-lg mb-3">Work Experience.</p>

        {/* EXP CARD */}
        {[
          {
            icon: <MdOutlineDesignServices className="text-4xl" />,
            title: "Graphic Design Artist",
            company: "SMK Negeri 5 Malang - Partime",
            date: "Sep 2021 - Sep 2022",
          },
          {
            icon: <MdOutlineDesignServices className="text-4xl" />,
            title: "Illustrator Artist & Graphic Designer",
            company: "Rait Visual Works - Intern",
            date: "Jul 2023 - Jul 2024",
          },
          {
            icon: <Image src={"/devcom.jpeg"} alt="Logo" width={35} height={35} />,
            title: "Design Developer Community Division",
            company: "Developer Community UMM",
            date: "Agu 2024 - Present",
          },
          {
            icon: <Image src={"/dari.jpeg"} alt="Logo" width={35} height={35} />,
            title: "Member of the CMO Digital Art and Information Division",
            company: "Digital Art and Information (DARI) - Intern",
            date: "Jan 2025 - Present",
          },
        ].map((exp, index) => (
          <div key={index} data-aos="fade-up" className="w-full flex sm:mt-3 flex-wrap items-center">
            <div className="w-[8%] hidden h-full sm:flex justify-start items-center">{exp.icon}</div>
            <div className="flex flex-col justify-center items-start w-[65%] min-w-0">
              <p className="font-semibold break-words">{exp.title}</p>
              <p className="text-sm text-[grey] break-words">{exp.company}</p>
            </div>
            <div className="w-[27%] text-sm flex justify-center items-center">{exp.date}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:gap-2 gap-10 sm:w-1/2 w-[95%] h-auto mb-10 p-4 mx-auto mt-5">
        <p className="font-semibold text-lg mb-3">Education.</p>

        {/* EDU CARD */}
        {[
          {
            icon: <Image src={"/smk5.png"} alt="Logo" width={35} height={35} />,
            title: "SMK NEGERI 5 MALANG",
            jurusan: "Animation",
            date: "2021-2024",
          },
          {
            icon: <Image src={"/umm.png"} alt="Logo" width={35} height={35} />,
            title: "University of Muhammadiyah Malang",
            jurusan: "Informatics Engineering",
            date: "2024-2028",
          },
        ].map((exp, index) => (
          <div key={index} data-aos="fade-up" className="w-full flex sm:mt-3 flex-wrap items-center">
            <div className="w-[8%] hidden h-full sm:flex justify-start items-center">{exp.icon}</div>
            <div className="flex flex-col justify-center items-start w-[65%] min-w-0">
              <p className="font-semibold break-words">{exp.title}</p>
              <p className="text-sm text-[grey] break-words">{exp.jurusan}</p>
            </div>
            <div className="w-[27%] text-sm flex justify-center items-center">{exp.date}</div>
          </div>
        ))}
      </div>

    </>
  )
}
