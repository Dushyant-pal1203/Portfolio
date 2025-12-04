import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useRef, useEffect } from "react";
import heroBg from "@assets/generated_images/abstract_dark_gritty_texture_background.png";
import Marquee from "./marquee";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const textVariants = {
    hidden: { opacity: 0, y: 100, skewY: 5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-background"
    >
      {/* Animated Background Layers */}
      <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-background z-10" />
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40 grayscale scale-110"
          style={{ x: springX, y: springY }}
        />
      </motion.div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-4 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Spotlight Effect */}
      <motion.div
        className="absolute inset-0 z-5 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(209, 246, 8, 0.15), transparent 40%)`,
        }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-6 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Side Text Decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-linear-to-b from-transparent via-primary to-transparent" />
          <span className="text-[10px] font-mono tracking-widest text-primary rotate-90 whitespace-nowrap">
            SCROLL TO EXPLORE
          </span>
          <div className="w-px h-20 bg-linear-to-b from-transparent via-primary to-transparent" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-linear-to-b from-transparent via-white/50 to-transparent" />
          <span className="text-[10px] font-mono tracking-widest text-white/50 -rotate-90 whitespace-nowrap">
            BASED IN NYC
          </span>
          <div className="w-px h-20 bg-linear-to-b from-transparent via-white/50 to-transparent" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto px-6 text-center pt-20"
        style={{ y: y2, opacity, scale }}
      >
        <motion.div className="flex flex-col items-center overflow-hidden">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6 px-4 py-2 border border-primary/30 bg-primary/5"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-mono text-primary uppercase tracking-widest">
              Available for Projects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-primary font-mono text-xs md:text-sm tracking-[0.3em] mb-6 uppercase"
          >
            Design Engineer & Creative Developer
          </motion.h2>

          <div className="overflow-hidden">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] text-white tracking-tight"
            >
              CRAFTING
            </motion.h1>
          </div>

          <div className="overflow-hidden my-2">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] tracking-tight relative group cursor-default"
            >
              <span className="text-transparent text-stroke relative z-10 hover:text-primary transition-colors duration-700">
                DIGITAL
              </span>
              <motion.span
                className="absolute inset-0 bg-linear-to-r from-primary via-white to-primary bg-size-[200%_100%] bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                DIGITAL
              </motion.span>
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] text-white tracking-tight"
            >
              EXPERIENCES
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="max-w-2xl text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed font-light mt-10"
          >
            I'm a passionate design engineer who transforms complex ideas into
            elegant, high-performance web experiences. Specializing in React,
            WebGL, and creative coding to build products that captivate and
            convert.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-primary text-black font-bold text-sm tracking-wider relative overflow-hidden group"
            >
              <span className="relative z-10">VIEW MY WORK</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-white/30 text-white font-bold text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              GET IN TOUCH
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-20 pt-10 border-t border-white/10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
                className="text-center"
              >
                <motion.span
                  className="block text-4xl md:text-5xl font-display font-bold text-primary"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-2 block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Marquee Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 py-4 bg-background/50 backdrop-blur-sm"
      >
        <Marquee
          items={[
            "REACT",
            "NEXT.JS",
            "TYPESCRIPT",
            "WEBGL",
            "THREE.JS",
            "TAILWIND",
            "FRAMER MOTION",
            "FIGMA",
          ]}
          speed={30}
        />
      </motion.div>
    </section>
  );
}
