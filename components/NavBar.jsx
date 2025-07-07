"use client";
import { Pointer } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav   style={{
        marginLeft: "",  // ✅ camelCase
        gap: "16px",           // ✅ valid spacing
        display: "flex",       // ✅ only this needed
      }} className="capitalize font-medium " >
      {links.map((link, index) => {
        const isActive = pathname === link.path;

        const baseStyle = {
          // borderBottom: "2px solid",
          transition: "all 0.3s ease",
          cursor: "pointer",
          
        };

        const activeStyle = {
          color: "#00ff89",
          // borderColor: "#00ff89",
        };

        const inactiveStyle = {
          color: "white",
          // borderColor: "#ffffff",
        };

        const hoverStyle = {
          // color: "#00ff89",
           borderColor: "#00ff89",
           cursor: Pointer
        };

        return (
          <Link
            href={link.path}
            key={index}
            style={{
              ...baseStyle,
              ...(isActive ? activeStyle : inactiveStyle),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = hoverStyle.color;
              e.currentTarget.style.borderColor = hoverStyle.borderColor;
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = inactiveStyle.color;
                e.currentTarget.style.borderColor = inactiveStyle.borderColor;
              }
            }}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
