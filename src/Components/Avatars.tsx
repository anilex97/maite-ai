"use client";
import { motion } from "framer-motion";

const avatars = [
  { name: "Luna", age: 26, gif: "/avatars/luna.jpg", phrase: "Hi! I'm Luna. Nice to meet you!" },
  { name: "Theo", age: 30, gif: "/avatars/theo.jpg", phrase: "Hey there! Let’s talk?" },
  { name: "Maya", age: 24, gif: "/avatars/maya.jpg", phrase: "Hello! How are you feeling today?" },
];

const Avatars = () => {
  return (
    <section id="avatars" className="relative py-40 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="[font-family:var(--font-heading)] text-4xl md:text-5xl mb-20 text-[#2b2530]"
        >
          Pick your avatar
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-16">
          {avatars.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative w-72 h-72 rounded-[2.5rem] overflow-hidden bg-white/50 backdrop-blur-xl border border-[#e4b2c0]/40 shadow-[0_10px_40px_rgba(245,92,147,0.08)]"
            >
              <img
                src={a.gif}
                alt={a.name}
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-[#2b2530]/60 flex flex-col items-center justify-center text-white text-center px-4"
              >
                <p className="[font-family:var(--font-heading)] text-2xl mb-1">{a.name}</p>
                <p className="[font-family:var(--font-body)] text-sm mb-2 opacity-80">
                  {a.age} y.o.
                </p>
                <p className="text-sm italic">{a.phrase}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Avatars;
