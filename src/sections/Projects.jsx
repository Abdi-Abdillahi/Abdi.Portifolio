import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
export const Projects = () => {
  const projects = [
    {
      title: "Freight and Logistics SPA Website",
      description:
        "A modern responsive logistics website with real-time shipment tracking, commodity price updates, service highlights, and a seamless user experience.",
      image: "/projects/projectbanner.png",
      tags: ["React", "Typescript", "Tailwindcss"],
      link: "https://abdi-abdillahi.github.io/Sahal.Web/",
      github: "https://github.com/Abdi-Abdillahi",
    },
    {
      title: "Expense Tracker App",
      description:
        "A modern expense tracking platform designed to simplify personal finance management with real-time transaction monitoring, budget planning, category-based expense organization, and interactive analytics for clearer spending insights.",
      image: "/projects/projectbanner2.png",
      tags: ["Javascript", "React", "CSS"],
      link: "https://abdi-rays.github.io/expense-Tracker-App",
      github: "#",
    },
    {
      title: "Advanced MPA Freight and Logistics Website",
      description:
        "A modern freight and logistics platform developed for UALogistics. based in Addis Ababa, Ethiopia. The system helps streamline freight operations through shipment tracking, carrier management, and digital logistics solutions that improve efficiency and transparency in transportation services.",
      image: "/projects/projectbanner3.png",
      tags: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP"],
      link: "https://ualogistix.com/",
      github: "#",
    },
    
    {
      title: "Freight and Logistics Platform",
      description:
        "A modern cloud-native logistics platform developed for Miler. based in Kansas City, Missouri, USA. The system provides integrated software solutions for freight brokers, carriers, and heavy-duty maintenance service providers, helping streamline logistics operations, fleet management, and transportation workflows.",
      image: "/projects/projectbanner4.png",
      tags: ["React", "TypeScript", "Tailwindcss", "C#"],
      link: "https://miler.com/",
      github: "#",
    },
  ];
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-heighlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className=" text-sm text-forground-secondary font-medium uppercase tracking-wider animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl lg:text-5xl text-forground-secondary font-bold mb-6 mt-6 animate-fade-in animation-delay-100">
            Projects that{" "}
            <span className="text-white font-normal font-serif italic">
              make impact.
            </span>
          </h2>
          <p className="text-forground-muted animated-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>
        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* OVERLAY LINKS */}
                <div className=" absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="glass p-3 rounded-full hover:bg-primary hover:text-forground-primary transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="glass p-3 rounded-full hover:bg-primary hover: text-forground-primary transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* CONTENT SECTION */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-medium group-hover: text-primary transition-colors">
                    {project.title}
                  </h2>
                  <a href={project.link}>
                  <ArrowUpRight className="w-5 h-5 text-forground-muted group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </div>
                <p className="text-forground-muted text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tindex) => (
                    <div
                      key={tindex}
                      className="px-4 py-1.5 bg-surface rounded-full text-xs font-medium  border border-border/50 text-forground-muted hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>View All Projects</AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
