import React, { useState } from 'react';
import { Users, Youtube, Briefcase, Mail, Globe, Gauge, TrendingUp, Plane, UserCheck, Instagram } from 'lucide-react';
import { LinkItem, Language } from './types';
import { LinkCard } from './components/LinkCard';
import { ContactForm } from './components/ContactForm';

// Zmiana: Aktualizacja URL do logo zgodnie z prośbą
const LOGO_URL = "https://landingpage.progressio.giize.com/logo.png";

// Translations dictionary
const translations = {
  pl: {
    description: "Zbiór wszystkich przekierowań Grankers Teamu",
    skills: {
      improvement: "Self Improvement",
      webDev: "Web Dev",
      video: "Video Editing",
      drone: "Drone Videos",
      community: "Community Mgmt"
    },
    links: {
      skoolTitle: "Dołącz do Grankers na Skool",
      skoolSub: "Elitarna społeczność i wiedza",
      ytTitle: "Kanał YouTube Grankers Team",
      ytSub: "Wiedza Premium za darmo",
      igTitle: "Instagram Grankers Team",
      igSub: "Lifestyle & Backstage",
      progressioTitle: "Progressio",
      progressioSub: "Dziennik rozwoju osobistego",
      successTitle: "Successometer",
      successSub: "Zmierz swój sukces",
       portfolioTitle: "Portfolio - Web Dev & Montaż",
      portfolioSub: "Nasze realizacje",
      contactTitle: "Kontakt / Współpraca",
      contactSub: "Rozpocznijmy projekt"
    },
    footer: "Grankers Team"
  },
  en: {
    description: "Collection of all Grankers Team redirects",
    skills: {
      improvement: "Self Improvement",
      webDev: "Web Dev",
      video: "Video Editing",
      drone: "Drone Videos",
      community: "Community Mgmt"
    },
    links: {
      skoolTitle: "Join Grankers Team on Skool",
      skoolSub: "Elite community and knowledge",
      ytTitle: "Grankers Team YouTube",
      ytSub: "Premium knowledge for free",
      igTitle: "Grankers Team Instagram",
      igSub: "Lifestyle & Backstage",
      progressioTitle: "Progressio",
      progressioSub: "Self-improvement journal",
      successTitle: "Successometer",
      successSub: "Measure your success",
       portfolioTitle: "Portfolio - Web Dev & Editing",
      portfolioSub: "Our work",
      contactTitle: "Contact / Collaboration",
      contactSub: "Let's start a project"
    },
    footer: "Grankers Team"
  }
};

