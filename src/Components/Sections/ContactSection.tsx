/**
 * Contact Section Component
 * Purpose: Contact form with calendar scheduling, international phone input
 * Dependencies: React, lucide-react
 * Features: Form validation, calendar scheduling, international phone format
 */

import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import emailjs from "@emailjs/browser";
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  Shield,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import countryCodesData from "./ContactSectioncode.json";
import { HoverBorderGradient } from "../UI/hover-border-gradient";
import { ContactFormData, CountryCode } from '@/types';
// EmailJS configuration - using environment variables only
const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Validate EmailJS configuration
const validateEmailConfig = () => {
  const missing = [];
  if (!emailConfig.serviceId) missing.push("VITE_EMAILJS_SERVICE_ID");
  if (!emailConfig.templateId) missing.push("VITE_EMAILJS_TEMPLATE_ID");
  if (!emailConfig.publicKey) missing.push("VITE_EMAILJS_PUBLIC_KEY");

  if (missing.length > 0) {
    console.error("Missing EmailJS environment variables:", missing);
    console.error(
      "Please check your .env file and ensure all EmailJS variables are set."
    );
    return false;
  }
  return true;
};

// Initialize EmailJS
if (validateEmailConfig()) {
  emailjs.init(emailConfig.publicKey);
}

// Email template parameters interface
interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  reply_to: string;
  user_name: string;
  user_email: string;
  phone: string;
  scheduled_date: string;
  scheduled_time: string;
  message: string;
  to_name: string;
}
import "react-day-picker/dist/style.css";

// Country codes for international phone numbers
const countryCodes: CountryCode[] = countryCodesData;

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

interface ContactSectionProps {
  onPrivacyModalOpen?: () => void;
}

