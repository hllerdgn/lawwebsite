import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface PracticeAreaCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PracticeAreaCard({ icon: Icon, title, description }: PracticeAreaCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <div className="flex flex-col gap-4">
        <div className="w-14 h-14 bg-[var(--color-background)] rounded-lg flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors duration-300">
          <Icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-[var(--color-accent)]" />
        </div>
        <h3 className="text-[var(--color-primary)]">{title}</h3>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-2 text-[var(--color-accent)] group-hover:gap-3 transition-all">
          <span className="caption">Detayları gör</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
