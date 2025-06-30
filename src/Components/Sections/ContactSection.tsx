/**
 * Contact Section Component
 * Purpose: Contact form with calendar scheduling, international phone input
 * Dependencies: React, lucide-react
 * Features: Form validation, calendar scheduling, international phone format
 */

import { useState, useRef, useEffect } from "react";
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
} from "lucide-react";
import countryCodesData from "./ContactSectioncode.json";

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
const countryCodes = countryCodesData;

// Common search aliases for better user experience
const getSearchAliases = (country: string): string[] => {
  const aliases: { [key: string]: string[] } = {
    "united states": ["usa", "us", "america"],
    "united kingdom": ["uk", "britain", "england"],
    "south korea": ["korea"],
    "north korea": ["korea"],
    "united arab emirates": ["uae"],
    "democratic republic of the congo": ["congo", "drc"],
    "republic of the congo": ["congo"],
    "czech republic": ["czechia"],
    "bosnia and herzegovina": ["bosnia"],
    "saint kitts and nevis": ["st kitts"],
    "saint lucia": ["st lucia"],
    "saint vincent and the grenadines": ["st vincent"],
    "são tomé and príncipe": ["sao tome"],
  };

  return aliases[country.toLowerCase()] || [];
};

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
  "19:00 GMT",
  "20:00 GMT",
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
  const [countrySearch, setCountrySearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    setCountrySearch("");
  };

  // Filter and sort countries based on search with improved relevance
  const filteredCountries = countryCodes
    .filter((country) => {
      const searchTerm = countrySearch.toLowerCase().trim();
      if (!searchTerm) return true;

      const countryName = country.country.toLowerCase();
      const countryCode = country.code.toLowerCase();

      // Handle numeric search (for country codes)
      const isNumericSearch = /^[\d+\-\s]*$/.test(searchTerm);

      if (isNumericSearch) {
        // For numeric searches, focus on country codes
        const cleanSearchTerm = searchTerm.replace(/[\s\-]/g, "");
        const cleanCountryCode = countryCode.replace(/[\s\-]/g, "");

        return (
          cleanCountryCode === cleanSearchTerm ||
          cleanCountryCode.startsWith(cleanSearchTerm) ||
          (cleanSearchTerm.startsWith("+") &&
            cleanCountryCode === cleanSearchTerm) ||
          (cleanSearchTerm.startsWith("+") &&
            cleanCountryCode.startsWith(cleanSearchTerm))
        );
      } else {
        // For text searches, focus on country names with better matching
        const words = countryName.split(" ");
        const aliases = getSearchAliases(country.country);

        return (
          // Exact country name match
          countryName === searchTerm ||
          // Country name starts with search term
          countryName.startsWith(searchTerm) ||
          // Any word in country name starts with search term
          words.some((word) => word.startsWith(searchTerm)) ||
          // Check aliases
          aliases.some((alias) => alias.toLowerCase().startsWith(searchTerm)) ||
          // Country name contains search term (but with lower priority)
          (searchTerm.length >= 3 && countryName.includes(searchTerm))
        );
      }
    })
    .sort((a, b) => {
      const searchTerm = countrySearch.toLowerCase().trim();
      if (!searchTerm) return 0;

      const aName = a.country.toLowerCase();
      const bName = b.country.toLowerCase();

      // Prioritize exact matches
      if (aName === searchTerm) return -1;
      if (bName === searchTerm) return 1;

      // Prioritize starts with matches
      if (aName.startsWith(searchTerm) && !bName.startsWith(searchTerm))
        return -1;
      if (bName.startsWith(searchTerm) && !aName.startsWith(searchTerm))
        return 1;

      // Alphabetical order for same priority
      return aName.localeCompare(bName);
    })
    .slice(0, 50); // Limit results to 50 for better performance

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowCountryDropdown(false);
        setCountrySearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() =>
                        setShowCountryDropdown(!showCountryDropdown)
                      }
                      className="contact-input w-32 flex items-center justify-between gap-1 text-sm"
                    >
                      <div className="flex items-center gap-1">
                        <span>{selectedCountry.flag}</span>
                        <span>{selectedCountry.code}</span>
                      </div>
                      <span className="text-gray-400">▼</span>
                    </button>

                    {showCountryDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg z-50">
                        {/* Search Input */}
                        <div className="p-3 border-b border-white/20">
                          <input
                            type="text"
                            placeholder="Search countries..."
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-white/20 focus:border-blue-500 focus:outline-none text-sm"
                            autoFocus
                          />
                        </div>

                        {/* Countries List */}
                        <div className="max-h-48 overflow-y-auto">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() => handleCountrySelect(country)}
                                className="w-full px-3 py-2 text-left hover:bg-white/10 flex items-center gap-2 text-sm text-white"
                              >
                                <span>{country.flag}</span>
                                <span className="font-medium">
                                  {country.code}
                                </span>
                                <span className="text-gray-300 truncate">
                                  {country.country}
                                </span>
                              </button>
                            ))
                          ) : (
                            <div className="px-3 py-2 text-gray-400 text-sm text-center">
                              <div>
                                No countries found for "{countrySearch}"
                              </div>
                              <div className="text-xs mt-1">
                                Try searching by country name or code (e.g.,
                                "United States" or "+1")
                              </div>
                            </div>
                          )}
                        </div>
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
