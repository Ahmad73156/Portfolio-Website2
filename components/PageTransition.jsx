"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import StairTransition from "./StairTransition";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <StairTransition />

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 30 }} // starts slightly lower and invisible
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1, // waits for stair transition to finish (adjust timing)
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
