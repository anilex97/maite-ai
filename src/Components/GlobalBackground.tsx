"use client";
import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Базовый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff1f7] via-[#fff9f4] to-[#fffdfb]" />

      {/* Анимированные “облака” */}
      <motion.div
        className="absolute -top-40 -left-20 w-[800px] h-[800px] rounded-full blur-[200px] bg-[#f55c93]/25"
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0] }}
        transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[900px] h-[900px] rounded-full blur-[220px] bg-[#fff3a8]/30"
        animate={{ x: [0, -40, 20, 0], y: [0, 40, -20, 0] }}
        transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[25%] w-[700px] h-[700px] rounded-full blur-[180px] bg-[#e4b2c0]/30"
        animate={{ x: [0, 20, -30, 0], y: [0, -20, 30, 0] }}
        transition={{ repeat: Infinity, duration: 40, ease: "easeInOut" }}
      />
    </div>
  );
}
