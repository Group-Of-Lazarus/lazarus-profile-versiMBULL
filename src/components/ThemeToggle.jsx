import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      className="relative w-10 h-10 rounded-full grid place-items-center bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--brand-text)] hover:border-[var(--brand)] transition-colors"
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
