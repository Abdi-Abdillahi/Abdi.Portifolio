import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Abdi is a hardworking and fast-learning professional who adapts quickly to different work environments. He collaborates well with teams, takes initiative, and consistently shows a strong willingness to learn and improve.",
    author: "Mohamoud Ali",
    role: "CEO, Miler Freight & Logistics",
    avatar:
      "/testimonantplaceholder.png",
  },
/*   {
    quote:
      "Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "/testimonantplaceholder.png",
  },
  {
    quote:
      "Pedro's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Not only is Pedro technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  }, */
];
export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  const previous = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-200 h-200 rounded-full -translate-x-1/2 -translate-y-1/2 bg-primary/5 blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className=" max-w-3xl mx-auto mb-16 text-center">
          <span className="text-forground-secondary font-medium text-sm uppercase tracking-wider animate-fade-in">
            What people say
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-forground-secondary mt-4 mb-6 animate-fade-in animation-delay-100">
            Kind words from{" "}
            <span className="font-normal italic font-serif text-white">
              amazing people
            </span>
          </h2>
        </div>
        {/* TESTIMONIAL COURSEL */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* MAIN TESTIMONIAL */}
            <div className="glass p-6 md:p-12 rounded-3xl glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                <Quote className="w-6 h-6 text-forground-primary" />
              </div>
              <blockquote className="text-xl md:text-2xl mt-4 mb-8 leading-relaxed">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full ring ring-primary object-cover cursor-pointer"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-forground-muted">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* TESTIMONIAL NAVIGATIONS */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={previous}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
            >
              <ChevronLeft />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-12 bg-primary" : "bg-forground-muted/30 hover:bg-forground-muted/50"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
{
  /* SECTION HEADER */
}
/* <div className=" text-center mx-auto max-w-3xl mb-16 ">
          <span className="text-forground-secondary font-medium text-sm uppercase tracking-wider animate-fade-in">
            What people say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forground-secondary mt-4 mb-6 animate-fade-in animation-delay-100">
            Kind words from{" "}
            <span className="text-white font-normal italic font-serif">
              amazing people
            </span>
          </h2>
        </div>
        {/* TESTIMONIAL COURSEL */
/*  <div className="max-w-4xl mx-auto">
          <div className="relative">
            {"/ MAIN TESTIMONIAL /"}
            <div className="glass p-6 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 bg-primary rounded-full  flex items-center justify-center">
                <Quote className="w-6 h-6 text-forground-primary" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-8 pt-4 leading-relaxed">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full ring ring-primary/20 object-cover cursor-pointer"
                />
                <div>
                  <div className="font-semibold">{testimonials[activeIndex].author}</div>
                  <div className="text-sm text-forground-muted">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>
          { "TESTIMONIAL NAVIGATION "}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary  transition-all" onClick={previous}>
              <ChevronLeft />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                 onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-primary" : "bg-forground-muted/30 hover:bg-forground-muted/50"}`}
                />
              ))}
            </div>
            <button className="p-3 glass rounded-full hover:bg-primary/10 hover:text-primary cursor-pointer transition-all" onClick={next}>
              <ChevronRight />
            </button>
          </div>
        </div> */
