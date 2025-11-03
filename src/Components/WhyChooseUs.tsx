"use client";
import { motion } from "framer-motion";

const reasons = [
  "Minimum therapy cost per month: $500–600",
  "You have to adapt to therapist’s schedule",
  "Feeling judged even when therapist hides it",
  "Problem remains unresolved",
  "No real emotional support",
  "Session ends and you're alone again",
];

const WhyChooseUs = () => {
  return (
    <section
      id="why"
      className="relative py-40 px-6 bg-transparent"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="[font-family:var(--font-heading)] text-4xl md:text-5xl mb-16 text-[#2b2530]"
        >
          Why People Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="relative p-8 rounded-[2rem] bg-white/60 backdrop-blur-2xl border border-[#e4b2c0]/40 shadow-[0_10px_40px_rgba(245,92,147,0.08)] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#fff6fa]/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <p className="[font-family:var(--font-body)] text-lg leading-relaxed opacity-90 relative z-10">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
