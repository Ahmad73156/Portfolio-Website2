import "./globals.css";
import { JetBrains_Mono as JetBrainsMono } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";

const jetbrainsMono = JetBrainsMono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Ahmad Raza | Portfolio",
  description: "Ahmad's personal portfolio site built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} bg-gray-900 text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
