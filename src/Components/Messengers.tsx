"use client";
import { motion } from "framer-motion";

const messengers = [
  { name: "Telegram", icon: "/messengers/tg.svg" },
  { name: "WhatsApp", icon: "/messengers/wa.svg" },
  { name: "FaceBook", icon: "/messengers/fb.svg" },
];

const Messengers = () => {
  return (
    <section id="messengers" className="relative py-40 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="[font-family:var(--font-heading)] text-4xl md:text-5xl mb-20 text-[#2b2530]"
        >
          Choose your messenger
        </motion.h2>

        <div className="flex justify-center gap-16 flex-wrap">
          {messengers.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-24 h-24 p-6 rounded-full bg-white/60 backdrop-blur-xl border border-[#e4b2c0]/40 shadow-[0_10px_40px_rgba(245,92,147,0.08)] flex items-center justify-center">
                <img src={m.icon} alt={m.name} className="w-12 h-12" />
              </div>
              <p className="[font-family:var(--font-body)] text-lg text-[#2b2530]">{m.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Messengers;
