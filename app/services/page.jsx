"use client";

import { useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Header from "@/components/ui/Header";

const servicesObject = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I am a motivated BSCS student of Virtual University, passionate about MERN stack Web Development.",
    href: "#",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I am a motivated BSCS student of Virtual University, passionate about Frontend Web Development.",
    href: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleClick = (index) => {
    // Toggle same card or switch to new one
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <>
    {/* <div className="lg:hidden xl:hidden ml-[280px] mt-1"><Header/></div> */}
      
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-y-auto max-h-[80vh] pb-4"
        >
          {servicesObject.map((services, index) => {
            const isActive = activeCard === index;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                onClick={() => handleClick(index)}
                className={`flex flex-col justify-center gap-6 group p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  isActive ? "bg-white/5" : ""
                }`}
              >
                {/* Top */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full flex justify-between items-center"
                >
                  <div
                    className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-outline text-transparent transition-all duration-500 ${
                      isActive ? "text-[#00ff99]" : "group-hover:text-[#00ff99]"
                    }`}
                  >
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className={`w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] rounded-full transition-all duration-500 flex justify-center items-center ${
                      isActive
                        ? "bg-[#00ff99] -rotate-45"
                        : "bg-white group-hover:bg-[#00ff99] hover:-rotate-45"
                    }`}
                  >
                    <BsArrowDownRight className="text-black text-xl sm:text-2xl md:text-3xl" />
                  </Link>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, ease: "easeOut" }}
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white transition-all duration-500 ${
                    isActive ? "text-[#00ff99]" : "group-hover:text-[#00ff99]"
                  }`}
                >
                  {services.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, ease: "easeIn" }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60"
                >
                  {services.description}
                </motion.p>

                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
   </>
  );
};

export default Services;
