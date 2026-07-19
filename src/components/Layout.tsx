import React, { useState } from 'react';
import { Button } from './Button';
import logoImage from '@/assets/yoga-within-logo.png';

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-max flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2">
          <img src={logoImage} alt="Yoga Within" className="h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="/" className="text-body hover:text-terra-500 transition-colors">
            Home
          </a>
          <a href="/experiences" className="text-body hover:text-terra-500 transition-colors">
            Experiences
          </a>
          <a href="/about" className="text-body hover:text-terra-500 transition-colors">
            About
          </a>
          <Button variant="primary" size="sm">
            <a href="/plan-your-journey">Plan My Journey</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleMenu}
            className="text-forest-500 hover:text-terra-500 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container-max py-4 flex flex-col gap-4">
            <a
              href="/"
              className="text-body hover:text-terra-500 transition-colors block"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="/experiences"
              className="text-body hover:text-terra-500 transition-colors block"
              onClick={closeMenu}
            >
              Experiences
            </a>
            <a
              href="/about"
              className="text-body hover:text-terra-500 transition-colors block"
              onClick={closeMenu}
            >
              About
            </a>
            <Button variant="primary" size="sm" fullWidth>
              <a href="/plan-your-journey" onClick={closeMenu} className="block">
                Plan My Journey
              </a>
            </Button>
            <a
              href="https://wa.me/[WHATSAPP_NUMBER]"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Button variant="whatsapp" size="sm" fullWidth>
                WhatsApp
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="container-max">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <a href="/" className="inline-block mb-2">
            <img src={logoImage} alt="Yoga Within" className="h-12 w-auto brightness-200" />
          </a>
          <p className="text-body-sm text-gray-300">Discover inner peace through authentic yoga experiences.</p>
        </div>
        <div>
          <h4 className="text-body font-semibold mb-4">Navigate</h4>
          <ul className="space-y-2 text-body-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/experiences" className="hover:text-white">
                Experiences
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/plan-your-journey" className="hover:text-white">
                Plan Your Journey
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-body font-semibold mb-4">Contact</h4>
          <p className="text-body-sm text-gray-300 mb-2">[CONTACT EMAIL]</p>
          <p className="text-body-sm text-gray-300">[WHATSAPP NUMBER]</p>
        </div>
        <div>
          <h4 className="text-body font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-body-sm text-gray-300">
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8 text-body-sm text-gray-400">
        <p>© 2024 [COMPANY NAME]. All rights reserved.</p>
        <p>[REGISTERED ADDRESS]</p>
      </div>
    </div>
  </footer>
);
