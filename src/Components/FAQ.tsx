"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  { q: "What makes Maite different from therapy?", a: "Maite offers emotional support and companionship, not medical or psychological treatment. It’s a space for connection and relief, anytime you need it." },
  { q: "How is my data protected?", a: "Your data is encrypted and never shared. We comply with global privacy standards (GDPR, CCPA)." },
  { q: "How are payments processed?", a: "All transactions are securely handled via Stripe with full PCI compliance." },
  { q: "Can I change or cancel my plan anytime?", a: "Yes. You can upgrade, downgrade, or cancel at any time with no hidden fees." },
  { q: "Can I use Maite in different messengers?", a: "Yes, Maite integrates with Telegram, WhatsApp, and FaceBook." },
  { q: "Does Maite offer emotional crisis support?", a: "No. If you are in crisis, please contact a licensed professional or local hotline." },
  { q: "What languages are supported?", a: "Currently English, with more languages coming soon." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-40 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="[font-family:var(--font-heading)] text-4xl md:text-5xl mb-16 text-[#2b2530]"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6 text-left">
          {faqItems.map((item, i) => (
            <div key={i} className="rounded-2xl bg-white/50 backdrop-blur-xl border border-[#e4b2c0]/40 p-6 shadow-[0_8px_30px_rgba(245,92,147,0.05)]">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="[font-family:var(--font-body)] text-lg font-medium text-[#2b2530]">
                  {item.q}
                </span>
                <span>{openIndex === i ? "–" : "+"}</span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="[font-family:var(--font-body)] text-base text-[#2b2530]/80 mt-4"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
