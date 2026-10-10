import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Linkedin,
  Mail,
  ArrowUp,
  ArrowDown,
  Sun,
  Moon,
  Coffee,
  Code2,
  Terminal,
  Database,
  Cloud,
  Cpu,
  Layers,
  Users,
  CheckCircle2,
  X,
  Send,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import {
  PORTFOLIO_DATA,
  ASHOK_IMAGES,
  FeaturedProject,
  SkillItem,
} from './data/portfolioData';
import { JourneyTreasureMap } from './components/JourneyTreasureMap';

const SECTION_ORDER = ['home', 'about', 'journey', 'skills', 'work', 'contact'];

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(
    null
  );
  const [selectedSkillDetail, setSelectedSkillDetail] = useState<SkillItem>(
    PORTFOLIO_DATA.skillCategories[0].skills[0]
  );
  const [selectedProject, setSelectedProject] =
    useState<FeaturedProject | null>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

  // Official Correspondence Form State for ashok@ashokkunchala.com
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'sending' | 'sent' | 'error'
  >('idle');

  // Track active section index on scroll for the Up/Down navigation buttons
  useEffect(() => {
    const updateActiveSection = () => {
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      if (scrollY < 120) {
        setCurrentSectionIndex(0);
        return;
      }

      let foundIdx = 0;
      SECTION_ORDER.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260) {
            foundIdx = idx;
          }
        }
      });
      setCurrentSectionIndex(foundIdx);
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  // Universal smooth scroll function that works reliably in any window/iframe container
  const scrollToSection = (targetId: string) => {
    if (targetId === 'top' || targetId === 'home') {
      const topEl = document.getElementById('home');
      if (topEl) {
        topEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollUp = () => {
    if (currentSectionIndex <= 1) {
      scrollToSection('top');
    } else {
      scrollToSection(SECTION_ORDER[currentSectionIndex - 1]);
    }
  };

  const handleScrollDown = () => {
    const nextIdx = Math.min(
      SECTION_ORDER.length - 1,
      currentSectionIndex + 1
    );
    scrollToSection(SECTION_ORDER[nextIdx]);
  };

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const focusContactForm = () => {
    scrollToSection('contact-form');
    setTimeout(() => {
      const nameInput = document.getElementById('name');
      if (nameInput) nameInput.focus();
    }, 350);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const senderName = contactForm.name.trim();
    const senderEmail = contactForm.email.trim();
    const senderCompany = contactForm.company.trim();
    const rawMessage = contactForm.message.trim();

    if (!senderName || !senderEmail || !rawMessage) {
      return;
    }

    setSubmitStatus('sending');
    const relayPayload = {
      name: senderName,
      email: senderEmail,
      company: senderCompany,
      message: rawMessage,
    };

    const directFormspreePayload = {
      name: senderName,
      email: senderEmail,
      _replyto: senderEmail,
      reply_to_email: senderEmail,
      company: senderCompany,
      _subject: `Portfolio Inquiry from ${senderName} (${senderEmail})`,
      message: `Sender Name: ${senderName}\nSender Gmail / Email: ${senderEmail}${
        senderCompany ? `\nCompany: ${senderCompany}` : ''
      }\n\nMessage:\n${rawMessage}`,
    };

    try {
      // Primary: server-side relay with ashokkunchala.com Origin/Referer headers
      let response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(relayPayload),
      });

      // Fallback: direct Formspree call if running in static environment
      if (!response.ok) {
        response = await fetch(PORTFOLIO_DATA.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(directFormspreePayload),
        });
      }

      if (response.ok) {
        setSubmitStatus('sent');
        setContactForm({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      try {
        const fallbackRes = await fetch(PORTFOLIO_DATA.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(directFormspreePayload),
        });
        if (fallbackRes.ok) {
          setSubmitStatus('sent');
          setContactForm({ name: '', email: '', company: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      } catch {
        setSubmitStatus('error');
      }
    }
  };

  const handlePrefillTopic = (topicPrefix: string) => {
    setContactForm((prev) => ({
      ...prev,
      message: prev.message
        ? prev.message
        : `Hi Ashok, I'd like to discuss ${topicPrefix}. `,
    }));
    focusContactForm();
  };

  const getCategoryIcon = (
    iconName: 'cpu' | 'cloud' | 'database' | 'code' | 'layers' | 'users'
  ) => {
    switch (iconName) {
      case 'cpu':
        return <Cpu className="w-5 h-5" />;
      case 'cloud':
        return <Cloud className="w-5 h-5" />;
      case 'database':
        return <Database className="w-5 h-5" />;
      case 'code':
        return <Code2 className="w-5 h-5" />;
      case 'layers':
        return <Layers className="w-5 h-5" />;
      case 'users':
        return <Users className="w-5 h-5" />;
    }
  };

  return (
    <div
      id="home"
      className={`min-h-screen transition-colors duration-200 ${
        darkMode
          ? 'bg-[#181920] text-zinc-100'
          : 'bg-[#FFFDF7] text-zinc-900'
      }`}
    >
      {/* TOP BAR CONTRACT: Strictly 1 row, 3 zones separated by gap-8 (Matching Frame 00:01) */}
      <header
        className={`sticky top-0 z-40 border-b-2 border-zinc-900 px-4 sm:px-8 py-4 transition-colors duration-200 ${
          darkMode
            ? 'bg-[#1F212A] text-zinc-100'
            : 'bg-[#FDE047] text-zinc-900'
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <button
            type="button"
            onClick={() => scrollToSection('top')}
            className="px-3.5 py-1 bg-[#67E8F9] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] text-base sm:text-lg font-display font-extrabold tracking-tight whitespace-nowrap shrink-0 cursor-pointer hover:-translate-y-0.5 transition-transform"
          >
            AK
          </button>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold">
            <button
              type="button"
              onClick={() => scrollToSection('top')}
              className="hover:underline underline-offset-4 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="hover:underline underline-offset-4 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('journey')}
              className="hover:underline underline-offset-4 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Journey
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('skills')}
              className="hover:underline underline-offset-4 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Skills
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('work')}
              className="hover:underline underline-offset-4 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Work
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 text-xs sm:text-sm font-bold bg-[#67E8F9] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform whitespace-nowrap shrink-0 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION (Spacious Exact UI from Frames 00:01 - 00:04) */}
        <section className="pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Kicker, Display Headline, Bio, Official Links, Get in Touch & Coffee Chat */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:col-span-7 border-2 border-zinc-900 shadow-[8px_8px_0px_0px_#18181b] p-7 sm:p-12 flex flex-col justify-between ${
                darkMode ? 'bg-[#1F212A]' : 'bg-white'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <p className="text-lg sm:text-xl font-display font-bold text-teal-600 dark:text-teal-400">
                    Hi there! 👋
                  </p>

                  {/* Light / Dark Theme Toggle (Matching Video 00:01 - 00:03) */}
                  <button
                    type="button"
                    onClick={() => setDarkMode((d) => !d)}
                    aria-label="Toggle color theme"
                    className={`px-3.5 py-1.5 text-xs font-bold border-2 border-zinc-900 shadow-[2px_2px_0px_0px_#18181b] inline-flex items-center gap-1.5 cursor-pointer hover:-translate-y-0.5 transition-transform whitespace-nowrap shrink-0 ${
                      darkMode
                        ? 'bg-[#FDE047] text-zinc-900'
                        : 'bg-[#FFFDF7] text-zinc-900'
                    }`}
                  >
                    {darkMode ? (
                      <>
                        <Sun className="w-4 h-4" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4" />
                        Dark Mode
                      </>
                    )}
                  </button>
                </div>

                <h1
                  className="text-4xl sm:text-5xl lg:text-[3.75rem] font-display font-extrabold tracking-tight leading-[1.06] mb-5"
                  style={{ textWrap: 'balance' }}
                >
                  {PORTFOLIO_DATA.heroHeadline}
                </h1>

                <p
                  className={`text-sm sm:text-base font-semibold mb-4 ${
                    darkMode ? 'text-[#FDE047]' : 'text-zinc-800'
                  }`}
                >
                  {PORTFOLIO_DATA.badgeRole} · 13+ yrs in practice
                </p>

                <p
                  className={`text-base sm:text-[17px] leading-[1.75] max-w-[62ch] mb-9 ${
                    darkMode ? 'text-zinc-300' : 'text-zinc-700'
                  }`}
                >
                  {PORTFOLIO_DATA.heroLead}
                </p>
              </div>

              <div>
                {/* Official Links from ashokkunchala.com (LinkedIn, Official Email, Direct Message) */}
                <div className="flex flex-wrap items-center gap-3.5 mb-7">
                  <a
                    href={PORTFOLIO_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn — linkedin.com/in/ashok-kumar-kunchala"
                    className={`w-12 h-12 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] flex items-center justify-center hover:-translate-y-0.5 transition-transform ${
                      darkMode
                        ? 'bg-zinc-800 text-zinc-100 hover:bg-[#67E8F9] hover:text-zinc-900'
                        : 'bg-[#FFFDF7] text-zinc-900 hover:bg-[#67E8F9]'
                    }`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href={`mailto:${PORTFOLIO_DATA.email}`}
                    aria-label="Email Ashok Kunchala"
                    title={`Email — ${PORTFOLIO_DATA.email}`}
                    className={`w-12 h-12 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] flex items-center justify-center hover:-translate-y-0.5 transition-transform ${
                      darkMode
                        ? 'bg-zinc-800 text-zinc-100 hover:bg-[#FDE047] hover:text-zinc-900'
                        : 'bg-[#FFFDF7] text-zinc-900 hover:bg-[#FDE047]'
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>

                  <button
                    type="button"
                    onClick={focusContactForm}
                    aria-label="Send Direct Correspondence"
                    title="Send Direct Message"
                    className={`w-12 h-12 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] flex items-center justify-center hover:-translate-y-0.5 transition-transform cursor-pointer ${
                      darkMode
                        ? 'bg-zinc-800 text-zinc-100 hover:bg-[#F472B6] hover:text-zinc-900'
                        : 'bg-[#FFFDF7] text-zinc-900 hover:bg-[#F472B6]'
                    }`}
                  >
                    <MessageSquare className="w-5 h-5" />
                  </button>
                </div>

                {/* Primary CTA + "Buy me a coffee / Let's chat" with curved arrow (Exact match to 00:01 - 00:03) */}
                <div className="flex flex-wrap items-center gap-6">
                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="px-7 py-3.5 text-sm sm:text-base font-display font-extrabold bg-[#67E8F9] text-zinc-900 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_#18181b] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Get in Touch
                  </button>

                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs sm:text-sm italic font-medium ${
                        darkMode ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                    >
                      Buy me a coffee / Let&apos;s chat
                    </span>
                    <svg
                      width="38"
                      height="24"
                      viewBox="0 0 38 24"
                      fill="none"
                      className="shrink-0 text-zinc-600 dark:text-zinc-400"
                    >
                      <path
                        d="M2 18C12 22 24 18 34 6M34 6L26 6M34 6L33 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="3 3"
                      />
                    </svg>
                    <button
                      type="button"
                      onClick={() =>
                        handlePrefillTopic('an architecture coffee chat')
                      }
                      aria-label="Schedule a coffee chat"
                      className="w-11 h-11 rounded-full bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shrink-0"
                    >
                      <Coffee className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Ashok's Uploaded Portrait AS-IS with Neo-Brutalist Stickers (Matching 00:01 - 00:03) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.06 }}
              className={`lg:col-span-5 border-2 border-zinc-900 shadow-[8px_8px_0px_0px_#18181b] p-7 sm:p-10 flex flex-col items-center justify-between relative overflow-hidden ${
                darkMode ? 'bg-[#1F212A]' : 'bg-[#F4FBF9]'
              }`}
            >
              {/* Floating Top-Left Sticker `</>` */}
              <div className="self-start -rotate-6 bg-[#67E8F9] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] px-3.5 py-1.5 font-mono font-extrabold text-sm flex items-center gap-1.5 z-10">
                <Code2 className="w-4 h-4" />
                <span>&lt;/&gt;</span>
              </div>

              {/* Center Portrait Frame displaying Ashok's exact uploaded image as-is */}
              <div className="relative my-4 w-full max-w-[300px]">
                <div className="w-full aspect-[2/3] border-4 border-zinc-900 shadow-[6px_6px_0px_0px_#18181b] overflow-hidden bg-[#5EEAD4]">
                  <img
                    src={ASHOK_IMAGES.avatar}
                    alt="Ashok Kumar Kunchala"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Floating Right Sticker (Terminal Icon) */}
                <div className="absolute -right-4 top-8 rotate-6 bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] px-3 py-2 font-mono font-bold text-xs flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" />
                  <span>RAG · AKS</span>
                </div>

                {/* Floating Bottom-Left Mini Window Card */}
                <div className="absolute -left-4 bottom-4 -rotate-6 bg-white text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] p-2.5 w-32">
                  <div className="flex gap-1 mb-1 pb-1 border-b border-zinc-900">
                    <span className="w-2 h-2 rounded-full bg-rose-400 border border-zinc-900" />
                    <span className="w-2 h-2 rounded-full bg-amber-300 border border-zinc-900" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400 border border-zinc-900" />
                  </div>
                  <div className="text-[11px] font-mono font-bold leading-tight">
                    15+ Clients
                    <br />3 Continents
                  </div>
                </div>
              </div>

              {/* Bottom Mode Badge Button (Matching "Full Stack Mode" pill in 00:01) */}
              <button
                type="button"
                onClick={() => scrollToSection('work')}
                className="self-end mt-2 px-5 py-2 bg-[#67E8F9] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] font-display font-extrabold text-xs sm:text-sm hover:bg-[#FDE047] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Full Stack &amp; AI Mode
              </button>
            </motion.div>
          </div>

          {/* Interactive Tech Stack Marquee Bar (Exact match to Frame 00:04) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className={`mt-10 border-2 border-zinc-900 shadow-[5px_5px_0px_0px_#18181b] py-4 px-5 overflow-hidden ${
              darkMode ? 'bg-[#1F212A]' : 'bg-white'
            }`}
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              {PORTFOLIO_DATA.marqueeTech.map((tech) => {
                const isActive = activeSkillFilter === tech;
                return (
                  <button
                    key={tech}
                    type="button"
                    onClick={() =>
                      setActiveSkillFilter((prev) =>
                        prev === tech ? null : tech
                      )
                    }
                    className={`px-4 py-2 text-xs font-bold border-2 border-zinc-900 shadow-[2px_2px_0px_0px_#18181b] transition-transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#FDE047] text-zinc-900'
                        : darkMode
                        ? 'bg-zinc-800 text-zinc-100 hover:bg-[#FDE047] hover:text-zinc-900'
                        : 'bg-[#FFFDF7] text-zinc-900 hover:bg-[#FDE047]'
                    }`}
                  >
                    {tech}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION (Spacious Exact UI from Frame 00:05 with Neo-Brutalist Inline Colored Highlights) */}
        <section
          id="about"
          className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto scroll-mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35 }}
            className={`relative border-2 border-zinc-900 shadow-[8px_8px_0px_0px_#18181b] p-8 sm:p-14 ${
              darkMode
                ? 'bg-[#1F212A] text-zinc-100'
                : 'bg-white text-zinc-900'
            }`}
          >
            {/* Decorative Yellow Sticky Tape on Top-Right (Exact match to Frame 00:05) */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute -top-3.5 right-12 w-32 h-8 bg-[#FEF08A] border-2 border-zinc-900 rotate-6 shadow-[2px_2px_0px_0px_#18181b]"
            />

            {/* ABOUT Title Box */}
            <div className="inline-block bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_#18181b] px-6 py-2.5 mb-10">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight">
                ABOUT
              </h2>
            </div>

            {/* Highlighted Narrative Paragraphs matching Frame 00:05 */}
            <div className="space-y-7 text-base sm:text-lg leading-[1.9] max-w-[74ch]">
              <p>
                Highly experienced Technology Leader and Enterprise AI Architect with a rich professional background spanning over{' '}
                <span className="bg-[#FDE047] text-zinc-900 px-2 py-0.5 font-bold border border-zinc-900">
                  13+ years
                </span>
                . Throughout my career, I&apos;ve built and run production systems for enterprise clients across the{' '}
                <span className="bg-[#F9A8D4] text-zinc-900 px-2 py-0.5 font-bold border border-zinc-900">
                  US, India, and Australia
                </span>
                . My contributions have been pivotal in designing and constructing{' '}
                <span className="bg-[#67E8F9] text-zinc-900 px-2 py-0.5 font-bold border border-zinc-900">
                  Agentic AI &amp; RAG architectures
                </span>
                , implementing{' '}
                <span className="bg-[#86EFAC] text-zinc-900 px-2 py-0.5 font-bold border border-zinc-900">
                  cloud-native systems on Azure AKS
                </span>
                , and leading{' '}
                <span className="bg-[#FDE047] text-zinc-900 px-2 py-0.5 font-bold border border-zinc-900">
                  full-stack platform engineering
                </span>{' '}
                at Anvesa.
              </p>

              <p>
                My passion for{' '}
                <span className="bg-[#C4B5FD] text-zinc-900 px-2 py-0.5 font-bold border border-zinc-900">
                  unit economics and system reliability
                </span>{' '}
                drives every architectural decision — from leading the platform through the{' '}
                <span className="bg-[#86EFAC] text-zinc-900 px-2 py-0.5 font-bold border border-zinc-900">
                  Aureus → Happiest Minds acquisition
                </span>{' '}
                to shipping{' '}
                <span className="bg-[#F9A8D4] text-zinc-900 px-2 py-0.5 font-bold border border-zinc-900">
                  live LLM workflows processing millions of documents
                </span>{' '}
                in the ever-evolving enterprise AI landscape.
              </p>

              <p>
                I bring a unique blend of{' '}
                <span className="bg-[#86EFAC] text-zinc-900 px-2 py-0.5 font-bold border border-zinc-900">
                  deep technical craft
                </span>
                ,{' '}
                <span className="bg-[#FDE047] text-zinc-900 px-2 py-0.5 font-bold border border-zinc-900">
                  engineering leadership
                </span>
                , and a genuine enthusiasm for creating{' '}
                <span className="bg-[#67E8F9] text-zinc-900 px-2 py-0.5 font-bold border border-zinc-900">
                  impactful enterprise AI solutions
                </span>
                .
              </p>
            </div>

            {/* 4 Key Metrics Strip at Bottom of About */}
            <div className="mt-12 pt-8 border-t-2 border-zinc-900 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {PORTFOLIO_DATA.kpis.map((kpi) => (
                <div key={kpi.id}>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold tabular-nums mb-1">
                    {kpi.value}
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-bold ${
                      darkMode ? 'text-zinc-300' : 'text-zinc-700'
                    }`}
                  >
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* MY JOURNEY — Interactive Treasure Map & Career Timeline (Frames 00:06 - 00:09) */}
        <JourneyTreasureMap
          milestones={PORTFOLIO_DATA.journey}
          darkMode={darkMode}
          activeSkillFilter={activeSkillFilter}
        />

        {/* SKILLS SECTION (Spacious Exact UI from Frames 00:10 - 00:12) */}
        <section
          id="skills"
          className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto scroll-mt-20"
        >
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="inline-block bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_#18181b] px-6 py-2.5">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight">
                SKILLS
              </h2>
            </div>

            {/* Active Skill Production Proof Inspector */}
            {selectedSkillDetail && (
              <div
                className={`p-4 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_#18181b] max-w-xl ${
                  darkMode
                    ? 'bg-zinc-800 text-zinc-100'
                    : 'bg-[#FEF9C3] text-zinc-900'
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-xs font-mono font-bold mb-1">
                  <span>{selectedSkillDetail.name}</span>
                  <span className="tabular-nums">
                    {selectedSkillDetail.experienceYears}
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {selectedSkillDetail.productionNote}
                </p>
              </div>
            )}
          </div>

          {/* 3-Column Neo-Brutalist Category Cards Grid (Exact match to 00:10 - 00:12) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`border-2 border-zinc-900 shadow-[6px_6px_0px_0px_#18181b] flex flex-col ${
                  darkMode ? 'bg-[#1F212A]' : 'bg-white'
                }`}
              >
                <div
                  className={`${cat.headerBg} text-zinc-900 border-b-2 border-zinc-900 px-5 py-4 flex items-center justify-center gap-2.5`}
                >
                  {getCategoryIcon(cat.iconName)}
                  <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="p-6 grid grid-cols-2 gap-3.5 flex-1 content-start">
                  {cat.skills.map((skill) => {
                    const isSelected =
                      selectedSkillDetail?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() => {
                          setSelectedSkillDetail(skill);
                          setActiveSkillFilter((prev) =>
                            prev === skill.name ? null : skill.name
                          );
                        }}
                        className={`px-3.5 py-2.5 text-left text-xs font-bold border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-between gap-1.5 ${
                          isSelected
                            ? 'bg-[#FDE047] text-zinc-900'
                            : darkMode
                            ? 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700'
                            : 'bg-[#FFFDF7] text-zinc-900 hover:bg-amber-50'
                        }`}
                      >
                        <span className="truncate">{skill.name}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CREATOR OF / FEATURED WORK SECTION (Exact UI from Frame 00:12 - 00:13) */}
        <section
          id="work"
          className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto scroll-mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35 }}
            className={`border-2 border-zinc-900 shadow-[8px_8px_0px_0px_#18181b] p-8 sm:p-12 ${
              darkMode ? 'bg-[#1F212A]' : 'bg-white'
            }`}
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p
                className={`text-sm font-medium mb-1 ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                Creator &amp; Architect of
              </p>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold">
                Production AI Platforms &amp; Systems
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {PORTFOLIO_DATA.featuredProjects.map((proj) => (
                <article
                  key={proj.id}
                  className={`border-2 border-zinc-900 shadow-[5px_5px_0px_0px_#18181b] p-6 flex flex-col justify-between text-center hover:-translate-y-1 transition-transform ${
                    darkMode ? 'bg-zinc-800/90' : 'bg-[#FFFDF7]'
                  }`}
                >
                  <div>
                    {/* Yellow Header Box like LazyFire / Hypergrep in 00:12 */}
                    <div className="bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] p-4 mb-5">
                      <h3 className="font-display font-extrabold text-lg leading-snug">
                        {proj.title}
                      </h3>
                    </div>

                    <p
                      className={`text-sm leading-relaxed mb-5 ${
                        darkMode ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                    >
                      {proj.summary}
                    </p>

                    <div
                      className={`text-xs font-mono pb-4 mb-5 border-b border-dashed border-zinc-400 ${
                        darkMode ? 'text-amber-300' : 'text-zinc-800'
                      }`}
                    >
                      {proj.stack.join(' · ')}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(proj)}
                    className="w-fit mx-auto py-2.5 px-6 bg-white text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] font-display font-extrabold text-xs sm:text-sm inline-flex items-center justify-center gap-2 hover:bg-[#FDE047] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Check it out
                  </button>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CREDENTIALS & LANGUAGES SPLIT (Exact UI from Frame 00:13) */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Left Card: CREDENTIALS & RECOGNITION */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35 }}
              className={`border-2 border-zinc-900 shadow-[6px_6px_0px_0px_#18181b] p-7 sm:p-10 ${
                darkMode ? 'bg-[#1F212A]' : 'bg-white'
              }`}
            >
              <div className="inline-block bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] px-5 py-2 mb-7">
                <h2 className="text-lg sm:text-xl font-display font-extrabold">
                  CREDENTIALS &amp; MILESTONES
                </h2>
              </div>

              <div className="space-y-6">
                {PORTFOLIO_DATA.credentials.map((cred) => (
                  <div
                    key={cred.title}
                    className={`p-5 border-2 border-zinc-900 ${
                      darkMode ? 'bg-zinc-800' : 'bg-[#FFFDF7]'
                    }`}
                  >
                    <h3 className="font-display font-extrabold text-base sm:text-lg mb-1">
                      {cred.title}
                    </h3>
                    <p
                      className={`text-xs font-mono mb-2.5 ${
                        darkMode ? 'text-zinc-400' : 'text-zinc-600'
                      }`}
                    >
                      {cred.org}
                    </p>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-3.5 ${
                        darkMode ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                    >
                      {cred.detail}
                    </p>
                    <span className="inline-block bg-[#67E8F9] text-zinc-900 border-2 border-zinc-900 shadow-[2px_2px_0px_0px_#18181b] px-3 py-0.5 text-xs font-mono font-bold tabular-nums">
                      {cred.period}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Card: LANGUAGES & GLOBAL DELIVERY (Matching Frame 00:13) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className={`border-2 border-zinc-900 shadow-[6px_6px_0px_0px_#18181b] p-7 sm:p-10 ${
                darkMode ? 'bg-[#1F212A]' : 'bg-white'
              }`}
            >
              <div className="inline-block bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] px-5 py-2 mb-7">
                <h2 className="text-lg sm:text-xl font-display font-extrabold">
                  LANGUAGES &amp; GLOBAL MARKETS
                </h2>
              </div>

              <div className="space-y-4">
                {PORTFOLIO_DATA.spokenLanguages.map((lang) => (
                  <div
                    key={lang.label}
                    className={`p-4 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] ${
                      darkMode ? 'bg-zinc-800' : 'bg-[#FFFDF7]'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold mb-2">
                      {lang.label}
                    </div>
                    <div className="w-full h-2.5 bg-zinc-200 border border-zinc-900 overflow-hidden">
                      <div
                        className="h-full bg-[#67E8F9]"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}

                {PORTFOLIO_DATA.globalReachBars.slice(0, 2).map((bar) => (
                  <div
                    key={bar.label}
                    className={`p-4 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] ${
                      darkMode ? 'bg-zinc-800' : 'bg-[#FFFDF7]'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold mb-2">
                      {bar.label}
                    </div>
                    <div className="w-full h-2.5 bg-zinc-200 border border-zinc-900 overflow-hidden">
                      <div
                        className={`h-full ${bar.color}`}
                        style={{ width: `${bar.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* GET IN TOUCH — Tilted Sticky Notes + Official Email Sender to ashok@ashokkunchala.com (Frame 00:14) */}
        <section
          id="contact"
          className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto scroll-mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35 }}
            className={`border-2 border-zinc-900 shadow-[8px_8px_0px_0px_#18181b] p-8 sm:p-14 ${
              darkMode ? 'bg-[#1F212A]' : 'bg-white'
            }`}
          >
            {/* GET IN TOUCH Yellow Badge */}
            <div className="inline-block bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_#18181b] px-6 py-2.5 mb-8">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight">
                GET IN TOUCH
              </h2>
            </div>

            <div className="text-center max-w-xl mx-auto mb-14">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold mb-2">
                Let&apos;s build something amazing together
              </h3>
              <p
                className={`text-xs sm:text-sm ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                Open to consulting, advisory, and strategic conversations globally · Reply within {PORTFOLIO_DATA.replySla.toLowerCase()}.
              </p>
            </div>

            {/* 3 Tilted Sticky Note Cards with Top Tape (Only Official Channels from Original Website) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              {/* Sticky Note 1: Cyan LinkedIn */}
              <a
                href={PORTFOLIO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-[#67E8F9] text-zinc-900 border-2 border-zinc-900 shadow-[6px_6px_0px_0px_#18181b] p-8 flex flex-col items-center justify-center text-center -rotate-2 hover:rotate-0 hover:-translate-y-1 transition-all"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#FEF08A]/90 border border-zinc-900"
                />
                <Linkedin className="w-8 h-8 mb-3" />
                <span className="font-display font-extrabold text-base mb-1">
                  LinkedIn
                </span>
                <span className="text-xs font-mono">
                  {PORTFOLIO_DATA.linkedinDisplay}
                </span>
              </a>

              {/* Sticky Note 2: Yellow Official Email (ashok@ashokkunchala.com) */}
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="relative bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 shadow-[6px_6px_0px_0px_#18181b] p-8 flex flex-col items-center justify-center text-center rotate-1 hover:rotate-0 hover:-translate-y-1 transition-all"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#FEF08A]/90 border border-zinc-900"
                />
                <Mail className="w-8 h-8 mb-3" />
                <span className="font-display font-extrabold text-base mb-1">
                  Official Email
                </span>
                <span className="text-xs font-mono">
                  {PORTFOLIO_DATA.email}
                </span>
              </a>

              {/* Sticky Note 3: Pink Send Message Form */}
              <button
                type="button"
                onClick={focusContactForm}
                className="relative bg-[#F472B6] text-zinc-900 border-2 border-zinc-900 shadow-[6px_6px_0px_0px_#18181b] p-8 flex flex-col items-center justify-center text-center -rotate-1 hover:rotate-0 hover:-translate-y-1 transition-all cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#FEF08A]/90 border border-zinc-900"
                />
                <Send className="w-8 h-8 mb-3" />
                <span className="font-display font-extrabold text-base mb-1">
                  Send an Email
                </span>
                <span className="text-xs font-mono">
                  {PORTFOLIO_DATA.email}
                </span>
              </button>
            </div>

            {/* Official Correspondence Form (Sends directly to ashok@ashokkunchala.com) */}
            <div
              id="contact-form"
              className={`max-w-3xl mx-auto border-2 border-zinc-900 shadow-[6px_6px_0px_0px_#18181b] p-7 sm:p-10 scroll-mt-24 ${
                darkMode ? 'bg-zinc-800' : 'bg-[#FFFDF7]'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b-2 border-zinc-900">
                <div>
                  <h4 className="font-display font-extrabold text-lg">
                    Correspondence
                  </h4>
                  <p
                    className={`text-xs ${
                      darkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}
                  >
                    Practising from Hyderabad, India · Serving globally · Reply within twenty-four hours, typically
                  </p>
                </div>
                <a
                  href={`mailto:${PORTFOLIO_DATA.email}`}
                  className="text-xs font-mono font-bold hover:underline inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PORTFOLIO_DATA.email}</span>
                </a>
              </div>

              {submitStatus === 'sent' ? (
                <div className="p-6 bg-[#86EFAC] text-zinc-900 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_#18181b]">
                  <div className="flex items-center gap-2 font-display font-extrabold text-xl mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                    <span>Received · Your message has arrived!</span>
                  </div>
                  <p className="text-sm mb-4">
                    Thanks for reaching out. Your message has been sent directly to{' '}
                    <strong>{PORTFOLIO_DATA.email}</strong>. I&apos;ll get back to you within twenty-four hours, typically sooner.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    className="px-4 py-2 bg-white text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] font-bold text-xs cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold mb-1.5"
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={handleContactChange}
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 text-sm border-2 border-zinc-900 ${
                          darkMode
                            ? 'bg-zinc-900 text-zinc-100'
                            : 'bg-white text-zinc-900'
                        }`}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold mb-1.5"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={handleContactChange}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 text-sm border-2 border-zinc-900 ${
                          darkMode
                            ? 'bg-zinc-900 text-zinc-100'
                            : 'bg-white text-zinc-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-bold mb-1.5"
                    >
                      Company (optional)
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={contactForm.company}
                      onChange={handleContactChange}
                      placeholder="Your company"
                      className={`w-full px-4 py-3 text-sm border-2 border-zinc-900 ${
                        darkMode
                          ? 'bg-zinc-900 text-zinc-100'
                          : 'bg-white text-zinc-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={contactForm.message}
                      onChange={handleContactChange}
                      placeholder="Tell me what you’re building, or what you’d like to discuss…"
                      className={`w-full px-4 py-3 text-sm border-2 border-zinc-900 ${
                        darkMode
                          ? 'bg-zinc-900 text-zinc-100'
                          : 'bg-white text-zinc-900'
                      }`}
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-3.5 bg-rose-100 text-rose-900 border-2 border-zinc-900 text-xs font-bold">
                      Something went wrong. Please email me directly at{' '}
                      <a
                        href={`mailto:${PORTFOLIO_DATA.email}`}
                        className="underline"
                      >
                        {PORTFOLIO_DATA.email}
                      </a>
                      .
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitStatus === 'sending'}
                      className="px-7 py-3.5 bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_#18181b] font-display font-extrabold text-sm inline-flex items-center gap-2 hover:translate-x-[1px] hover:translate-y-[1px] transition-transform cursor-pointer disabled:opacity-60 whitespace-nowrap shrink-0"
                    >
                      <Send className="w-4 h-4" />
                      {submitStatus === 'sending'
                        ? 'Sending…'
                        : 'Send message →'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER (Exact match to Frame 00:14 with tested programmatic scroll buttons) */}
      <footer
        className={`border-t-2 border-zinc-900 py-12 px-4 sm:px-8 ${
          darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-white text-zinc-900'
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-display font-extrabold text-lg uppercase tracking-tight">
              {PORTFOLIO_DATA.name}
            </div>
            <p
              className={`text-xs mb-2 ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              {PORTFOLIO_DATA.roleTitle}
            </p>
            <p className="text-xs font-mono opacity-75">
              © 2026 {PORTFOLIO_DATA.name}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => scrollToSection('top')}
              className="text-xs font-bold hover:underline whitespace-nowrap shrink-0 cursor-pointer"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="text-xs font-bold hover:underline whitespace-nowrap shrink-0 cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('journey')}
              className="text-xs font-bold hover:underline whitespace-nowrap shrink-0 cursor-pointer"
            >
              Experience
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('skills')}
              className="text-xs font-bold hover:underline whitespace-nowrap shrink-0 cursor-pointer"
            >
              Skills
            </button>
            <a
              href={PORTFOLIO_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold hover:underline whitespace-nowrap shrink-0"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('top')}
              className="px-4 py-2.5 bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] font-display font-extrabold text-xs inline-flex items-center gap-1.5 hover:-translate-y-0.5 transition-transform whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              To top
            </button>
          </div>
        </div>
      </footer>

      {/* FLOATING UP / DOWN SECTION NAVIGATOR */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        <button
          type="button"
          onClick={handleScrollUp}
          aria-label="Scroll Up"
          title="Scroll Up / To Top"
          className="w-11 h-11 bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] flex items-center justify-center hover:-translate-y-0.5 active:translate-y-0 transition-transform cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Scroll Down"
          title="Scroll Down to Next Section"
          className="w-11 h-11 bg-[#67E8F9] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] flex items-center justify-center hover:translate-y-0.5 active:translate-y-0 transition-transform cursor-pointer"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      {/* PROJECT CASE STUDY LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/75 flex items-center justify-center p-4 overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.95, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 12 }}
              className={`w-full max-w-3xl border-3 border-zinc-900 shadow-[8px_8px_0px_0px_#18181b] overflow-hidden my-8 ${
                darkMode
                  ? 'bg-zinc-900 text-zinc-100'
                  : 'bg-[#FFFDF7] text-zinc-900'
              }`}
            >
              <div
                className={`${selectedProject.headerColor} text-zinc-900 border-b-2 border-zinc-900 px-6 py-4 flex items-center justify-between gap-4`}
              >
                <div>
                  <div className="text-xs font-mono font-bold">
                    {selectedProject.number} · {selectedProject.period}
                  </div>
                  <h3 className="text-xl font-display font-extrabold">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close case study modal"
                  className="p-1.5 bg-white border-2 border-zinc-900 shadow-[2px_2px_0px_0px_#18181b] cursor-pointer"
                >
                  <X className="w-4 h-4 text-zinc-900" />
                </button>
              </div>

              <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedProject.metrics.map((m) => (
                    <div
                      key={m.label}
                      className={`p-3 border-2 border-zinc-900 ${
                        darkMode ? 'bg-zinc-800' : 'bg-white'
                      }`}
                    >
                      <div className="text-lg font-display font-extrabold tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-xs opacity-75">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-display font-extrabold text-base mb-2">
                    Architectural Overview
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${
                      darkMode ? 'text-zinc-300' : 'text-zinc-700'
                    }`}
                  >
                    {selectedProject.deepDive}
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-extrabold text-base mb-2">
                    Key Production Engineering Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.architectureHighlights.map((hl, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t-2 border-zinc-900 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs font-mono">
                    Stack: {selectedProject.stack.join(' · ')}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const title = selectedProject.title;
                      setSelectedProject(null);
                      handlePrefillTopic(title);
                    }}
                    className="px-4 py-2 bg-[#67E8F9] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] font-bold text-xs cursor-pointer"
                  >
                    Discuss Similar Architecture →
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
