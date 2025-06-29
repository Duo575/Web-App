/**
 * TechFrameworks Component - Orbiting technology stack display
 * Purpose: Display technology stack in an orbiting animation
 * Dependencies: React, OrbitingCircles
 * Features: Dual orbit layers, technology icons, responsive design
 */

import { OrbitingCircles } from "./OrbitingCircles";

export function TechFrameworks() {
  const skills = [
    { name: "Auth0", icon: "🔐" },
    { name: "Blazor", icon: "🔥" },
    { name: "C++", icon: "⚡" },
    { name: "C#", icon: "💎" },
    { name: "CSS3", icon: "🎨" },
    { name: ".NET", icon: "🌐" },
    { name: ".NET Core", icon: "⚙️" },
    { name: "Git", icon: "📝" },
    { name: "HTML5", icon: "📄" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Microsoft", icon: "🪟" },
    { name: "React", icon: "⚛️" },
    { name: "SQLite", icon: "🗄️" },
    { name: "Tailwind", icon: "💨" },
    { name: "Vite", icon: "⚡" },
    { name: "WordPress", icon: "📰" },
  ];

  const Icon = ({ skill }: { skill: { name: string; icon: string } }) => (
    <div
      className="duration-200 rounded-lg hover:scale-110 bg-card/50 p-2 border border-primary/20 hover:border-secondary/50 transition-all"
      title={skill.name}
    >
      <span className="text-2xl">{skill.icon}</span>
    </div>
  );

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} skill={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills
          .slice()
          .reverse()
          .map((skill, index) => (
            <Icon key={index} skill={skill} />
          ))}
      </OrbitingCircles>
    </div>
  );
}
