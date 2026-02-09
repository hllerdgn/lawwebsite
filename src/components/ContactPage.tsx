import React, { useState } from "react";
import { Input, Textarea } from "./Input";
import { Button } from "./Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Ad zorunludur";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Soyad zorunludur";
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-posta zorunludur";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon zorunludur";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Konu zorunludur";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Mesaj zorunludur";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - simulate submission
      alert(
        "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="w-full bg-[var(--color-background)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[var(--color-primary)] mb-4">
            İletişim & Randevu
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
            Hukuki sorunlarınız için bizimle iletişime geçin. Ücretsiz ön
            görüşme için formu doldurun veya bizi arayın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--color-border)]">
            <h2 className="text-[var(--color-primary)] mb-6">
              Randevu Talep Formu
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Ad"
                  placeholder="Adınız"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  error={errors.firstName}
                  required
                />
                <Input
                  label="Soyad"
                  placeholder="Soyadınız"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  error={errors.lastName}
                  required
                />
              </div>

              <Input
                label="E-posta"
                type="email"
                placeholder="ornek@email.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                error={errors.email}
                required
              />

              <Input
                label="Telefon"
                type="tel"
                placeholder="0(5__) ___ __ __"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                error={errors.phone}
                required
              />

              <Input
                label="Konu"
                placeholder="Görüşme konusu (ör. Ticaret Hukuku)"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                error={errors.subject}
                required
              />

              <Textarea
                label="Mesaj"
                placeholder="Hukuki sorunlarınızı kısaca açıklayın..."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                error={errors.message}
                required
                rows={6}
              />

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="caption text-amber-800">
                  <strong>KVKK Bilgilendirmesi:</strong> Formda paylaştığınız
                  kişisel verileriniz, KVKK kapsamında korunmakta ve yalnızca
                  sizinle iletişim kurmak amacıyla kullanılmaktadır. Detaylı
                  bilgi için{" "}
                  <a href="#" className="underline">
                    KVKK Aydınlatma Metni
                  </a>
                  'ni inceleyebilirsiniz.
                </p>
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Randevu Talebi Gönder
              </Button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="flex flex-col gap-8">
            {/* Contact Info Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--color-border)]">
              <h3 className="text-[var(--color-primary)] mb-6">
                İletişim Bilgileri
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-background)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-[var(--color-text-primary)] mb-1">
                      Adres
                    </p>
                    <p className="text-[var(--color-text-secondary)]">
                      Kadıköy mah. amiral cd. no:241/1/1
                      <br />
                      KARAMÜRSEL, KOCAELİ
                      <br />
                      Türkiye
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-background)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-[var(--color-text-primary)] mb-1">
                      Telefon
                    </p>
                    <p className="text-[var(--color-text-secondary)]">
                      0(538) 053 1846
                      <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-background)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-[var(--color-text-primary)] mb-1">
                      E-posta
                    </p>
                    <p className="text-[var(--color-text-secondary)]">
                      info@ornekavukat.com
                      <br />
                      randevu@ornekavukat.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-background)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-[var(--color-text-primary)] mb-1">
                      Çalışma Saatleri
                    </p>
                    <p className="text-[var(--color-text-secondary)]">
                      Pazartesi - Cuma: 09:00 - 18:00
                      <br />
                      Cumartesi: 10:00 - 14:00
                      <br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            {/* Harita Konteynırı */}
            <div className="bg-white rounded-2xl shadow-lg border border-[var(--color-border)] overflow-hidden w-full">
              <div className="relative h-[400px]">
                <iframe
                  title="Google Maps Konumu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.864332903562!2d29.58787597654065!3d40.69344403705912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad19875e6d625%3A0xc3676878b667868!2zS2FkxLFrw7Z5LCBBbWlyYWwgQ2QuIE5vOjI0MSwgNDE1MDAgS2FyYW3DvHJzZWwvS29jYWVsaQ!5e0!3m2!1str!2str!4v1700000000000" // Buradaki linki kendi embed kodunla değiştirebilirsin
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
