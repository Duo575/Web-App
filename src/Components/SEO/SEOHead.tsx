/**
 * SEO Head Component
 * Purpose: Comprehensive SEO optimization with Open Graph, Twitter Cards, and Structured Data
 * Dependencies: React Helmet or direct head manipulation
 * Features: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data, canonical URLs
 */

import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOProps> = ({
  title = "Cosmobits - Your idea, Our code | Professional Web Development Services",
  description = "Professional web development services specializing in React, Node.js, full-stack development, UI/UX design, and modern web solutions. Transform your ideas into powerful digital experiences.",
  keywords = "web development services, React development company, Node.js developers, full-stack web development, UI/UX design agency, mobile app development, e-commerce website development, custom web solutions, JavaScript development, TypeScript development, MongoDB database, responsive web design, modern web technologies, professional web developers, website design company, web application development, frontend development, backend development, MERN stack development, web development agency India, remote web developers, cosmobits web development",
  image = "https://cosmobits.work/website-design.png",
  url = "https://cosmobits.work/",
  type = "website",
  author = "Cosmobits Team",
  publishedTime,
  modifiedTime = new Date().toISOString(),
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Create or update meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      property?: boolean
    ) => {
      const attribute = property ? "property" : "name";
      let meta = document.querySelector(
        `meta[${attribute}="${name}"]`
      ) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic Meta Tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);
    updateMetaTag(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    updateMetaTag("googlebot", "index, follow");
    updateMetaTag("bingbot", "index, follow");

    // Viewport and mobile optimization
    updateMetaTag(
      "viewport",
      "width=device-width, initial-scale=1.0, maximum-scale=5.0"
    );
    updateMetaTag("format-detection", "telephone=no");

    // Open Graph Tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", "Cosmobits", true);
    updateMetaTag("og:locale", "en_US", true);

    // Twitter Card Tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:site", "@cosmobits");
    updateMetaTag("twitter:creator", "@cosmobits");

    // Additional Open Graph for better social sharing
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag(
      "og:image:alt",
      "Cosmobits - Professional Web Development Services",
      true
    );

    // Article specific tags (if applicable)
    if (type === "article") {
      if (publishedTime)
        updateMetaTag("article:published_time", publishedTime, true);
      if (modifiedTime)
        updateMetaTag("article:modified_time", modifiedTime, true);
      updateMetaTag("article:author", author, true);
      updateMetaTag("article:section", "Technology", true);
      updateMetaTag("article:tag", "Web Development, React, Node.js", true);
    }

    // Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Alternate URLs for different languages (if needed in future)
    let alternate = document.querySelector(
      'link[rel="alternate"][hreflang="en"]'
    ) as HTMLLinkElement;
    if (!alternate) {
      alternate = document.createElement("link");
      alternate.rel = "alternate";
      alternate.hreflang = "en";
      document.head.appendChild(alternate);
    }
    alternate.href = url;

    // Preconnect to external domains for performance
    const preconnectDomains = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://avatar.vercel.sh",
      "https://images.unsplash.com",
    ];

    preconnectDomains.forEach((domain) => {
      let preconnect = document.querySelector(
        `link[rel="preconnect"][href="${domain}"]`
      ) as HTMLLinkElement;
      if (!preconnect) {
        preconnect = document.createElement("link");
        preconnect.rel = "preconnect";
        preconnect.href = domain;
        if (domain.includes("fonts.gstatic.com")) {
          preconnect.crossOrigin = "anonymous";
        }
        document.head.appendChild(preconnect);
      }
    });

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://cosmobits.work/#organization",
          name: "Cosmobits",
          url: "https://cosmobits.work/",
          logo: {
            "@type": "ImageObject",
            url: "https://cosmobits.work/website-design.png",
            width: 1200,
            height: 630,
          },
          description:
            "Professional web development services specializing in React, Node.js, full-stack development, and modern web solutions.",
          foundingDate: "2024",
          slogan: "Your idea, Our code",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["English"],
            areaServed: "Worldwide",
          },
          sameAs: [
            "https://github.com/Duo575",
            "https://www.linkedin.com/company/cosmobits",
          ],
          address: {
            "@type": "PostalAddress",
            addressCountry: "Global",
            addressRegion: "Remote Services",
          },
          serviceArea: {
            "@type": "Place",
            name: "Worldwide",
          },
        },
        {
          "@type": "WebSite",
          "@id": "https://cosmobits.work/#website",
          url: "https://cosmobits.work/",
          name: "Cosmobits",
          description: description,
          publisher: {
            "@id": "https://cosmobits.work/#organization",
          },
          inLanguage: "en-US",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://cosmobits.work/?s={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        },
        {
          "@type": "WebPage",
          "@id": url + "#webpage",
          url: url,
          name: title,
          description: description,
          isPartOf: {
            "@id": "https://cosmobits.work/#website",
          },
          about: {
            "@id": "https://cosmobits.work/#organization",
          },
          datePublished: "2024-01-01T00:00:00+00:00",
          dateModified: modifiedTime,
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://cosmobits.work/",
              },
            ],
          },
        },
        {
          "@type": "Service",
          name: "Web Development Services",
          description:
            "Professional web development services including React development, Node.js backend, full-stack solutions, UI/UX design, and mobile app development.",
          provider: {
            "@id": "https://cosmobits.work/#organization",
          },
          serviceType: [
            "Web Development",
            "React Development",
            "Node.js Development",
            "Full-Stack Development",
            "UI/UX Design",
            "Mobile App Development",
            "E-commerce Development",
            "Custom Web Solutions",
          ],
          areaServed: "Worldwide",
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: "https://cosmobits.work/#contact",
            serviceType: "Online",
          },
        },
        {
          "@type": "ProfessionalService",
          name: "Cosmobits Web Development",
          image: image,
          description: description,
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressCountry: "Global",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "0",
            longitude: "0",
          },
          url: "https://cosmobits.work/",
          telephone: "+91-8847832480",
          email: "hello@cosmobits.work",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "16:30",
              timeZone: "GMT",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Sunday"],
              opens: "04:30",
              closes: "16:30",
              timeZone: "IST",
            },
          ],
        },
        {
          "@type": "ItemList",
          "@id": "https://cosmobits.work/#services",
          name: "Web Development Services",
          description:
            "Comprehensive web development services offered by Cosmobits",
          itemListElement: [
            {
              "@type": "Service",
              position: 1,
              name: "React Development",
              description:
                "Professional React.js development services for modern web applications",
              url: "https://cosmobits.work/#services",
              provider: {
                "@id": "https://cosmobits.work/#organization",
              },
            },
            {
              "@type": "Service",
              position: 2,
              name: "Node.js Development",
              description:
                "Scalable backend development using Node.js and Express.js",
              url: "https://cosmobits.work/#services",
              provider: {
                "@id": "https://cosmobits.work/#organization",
              },
            },
            {
              "@type": "Service",
              position: 3,
              name: "Full-Stack Development",
              description:
                "Complete web application development from frontend to backend",
              url: "https://cosmobits.work/#services",
              provider: {
                "@id": "https://cosmobits.work/#organization",
              },
            },
            {
              "@type": "Service",
              position: 4,
              name: "UI/UX Design",
              description:
                "Modern and intuitive user interface and experience design",
              url: "https://cosmobits.work/#services",
              provider: {
                "@id": "https://cosmobits.work/#organization",
              },
            },
          ],
        },
        {
          "@type": "FAQPage",
          "@id": "https://cosmobits.work/#faq",
          mainEntity: [
            {
              "@type": "Question",
              name: "What web development services does Cosmobits offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Cosmobits offers comprehensive web development services including React development, Node.js backend development, full-stack web applications, UI/UX design, mobile app development, e-commerce solutions, and custom web development.",
              },
            },
            {
              "@type": "Question",
              name: "How can I contact Cosmobits for a project?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can contact Cosmobits through our website contact form, email us at hello@cosmobits.work, or call us at +91-8847832480. We're available Monday-Saturday 9AM-4:30PM GMT and Sunday 4:30AM-4:30PM IST.",
              },
            },
            {
              "@type": "Question",
              name: "Does Cosmobits work with clients globally?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Cosmobits is a remote-first company serving clients worldwide. We provide professional web development services globally with physical meetings available in major Indian cities.",
              },
            },
            {
              "@type": "Question",
              name: "What technologies does Cosmobits specialize in?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Cosmobits specializes in modern web technologies including React.js, Node.js, JavaScript, TypeScript, MongoDB, Express.js, Next.js, and the complete MERN stack for full-stack development.",
              },
            },
          ],
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://cosmobits.work/#breadcrumbs",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://cosmobits.work/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://cosmobits.work/#services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Portfolio",
              item: "https://cosmobits.work/#projects",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "About",
              item: "https://cosmobits.work/#about",
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Contact",
              item: "https://cosmobits.work/#contact",
            },
          ],
        },
      ],
    };

    // Add or update JSON-LD script
    let jsonLdScript = document.querySelector(
      'script[type="application/ld+json"]'
    ) as HTMLScriptElement;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.type = "application/ld+json";
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData, null, 2);
  }, [
    title,
    description,
    keywords,
    image,
    url,
    type,
    author,
    publishedTime,
    modifiedTime,
  ]);

  return null; // This component doesn't render anything visible
};

export default SEOHead;
