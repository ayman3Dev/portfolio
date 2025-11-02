import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const skillsData = {
  languages: ['C', 'C++', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
  frameworks: ['React', 'Node.js', 'Express', 'Docker', 'Git', 'Linux'],
  concepts: ['OOP', 'Data Structures', 'Algorithms', 'Networking', 'Multithreading', 'System Design'],
};

export function SkillsSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const SkillCard = ({
    title,
    skills,
    color,
    delay,
  }: {
    title: string;
    skills: string[];
    color: 'green' | 'cyan' | 'pink';
    delay: number;
  }) => {
    const colorClasses = {
      green: 'border-green-500/30 hover:border-green-500/50 bg-green-500/5 hover:bg-green-500/10',
      cyan: 'border-cyan-500/30 hover:border-cyan-500/50 bg-cyan-500/5 hover:bg-cyan-500/10',
      pink: 'border-pink-500/30 hover:border-pink-500/50 bg-pink-500/5 hover:bg-pink-500/10',
    };

    const textColors = {
      green: 'text-green-400',
      cyan: 'text-cyan-400',
      pink: 'text-pink-400',
    };

    return (
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      >
        <div className={`p-8 rounded-lg border transition-all duration-500 hover-lift group ${colorClasses[color]}`}>
          <h3 className={`text-2xl font-bold font-space-mono mb-6 ${textColors[color]}`}>{title}</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="relative"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 cursor-default font-poppins text-sm ${
                    hoveredSkill === skill
                      ? `border-${color}-500 bg-${color}-500/20 text-${color}-300 shadow-lg shadow-${color}-500/50`
                      : `border-${color}-500/30 bg-${color}-500/5 text-gray-300 group-hover:border-${color}-500/50`
                  }`}
                >
                  {skill}
                </div>
                {hoveredSkill === skill && (
                  <div
                    className={`absolute inset-0 rounded-lg border-2 border-${color}-500 animate-pulse pointer-events-none`}
                    style={{
                      boxShadow: `0 0 20px rgba(${
                        color === 'green' ? '34, 197, 94' : color === 'cyan' ? '34, 211, 238' : '236, 72, 153'
                      }, 0.5)`,
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold font-space-mono mb-4 animate-text-glow">
              <span className="text-gradient">{t('skills.title')}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-pink-500 rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCard
              title={t('skills.languages')}
              skills={skillsData.languages}
              color="green"
              delay={100}
            />
            <SkillCard
              title={t('skills.frameworks')}
              skills={skillsData.frameworks}
              color="cyan"
              delay={200}
            />
            <SkillCard
              title={t('skills.concepts')}
              skills={skillsData.concepts}
              color="pink"
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
