import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { siteConfig, footerContent } from '@/data/siteContent';
export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column - More Prominent */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-secondary-foreground">
                  {siteConfig.name}
                </h3>
                <p className="text-xs text-secondary-foreground/60">
                  Your Perfect Home Awaits
                </p>
              </div>
            </div>
            
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6 max-w-xs">
              {footerContent.description}
            </p>

            {/* Social Links - Visual Grid */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: siteConfig.social.facebook },
                { Icon: Instagram, href: siteConfig.social.instagram },
                { Icon: Twitter, href: siteConfig.social.twitter },
                { Icon: Linkedin, href: siteConfig.social.linkedin },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">
              Properties
            </h4>
            <ul className="space-y-2 text-sm">
              {footerContent.quickLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About Us', href: '#' },
                { label: 'Our Team', href: '#team' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-2 text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="break-all">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-start gap-2 text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-secondary-foreground/10 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
