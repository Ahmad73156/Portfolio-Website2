"use client";
import Link from "next/link";
import NavBar from "../NavBar";
import MobileNav from "../MobileNav";
import { Button } from "./button";
import { motion } from "framer-motion";

const letters = "Ahmad Raza.".split("");

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white  ">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO: Wavy + Color Animated Letters */}
        <Link href="/">
          <h1 className="flex text-xl xl:text-5xl font-bold leading-tight ml-[50px] items-center gap-[2px] text-[#00ff89] overflow-hidden lg:mt-[-15px] lg:ml-2">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                animate={{
                  y: [0, -6, 0], // vertical wave
                  color: ["#00ff89", "#00e286", "#00ff89"], // pulsing color
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.28, // delay per letter
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </Link>

        {/* Desktop Nav & Hire Me Button */}
        <div className="hidden md:flex xl:flex items-center lg:mt-[-30px]">
          <NavBar />
          <Link href="/contact">
            <Button variant="outline" size="md" className="ml-12">
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className=" md:hidden lg:hidden xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
