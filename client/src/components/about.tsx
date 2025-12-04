import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profileImg from "/images/Aditya.jpeg";
import { MapPin, Calendar, Heart, Coffee, Code2, Zap } from "lucide-react";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "WebGL / Three.js", level: 88 },
  { name: "Node.js / Express", level: 85 },
  { name: "UI/UX Design", level: 90 },
  { name: "Figma / Design Tools", level: 93 },
];

const funFacts = [
  { icon: Coffee, value: "3,000+", label: "Cups of Coffee" },
  { icon: Code2, value: "500K+", label: "Lines of Code" },
  { icon: Zap, value: "100+", label: "All-Nighters" },
  { icon: Heart, value: "∞", label: "Passion for Craft" },
];

const interests = [
  "Generative Art",
  "Typography",
  "3D Graphics",
  "Music Production",
  "Photography",
  "Architecture",
  "Philosophy",
  "Minimalism",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const decorY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 bg-background overflow-hidden relative"
    >
      {/* Floating Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{ y: decorY }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(209, 246, 8, 0.5) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[20vw] font-display font-bold text-white/2 whitespace-nowrap">
          ABOUT ME
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-16 h-px bg-primary" />
          <h2 className="text-xs font-mono text-primary tracking-widest uppercase">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Image Side */}
          <motion.div
            ref={imageRef}
            className="relative"
            style={{ y: imageY, scale: imageScale }}
          >
            <motion.div
              className="aspect-3/4 relative z-10 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-full h-full relative"
                initial={{ filter: "grayscale(100%)" }}
                whileHover={{ filter: "grayscale(0%)" }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.2 }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-primary opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-40 h-40 border-t-2 border-l-2 border-primary z-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-40 h-40 border-b-2 border-r-2 border-white/20 z-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            />

            {/* Floating Labels */}
            <motion.div
              className="absolute -right-4 lg:-right-16 top-1/4 bg-primary text-black px-4 py-2 font-mono text-xs uppercase tracking-widest z-20"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Available for Work
            </motion.div>

            <motion.div
              className="absolute -left-4 lg:-left-5 bottom-2/4 sm:bottom-1/4 bg-card border border-border px-4 py-2 z-20"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3 text-primary" />
                <span>Delhi, India</span>
              </div>
            </motion.div>

            {/* Fun Facts below image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {funFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <fact.icon className="w-5 h-5 text-primary mb-2" />
                  <span className="block text-2xl font-bold text-white">
                    {fact.value}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {fact.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8 text-white">
                I bridge the gap between{" "}
                <motion.span
                  className="text-primary inline-block"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                >
                  design
                </motion.span>{" "}
                and{" "}
                <motion.span
                  className="text-primary inline-block"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                >
                  engineering
                </motion.span>
                .
              </h3>

              {/* Bio Paragraphs */}
              <div className="space-y-6 mb-10">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Hello! I'm a design engineer based in New York City with over
                  5 years of experience creating digital products that people
                  love. I believe that great design is invisible — it just
                  works.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  My journey started with a fascination for how things work. I
                  took apart computers, designed posters for local bands, and
                  taught myself to code at 14. This curiosity evolved into a
                  career where I get to solve complex problems through the lens
                  of both design and engineering.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  When I'm not pushing pixels or writing code, you'll find me
                  exploring new coffee shops, experimenting with generative art,
                  or contributing to open-source projects. I'm always looking
                  for the next challenge that will push my creative boundaries.
                </p>
              </div>

              {/* Skills with animated bars */}
              <div className="mb-10">
                <h4 className="text-xs font-mono text-muted-foreground mb-6 uppercase tracking-widest border-b border-border pb-2">
                  Technical Proficiency
                </h4>
                <div className="grid gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-muted overflow-hidden">
                        <motion.div
                          className="h-full bg-linear-to-r from-primary to-primary/50"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2 + index * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <h4 className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest border-b border-border pb-2">
                  Interests & Passions
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * index }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(209, 246, 8, 0.1)",
                        borderColor: "#D1F608",
                      }}
                      className="px-4 py-2 border border-border text-sm text-muted-foreground hover:text-white transition-all cursor-default"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
