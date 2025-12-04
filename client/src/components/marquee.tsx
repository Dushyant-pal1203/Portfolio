import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export default function Marquee({ items, speed = 20, className = "" }: MarqueeProps) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{
          x: [0, -50 * items.length + "%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {repeatedItems.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-8 px-8 text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground"
          >
            {item}
            <span className="w-2 h-2 bg-primary rotate-45" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
