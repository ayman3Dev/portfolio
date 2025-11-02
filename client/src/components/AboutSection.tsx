import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { Code2, BookOpen, Zap } from 'lucide-react';

export function AboutSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div
            className={`mb-16 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold font-space-mono mb-4 animate-text-glow">
              <span className="text-gradient">{t('about.title')}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"></div>
          </div>

          {/* Intro */}
          <p className={`text-xl text-gray-300 mb-12 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {t('about.intro')}
          </p>

          {/* Three Column Layout */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Background */}
            <div
              className={`group p-8 rounded-lg border border-green-500/20 hover:border-green-500/50 bg-green-500/5 hover:bg-green-500/10 transition-all duration-500 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold font-space-mono text-green-400">
                  {t('about.background')}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {t('about.backgroundText')}
              </p>
            </div>

            {/* Education */}
            <div
              className={`group p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all duration-500 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold font-space-mono text-cyan-400">
                  {t('about.education')}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                {t('about.educationText')}
              </p>
            </div>

            {/* Experience */}
            <div
              className={`group p-8 rounded-lg border border-pink-500/20 hover:border-pink-500/50 bg-pink-500/5 hover:bg-pink-500/10 transition-all duration-500 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold font-space-mono text-pink-400">
                  {t('about.experience')}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {t('about.experienceText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
