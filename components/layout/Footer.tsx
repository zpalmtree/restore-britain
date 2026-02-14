import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const footerLinks = {
  about: [
    { label: 'Our Mission', href: '/' },
    { label: 'Policies', href: '/policies' },
    { label: 'Direct Democracy', href: '/direct-democracy' },
    { label: 'News', href: '/news' },
  ],
  getInvolved: [
    { label: 'Join the Cause', href: '/join' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact', href: '/contact' },
  ],
  investigations: [
    { label: 'Whistleblowing', href: '/investigations/whistleblowing' },
    { label: 'FOI Requests', href: '/investigations/foi' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-oak-dark text-cream/70">
      {/* Heritage divider */}
      <div className="hedge-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo-transparent.png"
                alt="Restore Britain"
                width={180}
                height={101}
                className="h-12 w-auto invert"
              />
            </div>
            <p className="text-cream/50 text-sm font-body leading-relaxed mb-6">
              A political party for those who believe that our nation has been hollowed out by weak leadership, broken institutions, and a political class that no longer serves the people.
            </p>
            <div className="flex flex-col gap-3 text-sm font-body">
              <a
                href="mailto:info@restorebritain.org.uk"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Mail size={16} className="text-gold" />
                info@restorebritain.org.uk
              </a>
              <a
                href="mailto:media@restorebritain.org.uk"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Mail size={16} className="text-gold" />
                media@restorebritain.org.uk
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                United Kingdom
              </div>
            </div>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-cream font-heading font-semibold italic text-lg mb-6">
              About
            </h3>
            <ul className="space-y-3 font-body">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Column */}
          <div>
            <h3 className="text-cream font-heading font-semibold italic text-lg mb-6">
              Get Involved
            </h3>
            <ul className="space-y-3 font-body">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investigations Column */}
          <div>
            <h3 className="text-cream font-heading font-semibold italic text-lg mb-6">
              Investigations
            </h3>
            <ul className="space-y-3 font-body">
              {footerLinks.investigations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-cream font-heading font-semibold italic text-lg mb-4">
                Follow Us
              </h3>
              <a
                href="https://x.com/RestoreBritain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-body hover:text-gold transition-colors"
              >
                <ExternalLink size={16} className="text-gold" />
                @RestoreBritain
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-oak/30 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm font-body">
            &copy; {new Date().getFullYear()} Restore Britain. All rights
            reserved.
          </p>
          <p className="text-cream/30 text-xs font-body italic">
            Because Britain is our country, it is our people, it is our home.
          </p>
        </div>
      </div>
    </footer>
  );
}
