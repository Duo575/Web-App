/**
 * Enhanced Footer Component
 * Purpose: Comprehensive footer with legal links, business info, and social media
 * Dependencies: React, lucide-react
 * Features: Legal links, business information, social media, responsive design
 */

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Globe,
  Shield,
  FileText,
  ExternalLink,
} from "lucide-react";
import { TermsOfService } from "../Legal/TermsOfService";

interface FooterProps {
  onPrivacyClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  const [showTerms, setShowTerms] = useState(false);

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/cosmobits",
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/cosmobits",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/cosmobits",
      color: "hover:text-gray-300",
    },
    {
      name: "Website",
      icon: Globe,
      url: "https://cosmobits.work",
      color: "hover:text-green-400",
    },
  ];

  const legalLinks = [
    {
      name: "Privacy Policy",
      icon: Shield,
      onClick: onPrivacyClick,
    },
    {
      name: "Terms of Service",
      icon: FileText,
      onClick: () => setShowTerms(true),
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <footer className="bg-gradient-to-t from-black via-gray-900/50 to-transparent border-t border-white/10 content-above-particles">
        <div className="max-w-7xl mx-auto px-4 mobile:px-6 tablet:px-8 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Information */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    Cosmobits
                  </span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Pioneering digital solutions with cutting-edge web
                  development, innovative design, and personalized service for
                  businesses worldwide.
                </p>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-colors duration-200`}
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="text-blue-400 flex-shrink-0" size={16} />
                  <a
                    href="mailto:hello@cosmobits.work"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    hello@cosmobits.work
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="text-green-400 flex-shrink-0" size={16} />
                  <a
                    href="tel:+918847832480"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 8847832480
                  </a>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin
                    className="text-purple-400 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-gray-300">
                    Remote-First Company
                    <br />
                    Serving Clients Globally
                  </span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-white font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Mon - Sat</span>
                  <span className="text-white">9AM - 4:30PM GMT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white">4:30AM - 4:30PM IST</span>
                </div>
                <div className="mt-3 p-2 bg-blue-900/20 border border-blue-500/30 rounded text-xs">
                  <span className="text-blue-400 font-medium">
                    24/7 Emergency Support
                  </span>
                  <br />
                  <span className="text-gray-300">For critical issues</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links Section */}
          <div className="border-t border-white/10 pt-6 mb-6">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {legalLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  <link.icon size={14} />
                  {link.name}
                </button>
              ))}
              <a
                href="https://cosmobits.work/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                <ExternalLink size={14} />
                Sitemap
              </a>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Cosmobits. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Built with React + Vite + TailwindCSS
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Shield size={14} className="text-green-400" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Shield size={14} className="text-blue-400" />
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Legal Notice */}
          <div className="mt-6 p-4 bg-gray-900/50 border border-white/5 rounded-lg">
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              This website uses cookies to enhance user experience and analyze
              website traffic. By continuing to use this site, you consent to
              our use of cookies. For more information, please review our
              Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </footer>

      {/* Terms of Service Modal */}
      <TermsOfService isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </>
  );
};

export default Footer;
