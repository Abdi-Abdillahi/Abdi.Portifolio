import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIscrolled] = useState(false);
  const navLinks = [
    {
      href: "#about",
      label: "About",
    },
    {
      href: "#projects",
      label: "Projects",
    },
    {
      href: "#exprience",
      label: "Experience",
    },
    {
      href: "#testimonials",
      label: "Testimonials",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIscrolled(true);
      } else {
        setIscrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all transition-duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}   z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a className="text-xl font-bold tracking-tight hover:text-primary cursor-pointer">
          AA <span className="text-primary">.</span>
        </a>
        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => {
              return (
                <a
                  href={link.href}
                  key={index}
                  className="px-4 py-2 text-sm text-forground-muted hover:text-forground rounded-full hover:bg-surface"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
        {/* CTA BUTTON */}
        <a className="hidden md:block" href="#contact">
          <Button size="sm">
            Contact Me
          </Button>
        </a>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-forground cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link, index) => {
              return (
                <a
                  href={link.href}
                  key={index}
                   onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-forground-muted hover:text-forground py-2"
                >
                  {link.label}
                </a>
              );
            })}
            <Button size="sm" onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};
