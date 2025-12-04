import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "INVENTORY SYSTEM",
    category: "Inventory & Stock Management System",
    description:
      "A real-time inventory management system with automated stock tracking, low-stock alerts, and multi-warehouse support. Features an intuitive dashboard, role-based access control, and optimized API architecture for fast and reliable operations.",
    technologies: ["React", "Node.js", "PostgreSQL", "WebGL", "FHIR"],
    year: "2025",
    color: "#F59E0B",
    stats: { patients: "200K+", accuracy: "99.7%", hospitals: "50+" },
    liveUrl: "https://inventory-system-h2u5.onrender.com/",
    codeUrl: "https://github.com/Dushyant-pal1203/Inventory_system.git",
  },
  {
    id: "02",
    title: "GOLDBAZZAR",
    category: "Invest in DigitalGold & Silver",
    description:
      "A modern digital investment platform for buying and selling 24K gold and silver with real-time price tracking.Built with a smooth, app-like user experience featuring instant transactions, live market charts, automated portfolio insights, and bank-grade data security.Designed for trust, speed, and simplicity—bringing digital bullion investment to everyday users.",
    technologies: ["Next.js", "Three.js", "GSAP", "Sanity CMS"],
    year: "2025",
    color: "#8B5CF6",
    stats: { views: "1M+", awards: "3", bounce: "< 20%" },
    liveUrl: "https://goldbazzar.in/",
    codeUrl: "https://gitlab.hashstudioz.com/gold_bazzar/marketing-web.git",
  },
  {
    id: "03",
    title: "MOTONEXA",
    category: "Automotive Parts Sourcing Platform",
    description:
      "A high-performance automotive parts sourcing platform built with real-time procurement insights. Features live inventory tracking, intelligent supplier matching, and instant pricing updates powered by WebSocket streams. Optimized data flow enables smooth, low-latency interactions even under heavy load, providing buyers and suppliers with a seamless sourcing experience.",
    technologies: ["React", "TypeScript", "D3.js", "WebSocket", "Redis"],
    year: "2024",
    color: "#D1F608",
    stats: { users: "50K+", uptime: "99.9%", performance: "< 50ms" },
    liveUrl: "https://motonexa.com",
    codeUrl:
      "https://gitlab.hashstudioz.com/motonexa/front-end/frontend-app.git",
  },
  {
    id: "04",
    title: "HASHSTUDIOZ",
    category: "AI, IoT & Cloud Solutions Provider",
    description:
      "A multidisciplinary tech studio crafting intelligent digital products powered by cloud, AI, blockchain, and IoT. HashStudioz blends engineering finesse with thoughtful design to deliver seamless, scalable, and future-proof software experiences for global brands.",
    technologies: ["Next.js", "Python", "Stable Diffusion", "Ethereum"],
    year: "2024",
    color: "#06B6D4",
    stats: { artworks: "100K+", artists: "5K+", volume: "$2M+" },
    liveUrl: "https://www.hashstudioz.com/",
    codeUrl: "/",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -100 : 100, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ x, opacity, scale }}
      className="group relative border-t border-border py-12 md:py-16"
    >
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}08, transparent)`,
        }}
      />

      <div className="grid lg:grid-cols-12 gap-8 relative">
        {/* Left Column - Number & Title */}
        <div className="lg:col-span-1">
          <motion.span className="text-4xl font-mono text-muted-foreground group-hover:text-primary transition-colors font-light">
            {project.id}
          </motion.span>
        </div>

        <div className="lg:col-span-5">
          <motion.h3
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white transition-all duration-500 mb-4"
            whileHover={{ x: 10 }}
          >
            <span className="group-hover:opacity-0 transition-opacity duration-300">
              {project.title}
            </span>
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: project.color }}
            >
              {project.title}
            </span>
          </motion.h3>

          <div className="flex items-center gap-4 text-sm">
            <span className="text-primary uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{project.year}</span>
          </div>
        </div>

        {/* Middle Column - Description & Tech */}
        <div className="lg:col-span-4">
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key}>
                <span
                  className="block text-lg font-bold text-white"
                  style={{ color: project.color }}
                >
                  {value}
                </span>
                <span className="text-[10px] font-mono uppercase text-muted-foreground">
                  {key}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Actions */}
        <div className="lg:col-span-2 flex flex-row lg:flex-col justify-end items-end gap-4">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white text-sm hover:border-primary hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="font-medium">Live</span>
          </motion.a>

          <motion.a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 text-muted-foreground text-sm hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="font-medium">Code</span>
          </motion.a>
        </div>
      </div>

      {/* Progress Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-primary origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-32 bg-background relative">
      {/* Decorative Corner */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-primary/10" />

      <div className="container mx-auto px-6">
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
            Selected Work
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white"
          >
            Projects that
            <br />
            <span className="text-muted-foreground">define my craft</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground max-w-md text-lg leading-relaxed self-end"
          >
            A curated selection of projects where creativity meets technical
            excellence. Each one represents a unique challenge solved with
            passion and precision.
          </motion.p>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          <div className="border-t border-border" />
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white hover:border-primary hover:text-primary transition-colors group"
          >
            <span className="font-bold tracking-wider">VIEW ALL PROJECTS</span>
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
