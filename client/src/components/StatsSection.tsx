import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  label: string;
  description: string;
  duration: number;
}

const stats: StatItem[] = [
  {
    value: 400,
    label: "PROFESSIONALS",
    description: "Skilled professionals on our team. Our team brings together many professionals ready to take on any size challenge. We create a team that inspires trust.",
    duration: 2000
  },
  {
    value: 18,
    label: "AWARDS",
    description: "Construction quality awards. Our commitment has been recognized with awards and certifications. We are constantly working to improve and refine our projects.",
    duration: 1500
  },
  {
    value: 62,
    label: "CITIES",
    description: "Cities where we have left our mark. Our construction achievements span more than 62 cities. We are committed to contributing to the cities development.",
    duration: 1700
  },
  {
    value: 98,
    label: "PERCENT",
    description: "Satisfied customers. Our commitment to service excellence is reflected in our customer satisfaction levels. Your satisfaction is our priority.",
    duration: 1800
  }
];

function CountUp({ target, duration }: { target: number; duration: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(inViewRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!inView) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      
      const elapsedTime = timestamp - startTimeRef.current;
      const progress = Math.min(elapsedTime / duration, 1);
      
      countRef.current = Math.floor(progress * target);
      setCount(countRef.current);
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    
    rafRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [inView, target, duration]);

  return <div ref={inViewRef}>{count}</div>;
}

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 border-b border-[rgba(0,0,0,0.1)]" ref={containerRef}>
      {stats.map((stat, index) => (
        <motion.div 
          key={stat.label}
          className="p-8 border-r border-[rgba(0,0,0,0.1)] last:border-r-0 border-b md:border-b-0 last:border-b-0 md:even:border-r-0 lg:even:border-r"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <div className="stats-container">
            <div className="text-5xl font-bold mb-2">
              <CountUp target={stat.value} duration={stat.duration} />
            </div>
            <div className="uppercase text-sm tracking-wider mb-2">{stat.label}</div>
            <p className="text-sm leading-relaxed">
              {stat.description}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
