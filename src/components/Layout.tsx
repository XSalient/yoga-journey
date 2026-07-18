import React from 'react';
import { Button } from './Button';

export const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white shadow-sm">
    <div className="container-max flex items-center justify-between py-4">
      <div className="text-h3 font-serif font-bold text-forest-500">[LOGO]</div>
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
      <a href="https://wa.me/[WHATSAPP_NUMBER]" target="_blank" rel="noopener noreferrer" className="md:hidden">
        <Button variant="whatsapp" size="sm">
          WhatsApp
        </Button>
      </a>
    </div>
  </header>
);

export const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="container-max">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="text-h3 font-serif font-bold mb-2">[LOGO]</div>
          <p className="text-body-sm text-gray-300">25+ years of crafting extraordinary journeys.</p>
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
