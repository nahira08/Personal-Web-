"use client";

import { useEffect, useState } from "react";

export default function Skill() {
    const [sr, setSr] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            import("scrollreveal").then((ScrollReveal) => {
                const srInstance = ScrollReveal.default({
                    duration: 800,
                    distance: "30px",
                    origin: "bottom",
                    easing: "ease-in-out",
                    reset: true,
                });

                setSr(srInstance);
            });
        }
    }, []);

    useEffect(() => {
        if (sr) {
            sr.reveal(".reveal-item", { interval: 50 });
        }
    }, [sr]);

    return (
        <div className="w-[95%] sm:w-1/2 p-4 mx-auto mt-5">
            <p className="text-lg font-semibold">Skills</p>
            <div className="flex flex-wrap gap-3 mt-5">
                {[
                    "C", "Java", "Javascript", "HTML", "CSS", "PHP", "Powerhell", "Python", "Cloudflare", "Vercel",
                    "Adobe Illustrator", "Figma", "Dribbble", "CLIPSTUDIOPAINT", "Framer", "Sketch", "Canva",
                    "Blender", "Aseprite", "Storybook", "Github"
                ].map((i, index) => (
                    <div key={index} className="reveal-item w-fit h-fit mt-2 py-1 px-3 bg-white text-black rounded-md flex justify-center items-center font-semibold cursor-pointer hover:bg-black hover:text-white transition-all">
                        {i}
                    </div>
                ))}
            </div>
        </div>
    );
}
