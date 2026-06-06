import { PageWrapper } from "./PageWrapper";
import aboutPhoto from "../../imports/IMG_1873.jpeg";

interface AboutPageProps {
  pageNumber: number;
  totalPages: number;
}

const whatIDo = [
  "Brand identity & logos",
  "Social media content",
  "Short-form video (reels, shorts)",
  "Banners, menus & templates",
  "Digital & strategic marketing",
];

export function AboutPage({ pageNumber, totalPages }: AboutPageProps) {
  return (
    <PageWrapper pageNumber={pageNumber} totalPages={totalPages}>
      {/* Page header */}
      <div className="flex items-center justify-between px-12 pt-12 pb-8 border-b" style={{ borderColor: "rgba(27,42,74,0.08)" }}>
        <div>
          <p className="text-[9px] tracking-[0.35em] uppercase text-[#E8705A] mb-1">02 — About</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 600, color: "#1B2A4A", lineHeight: 1.1 }}>
            About Me
          </h2>
        </div>
        <div className="text-right">
          <p className="text-[9px] tracking-widest uppercase text-[#6B6B6B]">Chandni Soni</p>
          <p className="text-[9px] tracking-widest uppercase text-[#6B6B6B]">Marketing & Content Creator</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 px-12 py-10">
        <div className="grid gap-10" style={{ gridTemplateColumns: "1fr 240px" }}>
          {/* Left: bio + what I do */}
          <div>
            <p className="text-[#3D3D3D] text-sm leading-[1.85] mb-6">
              I'm a marketing and content creator based in Leeds, working across digital and strategic marketing, social media, and brand identity. As Marketing Manager at Solverb IT Solutions, and through freelance projects, I've worked with clients in fashion, hospitality, technology, and education across the UK and internationally.
            </p>
            <p className="text-[#3D3D3D] text-sm leading-[1.85] mb-8">
              I love taking a brief, understanding what a brand wants to say, and turning it into clear, consistent content. I work mainly in Canva and CapCut, I'm always happy to take on more work, and I'm keen to keep growing — including learning the Adobe Creative Suite.
            </p>

            {/* What I do */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-px bg-[#E8705A]" />
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#E8705A]">What I Do</p>
              </div>
              <ul className="space-y-2.5">
                {whatIDo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#E8705A] flex-shrink-0" />
                    <span className="text-[#1B2A4A] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Background tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["Fashion", "Hospitality", "Technology", "Education", "UK & International"].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] tracking-widest uppercase px-3 py-1.5 bg-[#F5F3EF] text-[#6B6B6B] border border-[rgba(27,42,74,0.1)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: photo + stat blocks */}
          <div className="flex flex-col gap-4">
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                overflow: "hidden",
                border: "1px solid rgba(27,42,74,0.1)",
              }}
            >
              <img
                src={aboutPhoto}
                alt="Chandni Soni"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>

            <div className="border border-[rgba(27,42,74,0.08)] bg-[#F5F3EF] p-4">
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B] mb-2">Based In</p>
              <p className="text-[#1B2A4A] text-sm">Leeds, UK</p>
            </div>

            <div className="border border-[rgba(27,42,74,0.08)] bg-[#F5F3EF] p-4">
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B] mb-2">Current Role</p>
              <p className="text-[#1B2A4A] text-sm leading-snug">Marketing Manager<br /><span className="text-[#6B6B6B]">Solverb IT Solutions</span></p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
