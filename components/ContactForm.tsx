import React, { useState } from 'react';
import { Send, X, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { FormStatus, ContactFormData, Language } from '../types';

// INSTRUKCJA:
// 1. Zarejestruj się na https://formspree.io
// 2. Utwórz nowy formularz i ustaw email docelowy na: karol.grankers@gmail.com
// 3. Skopiuj swoje "Form ID" (np. xykzpqmn) i wklej poniżej w cudzysłowie.
const FORMSPREE_ID = "mjknljev"; 

interface ContactFormProps {
  onClose: () => void;
  lang: Language;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onClose, lang }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const t = {
    pl: {
      successTitle: "Wysłano pomyślnie!",
      successMsg: FORMSPREE_ID ? "Dziękujemy za wiadomość." : "Jeśli klient poczty nie otworzył się, sprawdź pop upy.",
      title: "Współpraca",
      subtitle: "Opisz swój projekt. Web Dev, Montaż, czy coś zupełnie innego?",
      nameLabel: "Twoje Imię",
      emailLabel: "Email",
      msgLabel: "Wiadomość",
      send: "WYŚLIJ",
      sending: "WYSYŁANIE...",
      error: "Wystąpił błąd. Spróbuj ponownie.",
      placeholderName: "Jan Kowalski",
      placeholderMsg: "Cześć, potrzebuję..."
    },
    en: {
      successTitle: "Sent Successfully!",
      successMsg: FORMSPREE_ID ? "Thank you for your message." : "If email client didn't open, check popups.",
      title: "Collaboration",
      subtitle: "Describe your project. Web Dev, Editing, or something else?",
      nameLabel: "Your Name",
      emailLabel: "Email",
      msgLabel: "Message",
      send: "SEND",
      sending: "SENDING...",
      error: "An error occurred. Please try again.",
      placeholderName: "John Doe",
      placeholderMsg: "Hi, I need..."
    }
  }[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SENDING);
    setErrorMessage(null);

    // Opcja 1: Formspree (Automatyczne wysyłanie)
    if (FORMSPREE_ID) {
      try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Współpraca: ${formData.name} (Grankers LinkHub)`
          })
        });

        if (response.ok) {
          setStatus(FormStatus.SUCCESS);
          setTimeout(() => {
            onClose();
            setStatus(FormStatus.IDLE);
            setFormData({ name: '', email: '', message: '' });
          }, 3000);
        } else {
          setStatus(FormStatus.ERROR);
          setErrorMessage(t.error);
        }
      } catch (error) {
        setStatus(FormStatus.ERROR);
        setErrorMessage(t.error);
      }
    } 
    // Opcja 2: Mailto Fallback (Otwieranie klienta poczty) - jeśli brak ID
    else {
      const subject = lang === 'pl' ? `Współpraca: ${formData.name}` : `Collaboration: ${formData.name}`;
      const body = `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`;
      
      // Używamy bezpośredniego przekierowania bez timeoutu, aby uniknąć blokowania przez przeglądarki
      window.location.href = `mailto:karol.grankers@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setStatus(FormStatus.SUCCESS);
      setTimeout(() => {
        onClose();
        setStatus(FormStatus.IDLE);
      }, 3000);
    }
  };

  if (status === FormStatus.SUCCESS) {
    return (
      <div className="flex flex-col items-center justify-center p-6 md:p-8 space-y-4 text-center animate-fade-in border border-yellow-500/20 rounded-xl bg-black/80 mx-4">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mb-2 border border-yellow-500/30 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          <CheckCircle size={28} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white font-[Cinzel]">{t.successTitle}</h3>
        <p className="text-gray-400 text-sm md:text-base">{t.successMsg}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-black/90 backdrop-blur-xl border border-yellow-600/30 rounded-xl p-5 md:p-8 relative animate-slide-up shadow-[0_0_40px_-10px_rgba(212,175,55,0.1)]">
      <button 
        onClick={onClose}
        className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-yellow-400 transition-colors p-2"
      >
        <X size={24} />
      </button>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-[Cinzel] text-center mt-2">{t.title}</h2>
      <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6 opacity-70"></div>
      
      <p className="text-gray-400 mb-6 md:mb-8 text-center text-xs md:text-sm px-2">
        {t.subtitle}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
        <div>
          <label className="block text-[10px] md:text-xs font-semibold text-yellow-600/80 uppercase tracking-widest mb-1.5">
            {t.nameLabel}
          </label>
          <input
            type="text"
            required
            name="name"
            className="w-full bg-neutral-900/50 border border-neutral-800 rounded-md px-4 py-3 text-sm md:text-base text-white placeholder-neutral-700 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all"
            placeholder={t.placeholderName}
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-[10px] md:text-xs font-semibold text-yellow-600/80 uppercase tracking-widest mb-1.5">
            {t.emailLabel}
          </label>
          <input
            type="email"
            required
            name="email"
            className="w-full bg-neutral-900/50 border border-neutral-800 rounded-md px-4 py-3 text-sm md:text-base text-white placeholder-neutral-700 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all"
            placeholder="email@example.com"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-[10px] md:text-xs font-semibold text-yellow-600/80 uppercase tracking-widest mb-1.5">
            {t.msgLabel}
          </label>
          <textarea
            required
            name="message"
            rows={4}
            className="w-full bg-neutral-900/50 border border-neutral-800 rounded-md px-4 py-3 text-sm md:text-base text-white placeholder-neutral-700 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all resize-none"
            placeholder={t.placeholderMsg}
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
          />
        </div>

        {status === FormStatus.ERROR && (
          <div className="flex items-center space-x-2 text-red-500 text-xs md:text-sm bg-red-500/10 p-3 rounded-md border border-red-500/20">
            <AlertCircle size={16} />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === FormStatus.SENDING}
          className="w-full bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 hover:from-yellow-600 hover:via-yellow-400 hover:to-yellow-500 text-black font-bold font-[Cinzel] py-3 md:py-4 rounded-md flex items-center justify-center space-x-2 transition-all transform active:scale-[0.99] shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] mt-2"
        >
          {status === FormStatus.SENDING ? (
            <div className="flex items-center space-x-2">
              <Loader2 size={20} className="animate-spin" />
              <span className="tracking-widest text-sm md:text-base">{t.sending}</span>
            </div>
          ) : (
            <>
              <span className="tracking-widest text-sm md:text-base">{t.send}</span>
              <Send size={16} className="md:w-[18px] md:h-[18px]" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};