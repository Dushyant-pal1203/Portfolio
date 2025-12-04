import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2022 — Present",
    role: "Lead Design Engineer",
    company: "TechForward Studios",
    location: "New York, NY",
    description:
      "Leading a team of 5 developers building enterprise SaaS products. Architected design systems used across 12+ products. Increased team velocity by 40% through workflow optimization.",
    technologies: ["React", "TypeScript", "Next.js", "Figma"],
    highlight: true,
  },
  {
    period: "2020 — 2022",
    role: "Senior Frontend Developer",
    company: "Digital Dynamics",
    location: "San Francisco, CA",
    description:
      "Built high-performance web applications for Fortune 500 clients. Implemented real-time data visualization dashboards. Mentored junior developers and conducted code reviews.",
    technologies: ["Vue.js", "D3.js", "Node.js", "AWS"],
    highlight: false,
  },
  {
    period: "2019 — 2020",
    role: "Creative Developer",
    company: "Artisan Digital",
    location: "Los Angeles, CA",
    description:
      "Created award-winning interactive experiences for major brands. Developed WebGL-powered marketing campaigns. Collaborated with creative directors on visual storytelling.",
    technologies: ["Three.js", "GSAP", "WebGL", "Blender"],
    highlight: false,
  },
  {
    period: "2018 — 2019",
    role: "UI/UX Designer & Developer",
    company: "StartupHub",
    location: "Austin, TX",
    description:
      "Designed and built products from concept to launch. Conducted user research and usability testing. Established brand guidelines for 8+ early-stage startups.",
    technologies: ["React", "Sketch", "InVision", "Firebase"],
    highlight: false,
  },
];

const education = [
  {
    period: "2014 — 2018",
    degree: "B.S. Computer Science",
    school: "Stanford University",
    honors: "Magna Cum Laude",
  },
  {
    period: "2016",
    degree: "Design Thinking Certificate",
    school: "d.school Stanford",
    honors: "With Distinction",
  },
];

export default function Experience() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-linear-to-bl from-primary/5 to-transparent pointer-events-none" />

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
            Experience & Education
          </h2>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-20"
        >
          My journey in
          <br />
          <span className="text-muted-foreground">design & development</span>
        </motion.h3>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8 pb-4 border-b border-border">
              Work Experience
            </h4>

            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative border-l-2 pl-8 pb-12 last:pb-0 transition-colors duration-300 ${
                    exp.highlight
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      exp.highlight
                        ? "bg-primary border-primary"
                        : "bg-background border-border group-hover:border-primary group-hover:bg-primary/20"
                    }`}
                    whileHover={{ scale: 1.3 }}
                  />

                  {/* Period */}
                  <span className="text-xs font-mono text-primary mb-2 block">
                    {exp.period}
                  </span>

                  {/* Role & Company */}
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                    <h5 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {exp.role}
                    </h5>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Awards */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8 pb-4 border-b border-border">
              Education
            </h4>

            <div className="space-y-8 mb-16">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <span className="text-xs font-mono text-primary mb-1 block">
                    {edu.period}
                  </span>
                  <h5 className="text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h5>
                  <p className="text-muted-foreground text-sm">{edu.school}</p>
                  <span className="text-xs text-primary/70 mt-1 block">
                    {edu.honors}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 border border-border bg-card hover:border-primary transition-colors group"
            >
              <h5 className="text-sm font-bold text-white mb-2">
                Want to know more?
              </h5>
              <p className="text-xs text-muted-foreground mb-4">
                Download my complete resume for a detailed look at my experience
                and skills.
              </p>
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-primary text-sm font-bold"
              >
                Download Resume
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Awards */}
            <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-12 mb-6 pb-4 border-b border-border">
              Recognition
            </h4>

            <div className="space-y-4">
              {[
                "Awwwards SOTD 2023",
                "CSS Design Awards 2023",
                "FWA of the Day 2022",
                "Webby Honoree 2022",
              ].map((award, i) => (
                <motion.div
                  key={award}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-primary" />
                  {award}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
