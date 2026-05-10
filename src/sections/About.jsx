import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import React from "react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code the stands the test of time.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Optimizing for speed and delivering lighting-fast user experiences.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying ahead with latest technologies and best practices.",
    },
  ];
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-forground-secondary text-sm font-medium uppercase tracking-wider animate-fade-in">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-forground-secondary leading-tight animate-fade-in animation-delay-100">
              Building future,{" "}
              <span className="text-white font-serif font-normal italic">
                one component at a time.
              </span>
            </h2>
            <div className="text-forground-muted space-y-3 animate-fade-in animation-delay-200">
              <p>
                I'm a passionate software engineer with over 1+ years of
                experience crafting digital products that make a difference. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a deep expertise in modern frontend
                technologies.
              </p>
              <p>
                I specialize in Javascript, React, TypeScript and Automated Testing Postman, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
            <div className="glass p-3 rounded-2xl glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-forground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>
          {/* LEFT COLUMN - Hightlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-lg font-semibold mb-4">{item.title}</h2>
                <p className="text-forground-muted text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
