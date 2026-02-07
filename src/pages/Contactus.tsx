import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ChevronRight,
  Shield,
  MessageSquare,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Hero image (professional contact/support scene)
import heroImage from "@/assets/ContactUs.jpg"; // Replace with your asset — e.g., office exterior, team, or secure comms visual

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactItems = [
    {
      icon: MapPin,
      title: "Head Office",
      desc: "29A Lumumba Avenue, Kampala, Uganda",
      action: "View on Map",
      link: "https://maps.google.com/?q=29A+Lumumba+Avenue,+Kampala",
    },
    {
      icon: Phone,
      title: "Toll Free",
      desc: "0800 280 180",
      action: "Call Now",
      link: "tel:0800280180",
    },
    {
      icon: Mail,
      title: "Email Support",
      desc: "info@armadacrb.co.ug",
      action: "Send Email",
      link: "mailto:info@armadacrb.co.ug",
    },
    {
      icon: Clock,
      title: "Working Hours",
      desc: "Monday – Friday: 8:00 AM – 5:00 PM",
      action: "Schedule Call",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <main>
        {/* Hero – Consistent spiced style, compact */}
        <section className="relative h-[420px] md:h-[520px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] scale-105 hover:scale-110"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/65 via-primary/75 to-primary/85" />

          {/* Floating subtle icons */}
          <div className="absolute inset-0 pointer-events-none">
            <Shield className="absolute top-[20%] left-[10%] w-14 h-14 md:w-16 md:h-16 text-secondary/40 animate-float-slow" />
            <MessageSquare className="absolute bottom-[25%] right-[12%] w-16 h-16 md:w-20 md:h-20 text-accent/30 animate-float" />
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-28 h-full flex items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-primary-foreground/80 text-sm uppercase tracking-wider mb-5">
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span className="font-semibold">Contact Us</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-5 leading-tight">
                Contact Us
              </h1>

            
            </div>
          </div>
        </section>

        {/* Quick Contact Cards – Uniform style, no 3D tilt */}
        <section className="py-16 bg-muted -mt-12 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="value-card group text-center transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <div className="inline-flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all">
                    {item.action}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form – Compact */}
        <section id="ContactForm" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="section-label">Get in Touch</span>
                <h2 className="section-title-dark mb-4">Send Us a Message</h2>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  Our team will respond within 24 hours. For urgent matters, call us directly.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-10 p-6 bg-secondary/10 border border-secondary/30 rounded-2xl flex items-start gap-5">
                  <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Message Sent Successfully</h4>
                    <p className="text-muted-foreground">
                      Thank you! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8 bg-muted rounded-2xl shadow-xl p-8 md:p-10 border border-muted">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background appearance-none"
                    >
                      <option value="">Select Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="dispute">Dispute Resolution</option>
                      <option value="report">Credit Report Access</option>
                      <option value="partnership">Partnership / API</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-primary-foreground font-bold py-4 rounded-xl hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 text-base group shadow-md"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </button>
              </form>

              <div className="mt-10 flex items-center justify-center gap-4 text-muted-foreground text-center text-sm">
                <Shield className="w-5 h-5 text-secondary flex-shrink-0" />
                <p>
                  Your message is secure and handled in compliance with Uganda's Data Protection Act.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;