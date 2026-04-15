import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-secondary">House of Lizzy</h3>
            <p className="text-sm text-primary-foreground/80">
              Stitches and Fashion. We teach fashion classes and sew affordable wears including streetwear, kiddies wear, and traditional wears.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-secondary transition-colors">Shop Collection</Link></li>
              <li><Link to="/classes" className="hover:text-secondary transition-colors">Fashion Classes</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors">Fashion Blog</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop?category=streetwear" className="hover:text-secondary transition-colors">Streetwear</Link></li>
              <li><Link to="/shop?category=kiddies" className="hover:text-secondary transition-colors">Kiddies Wear</Link></li>
              <li><Link to="/shop?category=traditional" className="hover:text-secondary transition-colors">Traditional Wears</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>Ado Ekiti, Ekiti State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>070371047967</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>info@houseoflizzy.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} House of Lizzy Stitches and Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
