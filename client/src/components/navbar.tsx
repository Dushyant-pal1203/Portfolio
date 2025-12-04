import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Logo from "/icons/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["WORK", "ABOUT", "CONTACT"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-white/5"
          : "mix-blend-difference"
      }`}
    >
      <Link href="/">
        <motion.span
          className="text-xl font-bold font-heading tracking-tighter text-white hover:opacity-70 transition-opacity cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center gap-2">
            <span>
              <img src={Logo} alt="Profile" className="w-15 h-10" />
            </span>{" "}
            DUSHYANT PAL<span className="text-primary">.</span>
          </span>
        </motion.span>
      </Link>

      <div className="hidden md:flex gap-1">
        {navItems.map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="relative px-4 py-2 text-sm font-medium tracking-widest text-white group"
          >
            <span className="relative z-10">{item}</span>
            <motion.span
              className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1 }}
              initial={{ scale: 0.9 }}
            />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 text-black flex items-center justify-center text-sm font-medium tracking-widest transition-opacity z-20">
              {item}
            </span>
          </motion.a>
        ))}
      </div>

      <motion.a
        href="#contact"
        className="hidden md:block relative overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 block px-6 py-2 text-sm font-bold border border-white/20 text-white group-hover:text-black transition-colors duration-300">
          LET'S TALK
        </span>
        <motion.span
          className="absolute inset-0 bg-primary"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.a>
    </motion.nav>
  );
}