const App: React.FC = () => {
  const [showContact, setShowContact] = useState(false);
  // Domyślny język ustawiony na 'en' (angielski)
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  const links: LinkItem[] = [
    {
      id: 'skool',
      title: t.links.skoolTitle,
      subtext: t.links.skoolSub,
      url: 'https://www.skool.com/grankers-team-2368',
      icon: Users,
      special: true
    },
    {
      id: 'progressio',
      title: t.links.progressioTitle,
      subtext: t.links.progressioSub,
      url: 'https://landingpage.progressio.giize.com',
      icon: TrendingUp,
      badge: 'Pre-order'
    },
    {
      id: 'successometer',
      title: t.links.successTitle,
      subtext: t.links.successSub,
      url: 'https://www.successometer.giize.com',
      icon: Gauge
    },
    {
      id: 'instagram',
      title: t.links.igTitle,
      subtext: t.links.igSub,
      url: 'https://www.instagram.com/grankersteam?igsh=ejJ2dnRya2ZqcTJ3',
      icon: Instagram
    },
    {
      id: 'youtube',
      title: t.links.ytTitle,
      subtext: t.links.ytSub,
      url: 'https://www.youtube.com/@GrankersTeam',
      icon: Youtube
    },
    {
      id: 'portfolio',
      title: t.links.portfolioTitle,
      subtext: t.links.portfolioSub,
      url: 'https://www.grportfolio.giize.com/', // Placeholder kept as requested
      icon: Briefcase
    },
    {
      id: 'contact',
      title: t.links.contactTitle,
      subtext: t.links.contactSub,
      icon: Mail,
      action: () => setShowContact(true)
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center bg-black selection:bg-yellow-500/30 selection:text-yellow-200 font-inter">
      
      {/* Ambient Gold Lighting */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-yellow-900/20 rounded-full blur-[100px] md:blur-[150px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-yellow-800/10 rounded-full blur-[100px] md:blur-[150px] opacity-40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
      </div>

      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button 
          onClick={() => setLang('pl')}
          className={`text-xs font-bold font-[Cinzel] px-3 py-1 rounded-full border transition-all duration-300 ${lang === 'pl' ? 'bg-yellow-600/20 border-yellow-500 text-yellow-400' : 'bg-transparent border-gray-800 text-gray-600 hover:text-gray-400'}`}
        >
          PL
        </button>
        <button 
          onClick={() => setLang('en')}
          className={`text-xs font-bold font-[Cinzel] px-3 py-1 rounded-full border transition-all duration-300 ${lang === 'en' ? 'bg-yellow-600/20 border-yellow-500 text-yellow-400' : 'bg-transparent border-gray-800 text-gray-600 hover:text-gray-400'}`}
        >
          EN
        </button>
      </div>

      <main className="relative z-10 w-full max-w-2xl px-4 py-10 md:py-16 flex flex-col items-center min-h-screen">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8 md:mb-12 text-center animate-fade-in-down w-full">
          
          {/* Logo Container */}
          <div className="relative mb-6 md:mb-8 group">
            <div className="absolute -inset-4 bg-gradient-to-t from-yellow-600/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center p-2">
               <img 
                 src={LOGO_URL} 
                 alt="Grankers Team Logo" 
                 onError={(e) => {
                   // Fallback - jeśli nie ma pliku, pokaż awatar
                   e.currentTarget.src = "https://ui-avatars.com/api/?name=Grankers+Team&background=B38728&color=ffffff&size=256&font-size=0.35&bold=true";
                   e.currentTarget.onerror = null; 
                 }}
                 className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] filter brightness-110 contrast-125 hover:scale-105 transition-transform duration-500"
               />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-wider text-white mb-3 font-[Cinzel]">
            <span className="text-gradient-gold drop-shadow-sm">GRANKERS</span> TEAM
          </h1>
          
          <div className="w-16 md:w-20 h-0.5 bg-gradient-to-r from-transparent via-yellow-600 to-transparent my-3 md:my-4 opacity-80"></div>

          <p className="text-gray-400 max-w-xs md:max-w-md text-xs md:text-sm leading-relaxed tracking-wide font-light">
            {t.description}
          </p>

          {/* Skills Tags - Responsive Layout */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-4 mt-5 md:mt-6 max-w-md">
             <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] text-yellow-600/80 uppercase tracking-[0.1em] font-semibold font-[Cinzel]">
               <TrendingUp size={10} className="md:w-3 md:h-3"/> <span>{t.skills.improvement}</span>
             </div>
             <span className="w-1 h-1 bg-yellow-800 rounded-full my-auto hidden md:block"></span>

             <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] text-yellow-600/80 uppercase tracking-[0.1em] font-semibold font-[Cinzel]">
               <Globe size={10} className="md:w-3 md:h-3"/> <span>{t.skills.webDev}</span>
             </div>
             <span className="w-1 h-1 bg-yellow-800 rounded-full my-auto hidden md:block"></span>
             
             <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] text-yellow-600/80 uppercase tracking-[0.1em] font-semibold font-[Cinzel]">
               <Youtube size={10} className="md:w-3 md:h-3"/> <span>{t.skills.video}</span>
             </div>
             <span className="w-1 h-1 bg-yellow-800 rounded-full my-auto hidden md:block"></span>

             <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] text-yellow-600/80 uppercase tracking-[0.1em] font-semibold font-[Cinzel]">
               <Plane size={10} className="md:w-3 md:h-3"/> <span>{t.skills.drone}</span>
             </div>
             <span className="w-1 h-1 bg-yellow-800 rounded-full my-auto hidden md:block"></span>

             <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] text-yellow-600/80 uppercase tracking-[0.1em] font-semibold font-[Cinzel]">
               <UserCheck size={10} className="md:w-3 md:h-3"/> <span>{t.skills.community}</span>
             </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full space-y-3 md:space-y-4 perspective-1000">
          {showContact ? (
            <ContactForm onClose={() => setShowContact(false)} lang={lang} />
          ) : (
            <div className="space-y-3 md:space-y-4 animate-slide-up-stagger">
              {links.map((link) => (
                <LinkCard key={link.id} item={link} />
              ))}
            </div>
          )}
        </div>

        {/* Minimal Footer */}
        <footer className="mt-auto pt-10 md:pt-16 pb-6 text-center">
          <p className="text-[10px] uppercase tracking-widest text-gray-700">
            &copy; {t.footer}
          </p>
        </footer>

      </main>

      {/* Global Animation Styles */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .text-gradient-gold {
            background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
      `}</style>
    </div>
  );
};

export default App;
