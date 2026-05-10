import { Button } from "@/components/Button";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "updyabdillahi39@gmail.com",
    href: "updyabdillahi39@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 903 146 914",
    href: "tel: +251903146914",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jigjiga-Ethiopia",
    href: "#",
  },
];
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // success or error
    message: "",
  });
  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EmailJs_SERVICE_ID;
      const templateId = import.meta.env.VITE_EmailJs_TEMPLATE_ID;
      const public_key = import.meta.env.VITE_EmailJs_PUBLIC_KEY;
      if (!serviceId || !templateId || !public_key) {
        throw new Error(
          "EmailJs configuration is  missing, please check enviroment variables",
        );
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        public_key,
      );
      setSubmitStatus({
        type: "Success",
        message:
          "Message sent successfully! I'll get In touch with you soon, thanks.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("Emailjs error:", error);
      setSubmitStatus({
        type: "Error",
        message:
          error.text || "Failed to send message, please try again letter.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden ">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto relative px-6 z-10 ">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 ">
          <span className="text-forground-secondary text-sm font-medium uppercase tracking-wider animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl text-forground-secondary font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Let's build{" "}
            <span className="font-normal italic font-serif text-white">
              something great
            </span>
          </h2>
          <p className=" text-forground-muted animate-fade-in animation-delay-200">
            {" "}
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>
        {/* CONTACT GRID */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name..."
                  className="w-full bg-surface px-4 py-3 rounded-xl border border-border focus:border-primary outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your@email.com..."
                  className="w-full bg-surface px-4 py-3 rounded-xl border border-border focus:border-primary outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  className="w-full bg-surface px-4 py-3 rounded-xl border border-border focus:border-primary outline-none focus:ring-1 focus:ring-primary resize-none transition-all"
                />
              </div>
              <Button
                className="w-full"
                size="lg"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "Success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "Success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
          {/* CONTACT INFO */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-8">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-forground-muted">
                        {contact.label}
                      </div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/* AVAILABITY CARD */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-4 mb-4">
                <span  className="w-3 h-3 rounded-full bg-green-500 animate-pulse"/>
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-sm text-forground-muted">
                {" "}
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
