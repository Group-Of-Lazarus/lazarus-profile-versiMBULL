import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        width: "72px",
        height: "36px",
        borderRadius: "9999px",
        padding: "4px",
        cursor: "pointer",
        border: "none",
        outline: "none",
        transition: "background-color 0.4s ease",
        backgroundColor: isDark ? "#3a3a4a" : "#c8c8d4",
        flexShrink: 0,
      }}
    >
      {/* Moon icon — left side */}
      <span
        style={{
          position: "absolute",
          left: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.3s ease",
          opacity: isDark ? 1 : 0.45,
          color: isDark ? "#fff" : "#666",
        }}
      >
        <MoonIcon size={16} />
      </span>

      {/* Sun icon — right side */}
      <span
        style={{
          position: "absolute",
          right: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.3s ease",
          opacity: isDark ? 0.45 : 1,
          color: isDark ? "#888" : "#555",
        }}
      >
        <SunIcon size={16} />
      </span>

      {/* Sliding thumb */}
      <span
        style={{
          position: "absolute",
          top: "4px",
          width: "28px",
          height: "28px",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "left 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
          left: isDark ? "4px" : "40px",
          color: isDark ? "#3a3a4a" : "#888",
        }}
      >
        {isDark ? <MoonIcon size={15} filled /> : <SunIcon size={15} filled />}
      </span>
    </button>
  );
}

/* ── Inline SVG icons ── */
function MoonIcon({ size = 16, filled = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {filled ? (
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      ) : (
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      )}
    </svg>
  );
}

function SunIcon({ size = 16, filled = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {filled ? (
        <>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2.5" stroke="currentColor" />
          <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2.5" stroke="currentColor" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2.5" stroke="currentColor" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2.5" stroke="currentColor" />
          <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2.5" stroke="currentColor" />
          <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2.5" stroke="currentColor" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2.5" stroke="currentColor" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2.5" stroke="currentColor" />
        </>
      ) : (
        <>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </>
      )}
    </svg>
  );
}
