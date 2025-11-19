"use client";
import { motion } from "framer-motion";

const WhyMaite = () => {
  const benefits = [
    {
      number: "01",
      title: "Up to 10 times cheaper than visit to therapist",
      style: "solid" // полностью закрашенная
    },
    {
      number: "02",
      title: "You won't be left alone with your problem",
      style: "outline" // только граница
    },
    {
      number: "03",
      title: "Available any day, any time",
      style: "solid"
    },
    {
      number: "04",
      title: "People always judge. Maite doesn't judge anyone",
      style: "outline"
    },
    {
      number: "05",
      title: "You can be confident that your messages will remain private",
      style: "solid"
    },
    {
      number: "06",
      title: "Conversation is better than bottling up your feeling",
      style: "outline"
    }
  ];

  return (
    <section id="why" className="relative py-20 md:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="[font-family:var(--font-heading)] text-5xl md:text-6xl text-center mb-16 md:mb-24 text-[#2b2530]"
      >
        Why MAITE?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`
              ${benefit.style === 'solid' 
                ? 'bg-gradient-to-br from-[#ffc1d4]/30 to-[#ffd4c4]/40' 
                : 'bg-white/40 border-2 border-[#f55c93]/30'
              }
              backdrop-blur-sm rounded-3xl p-8 md:p-10 min-h-[180px] flex flex-col justify-center
            `}
          >
            <div className="text-5xl font-bold text-[#f55c93] [font-family:var(--font-heading)] mb-4">
              {benefit.number}
            </div>
            <p className="[font-family:var(--font-body)] text-lg text-[#2b2530] leading-relaxed">
              {benefit.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyMaite;
