const experiences = [
  {
    period: "2025 — 2026",
    role: "Junior Developer",
    company: "Miler LLC",
    description:
      "In late 2025, I started working at Miler, a freight and logistics technology company, where I collaborated with a talented and professional team to build cloud-native software solutions for freight brokers, carriers, and heavy-duty maintenance service providers through an integrated platform. During my time at Miler, I gained valuable experience in frontend development, problem-solving, and collaborative software engineering. Working in a real-world production environment helped me strengthen my coding practices, improve my understanding of scalable applications, and develop strong work ethics and teamwork skills.",
    technologies: ["Javascript", "React", "SAAS", "Postman",],
    current: true,
  },
  {
    period: "2024 — 2025",
    role: "Internship",
    company: "Shabelle Bank",
    description:
      "During our internship at Shabelle Bank, we gained valuable hands-on experience in web development. The internship included training and review sessions on technologies such as HTML, CSS, JavaScript, and PHP, guided by experienced instructors and mentors. During this period, we collaborated on building small web-based projects, which helped us strengthen our technical skills, teamwork, and practical development experience.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="exprience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-94 h-96 bg-primary/5 rounded-full -translate-y-1/2 blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-16">
          <span className="text-forground-secondary text-sm font-medium uppercase tracking-wider animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-forground-secondary text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Experience that{" "}
            <span className="text-white font-normal italic font-serif">
              speaks volumes.
            </span>
          </h2>
          <p className="text-forground-muted animate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>
        {/* TIMELINE */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32, 178,166, 0.8)]" />
          {/* EXPERIENCE ITEMS */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{
                  animationDelay: `${(index + 1) * 150}ms`,
                }}
              >
                {/* TIMELINE DOT */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping opacity-75"></span>
                  )}
                </div>
                {/* CONTENT */}
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <p className="text-sm text-primary font-medium">
                      {exp.period}
                    </p>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-forground-muted ">{exp.company}</p>
                    <p className=" text-sm text-forground-muted mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-4 py-1.5 bg-surface rounded-full text-forground-muted text-xs "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
