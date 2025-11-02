import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { Github } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  skills: string[];
  hours: number;
  status: 'passed' | 'passed_bonus';
  date: string;
  github?: string;
}

const projects: Project[] = [
  {
    name: 'cub3d',
    description: 'A ray-casting 3D game engine inspired by Wolfenstein 3D. Explores graphics programming and game development.',
    skills: ['C', 'Graphics', 'Algorithms', 'Game Dev'],
    hours: 280,
    status: 'passed_bonus',
    date: 'December 2024',
    github: 'https://github.com/ayman3Dev',
  },
  {
    name: 'Inception',
    description: 'Docker containerization project. Learn system administration and DevOps practices through infrastructure as code.',
    skills: ['Docker', 'System Admin', 'DevOps', 'Linux'],
    hours: 210,
    status: 'passed',
    date: 'October 2025',
    github: 'https://github.com/ayman3Dev',
  },
  {
    name: 'ft_irc',
    description: 'Internet Relay Chat server implementation in C++. Full networking and concurrent programming experience.',
    skills: ['C++', 'Networking', 'Sockets', 'Multithreading'],
    hours: 175,
    status: 'passed_bonus',
    date: 'July 2025',
    github: 'https://github.com/ayman3Dev',
  },
  {
    name: 'minishell',
    description: 'Unix shell implementation. Deep dive into process management, file descriptors, and system calls.',
    skills: ['C', 'Unix', 'Shell', 'System Calls'],
    hours: 210,
    status: 'passed_bonus',
    date: 'August 2024',
    github: 'https://github.com/ayman3Dev',
  },
  {
    name: 'push_swap',
    description: 'Sorting algorithm optimization challenge. Implement efficient sorting with limited operations.',
    skills: ['C', 'Algorithms', 'Data Structures', 'Optimization'],
    hours: 60,
    status: 'passed',
    date: 'May 2024',
    github: 'https://github.com/ayman3Dev',
  },
  {
    name: 'so_long',
    description: '2D game development with graphics library. Learn textures, sprites, and game loops.',
    skills: ['C', 'Graphics', 'Game Dev', 'Rendering'],
    hours: 60,
    status: 'passed',
    date: 'March 2024',
    github: 'https://github.com/ayman3Dev',
  },
];

export function ProjectsSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
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
              <span className="text-gradient-cyan-pink">{t('projects.title')}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`group relative transition-all duration-500 animate-scale-in ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  animationDelay: isVisible ? `${index * 80}ms` : '0ms',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div className="relative h-full p-6 rounded-lg border border-gray-700/50 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                  {/* Animated background on hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1)' : 'scale(0.95)',
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold font-space-mono text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-400 mb-3">{project.date}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-4 mb-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {project.hours} {t('projects.hours')}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${project.status === 'passed_bonus' ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
                        {project.status === 'passed_bonus' ? t('projects.passedBonus') : t('projects.passed')}
                      </span>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded bg-green-500/10 text-green-400 border border-green-500/30 group-hover:border-green-500/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded bg-gray-700/50 text-gray-400">
                          +{project.skills.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 rounded text-sm font-medium text-gray-300 border border-gray-700 hover:border-green-500 hover:text-green-400 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
