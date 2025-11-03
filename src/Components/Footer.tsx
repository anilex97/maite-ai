"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative py-20 px-6 text-center bg-transparent backdrop-blur-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.svg"
            alt="Maite Logo"
            width={120}
            height={40}
            className="opacity-80"
          />
        </div>

        <p className="text-sm text-[#2b2530]/70 max-w-xl mx-auto mb-6 leading-relaxed [font-family:var(--font-body)]">
          Maite is not a medical or therapeutic service. If you are in crisis or
          need immediate help, please contact a licensed professional or local
          support line. We provide emotional companionship, not medical advice.
        </p>

        <p className="text-xs text-[#2b2530]/50">
          © {new Date().getFullYear()} Maite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
