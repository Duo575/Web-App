/**
 * Business Information Component
 * Purpose: Display comprehensive business information including address, hours, contact details
 * Dependencies: React, lucide-react
 * Features: Business address, hours, contact info, trust badges
 */

import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Globe,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react";

export const BusinessInfo: React.FC = () => {
  return (
    <section
      id="business-info"
      className="py-12 mobile:py-16 tablet:py-20 px-3 mobile:px-4 tablet:px-6 content-above-particles"
    >
      <div className="c-space">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-heading text-3xl mobile:text-4xl tablet:text-5xl font-bold mb-3 mobile:mb-4 tablet:mb-5">
            Business{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Information
            </span>
          </h2>
          <p className="subtext text-center max-w-3xl mx-auto">
            Get in touch with us through multiple channels. We're here to help
            bring your digital vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mobile:p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Phone className="text-blue-400" size={24} />
              Contact Details
            </h3>

            <div className="space-y-6">
              {/* Business Address */}
              <div className="flex items-start gap-4">
                <MapPin
                  className="text-purple-400 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Business Address
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Cosmobits Digital Solutions
                    <br />
                    Remote-First Company
                    <br />
                    Serving Clients Globally
                    <br />
                    <span className="text-sm text-gray-400">
                      (Physical meetings available in major Indian cities)
                    </span>
                  </p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start gap-4">
                <Phone
                  className="text-green-400 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="text-white font-semibold mb-2">Phone</h4>
                  <p className="text-gray-300">
                    <a
                      href="tel:+918847832480"
                      className="hover:text-white transition-colors"
                    >
                      +91 8847832480
                    </a>
                  </p>
                  <p className="text-sm text-gray-400">
                    Available during business hours
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-semibold mb-2">Email</h4>
                  <p className="text-gray-300">
                    <a
                      href="mailto:hello@cosmobits.work"
                      className="hover:text-white transition-colors"
                    >
                      hello@cosmobits.work
                    </a>
                  </p>
                  <p className="text-sm text-gray-400">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <Globe
                  className="text-orange-400 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="text-white font-semibold mb-2">Website</h4>
                  <p className="text-gray-300">
                    <a
                      href="https://cosmobits.work"
                      className="hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.cosmobits.work
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mobile:p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Clock className="text-yellow-400" size={24} />
              Business Hours
            </h3>

            <div className="space-y-4">
              {/* Regular Hours */}
              <div>
                <h4 className="text-white font-semibold mb-3">
                  Regular Business Hours
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-300">Monday - Saturday</span>
                    <span className="text-white font-medium">
                      9:00 AM - 4:30 PM GMT
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-medium">
                      4:30 AM - 4:30 PM GMT
                    </span>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                  <Shield size={16} />
                  Emergency Support
                </h4>
                <p className="text-sm text-gray-300">
                  For critical issues with live websites, we provide 24/7
                  emergency support. Additional charges may apply for
                  after-hours support.
                </p>
              </div>

              {/* Response Times */}
              <div>
                <h4 className="text-white font-semibold mb-3">
                  Response Time Expectations
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Email Inquiries</span>
                    <span className="text-green-400">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Phone Calls</span>
                    <span className="text-green-400">Same day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Project Updates</span>
                    <span className="text-green-400">Weekly reports</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Emergency Issues</span>
                    <span className="text-yellow-400">Within 2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges and Certifications */}
        <div className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mobile:p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Award className="text-gold-400" size={24} />
            Trust & Security
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* SSL Security */}
            <div className="text-center p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <Shield className="text-green-400 mx-auto mb-3" size={32} />
              <h4 className="text-white font-semibold mb-2">SSL Secured</h4>
              <p className="text-sm text-gray-300">
                All data transmissions are encrypted with industry-standard SSL
              </p>
            </div>

            {/* GDPR Compliant */}
            <div className="text-center p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <CheckCircle className="text-blue-400 mx-auto mb-3" size={32} />
              <h4 className="text-white font-semibold mb-2">GDPR Compliant</h4>
              <p className="text-sm text-gray-300">
                Full compliance with data protection regulations
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="text-center p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
              <Award className="text-purple-400 mx-auto mb-3" size={32} />
              <h4 className="text-white font-semibold mb-2">Quality Assured</h4>
              <p className="text-sm text-gray-300">
                Rigorous testing and quality control processes
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="text-center p-4 bg-orange-900/20 border border-orange-500/30 rounded-lg">
              <Clock className="text-orange-400 mx-auto mb-3" size={32} />
              <h4 className="text-white font-semibold mb-2">24/7 Monitoring</h4>
              <p className="text-sm text-gray-300">
                Continuous monitoring for optimal performance
              </p>
            </div>
          </div>

          {/* Additional Trust Information */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-lg">
            <h4 className="text-white font-semibold mb-4 text-center">
              Why Choose Cosmobits?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <CheckCircle
                  className="text-green-400 mx-auto mb-2"
                  size={20}
                />
                <p className="text-gray-300">
                  <strong className="text-white">100% Satisfaction</strong>
                  <br />
                  Money-back guarantee
                </p>
              </div>
              <div className="text-center">
                <CheckCircle
                  className="text-green-400 mx-auto mb-2"
                  size={20}
                />
                <p className="text-gray-300">
                  <strong className="text-white">Transparent Pricing</strong>
                  <br />
                  No hidden fees
                </p>
              </div>
              <div className="text-center">
                <CheckCircle
                  className="text-green-400 mx-auto mb-2"
                  size={20}
                />
                <p className="text-gray-300">
                  <strong className="text-white">Expert Team</strong>
                  <br />
                  Certified professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
