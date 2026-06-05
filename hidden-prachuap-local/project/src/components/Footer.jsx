import { Link } from 'react-router-dom';
import { Compass, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Compass className="w-4.5 h-4.5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-lg">Heart of Prachuap</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Exploring Tourism through QR Technology. Discover, navigate, and experience the beauty of Prachuap Khiri Khan.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-background/60 hover:text-background transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-background/60 hover:text-background transition-colors">About the Project</Link>
              <Link to="/scan" className="text-sm text-background/60 hover:text-background transition-colors">Scan & Explore</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-background/60">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Prachuap Khiri Khan, Thailand</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@heartofprachuap.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
          © {new Date().getFullYear()} Heart of Prachuap. All rights reserved.
        </div>
      </div>
    </footer>
  );
}