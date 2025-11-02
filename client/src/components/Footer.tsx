import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-green-500/20 bg-slate-900/50 backdrop-blur-sm">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center font-bold text-black font-space-mono">
                  AA
                </div>
                <span className="font-bold text-white font-space-mono">Aymane Aaraba</span>
              </div>
              <p className="text-gray-400 text-sm">Software Engineer | Full-Stack Developer</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white mb-4 font-space-mono">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#home" className="hover:text-green-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-green-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-green-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-green-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-white mb-4 font-space-mono">{t('footer.followMe')}</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ayman3Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-green-500/30 text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aymane-aaraba-16579231a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-cyan-500/30 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:aymancvx@gmail.com"
                  className="p-2 rounded-lg border border-pink-500/30 text-pink-400 hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700/50 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {t('footer.copyright')}
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-green-500/30 text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 hover-lift"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
