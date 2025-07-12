/**
 * Testimonials Component
 * Purpose: Display user reviews in a scrolling marquee format
 * Dependencies: Marquee component from Magic UI, cn utility, 3D Card components
 * Features: Responsive design, accessibility, dark mode support, 3D hover effects
 */

import { cn } from "@/lib/utils";
import { Marquee } from "@/Components/magicui/marquee";
import { CardContainer, CardBody, CardItem } from "@/Components/UI/3d-card";

// Define the review data with a TypeScript interface for type safety
interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

// Sample review data (can be replaced with dynamic data from an API)
const reviews: Review[] = [
  {
    name: "Raj",
    username: "@raj",
    body: "I've never seen anything like this before. The portfolio website showcases cutting-edge technology with a beautiful night sky theme.",
    img: "https://avatar.vercel.sh/raj",
  },
  {
    name: "Emma",
    username: "@emma",
    body: "The 3D elements and animations are incredibly smooth. This is exactly the kind of modern web development I was looking for.",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "Mike",
    username: "@mike",
    body: "The responsive design works flawlessly on my mobile device. The glass morphism effects add a premium feel to the entire experience.",
    img: "https://avatar.vercel.sh/mike",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "I'm impressed by the attention to detail in this portfolio. The gradient text effects and hover animations are subtle yet effective.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Ben",
    username: "@ben",
    body: "As a UX designer, I appreciate the thoughtful layout and typography choices. The Orbitron headings perfectly match the space theme.",
    img: "https://avatar.vercel.sh/ben",
  },
  {
    name: "Arjun",
    username: "@arjun",
    body: "The technology stack showcase demonstrates expertise in modern web development. React 19 with TypeScript is an excellent choice.",
    img: "https://avatar.vercel.sh/arjun",
  },
];

// Split reviews into two rows for the marquee effect
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// ReviewCard component for rendering individual testimonials with 3D hover effect
const ReviewCard = ({ img, name, username, body }: Review) => {
  return (
    <CardContainer className="w-full max-w-sm mx-auto">
      <CardBody 
        className={cn(
          "bg-black/90 relative group/card border-white/[0.1] hover:border-white/[0.5]",
          "w-64 sm:w-72 md:w-80 lg:w-96 h-48 sm:h-52 md:h-56 rounded-xl p-4 sm:p-6 border",
          "glass backdrop-blur-md transition-all duration-500",
          "testimonial-glow-card testimonial-card-glow",
          "hover:bg-black/95 hover:backdrop-blur-lg"
        )}
        aria-label={`Testimonial by ${name}`}
      >
        {/* User Info - Floats highest */}
        <CardItem translateZ="50" className="flex flex-row items-center gap-2 sm:gap-3">
          <img
            className="rounded-full object-cover transition-all duration-300"
            width="40"
            height="40"
            alt={`Avatar of ${name}`}
            src={img}
            loading="lazy"
          />
          <div className="flex flex-col">
            <CardItem 
              as="figcaption" 
              translateZ="60"
              className="text-sm sm:text-base font-medium text-white transition-all duration-300"
            >
              {name}
            </CardItem>
            <CardItem 
              as="p" 
              translateZ="50"
              className="text-xs sm:text-sm font-medium text-gray-400 transition-all duration-300"
            >
              {username}
            </CardItem>
          </div>
        </CardItem>
        
        {/* Review Text - Second level */}
        <CardItem 
          as="blockquote" 
          translateZ="40"
          className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300 line-clamp-3 transition-all duration-300"
        >
          {body}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

// Main Testimonials component
export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 content-above-particles"
    >
      <div className="c-space">
        <h2 className="text-heading mb-8 sm:mb-12">What People Say</h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="marquee-fade-edge w-full">
            <Marquee pauseOnHover className="[--duration:20s] [--gap:1.6rem] py-4">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>
          <div className="marquee-fade-edge w-full">
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:20s] [--gap:1.6rem] py-4 mt-8"
            >
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>
          {/* Smooth gradient overlays for edge blending */}
          <div className="pointer-events-none absolute inset-y-0 -left-[10%] w-16 sm:w-20 bg-gradient-to-r from-black via-black/80 via-black/40 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 -right-[10%] w-16 sm:w-20 bg-gradient-to-l from-black via-black/80 via-black/40 to-transparent z-10"></div>        </div>
      </div>
    </section>
  );
}
