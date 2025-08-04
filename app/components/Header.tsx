'use client';

import {useEffect, useMemo, useState} from 'react';
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {nav} from "@/utils/classnames";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const allNavigationItems = [
    {name: 'Home', id: 'home'},
    {name: 'About', id: 'about'},
    {name: 'Projects', id: 'projects'},
    {name: 'Connect', id: 'connect'},
    {name: 'Resume', id: 'resume'},
  ];

  const navigationItems = useMemo(() => {
    if (!mounted) return []; // prevent mismatch during SSR
    return pathname === '/'
      ? allNavigationItems
      : allNavigationItems.filter((item) => item.id === 'home' || item.id === 'resume');
  }, [pathname, mounted, allNavigationItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  const handleNavClick = (item: { name: string; id: string }) => {
    if (item.id === 'home') {
      window.location.href = '/';
    } else if (item.id === 'resume') {
      window.location.href = '/resume';
    } else {
      scrollToSection(item.id);
    }
    setMobileMenuOpen(false);
  };

  // set up a scroll listener that tracks which section of your page is currently visible
  useEffect(() => {
    if (pathname === '/resume') {
      setActiveSection('resume')
      return
    }

    if (pathname === '/data-driven-design') {
      setActiveSection('')
      return
    }

    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'connect'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md shadow">
      <div className="max-full mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={() => router.push('/')}
            className="flex flex-row flex-shrink-0 items-center hover:cursor-pointer">
            <Image src="/logo_hz.png" alt="logo" width={100} height={100} className={nav.logo}
                   onClick={() => router.push('/')}/>
            <p className="hidden md:flex text-sm font-bold text-muted">H A N G N I N G</p>
            <p className="hidden md:flex pl-2 text-sm font-bold text-muted">Z H O U</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative text-lg font-bold transition-colors hover:text-accent group ${
                  activeSection === item.id ? 'text-accent' : 'text-secondary-foreground'
                }`}
              >
                {item.name}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-secondary-foreground hover:text-accent"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background backdrop-blur-md border-b border-border">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-3 py-2 text-base font-bold transition-colors ${
                    activeSection === item.id
                      ? 'text-accent bg-accent-hover'
                      : 'text-secondary-foreground hover:bg-accent-hover'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
