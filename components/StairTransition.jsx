"use client";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Stairs from "./Stairs";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

 const StairTransition = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log("✅ Stair Transition rendered on", pathname);
  }, [pathname]);

  return (
    <>
         <AnimatePresence mode="wait">
       <div 
       key={pathname}>
       <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
        <Stairs />
       </div>
       <motion.div className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          initial={{opacity:1}} animate={{opacity:0, transition:
            {
            delay: 0.6, duration:0.4 , ease:"easeInOut"}, 
            }}/>
      </div>
       </AnimatePresence>
     
   </>  
);
};

export default StairTransition;
