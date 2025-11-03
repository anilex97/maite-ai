"use client";
import { motion } from "framer-motion";

const stats = [
  {
    value: "20%",
    text: "of U.S. adults report feeling lonely most of the day — the highest in 2 years.",
  },
  {
    value: "30%",
    text: "experience loneliness at least once a week.",
  },
  {
    value: "10%",
    text: "feel lonely every single day.",
  },
  {
    value: "62%",
    text: "of working women report moderate or severe burnout — doubled in one year.",
  },
];

const Research = () => {
  return (
    <section
      id="research"
      className="relative py-40 px-6 bg-transparent overflow-hidden"
    >
      {/* === Дополнительные “облака света” для глубины === */}
      <motion.div
        className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full blur-[160px] bg-[#fff3a8]/30"
        animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] rounded-full blur-[180px] bg-[#f55c93]/25"
        animate={{ x: [0, -20, 30, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 40, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="[font-family:var(--font-heading)] text-4xl md:text-5xl mb-16 text-[#2b2530]"
        >
          Backed by Real Research
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-10 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-[#e4b2c0]/30 shadow-[0_10px_40px_rgba(245,92,147,0.05)]"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="[font-family:var(--font-heading)] text-6xl md:text-7xl font-semibold mb-6 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #f55c93, #e4b2c0, #fff3a8)",
                  textShadow: "0 0 30px rgba(245, 92, 147, 0.25)",
                }}
              >
                {item.value}
              </motion.h3>
              <p className="[font-family:var(--font-body)] text-lg opacity-80 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
