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
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Логотип */}
        <Link href="#hero" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Maite Logo"
            width={130}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex gap-8 text-[17px] font-medium [font-family:var(--font-body)]">
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
          href="#avatars"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-block px-6 py-2 rounded-full text-white font-semibold text-sm shadow-md"
          style={{
            background:
              "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
          }}
        >
          Join Now
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
