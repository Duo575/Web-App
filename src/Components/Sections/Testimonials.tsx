/**
 * Testimonials Component
 * Purpose: Display user reviews in a scrolling marquee format
 * Dependencies: Marquee component from Magic UI, cn utility
 * Features: Responsive design, accessibility, dark mode support
 */

import { cn } from "@/lib/utils";
import { Marquee } from "@/Components/magicui/marquee";

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

// ReviewCard component for rendering individual testimonials
const ReviewCard = ({ img, name, username, body }: Review) => {
  return (
    <figure
      className={cn(
        "relative w-64 sm:w-72 md:w-80 lg:w-96 h-48 sm:h-52 md:h-56 cursor-pointer overflow-hidden rounded-xl border p-4 sm:p-6",
        // Glass morphism effect with our theme
        "glass backdrop-blur-md",
        // Card glow effect from our theme
        "card-glow hover:scale-hover",
        // Responsive styles
        "transition-all duration-300 ease-in-out"
      )}
      aria-label={`Testimonial by ${name}`}
    >
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <img
          className="rounded-full object-cover"
          width="40"
          height="40"
          alt={`Avatar of ${name}`}
          src={img}
          loading="lazy"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm sm:text-base font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs sm:text-sm font-medium text-gray-400">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300 line-clamp-3">
        {body}
      </blockquote>
    </figure>
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
          <Marquee pauseOnHover className="[--duration:20s] space-x-4">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:20s] space-x-4 mt-4"
          >
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          {/* Gradient overlays for smooth edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 sm:w-1/4 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 sm:w-1/4 bg-gradient-to-l from-black"></div>
        </div>
      </div>
    </section>
  );
}
