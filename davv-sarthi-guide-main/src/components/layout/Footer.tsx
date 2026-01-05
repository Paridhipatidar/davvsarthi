import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-background">
                  DAVV Sarthi
                </span>
                <span className="text-[10px] text-background/60 -mt-1">
                  Your Admission Guide
                </span>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Your comprehensive guide to DAVV admissions. Get all the information you need 
              about courses, eligibility, and the admission process in one place.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <Icon className="w-4 h-4 text-background/70 group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Courses", "Admission Process", "Eligibility", "Fee Structure", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-background/70 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-background">Programs</h4>
            <ul className="space-y-2">
              {["B.Tech Programs", "MBA", "BCA", "MCA", "B.Sc Programs", "M.Sc Programs"].map((program) => (
                <li key={program}>
                  <a
                    href="#"
                    className="text-sm text-background/70 hover:text-secondary transition-colors"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-background">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-background/70">
                  DAVV University Campus, Khandwa Road, Indore - 452001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm text-background/70">+91 731 2467890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm text-background/70">admissions@davv.ac.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/50">
            © 2024 DAVV Sarthi. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-background/50 hover:text-background/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-background/50 hover:text-background/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
