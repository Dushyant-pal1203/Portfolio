import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useRef } from "react";
import ContactForm from "./contact-form";
import heroBg from "/images/background.jpg";

const socials = [
  { name: "TWITTER", url: "#" },
  { name: "GITHUB", url: "#" },
  { name: "LINKEDIN", url: "#" },
  { name: "INSTAGRAM", url: "#" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="bg-secondary py-5 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 " />
      <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-background z-10" />
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-80 grayscale scale-110"
          style={{ x: springX, y: springY }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="grid lg:grid-cols-2 gap-16 mb-20"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-16 h-px bg-primary" />
              <h2 className="text-xs font-mono text-primary tracking-widest uppercase">
                Get in Touch
              </h2>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[0.9]"
            >
              HAVE AN <br />
              <motion.span
                className="text-primary inline-block"
                whileHover={{ scale: 1.05, rotate: -1 }}
              >
                IDEA?
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground font-light mb-12 max-w-md"
            >
              I'm currently open for new opportunities and collaborations. Let's
              build something extraordinary together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              <motion.a
                href="mailto:hello@example.com"
                className="block text-2xl md:text-3xl font-bold text-white hover:text-primary transition-colors relative group w-fit"
                whileHover={{ x: 10 }}
              >
                hello@example.com
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <div className="flex flex-wrap gap-4 pt-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5, color: "#D1F608" }}
                    className="text-sm font-mono text-muted-foreground transition-colors px-4 py-2 border border-border hover:border-primary"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-8 text-xs font-mono text-muted-foreground uppercase tracking-widest"
        >
          <motion.div
            whileHover={{ color: "#ffffff" }}
            className="transition-colors"
          >
            © 2025 Portfolio
          </motion.div>
          <motion.div
            whileHover={{ color: "#D1F608" }}
            className="transition-colors"
          >
            Designed & Built with Passion By Dushyant Pal
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
