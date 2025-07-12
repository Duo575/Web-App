/**
 * Profile Section Component
 * Purpose: Display team member profiles in an interactive card layout
 * Dependencies: React, custom styling
 * Features: Hover effects, responsive design, social links, profile images
 */

import React from "react";

// Define the team member data structure
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// Sample team member data with placeholder content
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Debi Prasad Panda",
    role: "Full-Stack Developer",
    bio: "",
    image: "https://avatar.vercel.sh/debi",
    email: "debiprasadpanda73@gmail.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/debi-prasad-panda-b05b382b1/",
      twitter: "#",
      github: "https://github.com/SilverPhoenix57575",
    },
  },
  {
    id: 2,
    name: "Pratik Kiran Rout",
    role: "Full-Stack Developer",
    bio: "",
    image: "https://avatar.vercel.sh/pratik",
    email: "pratikkiranrout@gmail.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/pratik-kiran-rout-46776b34b/",
      twitter: "#",
      github: "https://github.com/Pratik-kiran-Rout",
    },
  },
  {
    id: 3,
    name: "Manas Ranjan Kishan",
    role: "Frontend Developer",
    bio: "",
    image: "https://avatar.vercel.sh/manas",
    email: "manasranjankishan55@gmail.com",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "Srujan Sattwik",
    role: "Backend Developer",
    bio: "",
    image: "https://avatar.vercel.sh/srujan",
    email: "srujansattwik05@gmail.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/srujan-sattwik-739018277/",
      twitter: "#",
      github: "#",
    },
  },
];

// Profile Card Component
const ProfileCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="profile-card">
      {/* Mail/Contact Button */}
      <a
        href={`mailto:${member.email}`}
        className="profile-card-mail"
        aria-label={`Contact ${member.name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      {/* Profile Picture */}
      <div className="profile-card-pic">
        <img src={member.image} alt={`${member.name} profile`} loading="lazy" />
      </div>

      {/* Bottom Content Area */}
      <div className="profile-card-bottom">
        <div className="profile-card-content">
          <span className="profile-card-name">{member.name}</span>
          <span className="profile-card-role">{member.role}</span>
          <span className="profile-card-about">{member.bio}</span>
        </div>

        <div className="profile-card-footer">
          {/* Social Links */}
          <div className="profile-card-social">
            {member.socialLinks.linkedin && (
              <a
                href={member.socialLinks.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
            {member.socialLinks.twitter && (
              <a
                href={member.socialLinks.twitter}
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            )}
            {member.socialLinks.github && (
              <a
                href={member.socialLinks.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>

          {/* Contact Button */}
          <a
            href={`mailto:${member.email}`}
            className="profile-card-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Profile Section Component
export function ProfileSection() {
  return (
    <section id="profile" className="py-20 px-6 content-above-particles">
      <div className="c-space">
        <h2 className="text-heading mb-8 sm:mb-12">Meet Our Team</h2>

        {/* Profile Cards Grid */}
        <div className="profile-cards-container">
          {teamMembers.map((member) => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
