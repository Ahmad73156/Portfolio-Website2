"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/ui/Header";
import MobileNav from "@/components/MobileNav";
import TransitionWrapper from "@/components/TransitionWrapper";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const showMobileNav = ["/", "/contact", "/resume", "/services", "/work"].includes(pathname);

  return (
    <>
      <Header />
      {showMobileNav && (
        <div className="lg:hidden xl:hidden fixed top-4 right-4 z-50 mt-[16px] mr-[-13px]">
          <MobileNav />
        </div>
      )}
      <TransitionWrapper>{children}</TransitionWrapper>
    </>
  );
};

export default ClientLayout;
