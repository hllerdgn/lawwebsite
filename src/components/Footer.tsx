import React from "react";
import {
  Scale,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1 - About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--color-accent)] rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <span className="">FEK Hukuk</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Müvekkillerime güvenilir, profesyonel ve çözüm odaklı hukuki
              danışmanlık hizmeti sunuyorum.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white">Hızlı Bağlantılar</h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => onNavigate("home")}
                className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-left"
              >
                Çalışma Alanları
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-left"
              >
                İletişim
              </button>
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white">İletişim</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  Kadıköy mah. amiral cd. no:241/1/1 KARAMÜRSEL KOCAELİ
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+90 538 053 1846</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@fekhukuk.com</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--color-accent)] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--color-accent)] transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--color-accent)] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/flzerdgn_/"
                  className="text-gray-300 hover:text-[var(--color-accent)] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 caption text-center md:text-left">
              © 2025 FEK Hukuk & Danışmanlık. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[var(--color-accent)] transition-colors caption"
              >
                KVKK Aydınlatma Metni
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[var(--color-accent)] transition-colors caption"
              >
                Çerez Politikası
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[var(--color-accent)] transition-colors caption"
              >
                Yasal Uyarı
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
