import { Mail, Phone, MapPin, Clock, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Our Services",
    "Credit Reports",
    "Analytics",
    "Contact Us",
  ];

  const services = [
    "Credit Information",
    "Risk Reports",
    "Data Analytics",
    "Portfolio Management",
    "Data Management",
  ];

  return (
    <footer id="contact" className="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-teal-light rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">A</span>
              </div>
              <div className="ml-2">
                <span className="text-2xl font-heading font-bold">ARMADA</span>
                <span className="block text-[10px] text-primary-foreground/60 tracking-widest -mt-1">
                  CREDIT BUREAU
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Armada Credit Bureau Limited is a duly licensed credit reporting and
              analytics company operating within the regulatory framework of the Bank
              of Uganda.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="footer-link flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
                  29A, Lumumba Avenue<br />Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@armadacrb.co.ug" className="footer-link">
                  info@armadacrb.co.ug
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+256800100200" className="footer-link">
                  +256 800 100 200
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Mon - Fri: 8am - 5pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Armada Credit Bureau. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
