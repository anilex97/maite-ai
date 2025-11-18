"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BackgroundGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Градиентные облака */}
      <motion.div
        className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full blur-[160px]"
        style={{ background: "rgba(245, 92, 147, 0.35)" }}
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 20, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[180px]"
        style={{ background: "rgba(255, 243, 168, 0.4)" }}
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[30%] right-[25%] w-[500px] h-[500px] rounded-full blur-[140px]"
        style={{ background: "rgba(228, 178, 192, 0.35)" }}
        animate={{ x: [0, -20, 20, 0], y: [0, 20, -10, 0] }}
        transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 pointer-events-none bg-[url('/Rectangle.svg')] bg-repeat opacity-30 mix-blend-overlay"></div>

      <Image
        src="/Rectangle.svg"
        alt="noise texture"
        fill
        sizes="100vw"
        className="object-cover pointer-events-none"
      />
    </div>
  );
}
