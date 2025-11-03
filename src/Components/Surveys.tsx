"use client";
import { motion } from "framer-motion";

const stats = [
  {
    value: "20%",
    text: "Adults feel lonely most of the day",
    link: "https://www.psychiatry.org/news-room/news-releases/new-apa-poll-one-in-three-americans-feels-lonely-e",
  },
  {
    value: "10%",
    text: "Feel lonely daily",
    link: "https://news.gallup.com/poll/651881/daily-loneliness-afflicts-one-five.aspx",
  },
  {
    value: "62%",
    text: "US working women report burnout",
    link: "https://www.statista.com/statistics/1383784/us-employees-moderate-levels-of-burnout-by-gender/",
  },
  {
    value: "42%",
    text: "Cite affordability as reason for not seeking therapy",
    link: "https://beaminghealth.com/article/therapy-statistics-you-need-to-know",
  },
  {
    value: "29%",
    text: "Therapy clients report therapist devaluing the client",
    link: "https://www.tandfonline.com/doi/full/10.1080/10503307.2023.2226813#d1e438",
  },
];

const Surveys = () => {
  return (
    <section id="surveys" className="relative py-40 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="[font-family:var(--font-heading)] text-4xl md:text-5xl mb-16 text-[#2b2530]"
        >
          Surveys
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stats.map((s, i) => (
            <motion.a
              href={s.link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-10 rounded-[2rem] bg-white/50 backdrop-blur-xl border border-[#e4b2c0]/30 shadow-[0_10px_40px_rgba(245,92,147,0.05)] hover:shadow-[0_10px_50px_rgba(245,92,147,0.15)] transition-all duration-300"
            >
              <h3
                className="[font-family:var(--font-heading)] text-5xl font-semibold mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #f55c93, #e4b2c0, #fff3a8)",
                }}
              >
                {s.value}
              </h3>
              <p className="[font-family:var(--font-body)] text-lg opacity-80 leading-relaxed">
                {s.text}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Surveys;
