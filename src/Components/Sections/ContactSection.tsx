/**
 * Contact Section Component
 * Purpose: Contact form with calendar scheduling, international phone input
 * Dependencies: React, lucide-react
 * Features: Form validation, calendar scheduling, international phone format
 */

import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  Shield,
  // ChevronDown,
} from "lucide-react";
import countryCodesData from "./ContactSectioncode.json";
import "react-day-picker/dist/style.css";

// Form data interface
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  date: string;
  timeSlot: string;
  details: string;
  privacyAccepted: boolean;
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
    privacyAccepted: false,
  });

  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Add/remove modal-open class to body when modal state changes
  useEffect(() => {
    if (showPrivacyModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showPrivacyModal]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close calendar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  // Handle input changes
  const handleInputChange = (
    field: keyof ContactFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]:
        field === "privacyAccepted"
          ? value === "true" || value === true
          : value,
    }));
  };

  // Handle date input formatting (dd/mm/yyyy)
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits

    // Format as dd/mm/yyyy
    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2);
    }
    if (value.length >= 5) {
      value = value.substring(0, 5) + "/" + value.substring(5, 9);
    }

    // Limit to 10 characters (dd/mm/yyyy)
    if (value.length > 10) {
      value = value.substring(0, 10);
    }

    handleInputChange("date", value);
  };

  // Validate date format (dd/mm/yyyy)
  const isValidDate = (dateString: string): boolean => {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dateString.match(regex);

    if (!match) return false;

    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);

    // Basic validation
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    if (year < new Date().getFullYear()) return false;

    // More detailed validation for days in month
    const daysInMonth = new Date(year, month, 0).getDate();
    return day <= daysInMonth;
  };

  // Handle calendar date selection
  const handleCalendarDateSelect = (date: Date | undefined) => {
    if (date) {
      // Format date as dd/mm/yyyy
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;

      setSelectedDate(date);
      handleInputChange("date", formattedDate);
      setShowCalendar(false);
    }
  };

  // Format date for display
  // const formatDateForDisplay = (dateString: string): string => {
  //   if (!dateString) return "";
  //   return dateString;
  // };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyAccepted) {
      alert("Please accept the Privacy Policy to continue.");
      return;
    }

    if (formData.date && !isValidDate(formData.date)) {
      alert("Please enter a valid date in dd/mm/yyyy format.");
      return;
    }

    // Form submission logic would go here
    alert("Form submitted successfully!");
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

  // Close modal with Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showPrivacyModal) {
        setShowPrivacyModal(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [showPrivacyModal]);

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
                <div className="space-y-2 relative">
                  <label className="flex items-center gap-2 text-sm font-medium text-white">
                    <Calendar size={16} />
                    Select Date *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.date}
                      onChange={handleDateChange}
                      className="contact-input pr-10"
                      placeholder="Click calendar or type dd/mm/yyyy"
                      required
                      maxLength={10}
                    />
                    <button
                      type="button"
                      onClick={() => setShowCalendar(!showCalendar)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                    >
                      <Calendar size={16} />
                    </button>
                  </div>

                  {/* Calendar Dropdown */}
                  {showCalendar && (
                    <div
                      ref={calendarRef}
                      className="absolute top-full left-0 mt-1 z-50 bg-black border border-white/20 rounded-xl shadow-2xl p-2 scale-75 origin-top-left"
                    >
                      <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleCalendarDateSelect}
                        disabled={(date) => date < new Date()}
                        modifiers={{
                          selected: selectedDate,
                        }}
                        modifiersStyles={{
                          selected: {
                            backgroundColor: "#3b82f6",
                            color: "white",
                          },
                        }}
                        className="calendar-custom"
                        styles={{
                          day: {
                            color: "white",
                            borderRadius: "4px",
                            fontSize: "10px",
                            padding: "4px",
                            margin: "1px",
                          },
                          head_cell: {
                            color: "white",
                            fontSize: "8px",
                            fontWeight: "bold",
                          },
                          nav_button: {
                            color: "white",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            border: "none",
                            borderRadius: "3px",
                            padding: "2px",
                          },
                          nav_button_previous: {
                            color: "white",
                          },
                          nav_button_next: {
                            color: "white",
                          },
                          caption: {
                            color: "white",
                            fontSize: "12px",
                            fontWeight: "bold",
                          },
                        }}
                      />
                    </div>
                  )}

                  {formData.date && !isValidDate(formData.date) && (
                    <p className="text-red-400 text-sm mt-1">
                      Please enter a valid date in dd/mm/yyyy format
                    </p>
                  )}
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

              {/* Privacy Policy Checkbox */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <input
                    id="privacyAccepted"
                    type="checkbox"
                    checked={formData.privacyAccepted}
                    onChange={(e) =>
                      handleInputChange("privacyAccepted", e.target.checked)
                    }
                    className="mt-1 w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                    required
                  />
                  <label
                    htmlFor="privacyAccepted"
                    className="text-sm text-gray-300"
                  >
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setShowPrivacyModal(true);
                      }}
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Privacy Policy
                    </button>{" "}
                    and consent to the collection and use of my personal data as
                    described. *
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="contact-submit-btn btn-gradient disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!formData.privacyAccepted}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ zIndex: 2147483647 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPrivacyModal(false);
            }
          }}
        >
          <div
            className="bg-gray-900 rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col border border-white/20 overflow-hidden relative"
            style={{ zIndex: 2147483647 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20 flex-shrink-0">
              <div className="flex items-center gap-3">
                <Shield className="text-blue-400" size={24} />
                <h3 className="text-xl font-semibold text-white">
                  Privacy Policy
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div
              className="flex-1 overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
                <div className="text-sm text-gray-400 mb-4">
                  Last Updated: June 30, 2025
                </div>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    1. Introduction
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Welcome to [Your Website Name], a premier web development
                    company pioneering a digital universe where innovation
                    seamlessly integrates with privacy. We are dedicated to
                    safeguarding your personal information and delivering a
                    secure, trustworthy experience as you engage with our
                    cutting-edge services. This Privacy Policy provides a
                    transparent overview of how we collect, process, utilize,
                    disclose, and protect your data, ensuring compliance with
                    relevant regulations, including the Digital Personal Data
                    Protection Act 2023 (India) and the General Data Protection
                    Regulation (GDPR) where applicable.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    2. Data We Collect
                  </h4>
                  <p className="text-sm leading-relaxed mb-3">
                    As part of our commitment to delivering exceptional web
                    solutions, we may collect the following categories of
                    personal data when you interact with our website or reach
                    out to us:
                  </p>
                  <ul className="text-sm space-y-2 ml-4">
                    <li>
                      <strong>Contact Information:</strong> Full name, email
                      address, and phone number submitted via our "Contact Us"
                      form.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> IP address, browser type,
                      pages visited, and session duration, gathered through
                      cookies and advanced analytics tools.
                    </li>
                    <li>
                      <strong>Optional Data:</strong> Additional details you
                      choose to provide, such as project inquiries or messages.
                    </li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-3">
                    This data is obtained via secure form submissions, cookies,
                    and third-party analytics platforms like Google Analytics.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    3. How We Use Your Data
                  </h4>
                  <p className="text-sm leading-relaxed mb-3">
                    We leverage your data to enhance our services and support
                    your needs:
                  </p>
                  <ul className="text-sm space-y-2 ml-4">
                    <li>
                      Respond promptly to your inquiries and provide tailored
                      support through our "Contact Us" channel.
                    </li>
                    <li>
                      Optimize our website and development offerings using
                      insightful usage analytics.
                    </li>
                    <li>
                      Share relevant updates, promotional offers, or project
                      opportunities, subject to your explicit consent.
                    </li>
                    <li>
                      Fulfill legal obligations and safeguard against potential
                      fraud or security threats.
                    </li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    4. Cookies and Tracking Technologies
                  </h4>
                  <p className="text-sm leading-relaxed">
                    To elevate your experience, our website employs cookies and
                    similar tracking technologies to improve functionality and
                    analyze user interactions. You retain full control over your
                    cookie preferences through your browser settings. For
                    further details, consult our [Cookie Policy] (if available)
                    or contact our support team. We collaborate with trusted
                    third-party tools, such as Google Analytics, which may
                    deploy additional cookies—opt-out options are accessible via
                    their configuration settings.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    5. Data Security
                  </h4>
                  <p className="text-sm leading-relaxed">
                    At [Your Website Name], we prioritize the security of your
                    data by implementing industry-leading encryption (e.g.,
                    SSL/TLS) and robust server infrastructure. Our expert team
                    enforces stringent access controls and conducts regular
                    security audits to uphold the highest standards. While we
                    strive to mitigate risks, please note that no digital
                    transmission is entirely immune to breaches, and we cannot
                    offer an absolute security guarantee.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    6. Sharing and Disclosure
                  </h4>
                  <p className="text-sm leading-relaxed mb-3">
                    We uphold a strict no-sale policy for your personal data.
                    Disclosure may occur under the following circumstances:
                  </p>
                  <ul className="text-sm space-y-2 ml-4">
                    <li>
                      <strong>Service Providers:</strong> Trusted third parties
                      supporting our operations, such as hosting (e.g., AWS),
                      analytics, or email services (e.g., Google), under
                      confidentiality agreements.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> Compliance with
                      lawful requests or to protect our rights and those of our
                      users.
                    </li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-3">
                    All partners are contractually obligated to maintain data
                    confidentiality.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    7. User Rights
                  </h4>
                  <p className="text-sm leading-relaxed mb-3">
                    As a user, you are empowered with the following rights
                    regarding your personal data:
                  </p>
                  <ul className="text-sm space-y-2 ml-4">
                    <li>
                      Request access, correction, or deletion of your
                      information.
                    </li>
                    <li>
                      Limit or object to specific data processing activities.
                    </li>
                    <li>
                      Seek data portability or withdraw consent at any time.
                    </li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-3">
                    To exercise these rights, please email us at
                    [privacy@yourwebsite.com]. We aim to respond to your request
                    within 30 days.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    8. Children's Privacy
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Our web development services are designed for individuals
                    aged 13 and above. We do not intentionally collect data from
                    children under this age. Should we identify such data, it
                    will be promptly deleted upon notification.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    9. Changes to This Policy
                  </h4>
                  <p className="text-sm leading-relaxed">
                    As a forward-thinking company, we may revise this Privacy
                    Policy to reflect evolving practices or regulatory changes.
                    The most current version will be published on this page,
                    accompanied by an updated "Last Updated" date. We recommend
                    periodic reviews to stay informed of any modifications.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    10. International Data Transfers
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Your data may be processed in regions such as India, the
                    European Union, or the United States by our service
                    providers. We ensure adherence to local data protection
                    regulations and implement standard contractual clauses to
                    safeguard cross-border data transfers where necessary.
                  </p>
                </section>
              </div>
            </div>

            {/* Modal Footer */}
            <div
              className="p-6 border-t border-white/20 flex justify-end flex-shrink-0 relative"
              style={{ zIndex: 2147483647 }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling

                  setShowPrivacyModal(false);
                }}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer select-none relative"
                style={{ zIndex: 2147483647 }}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
