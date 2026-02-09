import React, { useState } from "react";
import { Button } from "./Button";
import { Scale, Menu, X, Phone } from "lucide-react";

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Çalışma Alanları", id: "practice-areas" },
    { label: "İletişim", id: "contact" },
  ];

  return (
    <nav className="bg-white border-b border-[var(--color-border)] sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <span className="text-[var(--color-primary)] hidden lg:block">
              FEK Hukuk & Danışmanlık
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === "practice-areas") {
                    // İlk önce home sayfasına git
                    if (currentPage !== "home") {
                      onNavigate("home");
                      // Sayfa yüklenene kadar bekle, sonra scroll yap
                      setTimeout(() => {
                        const element = document.getElementById(
                          "practice-areas-section",
                        );
                        element?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 100);
                    } else {
                      // Zaten home sayfasındaysak direkt scroll yap
                      const element = document.getElementById(
                        "practice-areas-section",
                      );
                      element?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  } else {
                    onNavigate(item.id);
                  }
                }}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost">
              <Phone className="w-4 h-4" />
              +90 538 053 1846
            </Button>
            <Button variant="primary" onClick={() => onNavigate("contact")}>
              Randevu Al
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--color-primary)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--color-primary)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 pt-2 flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === "practice-areas") {
                    // İlk önce home sayfasına git
                    if (currentPage !== "home") {
                      onNavigate("home");
                      // Sayfa yüklenene kadar bekle, sonra scroll yap
                      setTimeout(() => {
                        const element = document.getElementById(
                          "practice-areas-section",
                        );
                        element?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 100);
                    } else {
                      // Zaten home sayfasındaysak direkt scroll yap
                      const element = document.getElementById(
                        "practice-areas-section",
                      );
                      element?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                    setMobileMenuOpen(false);
                  } else {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-[var(--color-border)]">
              <Button variant="ghost">
                <Phone className="w-4 h-4" />
                0(212) 000 00 00
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  onNavigate("contact");
                  setMobileMenuOpen(false);
                }}
              >
                Randevu Al
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
