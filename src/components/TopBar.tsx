import { Mail, Clock, MapPin, ArrowRight } from "lucide-react";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm">
            <a
              href="mailto:info@armadacrb.co.ug"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@armadacrb.co.ug</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri 8am - 5pm (Weekend Closed)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>29A, Lumumba Avenue Kampala, Uganda</span>
            </div>
          </div>
          <a
            href="https://app.armadacrb.com/login.aspx"
            className="flex items-center gap-2 bg-secondary hover:bg-teal-light text-secondary-foreground px-6 py-2 rounded font-semibold transition-all duration-300"
          >
            <span>Member Login</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
