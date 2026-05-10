import { Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];
const socialLinks = [
  {
    icon: Github,
    label: "Github",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: Twitter,
    label: "X",
    href: "#",
  },
];
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* LOGO AND COPY RIGHT */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              AA <span className="text-primary">.</span>
            </a>
            <p className="text-sm text-forground-muted mt-2">© {currentYear} Eng:Abdi Abdillahi. All rights reserved.</p>
          </div>
          {/* LINKS */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-forground-muted hover:text-forground transition-colors">{link.label}</a>
            ))}
          </nav>
          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} aria-label={link.label} className="p-2 glass rounded-full hover:bg-primary/10 hover:text-primary">
                <link.icon className="w-5 h-5"/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
