"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-32 md:py-40 min-h-screen max-w-7xl mx-auto"
    >
      <div className="max-w-xl text-left mt-20 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="[font-family:var(--font-heading)] text-5xl md:text-6xl leading-tight mb-6 text-[#2b2530]"
        >
          Your Perfect
          <br />
          Conversation Partner
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="[font-family:var(--font-body)] text-lg md:text-xl leading-relaxed mb-10 text-[#2b2530]/80"
        >
          World's first service where you chat with a personal AI companion in
          your messenger via text, voice, and video — no new apps to install.
        </motion.p>

        <motion.a
          href="#plans"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-12 py-4 rounded-full font-medium text-white shadow-lg bg-gradient-to-r from-[#ffc1d4] to-[#f55c93]"
        >
          Join Now
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-16 md:mt-0 relative"
      >
        {/* Счетчик пользователей */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute -top-12 -left-16 bg-gradient-to-br from-pink-100/80 to-pink-200/60 backdrop-blur-sm rounded-full w-44 h-44 flex flex-col items-center justify-center shadow-lg z-10 border-2 border-white/50"
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-[#2b2530] [font-family:var(--font-heading)]">
              3318
            </div>
            <div className="text-base text-[#f55c93] font-medium [font-family:var(--font-body)] mt-1">
              users
            </div>
          </div>
        </motion.div>

        {/* Аватар с градиентным фоном */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-pink-100/30 to-purple-100/20 rounded-full blur-3xl"></div>
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-white/40 shadow-2xl">
            <Image
              src="/avatars/theo.jpg"
              alt="AI Avatar"
              width={420}
              height={420}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Play кнопка */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute bottom-8 -right-6 w-20 h-20 bg-gradient-to-r from-[#ffc1d4] to-[#f55c93] rounded-full flex items-center justify-center shadow-xl cursor-pointer z-10"
          >
            <svg
              className="w-8 h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
