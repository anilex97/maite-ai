"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-32 min-h-screen"
    >
      <div className="max-w-xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="[font-family:var(--font-heading)] text-5xl md:text-6xl leading-tight mb-6 text-[#2b2530]"
        >
          Your Perfect Conversation Partner
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="[font-family:var(--font-body)] text-lg md:text-xl opacity-80 leading-relaxed mb-10"
        >
          World’s first service where you chat with a personal AI companion in your messenger via text, voice, and video — no new apps to install.
        </motion.p>

        <motion.a
          href="#why"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
          style={{
            background:
              "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
          }}
        >
          Join Now
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 md:mt-0 md:w-[45%] flex justify-center"
      >
        <div className="rounded-[2.5rem] overflow-hidden backdrop-blur-2xl border border-[#e4b2c0]/40 shadow-[0_10px_40px_rgba(245,92,147,0.15)] bg-white/40">
          <video
            src="/videos/maite_intro.mp4"
            controls
            autoPlay
            loop
            muted
            className="rounded-[2.5rem] w-full max-w-md"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
