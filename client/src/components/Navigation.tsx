import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoHoverCount, setLogoHoverCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleLogoHover = () => {
    setLogoHoverCount(prev => prev + 1);
    if (logoHoverCount === 4) {
      // Easter egg: Show special animation
      const logo = document.getElementById('logo');
      if (logo) {
        logo.style.animation = 'spin 1s ease-in-out';
        setTimeout(() => {
          logo.style.animation = '';
        }, 1000);
      }
      setLogoHoverCount(0);
    }
  };

  const navItems = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.skills'), id: 'skills' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-green-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div
          id="logo"
          className="flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => scrollToSection('home')}
          onMouseEnter={handleLogoHover}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center font-bold text-black font-space-mono">
            AA
          </div>
          <span className="hidden sm:inline font-bold text-white font-space-mono">Aymane</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-poppins relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-green-500/20 pl-8">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded transition-all duration-300 font-poppins text-sm ${
                language === 'en'
                  ? 'bg-green-500 text-black font-bold'
                  : 'text-gray-400 hover:text-green-400'
              }`}
            >
              EN
            </button>
            <span className="text-gray-500">/</span>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 rounded transition-all duration-300 font-poppins text-sm ${
                language === 'fr'
                  ? 'bg-green-500 text-black font-bold'
                  : 'text-gray-400 hover:text-green-400'
              }`}
            >
              FR
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {/* Language Switcher Mobile */}
          <div className="flex items-center gap-1 border-r border-green-500/20 pr-4">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded text-xs transition-all duration-300 font-poppins ${
                language === 'en'
                  ? 'bg-green-500 text-black font-bold'
                  : 'text-gray-400'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2 py-1 rounded text-xs transition-all duration-300 font-poppins ${
                language === 'fr'
                  ? 'bg-green-500 text-black font-bold'
                  : 'text-gray-400'
              }`}
            >
              FR
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded hover:bg-green-500/10 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-green-400" />
            ) : (
              <Menu className="w-6 h-6 text-green-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-green-500/20">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-300 hover:text-green-400 transition-colors py-2 font-poppins"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Add spin animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </nav>
  );
}
