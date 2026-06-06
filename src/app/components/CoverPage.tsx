import profilePhoto from "../../imports/PHOTO-2026-06-06-00-32-05.jpg";

interface CoverPageProps {
  pageNumber: number;
  totalPages: number;
}

export function CoverPage({ pageNumber, totalPages }: CoverPageProps) {
  return (
    <div className="relative w-full flex justify-center items-start py-16 px-4" style={{ minHeight: "100vh", background: "#F5F3EF" }}>
      <div
        className="relative w-full shadow-2xl overflow-hidden"
        style={{ maxWidth: "794px", minHeight: "1123px", fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column" }}
      >
        {/* Left navy column */}
        <div className="absolute left-0 top-0 bottom-0 w-[340px] bg-[#1B2A4A]" />

        {/* Top coral strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#E8705A]" />

        {/* Content */}
        <div className="relative flex-1 flex" style={{ minHeight: "1080px" }}>
          {/* Left panel */}
          <div className="w-[340px] flex-shrink-0 flex flex-col items-center justify-between py-16 px-10">
            {/* Profile photo circle */}
            <div className="mt-4">
              <div
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid rgba(232,112,90,0.7)",
                  flexShrink: 0,
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Chandni Soni"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-[#E8705A] my-8" />

            {/* Contact block */}
            <div className="text-center space-y-3 mt-auto mb-12">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[rgba(255,255,255,0.5)]">Contact</p>
              <div className="space-y-2">
                <p className="text-[11px] text-white/80 leading-relaxed">Leeds, UK</p>
                <p className="text-[11px] text-[#E8705A] leading-relaxed break-all">chandnisoni269@gmail.com</p>
              </div>
            </div>

            {/* Vertical text */}
            <div
              className="text-[8px] tracking-[0.35em] uppercase text-white/30"
              style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
            >
              Marketing & Content Creator · Leeds, UK
            </div>
          </div>

          {/* Right panel */}
          <div className="flex-1 bg-white flex flex-col justify-between py-16 px-12">
            {/* Top label */}
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#E8705A] mb-8">Creative Portfolio</p>

              {/* Big title */}
              <div style={{ fontFamily: "'Playfair Display', serif" }}>
                <h1
                  className="text-[#1B2A4A] leading-none"
                  style={{ fontSize: "72px", fontWeight: 700, letterSpacing: "-1px", lineHeight: 1 }}
                >
                  PORT
                </h1>
                <h1
                  className="text-[#1B2A4A] leading-none"
                  style={{ fontSize: "72px", fontWeight: 700, letterSpacing: "-1px", lineHeight: 1 }}
                >
                  FOLIO
                </h1>
              </div>

              {/* Coral rule */}
              <div className="flex items-center gap-3 my-8">
                <div className="w-8 h-[2px] bg-[#E8705A]" />
                <div className="w-2 h-[2px] bg-[#E8705A]" />
              </div>

              {/* Name */}
              <div style={{ fontFamily: "'Playfair Display', serif" }}>
                <p className="text-[#1B2A4A] text-2xl font-medium tracking-wide">Chandni Soni</p>
              </div>

              {/* Title */}
              <p className="text-[#3D3D3D] text-[11px] tracking-[0.25em] uppercase mt-2 mb-6">
                Marketing & Content Creator
              </p>

              {/* Tagline */}
              <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-[240px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Social media content, short-form video &amp; brand identity.
              </p>
            </div>

            {/* Bottom decoration */}
            <div>
              <div className="flex gap-2 mb-8">
                {["Social Media", "Brand Identity", "Short-form Video"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[8px] tracking-widest uppercase px-3 py-1 border border-[rgba(27,42,74,0.15)] text-[#6B6B6B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">2025 — 2026</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="relative flex items-center justify-between px-8 py-4 z-10"
          style={{ background: "#fff", borderTop: "1px solid rgba(27,42,74,0.08)" }}
        >
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#6B6B6B]">Chandni Soni</span>
          <div className="w-6 h-px bg-[#E8705A]" />
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#6B6B6B]">{pageNumber} / {totalPages}</span>
        </div>
      </div>
    </div>
  );
}
