/**
 * Services Section Component
 * Purpose: Showcase all digital services offered by Cosmobits
 * Dependencies: React, framer-motion, lucide-react icons
 * Features: Service cards with hover effects, comprehensive service listings
 */

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  FileImage,
  Code,
  CheckCircle,
} from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  category: "development" | "design" | "marketing" | "consulting";
}

const services: Service[] = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Custom websites built with modern technologies like React, Node.js, and responsive design principles.",
    icon: <Globe className="w-8 h-8" />,
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Mobile-First",
    ],
    category: "development",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    icon: <Smartphone className="w-8 h-8" />,
    features: [
      "Cross-Platform",
      "Native Performance",
      "App Store Ready",
      "Push Notifications",
    ],
    category: "development",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive user interfaces and experiences that convert visitors into customers.",
    icon: <Palette className="w-8 h-8" />,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    category: "design",
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    description:
      "Complete online stores with payment integration, inventory management, and customer analytics.",
    icon: <ShoppingCart className="w-8 h-8" />,
    features: [
      "Payment Gateway",
      "Inventory System",
      "Order Management",
      "Analytics",
    ],
    category: "development",
  },
  {
    id: 5,
    title: "Digital Marketing Assets",
    description:
      "Eye-catching banners, flyers, social media graphics, and complete brand identity packages.",
    icon: <FileImage className="w-8 h-8" />,
    features: [
      "Social Media Graphics",
      "Print Materials",
      "Brand Identity",
      "Marketing Collateral",
    ],
    category: "marketing",
  },
  {
    id: 6,
    title: "Custom Web Applications",
    description:
      "Tailored web applications for specific business needs with advanced functionality and integrations.",
    icon: <Code className="w-8 h-8" />,
    features: [
      "Custom Features",
      "API Integration",
      "Database Design",
      "Scalable Architecture",
    ],
    category: "development",
  },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  const categoryColors = {
    development: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    design: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    marketing: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    consulting: "from-orange-500/20 to-yellow-500/20 border-orange-500/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative group bg-gradient-to-br ${
        categoryColors[service.category]
      } backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10`}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-4 group-hover:bg-white/20 transition-colors duration-300">
        <div className="text-white">{service.icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-4 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <div className="space-y-2">
        {service.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-sm text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-300" />
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-12 mobile:py-16 tablet:py-20 px-3 mobile:px-4 tablet:px-6 content-above-particles"
    >
      <div className="c-space">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-3xl mobile:text-4xl tablet:text-5xl font-bold mb-3 mobile:mb-4 tablet:mb-5">
            Complete{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>

          <p className="subtext text-center max-w-3xl mx-auto">
            From stunning websites to eye-catching marketing materials - we
            provide everything your business needs to succeed in the digital
            world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Animated Beam Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-black/40 backdrop-blur-sm p-8 md:p-12"
        >
          {/* Animated beam effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent rotate-45"
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent rotate-45"
              animate={{
                x: ["100%", "-100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Complete Digital Solutions
            </motion.h3>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              From concept to deployment, we handle every aspect of your digital
              presence with modern technology and creative excellence.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
