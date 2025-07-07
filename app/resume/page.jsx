"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { motion } from "framer-motion";
import MobileNav from "@/components/MobileNav";
import Header from "@/components/ui/Header";

const About = {
  description:
    "As a BSCS student at Virtual University, I specialize in frontend development with a strong focus on building responsive, accessible, and user-friendly interfaces using React and Tailwind CSS. My projects include a secure notes app, a dynamic news platform, and an e-commerce site with image uploads and authentication — all crafted with attention to UI/UX. I'm passionate about translating ideas into clean, interactive web experiences that delight users and deliver value.",
  info: [
    { fieldName: "Name", fieldValue: "Ahmad Raza" },
    { fieldName: "Phone", fieldValue: "(+92) 3134636785" },
    { fieldName: "Nationality", fieldValue: "Pakistan" },
    { fieldName: "Email", fieldValue: "ahmadraza71331@gmail.com" },
    { fieldName: "Language", fieldValue: "English , Urdu" },
  ],
};

const Education = {
  items: [
    {
      institution: "Fauji Foundation Model School",
      degree: "Matric in Computer Science",
      duration: "2008-2020",
    },
    {
      institution: "Cantt Public Boys College Lahore",
      degree: "Intermediate (FSc Pre-Engineering)",
      duration: "2020-2022",
    },
    {
      institution: "Virtual University of Pakistan",
      degree: "BS in Computer Science",
      duration: "2022 - Present",
    },
  ],
};

const Skills = {
  skillLists: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Resume = () => {
  return (
    <>
    {/* <div className="lg:hidden xl:hidden ml-[280px] mt-1"> <Header/></div> */}
       {/* <div className="sm:hidden md:hidden lg:block xl:block"><Header/></div>  */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.6 } }}
      className="min-h-screen w-full px-4 py-12 overflow-y-auto"
    >
      <div className="container mx-auto w-full  max-h-[90vh]">
        <Tabs defaultValue="education" className="flex flex-col lg:flex-row gap-8">
          {/* Left Side Tabs */}
          <div className="w-full lg:w-[240px]">
            <TabsList className="flex lg:flex-col w-full gap-4">
              <TabsTrigger
                value="education"
                className="transition-all text-white font-semibold data-[state=active]:bg-[#00ff99] data-[state=active]:text-black w-full px-4 py-2 rounded text-left"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="transition-all text-white font-semibold data-[state=active]:bg-[#00ff99] data-[state=active]:text-black w-full px-4 py-2 rounded text-left"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="about"
                className="transition-all text-white font-semibold data-[state=active]:bg-[#00ff99] data-[state=active]:text-black w-full px-4 py-2 rounded text-left"
              >
                About Me
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Right Side Content */}
          <div className="flex-1 ">
            <TabsContent value="education">
              <motion.div initial="hidden" animate="visible" className="space-y-6">
                {Education.items.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    className="bg-white/10 p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base">
                      {edu.institution}
                    </p>
                    <p className="text-white/50 text-xs md:text-sm">
                      {edu.duration}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="skills">
  <motion.div
    initial="hidden"
    animate="visible"
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
  >
    {Skills.skillLists.map((skill, i) => (
      <motion.div
        key={i}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={i}
        className="flex flex-col items-center gap-2 p-4 rounded-lg shadow-md bg-white/10 hover:cursor-pointer relative group"
      >
        {/* ICON */}
        <div className="text-3xl sm:text-4xl text-[#00ff99]">
          {skill.icon}
        </div>

        {/* LABEL */}
        <p className="text-sm sm:text-base text-white">{skill.name}</p>

        {/* TOOLTIP */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#00ff99] text-black text-xs sm:text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 shadow-lg whitespace-nowrap">
          {skill.name}
        </div>
      </motion.div>
    ))}
  </motion.div>
</TabsContent>


            <TabsContent value="about">
              <motion.div initial="hidden" animate="visible" className="space-y-6  lg:mt-[-50px]">
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  className="text-white text-sm sm:text-base md:text-lg"
                >
                  {About.description}
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {About.info.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                      className="p-4 rounded-lg shadow-md bg-white/10"
                    >
                      <p className="text-white/50 text-sm">{item.fieldName}</p>
                      <p className="text-white text-base font-medium">{item.fieldValue}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  </>
  );
};

export default Resume;
