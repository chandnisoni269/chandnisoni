interface ContactPageProps {
  pageNumber: number;
  totalPages: number;
}

export function ContactPage({ pageNumber, totalPages }: ContactPageProps) {
  return (
    <div className="relative w-full flex justify-center items-start py-16 px-4" style={{ minHeight: "100vh", background: "#F5F3EF" }}>
      <div
        className="relative w-full shadow-2xl overflow-hidden"
        style={{ maxWidth: "794px", minHeight: "1123px", fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column" }}
      >
        {/* Navy background */}
        <div className="absolute inset-0 bg-[#1B2A4A]" />
        {/* Coral top strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#E8705A]" />
        {/* Subtle glow */}
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-5"
          style={{ background: "radial-gradient(circle at 80% 80%, #E8705A 0%, transparent 70%)" }}
        />

        {/* Content */}
        <div className="relative flex-1 flex flex-col justify-between p-16">
          {/* Top label */}
          <div className="flex items-center justify-between">
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#E8705A]">09 — Contact</p>
            <p className="text-[9px] tracking-widest uppercase text-white/30">Chandni Soni</p>
          </div>

          {/* Main CTA */}
          <div className="max-w-[500px]">
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#E8705A] mb-6">Let's Work Together</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "52px",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.5px",
              }}
            >
              Let's create
              <br />
              <span style={{ fontStyle: "italic", color: "#E8705A" }}>something</span>
              <span style={{ color: "#FFFFFF" }}>.</span>
            </h2>

            <p className="text-white/60 text-sm leading-[1.85] mt-6 max-w-[380px]">
              Open to freelance projects and full-time roles. Always happy to take on more work and keep learning. If you have a brief, an idea, or just want to chat — get in touch.
            </p>
          </div>

          {/* Contact details */}
          <div>
            <div className="w-12 h-px bg-[#E8705A] mb-8" />

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 mb-2">Location</p>
                <p className="text-white text-sm">Leeds, UK</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 mb-2">Email</p>
                <p className="text-[#E8705A] text-sm">chandnisoni269@gmail.com</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 mb-2">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/chandni-soni-269cs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-[#E8705A] transition-colors"
                  style={{ wordBreak: "break-all" }}
                >
                  linkedin.com/in/chandni-soni-269cs
                </a>
              </div>
            </div>

            {/* Bottom tagline */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[rgba(255,255,255,0.2)]" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/30">Marketing & Content Creator · Leeds, UK</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="relative flex items-center justify-between px-12 py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <span className="text-[9px] tracking-[0.25em] uppercase text-white/30">Chandni Soni</span>
          <div className="w-6 h-px bg-[#E8705A]" />
          <span className="text-[9px] tracking-[0.25em] uppercase text-white/30">{pageNumber} / {totalPages}</span>
        </div>
      </div>
    </div>
  );
}
