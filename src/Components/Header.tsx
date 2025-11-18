"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Why Us", href: "#why" },
    { label: "Research", href: "#research" },
    { label: "Avatars", href: "#avatars" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      <div className="bg-white/80 backdrop-blur-md border-2 border-[#2b2530]/10 rounded-full shadow-sm px-8 py-4 flex items-center justify-between">
        {/* Логотип */}
        <Link href="#hero" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Maite Logo"
            width={120}
            height={36}
            className="h-9 w-auto"
          />
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex gap-10 text-[17px] font-normal [font-family:var(--font-body)]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#2b2530] hover:text-[#f55c93] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA кнопка */}
        <motion.a
          href="#plans"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-block px-10 py-3 rounded-full text-white font-medium text-[16px] shadow-md bg-gradient-to-r from-[#ffc1d4] to-[#f55c93]"
        >
          Join Now
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
