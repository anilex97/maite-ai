"use client";
import { motion } from "framer-motion";

const reasons = [
  "Up to 10 times cheaper than visit to therapist",
  "You won't be left alone with your problem",
  "Available any day, any time",
  "No one will judge you",
  "Confidential",
];

const WhyMaite = () => {
  return (
    <section id="why" className="relative py-40 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="[font-family:var(--font-heading)] text-4xl md:text-5xl mb-16 text-[#2b2530]"
        >
          Why MAITE?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {reasons.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="p-8 w-72 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-[#e4b2c0]/40 shadow-[0_10px_40px_rgba(245,92,147,0.08)]"
            >
              <p className="[font-family:var(--font-body)] text-lg opacity-90">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMaite;
