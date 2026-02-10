import React from "react";
import { Button } from "./Button";
import { PracticeAreaCard } from "./PracticeAreaCard";
import {
  Scale,
  Briefcase,
  Users,
  Home as HomeIcon,
  FileText,
  Building2,
  ShoppingCart,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Award,
  Clock,
  Send,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const practiceAreas = [
    {
      icon: Briefcase,
      title: "Ticaret Hukuku",
      description:
        "Şirket kuruluşu, birleşme, devir ve ticari uyuşmazlıklar konusunda profesyonel danışmanlık.",
    },
    {
      icon: Users,
      title: "İş Hukuku",
      description:
        "İş sözleşmeleri, işçi-işveren uyuşmazlıkları ve iş kazası davalarında uzman hizmet.",
    },
    {
      icon: ShoppingCart,
      title: "Tüketici Hukuku",
      description:
        "Tüketici hakları, ayıplı mal iadesi ve TKHK kapsamında tüm süreçlerde destek.",
    },
    {
      icon: HomeIcon,
      title: "Gayrimenkul Hukuku",
      description:
        "Tapu işlemleri, kira uyuşmazlıkları ve gayrimenkul alım-satım süreçlerinde danışmanlık.",
    },
    {
      icon: FileText,
      title: "Sözleşme Hukuku",
      description:
        "Her türlü sözleşmenin hazırlanması, müzakeresi ve uyuşmazlık çözümünde hukuki destek.",
    },
    {
      icon: Building2,
      title: "İcra ve İflas Hukuku",
      description:
        "Alacak tahsilatı, icra takibi ve iflas süreçlerinde etkin hukuki temsil.",
    },
  ];

  const testimonials = [
    {
      name: "A.K.",
      role: "Şirket Sahibi",
      text: "Ticari bir uyuşmazlık sürecimizde profesyonel yaklaşımları ve detaylı bilgilendirmeleriyle yanımızda oldular. Sonuçtan son derece memnun kaldık.",
    },
    {
      name: "M.Y.",
      role: "Müvekkil",
      text: "İş hukuku konusunda yaşadığım problemde hızlı ve etkili çözümler ürettiler. Güvenilir ve şeffaf iletişimleri için teşekkür ederim.",
    },
    {
      name: "S.D.",
      role: "Emlak Yatırımcısı",
      text: "Gayrimenkul alım-satım sürecimde tüm detayları titizlikle incelediler. Hukuki güvence altında işlemlerimi tamamladım.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-background)] to-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <h1 className="text-[var(--color-primary)]">
                Karmaşık hukuki sorunlara net çözümler.
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                10 yılı aşkın deneyimimle, müvekkillerime güvenilir, çözüm
                odaklı ve profesyonel hukuki danışmanlık hizmeti sunuyorum.
                Hukuki haklarınızı korumak için yanınızdayım.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" onClick={() => onNavigate("contact")}>
                  Ücretsiz ön görüşme talep et
                </Button>
                <Button variant="secondary">
                  <Sparkles className="w-5 h-5" />
                  AI hukuk asistanını dene
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="/public/images/avukatlik.png"
                  alt="Hukuk Ofisi"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Chatbot Preview Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[var(--color-border)]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[var(--color-primary)] mb-2">
                      AI Hukuk Asistanı
                    </h3>
                    <p className="text-[var(--color-text-secondary)] caption">
                      7/24 anında yanıt alın. Sık sorulan sorular için hemen
                      bilgi edinin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[var(--color-primary)] text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-2">
              <Clock className="w-12 h-12 text-[var(--color-accent)] mb-2" />
              <h2 className="text-white">3+</h2>
              <p className="text-gray-300">Yıl Deneyim</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Users className="w-12 h-12 text-[var(--color-accent)] mb-2" />
              <h2 className="text-white">50+</h2>
              <p className="text-gray-300">Müvekkil</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <TrendingUp className="w-12 h-12 text-[var(--color-accent)] mb-2" />
              <h2 className="text-white">%95+</h2>
              <p className="text-gray-300">Memnuniyet</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Award className="w-12 h-12 text-[var(--color-accent)] mb-2" />
              <h2 className="text-white">100+</h2>
              <p className="text-gray-300">Başarılı Dava</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practice-areas-section" className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-12 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-[var(--color-primary)] mb-4">
              Çalışma Alanlarımız
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Geniş uzmanlık alanlarımda her türlü hukuki ihtiyacınızda
              profesyonel destek sunuyorum.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard
                key={index}
                icon={area.icon}
                title={area.title}
                description={area.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="bg-[var(--color-background)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <h2 className="text-[var(--color-primary)]">
                AI Destekli Hukuk Asistanı
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Yapay zeka destekli hukuk asistanım, TBK ve TKHK kapsamında sık
                sorulan sorularınıza anında yanıt verir. 7/24 erişilebilir
                asistan, genel bilgilendirme amaçlı size yardımcı olur ve hukuki
                süreçlerinizi kolaylaştırır.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[var(--color-text-primary)]">
                      Sık sorulan sorulara anında yanıt
                    </p>
                    <p className="text-[var(--color-text-secondary)] caption">
                      Hukuki konularda genel bilgi edinin
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[var(--color-text-primary)]">
                      Müvekkil adaylarından ön bilgi toplama
                    </p>
                    <p className="text-[var(--color-text-secondary)] caption">
                      Dosyanız hakkında detaylı bilgi paylaşın
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[var(--color-text-primary)]">
                      Her zaman erişilebilir asistan
                    </p>
                    <p className="text-[var(--color-text-secondary)] caption">
                      Gece gündüz sorularınızı yanıtlıyoruz
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Button variant="primary">
                  <Sparkles className="w-5 h-5" />
                  Şimdi Deneyin
                </Button>
              </div>
            </div>

            {/* Right Column - Chatbot Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[var(--color-border)]">
                {/* Mockup Header */}
                <div className="bg-[var(--color-primary)] p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <span className="text-white">AI Hukuk Asistanı</span>
                  </div>
                </div>

                {/* Mockup Disclaimer */}
                <div className="bg-amber-50 border-b border-amber-100 px-4 py-2">
                  <p className="caption text-amber-800">
                    Genel bilgilendirme amaçlıdır, hukuki danışmanlık yerine
                    geçmez.
                  </p>
                </div>

                {/* Mockup Messages */}
                <div className="p-6 space-y-4 bg-[var(--color-background)] min-h-[300px]">
                  <div className="flex justify-start">
                    <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm max-w-[80%]">
                      <p>Merhaba! Size nasıl yardımcı olabilirim?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[var(--color-primary)] text-white px-4 py-3 rounded-2xl rounded-br-sm max-w-[80%]">
                      <p>Sözleşme feshi hakkında bilgi almak istiyorum</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm max-w-[80%]">
                      <p>
                        Tabii ki! Hangi tür sözleşme hakkında bilgi almak
                        istersiniz? (Kira, iş, tüketici vb.)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mockup Input */}
                <div className="p-4 border-t border-[var(--color-border)] bg-white">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 px-4 py-3 border border-[var(--color-border)] rounded-lg bg-gray-50">
                      <span className="text-[var(--color-text-secondary)]">
                        Sorunuzu buraya yazın…
                      </span>
                    </div>
                    <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-12 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-[var(--color-primary)] mb-4">
              Müvekkillerimiz Ne Diyor?
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Güvenilir hukuki hizmetlerimle müvekkillerimin yanındayım.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[var(--color-background)] p-8 rounded-xl border border-[var(--color-border)] hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                      <span className="text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-[var(--color-text-primary)]">
                        {testimonial.name}
                      </p>
                      <p className="caption text-[var(--color-text-secondary)]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <p className="caption text-[var(--color-text-secondary)] mt-2">
                    * Sonuçlar her dosya özelinde farklılık gösterebilir.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-12 lg:py-16">
          <div className="text-center flex flex-col items-center gap-6">
            <h2 className="text-white max-w-3xl">
              Hukuki sorunlarınız için profesyonel destek almaya hazır mısınız?
            </h2>
            <p className="text-gray-200 max-w-2xl text-lg">
              Ücretsiz ön görüşme için hemen iletişime geçin. Size en iyi çözümü
              sunmak için hazırım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                variant="primary"
                onClick={() => onNavigate("contact")}
                className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-[var(--color-primary)]"
              >
                Randevu Al
              </Button>
              <Button
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
              >
                Bizi Arayın: +90 538 053 1846
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
