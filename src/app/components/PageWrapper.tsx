interface PageWrapperProps {
  children: React.ReactNode;
  pageNumber: number;
  totalPages: number;
  dark?: boolean;
}

export function PageWrapper({ children, pageNumber, totalPages, dark = false }: PageWrapperProps) {
  return (
    <div
      className="relative w-full flex justify-center items-start py-16 px-4"
      style={{ minHeight: "100vh", background: dark ? "#1B2A4A" : "#F5F3EF" }}
    >
      <div
        className="relative w-full bg-white shadow-2xl"
        style={{
          maxWidth: "794px",
          minHeight: "1123px",
          display: "flex",
          flexDirection: "column",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {children}
        {/* Footer */}
        <div
          className="mt-auto flex items-center justify-between px-12 py-5 border-t"
          style={{ borderColor: "rgba(27,42,74,0.1)" }}
        >
          <span
            className="text-[10px] tracking-[0.25em] uppercase text-[#6B6B6B]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Chandni Soni
          </span>
          <div className="w-8 h-px bg-[#E8705A]" />
          <span
            className="text-[10px] tracking-[0.25em] uppercase text-[#6B6B6B]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {pageNumber} / {totalPages}
          </span>
        </div>
      </div>
    </div>
  );
}
