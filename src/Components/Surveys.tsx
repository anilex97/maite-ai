"use client";
import { motion } from "framer-motion";

const Surveys = () => {
  const stats = [
    {
      percentage: "20%",
      description: "Adults feel lonely most of the day"
    },
    {
      percentage: "10%",
      description: "Feel lonely daily"
    },
    {
      percentage: "62%",
      description: "US working women report burnout"
    },
    {
      percentage: "42%",
      description: "Cite unaffordability as reason for not seeking therapy"
    }
  ];

  return (
    <section id="research" className="relative px-6 md:px-16 py-20 md:py-32 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="[font-family:var(--font-heading)] text-5xl md:text-6xl text-center mb-16 md:mb-24 text-[#2b2530]"
      >
        Scientific Surveys
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-6xl md:text-7xl font-bold [font-family:var(--font-heading)] mb-4"
              style={{
                WebkitTextStroke: '2px #f55c93',
                WebkitTextFillColor: 'transparent',
                color: '#f55c93'
              }}
            >
              {stat.percentage}
            </div>
            <p className="[font-family:var(--font-body)] text-base md:text-lg text-[#2b2530] leading-relaxed">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Surveys;
