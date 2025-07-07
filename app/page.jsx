"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import Image from "next/image";
import Stats from "@/components/Stats";
import Header from "@/components/ui/Header";
import MobileNav from "@/components/MobileNav";


export default function HomePage() {
  return (
    <>
      {/* ✅ ADD HEADER HERE */}
      {/* <div className="lg:hidden xl:hidden ml-[280px] mt-1"><MobileNav/></div> */}
      {/* <Header/> */}

      <div className="h-screen overflow-y-auto lg:overflow-y-visible text-white lg:mt-[-240px] bg-gray-900">

        <section className="min-h-[1100px] flex flex-col justify-center items-center">
          <div className="container mx-auto px-4 sm:mt-[-230px]">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-24 gap-12 xl:gap-0 py-10">
              
              {/* ✅ TEXT SECTION */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center xl:text-left order-2 xl:order-none px-4 sm:px-6 md:px-8 lg:px-16 xl:px-0 xl:ml-20 2xl:ml-40 max-w-2xl"
              >
                <span className="block text-base text-white mb-2">
                  Software Developer
                </span>

                <h1 className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[50px] font-semibold leading-tight">
                  Hello I'm <br />
                  <span className="text-[#00ff89]">Ahmad Raza</span>
                </h1>

              <motion.p
  className="mt-2"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 2.8 }}
>
  As a BSCS student at Virtual University, I specialize in frontend development
  with a strong focus on building responsive, accessible, and user-friendly
  interfaces using React and Tailwind CSS. My projects include a secure notes app,
  a dynamic news platform, and an e-commerce site with image uploads and
  authentication — all crafted with attention to UI/UX. I'm passionate about
  translating ideas into clean, interactive web experiences that delight users and
  deliver value.
</motion.p>

                <div className="flex flex-col xl:flex-row items-center gap-8 mt-[0px]">
                  <a href="/Ahmad_Raza_Resume.pdf" download>
  <Button
    variant="outline"
    size="lg"
    className="uppercase flex items-center gap-2 bg-[#00ff97] text-black hover:bg-[#00e286] transition mt-3"
  >
    <span>Download Cv</span>
    <FiDownload className="text-xl" />
  </Button>
</a>


                  <div className="mb-20 xl:mb-0 flex justify-center  xl:justify-start">
  <Social
    containerStyles="flex gap-6"
    iconStyles="w-8 h-8 border border-[#00ff89] rounded-full flex justify-center items-center text-[#00ff89] text-base hover:bg-[#00ff89] hover:text-primary transition-all duration-500"
  />
</div>

                </div>
              </motion.div>

              {/* ✅ IMAGE SECTION */}
              <div className="order-1 md:mt-[200px] lg:mt-[-40px] xl:order-none mb-8 xl:mb-0 relative flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeIn", delay: 0.1 }}
                  className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] lg:w-[360px] lg:h-[360px] xl:w-[380px] xl:h-[380px] 2xl:w-[400px] 2xl:h-[400px] flex items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4, ease: "easeInOut" }}
                    className="rounded-full overflow-hidden w-full h-full"
                  >
                    <Image
                      src="/assets/No26.jpeg"
                      alt="Ahmad Raza"
                      quality={100}
                      width={300}
                      height={100}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </motion.div>

                  {/* Animated SVG Ring */}
                  <motion.svg
                    className="absolute w-full h-full"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="48"
                      stroke="#00ff99"
                      strokeWidth="2"
                      fill="transparent"
                      initial={{ strokeDasharray: "10 10" }}
                      animate={{
                        strokeDasharray: ["10 10", "4 4", "20 10"],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                      }}
                    />
                  </motion.svg>
                </motion.div>
              </div>
            </div>
          </div>
          <Stats/>
        </section>
      </div>
    </>
  );
}
