"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const letters = "Ahmad Raza.".split("");

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false); // Close the Sheet on link click
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#00ff89]" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="flex text-xl font-bold leading-tight justify-center items-center gap-[2px] text-[#00ff89] overflow-hidden">
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  animate={{
                    y: [0, -6, 0],
                    color: ["#00ff89", "#00e286", "#00ff89"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: index * 0.25,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8 mt-[-134px]">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={handleLinkClick}
              className={`${
                link.path === pathname
                  ? "text-[#00ff89] border-b-2 border-[#00ff89]"
                  : ""
              } text-xl capitalize hover:text-[#00ff89] transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
