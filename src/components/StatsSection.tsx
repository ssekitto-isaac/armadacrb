import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Completed Projects" },
  { value: 99, suffix: "+", label: "Satisfied Clients" },
  { value: 25, suffix: "+", label: "Team Members" },
  { value: 18, suffix: "+", label: "Awards Winner" },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

const StatItem = ({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) => {
  const count = useCountUp(value, 2000, inView);
  
  return (
    <div className="stat-card">
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                inView={inView}
              />
            ))}
          </div>

          {/* Content */}
          <div className="text-primary-foreground">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2 block">
              Statistic
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Statistic is used to estimate the value of a profit.
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              The main difference between Statistic and Statistics is that the Statistic
              is a single measure of some attribute of a sample and Statistics is a
              study of the collection.
            </p>
            <a
              href="#"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
