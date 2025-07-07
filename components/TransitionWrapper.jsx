"use client";
import { usePathname } from "next/navigation";
import PageTransition from "./PageTransition";

const TransitionWrapper = ({ children }) => {
  const pathname = usePathname();

  return (
    <PageTransition pathname={pathname}>
      {children}
    </PageTransition>
  );
};

export default TransitionWrapper;
