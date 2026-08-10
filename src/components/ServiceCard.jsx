import { useState } from "react";
import { Check, Clock, Copy, Tag } from "lucide-react";

export default function ServiceCard({ service, icon: Icon, onInquire }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    onInquire(service);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-[var(--surface)] border border-[var(--border-subtle)] rounded-3xl p-6 md:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <span className="w-12 h-12 rounded-2xl bg-[var(--brand)] text-white grid place-items-center shrink-0 mb-5">
        <Icon size={22} strokeWidth={2} />
      </span>

      <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2 leading-snug">
        {service.judul}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{service.deskripsi}</p>

      <ul className="space-y-2 mb-6">
        {service.contoh.map((c) => (
          <li key={c} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
            <Check size={13} className="text-[var(--brand-text)] shrink-0 mt-0.5" />
            {c}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 flex items-center gap-1.5 bg-[var(--surface-alt)] rounded-xl px-3 py-2.5">
          <Tag size={13} className="text-[var(--text-faint)] shrink-0" />
          <span className="text-[11px] font-medium text-[var(--text-secondary)] leading-tight">{service.estimasi}</span>
        </div>
        <div className="flex-1 flex items-center gap-1.5 bg-[var(--surface-alt)] rounded-xl px-3 py-2.5">
          <Clock size={13} className="text-[var(--text-faint)] shrink-0" />
          <span className="text-[11px] font-medium text-[var(--text-secondary)] leading-tight">{service.durasi}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleClick}
        className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-[var(--brand-text)] bg-[var(--brand-soft)] hover:bg-[var(--brand-ring)] px-4 py-2.5 rounded-full transition-colors"
      >
        {copied ? (
          <>
            <Check size={15} /> Pesan tersalin, buka Instagram...
          </>
        ) : (
          <>
            <Copy size={15} /> Tanya Layanan Ini
          </>
        )}
      </button>
    </div>
  );
}
