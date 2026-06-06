interface PortfolioNavProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const pageLabels = [
  "Cover",
  "About",
  "StyleForge AI",
  "Indian Platter",
  "African Indian",
  "VoxaBridge",
  "Shashwat",
  "Skills",
  "Contact",
];

export function PortfolioNav({ currentPage, totalPages, onPageChange }: PortfolioNavProps) {
  return (
    <nav
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[rgba(27,42,74,0.12)] flex items-center justify-between px-8 py-3"
    >
      <span className="text-xs tracking-[0.2em] uppercase text-[#6B6B6B]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        Chandni Soni — Portfolio
      </span>

      <div className="flex items-center gap-1">
        {pageLabels.map((label, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i)}
            title={label}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              currentPage === i
                ? "bg-[#E8705A] scale-125"
                : "bg-[rgba(27,42,74,0.2)] hover:bg-[rgba(27,42,74,0.4)]"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onPageChange(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
          className="text-xs tracking-widest uppercase text-[#6B6B6B] hover:text-[#1B2A4A] disabled:opacity-30 transition-colors"
        >
          ← Prev
        </button>
        <span className="text-xs text-[#6B6B6B]">
          {currentPage + 1} / {totalPages}
        </span>
        <button
          onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))}
          disabled={currentPage === totalPages - 1}
          className="text-xs tracking-widest uppercase text-[#6B6B6B] hover:text-[#1B2A4A] disabled:opacity-30 transition-colors"
        >
          Next →
        </button>
      </div>
    </nav>
  );
}
