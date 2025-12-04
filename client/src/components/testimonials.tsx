import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Working with this design engineer was transformative for our product. The attention to detail and creative problem-solving exceeded our expectations. Our conversion rate increased by 47% after the redesign.",
    author: "Sarah Chen",
    role: "CEO",
    company: "TechVenture Labs",
    rating: 5
  },
  {
    quote: "Exceptional talent. They brought our brand vision to life with stunning animations and a user experience that our customers love. The code quality was impeccable and the project was delivered ahead of schedule.",
    author: "Michael Torres",
    role: "Head of Product",
    company: "Digital Horizons",
    rating: 5
  },
  {
    quote: "A rare combination of design sensibility and technical excellence. They understood our complex requirements and delivered a solution that was both beautiful and highly performant.",
    author: "Emily Watson",
    role: "Creative Director",
    company: "Artisan Studios",
    rating: 5
  },
];

const clients = [
  "GOOGLE", "STRIPE", "FIGMA", "NOTION", "VERCEL", "LINEAR"
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-secondary" />
      
      {/* Animated Mesh */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(209, 246, 8, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(209, 246, 8, 0.5) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-16 h-[1px] bg-primary" />
          <h2 className="text-xs font-mono text-primary tracking-widest uppercase">
            Client Testimonials
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white max-w-xl leading-tight"
          >
            Words from<br />
            <span className="text-primary">happy</span> clients
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-end max-w-md"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              I've had the pleasure of working with amazing teams and individuals who trusted me with their vision.
            </p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">5.0 Average Rating</span>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative bg-card border border-border p-8 hover:border-primary/30 transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/90 leading-relaxed mb-8 text-sm">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-bold text-primary text-lg">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h5 className="text-white font-bold">{testimonial.author}</h5>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clients.map((client, index) => (
              <motion.span
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#D1F608" }}
                className="text-2xl md:text-3xl font-bold text-white/20 hover:text-primary transition-colors cursor-default font-heading tracking-tight"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
