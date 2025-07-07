"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const ProjectsObject = [
  {
    num: "01",
    category: "Frontend",
    title: "NewsApp",
    description:
      "This is a News App that fetches data from an API based on categories like General, Sports, Technology, etc.",
    stack: [
      { name: "HTML5" },
      { name: "Tailwind.css" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "/assets/NewsImage.png",
    live: "https://your-live-link.com",
    github: "https://github.com/your-username/news-app",
  },
  {
    num: "02",
    category: "MERN Stack",
    title: "iNotes Website",
    description:
      "This is an iNotes website with proper user CRUD, authentication, note creation, editing, and deletion using a cloud database.",
    stack: [
      { name: "HTML" },
      { name: "Tailwind.css" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Express JS" },
      { name: "MongoDB" },
    ],
    image: "/assets/iNotes.png",
    live: "https://your-live-link.com",
    github: "https://github.com/your-username/inotes",
  },
  {
    num: "03",
    category: "MERN Stack",
    title: "ECommerce Website",
    description:
      "A fully featured eCommerce site with an admin panel, user authentication, add to cart, and checkout functionality.",
    stack: [
      { name: "HTML5" },
      { name: "Tailwind.css" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Express JS" },
      { name: "MongoDB" },
    ],
    image: "/assets/ecommerce.png",
    live: "https://your-live-link.com",
    github: "https://github.com/your-username/ecommerce",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Portfolio Website",
    description:
      "This is my portfolio website built with Next.js and animated using Tailwind CSS transitions and Framer Motion.",
    stack: [
      { name: "HTML5" },
      { name: "TailwindCSS" },
      { name: "JavaScript" },
      { name: "Next JS" },
    ],
    image: "/assets/Portfolio.png",
    live: "https://your-live-link.com",
    github: "https://github.com/your-username/portfolio",
  },
];

const Work = () => {
  const [project, setProject] = useState(ProjectsObject[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(ProjectsObject[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.6 } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 sm:mt-[-56px]"
    >
      <div className="container mx-auto">
        {/* Desktop View */}
        <div className="hidden xl:flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left side content */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none  xl:mt-[-20px]">
            <div className="flex flex-col gap-[30px] h-[50%]">
             <motion.div
  key={project.num + "-heading"}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { delay: 1.3, duration: 0.6 } }}
  className="text-8xl font-extrabold"
  style={{
    color: "transparent",
    WebkitTextStroke: "1px #00ff99",
  }}
>
  {project.num}
</motion.div>

<motion.h2
  key={project.title + "-heading"}  // 👈 This forces remount
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.6,ease: "easeIn" } }}
  className="text-[42px] font-bold text-white capitalize"
>
  {project.category} Project
</motion.h2>

<motion.p
  key={project.title + "-desc"}  // 👈 Remounts on new project  and the Animation or motion css will applly again 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { delay: 1.7, duration: 0.6, ease: "easeIn" } }}
  className="text-white/60"
>
  {project.description}
</motion.p>

<motion.ul
  key={project.title + "-stack"}  // 👈 Triggers fresh motion same comment as in para tag 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { delay: 2.5, duration: 0.6, ease: "easeIn" } }}
  className="flex gap-4 flex-wrap"
>
  {project.stack.map((item, index) => (
    <li key={index} className="text-xl text-[#00ff99]">
      {item.name}
      {index !== project.stack.length - 1 && ","}
    </li>
  ))}
</motion.ul>

              <div className="border border-white/20" />
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-[#00ff99]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-[#00ff99]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side Swiper */}
          <div className="w-full xl:w-[55%] xl:mt-[-30px]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {ProjectsObject.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10" />
                    <motion.div
                    key={project.title + "-stack"}  // 👈 Triggers fresh motion same comment as in para tag 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { delay: 1, duration: 0.6, ease: "easeIn" } }}

                    className="relative w-full h-full">
                      <Image
                        src={item.image}
                        fill
                        className="object-cover"
                        alt={item.title}
                      />
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max"
                btnStyles="bg-[#00ff99] hover:bg-[#00e68a]  text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>

        {/* Mobile & Tablet View Swiper */}
        <div className="block mt-[-50px] xl:hidden">
          <Swiper
            direction="vertical"
            spaceBetween={20}
            slidesPerView={1}
            className="h-[560px]"
            onSlideChange={handleSlideChange}
          >
            {ProjectsObject.map((item, index) => (
              <SwiperSlide key={index} className="bg-white/5 rounded-lg overflow-hidden">
  <div className="p-4 flex flex-col gap-4">
    <Image
      src={item.image}
      width={600}
      height={300}
      className="rounded-lg"
      alt={item.title}
    />
    <div className="text-[#00ff99] text-4xl font-bold">
      {item.num} — {item.category}
    </div>
    <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
    <p className="text-white/60 text-sm">{item.description}</p>
    <ul className="flex flex-wrap gap-2 text-[#00ff99] text-sm">
      {item.stack.map((tech, i) => (
        <li key={i}>{tech.name}</li>
      ))}
    </ul>

    {/* GitHub and Live Buttons */}
    <div className="flex gap-4 mt-4">
      <Link href={item.live} target="_blank">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
           <TooltipTrigger className="group w-[50px] h-[50px] rounded-full bg-white/10 flex justify-center items-center">
  <BsArrowUpRight className="text-white text-2xl transition-transform duration-300 group-hover:-rotate-45 group-hover:text-[#00ff99]" />
</TooltipTrigger>

            <TooltipContent>
              <p>Live</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
      <Link href={item.github} target="_blank">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/10 flex justify-center items-center group">
              <BsGithub className="text-white text-2xl group-hover:text-[#00ff99]" />
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </div>
  </div>
</SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;