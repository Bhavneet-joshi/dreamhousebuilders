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
    value: 10,
    label: "MASTER CRAFTSMEN",
    description: "Skilled artisans and master carpenters on our team. Our expert craftsmen bring decades of combined experience in period-accurate restoration and fine woodworking.",
    duration: 2000
  },
  {
    value: 70,
    label: "RESTORATIONS",
    description: "Successful historic home restoration projects completed. From hand-carved woodwork to structural repairs, we've preserved the character of countless heritage spaces.",
    duration: 1500
  },
  {
    value: 1,
    label: "YEAR",
    description: "Year of excellence in heritage restoration and artisan carpentry since our founding in 2023. Our commitment to historical integrity has quickly made us a trusted name in home restoration.",
    duration: 1700
  },
  {
    value: 99,
    label: "PERCENT",
    description: "Satisfied customers. Our meticulous attention to detail and respect for historical authenticity ensures that every restoration project meets the highest standards of craftsmanship.",
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
