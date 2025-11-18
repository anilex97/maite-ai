"use client";
import Image from "next/image";

const Footer = () => {
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Why Us", href: "#why" },
    { label: "Research", href: "#research" },
    { label: "Avatars", href: "#avatars" },
  ];

  return (
    <footer className="relative py-12 px-6 bg-gradient-to-b from-[#ffeef5]/30 to-[#ffeef5]/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto text-center">
        {/* Логотип */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.svg"
            alt="Maite Logo"
            width={140}
            height={42}
            className="opacity-90"
          />
        </div>

        {/* Дисклеймер */}
        <p className="text-sm text-[#2b2530]/70 max-w-2xl mx-auto mb-4 leading-relaxed [font-family:var(--font-body)]">
          Maite is not a medical or therapeutic service. If you are in crisis or need immediate help, please contact a licensed professional or local support line. We provide emotional companionship, not medical advice.
        </p>

        {/* Копирайт */}
        <p className="text-sm text-[#2b2530]/60 [font-family:var(--font-body)] mb-6">
          ©2025Maite. All rights reserved.
        </p>

        {/* Навигация */}
        <nav className="flex justify-center gap-8 [font-family:var(--font-body)]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-[#2b2530]/70 hover:text-[#f55c93] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
