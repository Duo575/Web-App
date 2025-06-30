/**
 * Simple Contact Section Component - For Testing
 */

import { useState } from "react";
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
} from "lucide-react";

// Form data interface
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  date: string;
  timeSlot: string;
  details: string;
}

// Country codes for international phone numbers
const countryCodes = [
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
];

// Time slots in GMT
const timeSlots = [
  "09:00 GMT",
  "10:00 GMT",
  "11:00 GMT",
  "12:00 GMT",
  "13:00 GMT",
  "14:00 GMT",
  "15:00 GMT",
  "16:00 GMT",
  "17:00 GMT",
  "18:00 GMT",
];

export function ContactSection() {
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    countryCode: countryCodes[0].code,
    date: "",
    timeSlot: "",
    details: "",
  });

  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // Handle input changes
  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  // Handle country selection
  const handleCountrySelect = (country: (typeof countryCodes)[0]) => {
    setSelectedCountry(country);
    handleInputChange("countryCode", country.code);
    setShowCountryDropdown(false);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 section-spacing">
      <div className="c-space">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-heading mb-4">Contact Us</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us and let's schedule
            a consultation.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="grid-default-color rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm font-medium text-white"
                >
                  <User size={16} />
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="contact-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-medium text-white"
                >
                  <Mail size={16} />
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="contact-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-sm font-medium text-white"
                >
                  <Phone size={16} />
                  Phone Number *
                </label>
                <div className="flex gap-2">
                  {/* Country Code Selector */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setShowCountryDropdown(!showCountryDropdown)
                      }
                      className="contact-input w-24 flex items-center justify-center gap-1 text-sm"
                    >
                      <span>{selectedCountry.flag}</span>
                      <span>{selectedCountry.code}</span>
                    </button>

                    {showCountryDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
                        {countryCodes.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => handleCountrySelect(country)}
                            className="w-full px-3 py-2 text-left hover:bg-white/10 flex items-center gap-2 text-sm text-white"
                          >
                            <span>{country.flag}</span>
                            <span>{country.code}</span>
                            <span className="text-gray-400">
                              ({country.country})
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Phone Number Input */}
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="contact-input flex-1"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              {/* Date and Time Scheduling */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Date Picker */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-white">
                    <Calendar size={16} />
                    Select Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    className="contact-input"
                    required
                  />
                </div>

                {/* Time Slot Selector */}
                <div className="space-y-2">
                  <label
                    htmlFor="timeSlot"
                    className="flex items-center gap-2 text-sm font-medium text-white"
                  >
                    <Clock size={16} />
                    Time Slot (GMT) *
                  </label>
                  <select
                    id="timeSlot"
                    value={formData.timeSlot}
                    onChange={(e) =>
                      handleInputChange("timeSlot", e.target.value)
                    }
                    className="contact-input"
                    required
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option
                        key={slot}
                        value={slot}
                        className="bg-black text-white"
                      >
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Details/Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="details"
                  className="flex items-center gap-2 text-sm font-medium text-white"
                >
                  <MessageSquare size={16} />
                  Details *
                </label>
                <textarea
                  id="details"
                  rows={5}
                  value={formData.details}
                  onChange={(e) => handleInputChange("details", e.target.value)}
                  className="contact-input resize-none"
                  placeholder="Tell us about your project, requirements, or any specific questions you have..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="contact-submit-btn btn-gradient"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
