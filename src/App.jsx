import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import CV from './components/CV';
import PortfolioGrid from './components/PortfolioGrid';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">

      {/* Sticky Top Navigation Bar */}
      <div className="sticky top-0 z-40 w-full flex justify-center py-4 px-4 bg-transparent print:hidden">
        <div 
          className="flex items-center gap-2 sm:gap-4 bg-white px-4 py-2 border-2 border-sketch-charcoal sketch-shadow-sm"
          style={{ borderRadius: "20px 200px 30px 220px/200px 30px 220px 20px" }}
        >
          {['about', 'cv', 'portfolio', 'contact'].map((section, idx) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="font-hand text-lg sm:text-2xl font-bold px-2 sm:px-3 py-1 hover:text-sketch-orange transition-colors cursor-pointer capitalize"
            >
              {section === 'portfolio' ? 'project' : section === 'cv' ? 'CV' : section}
              {idx < 3 && <span className="text-sketch-charcoal/30 ml-2 sm:ml-4 font-normal">|</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-16 print:p-0 print:m-0">
        
        {/* Hero Header */}
        <Header />

        {/* About Scrapbook */}
        <About />

        {/* Separator Scribble line */}
        <div className="w-full flex justify-center py-4 print:hidden">
          <svg className="w-48 h-6 text-sketch-charcoal opacity-30" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2,5 Q25,2 50,5 T98,5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>

        {/* CV Segment */}
        <CV />

        {/* Separator Scribble line */}
        <div className="w-full flex justify-center py-4 print:hidden">
          <svg className="w-48 h-6 text-sketch-charcoal opacity-30" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2,5 C30,8 70,2 98,5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Creations / Project Grid */}
        <PortfolioGrid />

        {/* Separator Scribble line */}
        <div className="w-full flex justify-center py-4 print:hidden">
          <svg className="w-48 h-6 text-sketch-charcoal opacity-30" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2,5 Q25,8 50,5 T98,5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Contact Form */}
        <Contact />

      </main>

      {/* Handwritten Footer */}
      <footer className="w-full py-12 px-4 border-t-2 border-sketch-charcoal/20 text-center font-hand text-xl sm:text-2xl mt-16 text-sketch-charcoal/80 space-y-4 print:hidden">
        <div>
          <span>hand-crafted with </span>
          <span className="text-sketch-orange animate-float inline-block">♥</span>
          <span> and crayons by Lam Van Di</span>
        </div>
        
        {/* Social media links */}
        <div className="flex justify-center gap-6 text-lg sm:text-xl font-bold">
          <a href="https://github.com/diiego05" target="_blank" rel="noreferrer" className="hover:text-sketch-green hover:underline decoration-wavy">
            github
          </a>
          <span>•</span>
          <a href="https://www.linkedin.com/in/l%C3%A2m-v%C4%83n-d%E1%BB%89-553263351/" target="_blank" rel="noreferrer" className="hover:text-sketch-orange hover:underline decoration-wavy">
            linkedin
          </a>
        </div>

        <div className="text-xs font-sans font-normal opacity-50 mt-4">
          © {new Date().getFullYear()} Lam Van Di. all rights reserved.
        </div>
      </footer>

      {/* Floating back-to-top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 border-2 border-sketch-charcoal bg-white text-sketch-charcoal cursor-pointer sketch-shadow-sm hover:-translate-y-1 transition-transform z-40 print:hidden"
          style={{ borderRadius: "50%" }}
        >
          <ArrowUp size={20} />
        </button>
      )}

    </div>
  );
}
