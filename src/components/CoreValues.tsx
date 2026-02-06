import { Lightbulb, Award, Users, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We relentlessly pursue creative solutions to improve our processes and systems.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We promote an environment of respect and collaboration, supporting each other.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We go above and beyond to exceed our valued client's expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description: "We take ownership of the quality of our work and take pride in what we deliver.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Label and Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Our Framework</span>
          <h2 className="section-title-dark mb-4">Our Core Values</h2>
          <p className="text-muted-foreground text-lg">
            Our core values make us who we are. As we change and grow, the beliefs that
            are most important to us stay the same
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="value-card group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary transition-colors duration-300">
                <value.icon className="w-10 h-10 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
