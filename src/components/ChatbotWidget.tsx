import React, { useState } from 'react';
import { MessageCircle, X, Info, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Merhaba! Size nasıl yardımcı olabilirim?',
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    'Sözleşme feshi hakkında sorum var',
    'Tüketici şikayet sürecini öğren',
    'Kira sözleşmesi uyuşmazlığı'
  ];

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: 'user'
    };
    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: 'Mesajınızı aldım. Bu konuda size yardımcı olmak için danışmanlık ekibimiz size en kısa sürede dönüş yapacaktır. Daha fazla detay için randevu alabilirsiniz.',
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    handleSend(reply);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[var(--color-primary)] rounded-full shadow-lg hover:bg-[var(--color-primary-dark)] transition-all duration-200 flex items-center justify-center z-50 group hover:scale-110"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-[420px] h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-[var(--color-border)] animate-slideUp">
          {/* Header */}
          <div className="bg-[var(--color-primary)] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <span className="text-white">AI Hukuk Asistanı</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Info className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border-b border-amber-100 px-4 py-2">
            <p className="caption text-amber-800">
              Genel bilgilendirme amaçlıdır, hukuki danışmanlık yerine geçmez.
            </p>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--color-background)]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-[var(--color-primary)] text-white rounded-br-sm'
                      : 'bg-white text-[var(--color-text-primary)] rounded-bl-sm shadow-sm'
                  }`}
                >
                  <p className="leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-3 border-t border-[var(--color-border)] bg-white">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-2 bg-[var(--color-background)] text-[var(--color-text-secondary)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 caption"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-[var(--color-border)] bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Sorunuzu buraya yazın…"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-4 py-3 border border-[var(--color-border)] rounded-lg outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-20 transition-all"
              />
              <button
                onClick={() => handleSend()}
                className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-all flex items-center justify-center flex-shrink-0"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="caption text-[var(--color-text-secondary)] mt-2 text-center">
              <a href="#" className="hover:text-[var(--color-primary)]">KVKK</a> • Gizlilik
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
