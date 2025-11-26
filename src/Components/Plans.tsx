"use client";
import { motion } from "framer-motion";

const Plans = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const plans = [
    {
      name: "Basic",
      price: "$49.00",
      features: ["∞ Text", "100 Audio", "No Video"],
      gradient: "from-[#ffc1d4]/40 to-[#ffd4c4]/50",
      checkColor: "text-[#ffd4c4]",
      popular: false
    },
    {
      name: "Plus",
      price: "$69.00",
      features: ["∞ Text", "∞ Audio", "5 Video"],
      gradient: "from-[#f55c93] to-[#ff7bad]",
      checkColor: "text-white",
      popular: true
    },
    {
      name: "Premium",
      price: "$99.00",
      features: ["∞ Text", "∞ Audio", "12 Video"],
      gradient: "from-[#ffd89c] to-[#ffb67a]",
      checkColor: "text-[#ffb67a]",
      popular: false
    }
  ];

  const handleBuy = async (planName: string) => {
    try {
      const res = await fetch(`${API_URL}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planName })
      });

      const data = await res.json();

      if (data?.url) {
        window.location.href = data.url;
      }

      console.log("Ответ backend:", data);
    } catch (err) {
      console.error("Ошибка:", err);
    }
  };

  return (
    <section id="plans" className="relative px-6 md:px-16 py-20 md:py-32 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-block bg-white/60 backdrop-blur-sm border-2 border-[#f55c93]/30 rounded-full px-8 py-4">
          <span className="text-5xl font-bold text-[#f55c93] [font-family:var(--font-heading)] mr-4">
            02
          </span>
          <span className="text-2xl md:text-3xl [font-family:var(--font-heading)] text-[#2b2530]">
            Choose Your Plan
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-200 px-6 py-2 rounded-full text-sm font-medium text-[#2b2530] z-10">
                Popular
              </div>
            )}
            
            <div className={`bg-gradient-to-br ${plan.gradient} rounded-3xl p-8 md:p-10 shadow-lg min-h-[500px] flex flex-col ${plan.popular ? 'border-2 border-white' : ''}`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-3xl md:text-4xl font-bold [font-family:var(--font-heading)] ${plan.popular ? 'text-white' : 'text-[#2b2530]'}`}>
                  {plan.name}
                </h3>
                <div className="flex gap-1">
                  {[1, 2].map((i) => (
                    <svg key={i} className={`w-8 h-8 ${plan.checkColor}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  ))}
                </div>
              </div>

              <div className={`text-4xl md:text-5xl font-bold [font-family:var(--font-heading)] mb-2 ${plan.popular ? 'text-white' : 'text-[#2b2530]'}`}>
                {plan.price}
              </div>
              <div className={`text-lg mb-8 [font-family:var(--font-body)] ${plan.popular ? 'text-white/90' : 'text-[#2b2530]/70'}`}>
                Rate
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-lg [font-family:var(--font-body)] text-[#2b2530]">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleBuy(plan.name)}
                className={`w-full py-4 rounded-full font-medium text-lg shadow-lg bg-gradient-to-r ${
                  plan.popular 
                    ? 'from-[#ffc1d4] to-[#f55c93] text-white' 
                    : 'from-[#ffc1d4] to-[#f55c93] text-white'
                }`}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
