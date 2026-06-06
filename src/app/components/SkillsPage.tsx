import { PageWrapper } from "./PageWrapper";

interface SkillsPageProps {
  pageNumber: number;
  totalPages: number;
}

const tools = [
  { name: "Canva", level: "Advanced", pct: 95 },
  { name: "CapCut", level: "Advanced", pct: 90 },
];

const skills = [
  { name: "Brand Identity & Logos", detail: "Logo design, visual identity systems, brand guidelines" },
  { name: "Social Media Content", detail: "Platform-tailored posts, campaigns, and content calendars" },
  { name: "Short-form Video", detail: "Reels, Shorts — scripting, editing, and captioning" },
  { name: "Banners, Menus & Templates", detail: "Print-ready and digital collateral for hospitality & events" },
  { name: "Digital & Strategic Marketing", detail: "Campaign strategy, brand positioning, and content planning" },
];

const learningItems = ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro"];

export function SkillsPage({ pageNumber, totalPages }: SkillsPageProps) {
  return (
    <PageWrapper pageNumber={pageNumber} totalPages={totalPages}>
      {/* Header */}
      <div className="flex items-center justify-between px-12 pt-12 pb-8 border-b" style={{ borderColor: "rgba(27,42,74,0.08)" }}>
        <div>
          <p className="text-[9px] tracking-[0.35em] uppercase text-[#E8705A] mb-1">08 — Skills</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 600, color: "#1B2A4A", lineHeight: 1.1 }}>
            Skills & Tools
          </h2>
        </div>
        <div className="text-right">
          <p className="text-[9px] tracking-widest uppercase text-[#6B6B6B]">Chandni Soni</p>
        </div>
      </div>

      <div className="flex-1 px-12 py-10 flex flex-col gap-12">
        {/* Tools */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-px bg-[#E8705A]" />
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">Primary Tools</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-[#F5F3EF] p-6 border border-[rgba(27,42,74,0.07)]">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#1B2A4A", fontWeight: 600 }}>{tool.name}</p>
                    <p className="text-[9px] tracking-widest uppercase text-[#E8705A] mt-0.5">{tool.level}</p>
                  </div>
                  <span className="text-3xl font-light text-[#1B2A4A]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {tool.pct}%
                  </span>
                </div>
                {/* Bar */}
                <div className="h-1 bg-[rgba(27,42,74,0.1)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#E8705A] rounded-full"
                    style={{ width: `${tool.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-px bg-[#E8705A]" />
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">Core Competencies</p>
          </div>
          <div className="space-y-0">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="flex items-start gap-6 py-4"
                style={{ borderTop: i === 0 ? "1px solid rgba(27,42,74,0.08)" : undefined, borderBottom: "1px solid rgba(27,42,74,0.08)" }}
              >
                <span className="text-[10px] text-[#E8705A] mt-0.5 w-5 flex-shrink-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-[#1B2A4A] text-sm mb-0.5">{skill.name}</p>
                  <p className="text-[11px] text-[#6B6B6B]">{skill.detail}</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#E8705A] mt-2 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Currently learning */}
        <div className="border border-[#E8705A]/20 bg-[#E8705A]/5 p-6">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#E8705A] mb-4">Currently Learning</p>
          <div className="flex gap-4 flex-wrap">
            {learningItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full border border-[#E8705A]" />
                <span className="text-sm text-[#1B2A4A]">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#6B6B6B] mt-3 leading-relaxed">
            Always growing, always learning — expanding into the full Adobe Creative Suite to complement my existing skills in Canva and CapCut.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
