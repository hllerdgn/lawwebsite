import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ContactPage } from './components/ContactPage';
import { ChatbotWidget } from './components/ChatbotWidget';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

  const handleNavigate = (page: string) => {
    if (page === 'home' || page === 'contact') {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer onNavigate={handleNavigate} />
      
      <ChatbotWidget />
    </div>
  );
}
