import { PageWrapper } from "./PageWrapper";

interface ProjectPageProps {
  pageNumber: number;
  totalPages: number;
  sectionNumber: string;
  title: string;
  client: string;
  industry: string;
  overview: string;
  deliverables: string[];
  tools: string[];
  accentColor?: string;
  /** Optional pull-quote or key result to highlight */
  pullQuote?: string;
}

export function ProjectPage({
  pageNumber,
  totalPages,
  sectionNumber,
  title,
  client,
  industry,
  overview,
  deliverables,
  tools,
  accentColor = "#E8705A",
  pullQuote,
}: ProjectPageProps) {
  return (
    <PageWrapper pageNumber={pageNumber} totalPages={totalPages}>
      {/* Page header */}
      <div
        className="flex items-start justify-between px-12 pt-10 pb-8 border-b"
        style={{ borderColor: "rgba(27,42,74,0.08)" }}
      >
        <div>
          <p className="text-[9px] tracking-[0.35em] uppercase mb-2" style={{ color: accentColor }}>
            {sectionNumber} — Case Study
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "38px",
              fontWeight: 600,
              color: "#1B2A4A",
              lineHeight: 1.1,
              maxWidth: "420px",
            }}
          >
            {title}
          </h2>
        </div>
        <div className="text-right mt-1">
          <p className="text-[9px] tracking-widest uppercase text-[#6B6B6B] mb-1">{client}</p>
          <p className="text-[9px] tracking-widest uppercase" style={{ color: accentColor }}>{industry}</p>
        </div>
      </div>

      <div className="flex-1 px-12 py-8 flex flex-col gap-8">

        {/* Meta strip */}
        <div
          className="flex gap-0 border"
          style={{ borderColor: "rgba(27,42,74,0.08)" }}
        >
          <div className="flex-1 px-6 py-4 border-r" style={{ borderColor: "rgba(27,42,74,0.08)" }}>
            <p className="text-[9px] tracking-[0.25em] uppercase text-[#6B6B6B] mb-1">Client</p>
            <p className="text-[#1B2A4A] text-sm">{client}</p>
          </div>
          <div className="flex-1 px-6 py-4 border-r" style={{ borderColor: "rgba(27,42,74,0.08)" }}>
            <p className="text-[9px] tracking-[0.25em] uppercase text-[#6B6B6B] mb-1">Industry</p>
            <p className="text-[#1B2A4A] text-sm">{industry}</p>
          </div>
          <div className="flex-1 px-6 py-4">
            <p className="text-[9px] tracking-[0.25em] uppercase text-[#6B6B6B] mb-1">Tools Used</p>
            <p className="text-[#1B2A4A] text-sm">{tools.join("  ·  ")}</p>
          </div>
        </div>

        {/* Overview — full width */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px" style={{ background: accentColor }} />
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">Project Overview</p>
          </div>
          <p className="text-[#3D3D3D] text-sm leading-[1.9] max-w-[580px]">{overview}</p>
        </div>

        {/* Pull quote if provided */}
        {pullQuote && (
          <div
            className="px-8 py-6 border-l-4"
            style={{ borderColor: accentColor, background: `${accentColor}08` }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "17px",
                fontStyle: "italic",
                color: "#1B2A4A",
                lineHeight: 1.7,
              }}
            >
              "{pullQuote}"
            </p>
          </div>
        )}

        {/* Deliverables — two column grid */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px" style={{ background: accentColor }} />
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">What I Delivered</p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            {deliverables.map((item, i) => (
              <div key={item} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-[6px] text-[9px] tabular-nums"
                  style={{ color: `${accentColor}80`, fontFamily: "'DM Sans', sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[#3D3D3D] text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools badges + decorative rule */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "rgba(27,42,74,0.07)" }}>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-[9px] tracking-widest uppercase px-4 py-1.5 border"
                style={{ borderColor: `${accentColor}50`, color: accentColor }}
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 opacity-30">
            <div className="w-12 h-px bg-[#1B2A4A]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#1B2A4A]" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
