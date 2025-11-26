"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useUserFlow } from "@/store/useUserFlow";

const Messengers = () => {
  const { avatar, plan, setMessenger } = useUserFlow();

  const messengers = [
    { name: "Facebook", icon: "/messengers/fb.png" },
    { name: "WhatsApp", icon: "/messengers/wa.png" },
    { name: "Telegram", icon: "/messengers/tg.png" },
  ];

  const handleMessengerPick = async (name: string) => {
    setMessenger(name);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/users`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: "New User",
            phoneNumber: "",
            emailAddress: "",
            telegramUsername: "",
            aiAvatar: avatar,
            plan: plan,
          }),
        }
      );

      if (!res.ok) {
        console.error("Error creating user");
        return;
      }

      // redirect to telegram bot
      window.location.href = "https://t.me/YOUR_BOT_HERE";
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section
      id="messengers"
      className="relative px-6 md:px-16 py-20 md:py-32 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-block bg-white/60 backdrop-blur-sm border-2 border-[#f55c93]/30 rounded-full px-8 py-4">
          <span className="text-5xl font-bold text-[#f55c93] [font-family:var(--font-heading)] mr-4">
            03
          </span>
          <span className="text-2xl md:text-3xl [font-family:var(--font-heading)] text-[#2b2530]">
            Choose Your Messenger
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-pink-100/40 to-pink-200/30 backdrop-blur-sm border-2 border-[#f55c93]/20 rounded-3xl p-12 md:p-16 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            {messengers.map((messenger, index) => (
              <motion.div
                key={messenger.name}
                onClick={() => handleMessengerPick(messenger.name)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <Image
                    src={messenger.icon}
                    alt={messenger.name}
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Messengers;
