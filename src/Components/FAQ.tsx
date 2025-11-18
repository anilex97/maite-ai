"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Maite different from therapy?",
      answer: "Maite provides 24/7 AI-powered emotional support that's more affordable and accessible than traditional therapy, while maintaining complete privacy."
    },
    {
      question: "How is my data protected?",
      answer: "We use end-to-end encryption and never share your personal data. All conversations remain completely private and confidential."
    },
    {
      question: "How are payments processed?",
      answer: "We use secure payment processing through industry-standard providers. All transactions are encrypted and your financial data is never stored on our servers."
    },
    {
      question: "Can I change or cancel my plan anytime?",
      answer: "Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "Can I use Maite in different messengers?",
      answer: "Absolutely! Maite works seamlessly across Facebook Messenger, WhatsApp, and Telegram. Use it wherever you're most comfortable."
    },
    {
      question: "Does Maite offer emotional crisis support?",
      answer: "While Maite provides emotional support, it's not a replacement for crisis intervention. If you're in crisis, please contact emergency services or a crisis hotline."
    },
    {
      question: "What languages are supported?",
      answer: "Currently, Maite supports English with plans to add more languages soon. Stay tuned for updates!"
    }
  ];

  return (
    <section id="faq" className="relative px-6 md:px-16 py-20 md:py-32 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="[font-family:var(--font-heading)] text-5xl md:text-6xl mb-16 md:mb-24 text-[#2b2530]"
      >
        Frequently Asked
        <br />
        Questions
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-b border-[#2b2530]/20 pb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl [font-family:var(--font-body)] text-[#2b2530] pr-4">
                  {faq.question}
                </span>
                <Plus 
                  className={`w-6 h-6 text-[#f55c93] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-[#2b2530]/70 [font-family:var(--font-body)] text-base md:text-lg"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-12 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-[#f55c93]/30 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-[#f55c93]/20 animate-spin-slow"></div>
              <div className="relative text-center px-8">
                <div className="text-pink-400 mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm [font-family:var(--font-body)] text-[#2b2530]/70 uppercase tracking-wider">
                  Watch How It Works
                </p>
              </div>
            </div>
          </motion.div>

          <motion.a
            href="#plans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-[#f55c93] to-[#ff7bad] flex items-center justify-center text-white text-2xl md:text-3xl [font-family:var(--font-heading)] shadow-2xl text-center px-8"
          >
            Choose
            <br />
            the plan
          </motion.a>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-[#f55c93]/30 bg-white/40 backdrop-blur-sm flex items-center justify-center text-[#2b2530] text-2xl md:text-3xl [font-family:var(--font-heading)] shadow-lg text-center px-8"
          >
            Ask a
            <br />
            Question
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