export function ContactSection({
  onPrivacyModalOpen,
}: ContactSectionProps = {}) {
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
  const [showTimeSlotDropdown, setShowTimeSlotDropdown] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
  const timeSlotRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowCountryDropdown(false);
        setCountrySearch("");
      }
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
      if (
        timeSlotRef.current &&
        !timeSlotRef.current.contains(event.target as Node)
      ) {
        setShowTimeSlotDropdown(false);
      }
    };

    if (showCountryDropdown || showCalendar || showTimeSlotDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCountryDropdown, showCalendar, showTimeSlotDropdown]);

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
    const inputValue = e.target.value;
    const currentValue = formData.date;

    // If the input is being cleared or is shorter than current (backspace/delete)
    if (inputValue.length < currentValue.length) {
      // For deletion, just use the input value as-is but clean up trailing slashes
      let cleanedValue = inputValue;

      // Remove trailing slashes if no digits follow them
      while (cleanedValue.endsWith("/") && !cleanedValue.match(/\d\/$/)) {
        cleanedValue = cleanedValue.slice(0, -1);
      }

      // If only slashes remain, clear the field completely
      if (cleanedValue.replace(/\//g, "").length === 0) {
        cleanedValue = "";
      }

      handleInputChange("date", cleanedValue);
      return;
    }

    // Only format when adding characters
    let value = inputValue.replace(/\D/g, ""); // Remove non-digits

    // Validate and limit day (01-31)
    if (value.length >= 1) {
      const firstDigit = parseInt(value[0]);
      if (firstDigit > 3) {
        value = "0" + firstDigit + value.substring(1);
      }
    }

    if (value.length >= 2) {
      const day = parseInt(value.substring(0, 2));
      if (day > 31) {
        value = "31" + value.substring(2);
      } else if (day === 0) {
        value = "01" + value.substring(2);
      }
    }

    // Validate and limit month (01-12)
    if (value.length >= 3) {
      const monthFirstDigit = parseInt(value[2]);
      if (monthFirstDigit > 1) {
        value =
          value.substring(0, 2) + "0" + monthFirstDigit + value.substring(3);
      }
    }

    if (value.length >= 4) {
      const month = parseInt(value.substring(2, 4));
      if (month > 12) {
        value = value.substring(0, 2) + "12" + value.substring(4);
      } else if (month === 0) {
        value = value.substring(0, 2) + "01" + value.substring(4);
      }
    }

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

  // Check if date has validation errors (for styling)
  const hasDateError = (dateString: string): boolean => {
    if (!dateString) return false;

    // Only show error for complete or nearly complete dates
    const parts = dateString.split("/");

    // If we have day and month parts, check if they're valid
    if (parts.length >= 2 && parts[0].length === 2 && parts[1].length >= 1) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);

      // Check basic ranges only if month is complete (2 digits)
      if (parts[1].length === 2) {
        if (day > 31 || day < 1 || month > 12 || month < 1) return true;

        // If we have a complete date, check if day exists in month
        if (parts.length === 3 && parts[2].length === 4) {
          const year = parseInt(parts[2], 10);
          if (year >= new Date().getFullYear()) {
            const daysInMonth = new Date(year, month, 0).getDate();
            return day > daysInMonth;
          }
        }
      }
    }

    return false;
  };

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email.trim());
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

  // Reset form to initial state
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      countryCode: countryCodes[0].code,
      date: "",
      timeSlot: "",
      details: "",
      privacyAccepted: false,
    });
    setSelectedDate(undefined);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear any previous errors
    setSubmitError(null);

    if (!formData.privacyAccepted) {
      setSubmitError("Please accept the Privacy Policy to continue.");
      return;
    }

    if (formData.date && !isValidDate(formData.date)) {
      setSubmitError("Please enter a valid date in dd/mm/yyyy format.");
      return;
    }

    // Validate required fields
    if (!formData.name.trim()) {
      setSubmitError("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setSubmitError("Please enter your email address.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    if (!formData.details.trim()) {
      setSubmitError("Please enter your message.");
      return;
    }

    // Check if EmailJS is configured
    if (
      !emailConfig.serviceId ||
      !emailConfig.templateId ||
      !emailConfig.publicKey
    ) {
      setSubmitError(
        "Email service is not configured. Please contact the administrator."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare email template parameters
      const templateParams: EmailTemplateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(), // Common EmailJS variable
        user_name: formData.name.trim(), // Alternative name variable
        user_email: formData.email.trim(), // Alternative email variable
        phone: formData.phone
          ? `${selectedCountry.code} ${formData.phone}`
          : "Not provided",
        scheduled_date: formData.date || "Not specified",
        scheduled_time: formData.timeSlot || "Not specified",
        message: formData.details.trim(),
        to_name: "Portfolio Team",
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams
      );

      console.log("Email sent successfully:", result);

      // Show success alert
      setShowAlert(true);

      // Reset form
      resetForm();

      // Hide alert after 4 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 4000);
    } catch (error: any) {
      console.error("Failed to send email:", error);

      // Provide more specific error messages
      let errorMessage =
        "Failed to send message. Please try again or contact us directly.";

      if (error?.text) {
        // EmailJS specific error
        errorMessage = `Email service error: ${error.text}`;
      } else if (error?.message) {
        // General error with message
        errorMessage = `Error: ${error.message}`;
      } else if (typeof error === "string") {
        errorMessage = error;
      }

      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
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
        const cleanSearchTerm = searchTerm.replace(/[\s-]/g, "");
        const cleanCountryCode = countryCode.replace(/[\s-]/g, "");

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

  // Handle button click for liquid glass effects
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!formData.privacyAccepted || isSubmitting) return;

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    // Create ripple effect
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    button.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);

    // Create floating particles
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        const particle = document.createElement("span");
        particle.classList.add("particle");
        particle.style.left = Math.random() * rect.width + "px";
        particle.style.top = rect.height / 2 + "px";

        button.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 2000);
      }, i * 100);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 mobile:py-16 tablet:py-20 px-3 mobile:px-4 tablet:px-6 content-above-particles"
    >
      <div className="c-space">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-heading text-3xl mobile:text-4xl tablet:text-5xl font-bold mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
        </div>

        {/* Contact Form */}
        <div className="max-w-[95%] mobile:max-w-[90%] tablet:max-w-4xl mx-auto">
          <HoverBorderGradient
            containerClassName="rounded-xl mobile:rounded-2xl w-full"
            as="div"
            className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm text-white p-4 mobile:p-6 tablet:p-8 desktop:p-12 w-full rounded-xl mobile:rounded-2xl"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 mobile:space-y-6 tablet:space-y-7"
              autoComplete="on"
            >
              {/* Name and Email Fields - Two Column Layout */}
              <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 gap-4 mobile:gap-5 tablet:gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="contact-label">
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
                    autoComplete="name"
                    name="name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="contact-label">
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
                    autoComplete="email"
                    name="email"
                  />
                </div>
              </div>

              {/* Phone Number Field */}
              <div className="space-y-2">
                <label htmlFor="phone" className="contact-label">
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
                      className="contact-input w-28 sm:w-32 flex items-center justify-between gap-1 text-sm"
                      style={{ height: "46px" }}
                    >
                      <div className="flex items-center gap-1">
                        <span>{selectedCountry.flag}</span>
                        <span>{selectedCountry.code}</span>
                      </div>
                      <span className="text-gray-400">▼</span>
                    </button>

                    {showCountryDropdown && (
                      <div
                        className="country-dropdown bg-black/90 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl p-4"
                        style={{
                          backgroundColor: "#000000",
                          backdropFilter: "blur(20px)",
                          boxShadow:
                            "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        {/* Search Input */}
                        <div className="mb-4 pb-4 border-b border-white/10">
                          <input
                            type="text"
                            placeholder="Search countries..."
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            className="w-full px-3 py-2 bg-black/70 text-white rounded-lg border border-white/20 focus:border-white focus:outline-none text-sm"
                            autoFocus
                          />
                        </div>

                        {/* Countries List */}
                        <div className="max-h-48 overflow-y-auto -mx-4 modal-content">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() => handleCountrySelect(country)}
                                className="w-full px-4 py-3 text-left hover:bg-white/10 flex items-center gap-3 text-sm text-white transition-all duration-200 border-b border-white/5 last:border-b-0 rounded-lg"
                              >
                                <span className="text-lg">{country.flag}</span>
                                <span className="font-medium text-white">
                                  {country.code}
                                </span>
                                <span className="text-gray-300 truncate">
                                  {country.country}
                                </span>
                              </button>
                            ))
                          ) : (
                            <div className="py-6 text-gray-400 text-sm text-center">
                              <div>
                                No countries found for "{countrySearch}"
                              </div>
                              <div className="text-xs mt-2 text-gray-500">
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
                    autoComplete="tel"
                    name="phone"
                  />
                </div>
              </div>

              {/* Date and Time Scheduling */}
              <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 gap-4 mobile:gap-5 tablet:gap-6">
                {/* Date Picker */}
                <div className="space-y-2 relative">
                  <label className="contact-label">
                    <Calendar size={16} />
                    Select Date *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.date}
                      onChange={handleDateChange}
                      className={`contact-input pr-10 ${
                        hasDateError(formData.date)
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/50"
                          : ""
                      }`}
                      placeholder="Click calendar or type dd/mm/yyyy"
                      required
                      maxLength={10}
                      style={{ height: "46px" }}
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
                      className="absolute top-full left-0 mt-1 z-[60] bg-black/90 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl p-2 mobile:p-3 tablet:p-4"
                      style={{
                        minWidth: "280px",
                        maxWidth: "95vw",
                        backgroundColor: "#000000",
                        backdropFilter: "blur(20px)",
                        boxShadow:
                          "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleCalendarDateSelect}
                        disabled={(date) => date < new Date()}
                        modifiers={{
                          selected: selectedDate,
                        }}
                        className="custom-calendar"
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
                <div className="space-y-2 relative">
                  <label htmlFor="timeSlot" className="contact-label">
                    <Clock size={16} />
                    Time Slot (GMT) *
                  </label>
                  <div className="relative" ref={timeSlotRef}>
                    <button
                      type="button"
                      onClick={() =>
                        setShowTimeSlotDropdown(!showTimeSlotDropdown)
                      }
                      className="contact-input appearance-none w-full text-left flex items-center justify-between"
                    >
                      <span
                        className={
                          formData.timeSlot ? "text-white" : "text-gray-400"
                        }
                      >
                        {formData.timeSlot || "Select time slot"}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          showTimeSlotDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {showTimeSlotDropdown && (
                      <div
                        className="absolute top-full left-0 mt-2 z-[60] bg-black/90 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl p-2 mobile:p-3 tablet:p-4 w-full"
                        style={{
                          backgroundColor: "#000000",
                          backdropFilter: "blur(20px)",
                          boxShadow:
                            "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        <div className="max-h-36 mobile:max-h-40 tablet:max-h-48 overflow-y-auto modal-content">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => {
                                handleInputChange("timeSlot", slot);
                                setShowTimeSlotDropdown(false);
                              }}
                              className={`w-full text-left px-2 mobile:px-3 py-1.5 mobile:py-2 rounded-lg transition-colors duration-200 ${
                                formData.timeSlot === slot
                                  ? "bg-white/20 text-white"
                                  : "text-white hover:bg-white/10"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Details/Message Field */}
              <div className="space-y-2">
                <label htmlFor="details" className="contact-label">
                  <MessageSquare size={16} />
                  Details *
                </label>
                <textarea
                  id="details"
                  rows={4}
                  value={formData.details}
                  onChange={(e) => handleInputChange("details", e.target.value)}
                  className="contact-input resize-none"
                  placeholder="Tell us about your project, requirements, or any specific questions you have..."
                  required
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="pt-1">
                <div className="flex items-start gap-2 mobile:gap-3">
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
                    className="text-xs mobile:text-sm text-gray-300"
                  >
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={() => {
                        if (onPrivacyModalOpen) {
                          onPrivacyModalOpen();
                        } else {
                          setShowPrivacyModal(true);
                        }
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

              {/* Error Message */}
              {submitError && (
                <div className="pt-2 mobile:pt-3">
                  <div className="text-red-500 text-sm mobile:text-base text-center bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                    {submitError}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-3 mobile:pt-4 tablet:pt-5">
                <button
                  type="submit"
                  className="liquid-glass-btn disabled:opacity-50 disabled:cursor-not-allowed w-full px-6 mobile:px-7 tablet:px-8 py-3 mobile:py-3.5 tablet:py-4 rounded-lg font-medium mobile:font-semibold text-base mobile:text-lg flex items-center justify-center gap-2 mobile:gap-3"
                  disabled={!formData.privacyAccepted || isSubmitting}
                  onClick={handleButtonClick}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="hidden mobile:inline" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </HoverBorderGradient>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 mobile:p-3 tablet:p-4"
          style={{ zIndex: 2147483647 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPrivacyModal(false);
            }
          }}
          onWheel={(e) => {
            // Prevent backdrop from capturing wheel events
            e.stopPropagation();
          }}
        >
          <div
            className="bg-gray-900 rounded-xl mobile:rounded-2xl w-full max-w-[95vw] mobile:max-w-[90vw] tablet:max-w-4xl h-[90vh] flex flex-col border border-white/20 overflow-hidden relative"
            style={{ zIndex: 2147483647 }}
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => {
              // Allow wheel events to pass through to content
              e.stopPropagation();
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 mobile:p-4 tablet:p-6 border-b border-white/20 flex-shrink-0">
              <div className="flex items-center gap-2 mobile:gap-3">
                <Shield className="text-blue-400" size={20} />
                <h3 className="text-base mobile:text-lg tablet:text-xl font-semibold text-white">
                  Privacy Policy
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div
              className="flex-1 overflow-y-auto p-3 mobile:p-4 tablet:p-6 modal-content"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => {
                // Ensure wheel events are handled by this scrollable container
                e.stopPropagation();
              }}
              style={{
                scrollBehavior: "smooth",
                overscrollBehavior: "contain",
              }}
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
              className="p-3 mobile:p-4 tablet:p-6 border-t border-white/20 flex justify-end flex-shrink-0 relative"
              style={{ zIndex: 2147483647 }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  setShowPrivacyModal(false);
                }}
                className="px-4 mobile:px-5 tablet:px-6 py-1.5 mobile:py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm mobile:text-base rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer select-none relative"
                style={{ zIndex: 2147483647 }}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Alert Popup */}
      {showAlert && (
        <div className="fixed top-5 mobile:top-8 tablet:top-10 right-5 mobile:right-8 tablet:right-10 z-[9999]">
          <div className="bg-green-600 text-white px-4 mobile:px-5 py-2 mobile:py-3 rounded-lg shadow-lg animate-popup-simple text-sm mobile:text-base font-medium flex items-center gap-2">
            <CheckCircle size={18} />
            <div>
              <div className="font-semibold">Message Sent!</div>
              <div className="text-xs mobile:text-sm opacity-90">
                We'll get back to you soon
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
