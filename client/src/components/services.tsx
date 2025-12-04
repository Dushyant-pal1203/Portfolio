import { motion } from "framer-motion";
import { Code2, Palette, Zap, Globe, Sparkles, Layers } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "CREATIVE DEVELOPMENT",
    description:
      "Building immersive web experiences with cutting-edge technologies. From complex animations to real-time 3D graphics, I bring your vision to life with clean, performant code.",
    features: [
      "React / Next.js",
      "WebGL / Three.js",
      "Custom Animations",
      "Performance Optimization",
    ],
    color: "#D1F608",
  },
  {
    icon: Palette,
    title: "UI/UX DESIGN",
    description:
      "Crafting intuitive interfaces that balance aesthetics with functionality. Every pixel is intentional, every interaction is meaningful.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "#8B5CF6",
  },
  {
    icon: Zap,
    title: "PERFORMANCE",
    description:
      "Speed is a feature. I optimize every aspect of your application for lightning-fast load times and smooth 60fps interactions.",
    features: [
      "Core Web Vitals",
      "Bundle Optimization",
      "Lazy Loading",
      "CDN Strategy",
    ],
    color: "#06B6D4",
  },
  {
    icon: Globe,
    title: "FULL-STACK",
    description:
      "End-to-end development from database architecture to pixel-perfect frontends. Complete solutions that scale with your business.",
    features: [
      "Node.js / Express",
      "PostgreSQL / MongoDB",
      "REST / GraphQL APIs",
      "Cloud Deployment",
    ],
    color: "#F59E0B",
  },
  {
    icon: Sparkles,
    title: "MOTION DESIGN",
    description:
      "Bringing interfaces to life with purposeful animations. Micro-interactions that delight users and reinforce your brand personality.",
    features: ["Framer Motion", "GSAP", "Lottie", "SVG Animations"],
    color: "#EC4899",
  },
  {
    icon: Layers,
    title: "CONSULTING",
    description:
      "Strategic guidance on technology decisions, architecture planning, and team workflows. Let's solve complex problems together.",
    features: [
      "Tech Strategy",
      "Code Reviews",
      "Team Training",
      "Architecture",
    ],
    color: "#10B981",
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

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
            What I Do
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white max-w-2xl leading-tight"
          >
            Services that drive
            <br />
            <span className="text-primary">results</span> and create
            <br />
            <span className="text-muted-foreground">impact</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground max-w-md text-lg leading-relaxed self-end"
          >
            I offer a comprehensive range of services tailored to bring your
            digital vision to life. Each project is approached with meticulous
            attention to detail and a commitment to excellence.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card border border-border p-8 hover:border-primary/50 transition-all duration-500"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${service.color}10, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <motion.div
                className="w-14 h-14 flex items-center justify-center border border-border mb-6 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <service.icon
                  className="w-6 h-6 text-white group-hover:text-primary transition-colors"
                  style={{ color: service.color }}
                />
              </motion.div>

              {/* Content */}
              <h4 className="text-xl font-bold text-white mb-4 font-heading tracking-tight group-hover:text-primary transition-colors">
                {service.title}
              </h4>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Corner Accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${service.color}20, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
