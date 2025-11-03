"use client";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Basic",
    price: "$49",
    features: ["∞ text", "100 audio", "no video"],
  },
  {
    title: "Plus",
    price: "$69",
    features: ["∞ text", "∞ audio", "5 video"],
    highlight: true,
  },
  {
    title: "Pro",
    price: "$99",
    features: ["∞ text", "∞ audio", "12 video"],
  },
];

const Plans = () => {
  return (
    <section id="plans" className="relative py-40 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="[font-family:var(--font-heading)] text-4xl md:text-5xl mb-20 text-[#2b2530]"
        >
          Choose your plan
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`rounded-[2rem] p-10 backdrop-blur-2xl border transition-all duration-300 ${
                p.highlight
                  ? "bg-gradient-to-b from-[#fff6f8]/80 to-[#fffdfb]/60 border-[#f55c93]/50 shadow-[0_10px_50px_rgba(245,92,147,0.15)]"
                  : "bg-white/50 border-[#e4b2c0]/40 shadow-[0_10px_40px_rgba(245,92,147,0.08)]"
              }`}
            >
              <h4 className="[font-family:var(--font-heading)] text-2xl mb-4">{p.title}</h4>
              <p className="[font-family:var(--font-body)] text-4xl mb-6 text-[#f55c93] font-semibold">
                {p.price}
              </p>
              <ul className="mb-8 space-y-2">
                {p.features.map((f, idx) => (
                  <li key={idx} className="[font-family:var(--font-body)] text-base opacity-80">
                    • {f}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 rounded-full text-white font-medium shadow-md"
                style={{
                  background:
                    "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
                }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
