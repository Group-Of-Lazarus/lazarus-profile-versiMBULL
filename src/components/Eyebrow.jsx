export default function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
      {children}
    </span>
  );
}
