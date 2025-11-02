import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div
            className={`transition-all duration-700 mb-8 flex justify-center ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Aymane Aaraba"
                className="w-40 h-40 rounded-full object-cover border-4 border-green-500/50 hover:border-green-500 transition-all duration-300 hover-glow"
              />
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-pulse"></div>
            </div>
          </div>
          {/* Greeting */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-lg text-green-400 font-space-mono mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {t('hero.greeting')}
            </p>
          </div>

          {/* Main Title */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 font-space-mono text-gradient animate-text-glow">
              {t('hero.title')}
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-2xl md:text-3xl text-cyan-400 font-light mb-6 font-poppins">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`transition-all duration-700 delay-500 flex flex-col sm:flex-row gap-4 justify-center mb-12 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              size="lg"
              className="group bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-6 text-lg hover-lift neon-glow animate-bounce-in"
              onClick={() => scrollToSection('projects')}
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-6 text-lg hover-lift animate-bounce-in"
              onClick={() => scrollToSection('contact')}
              style={{ animationDelay: '0.1s' }}
            >
              {t('hero.ctaContact')}
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`transition-all duration-700 delay-600 flex justify-center gap-6 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="https://github.com/ayman3Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-green-500/30 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 hover-glow"
            >
              <Github className="w-6 h-6 text-green-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/aymane-aaraba-16579231a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
              style={{
                boxShadow: 'var(--hover-state, none)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(34, 211, 238, 0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <Linkedin className="w-6 h-6 text-cyan-400" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className={`transition-all duration-700 delay-800 absolute bottom-8 left-1/2 -translate-x-1/2 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-gray-400">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-green-500/30 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-green-500 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
