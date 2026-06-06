import { useState, useEffect } from "react";
import { CoverPage } from "./components/CoverPage";
import { AboutPage } from "./components/AboutPage";
import { ProjectPage } from "./components/ProjectPage";
import { SkillsPage } from "./components/SkillsPage";
import { ContactPage } from "./components/ContactPage";
import { PortfolioNav } from "./components/PortfolioNav";

const TOTAL_PAGES = 9;

const projects = [
  {
    sectionNumber: "03",
    title: "StyleForge AI",
    client: "StyleForge AI",
    industry: "Fashion–Technology · UK",
    overview:
      "StyleForge AI is a UK-based fashion-technology brand blending AI-driven styling with content marketing. The brief was to build a consistent, modern content presence across social platforms that felt premium yet accessible — appealing to a style-forward audience while communicating the brand's AI-driven edge.",
    deliverables: [
      "Digital and strategic marketing planning",
      "Social media content creation across platforms",
      "Consistent visual content style across channels",
      "Short-form video content for reels and shorts",
      "Brand voice guidelines and content calendar",
    ],
    tools: ["Canva", "CapCut"],
    pullQuote: "Built a cohesive brand presence from the ground up — turning a technology concept into a content-led fashion identity.",
  },
  {
    sectionNumber: "04",
    title: "Indian Platter",
    client: "Indian Platter Restaurant",
    industry: "Hospitality · UK",
    overview:
      "Indian Platter is a UK-based Indian restaurant that required a complete brand identity built from scratch. The project spanned everything from the initial logo concept through to print-ready menus, promotional banners, and an ongoing social media presence to drive local awareness and footfall.",
    deliverables: [
      "Full logo design and brand identity",
      "Restaurant menu design (print-ready)",
      "Promotional banners and in-venue signage",
      "Social media content and marketing",
      "Branded templates for ongoing use",
    ],
    tools: ["Canva"],
    accentColor: "#C0764A",
    pullQuote: "Delivered a complete visual identity — logo to menu to social — giving the restaurant a confident, consistent brand voice.",
  },
  {
    sectionNumber: "05",
    title: "African Indian Restaurant",
    client: "African Indian Restaurant",
    industry: "Hospitality · Africa",
    overview:
      "A hospitality client with a unique fusion concept required a distinct visual identity that bridged African and Indian culinary heritage. The challenge was creating a brand that felt culturally resonant and appetising while remaining modern and shareable across social media.",
    deliverables: [
      "Logo design reflecting the fusion concept",
      "Brand identity and colour system",
      "Social media content creation",
      "Branded post templates for ongoing use",
    ],
    tools: ["Canva"],
    accentColor: "#C0764A",
    pullQuote: "Brought two distinct culinary cultures together under one visual identity — warm, bold, and immediately recognisable.",
  },
  {
    sectionNumber: "06",
    title: "VoxaBridge",
    client: "VoxaBridge",
    industry: "Technology · Global",
    overview:
      "VoxaBridge is a global live-translation meeting platform operating at the intersection of AI and enterprise communication. The project required a professional, forward-looking brand identity that conveyed clarity, trust, and global reach — built to appeal to enterprise clients across multiple markets.",
    deliverables: [
      "Logo design and primary brand mark",
      "Brand cover and social profile visuals",
      "Brand visual system and colour palette",
      "Supporting brand assets and templates",
    ],
    tools: ["Canva"],
    accentColor: "#3A7CA5",
    pullQuote: "Created a brand identity that speaks enterprise confidence — clean, global, and built for a platform operating at scale.",
  },
  {
    sectionNumber: "07",
    title: "Shashwat Education",
    client: "Shashwat Education Institute",
    industry: "Education",
    overview:
      "Shashwat Education is an education institute requiring a professional brand identity and active social media presence to attract and engage prospective students. The work built a credible, approachable visual identity alongside a regular content programme that communicated quality and accessibility.",
    deliverables: [
      "Logo design and institutional branding",
      "Full brand identity and style guidelines",
      "Social media content and marketing campaigns",
      "Short-form video content (reels & shorts)",
      "Branded templates for future content",
    ],
    tools: ["Canva", "CapCut"],
    accentColor: "#5A7E6B",
    pullQuote: "Built a brand that institutions trust and students connect with — professional, warm, and built for growth.",
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setCurrentPage((p) => Math.min(TOTAL_PAGES - 1, p + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setCurrentPage((p) => Math.max(0, p - 1));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const renderPage = () => {
    if (currentPage === 0) return <CoverPage pageNumber={1} totalPages={TOTAL_PAGES} />;
    if (currentPage === 1) return <AboutPage pageNumber={2} totalPages={TOTAL_PAGES} />;
    if (currentPage >= 2 && currentPage <= 6) {
      const project = projects[currentPage - 2];
      return (
        <ProjectPage
          key={project.title}
          pageNumber={currentPage + 1}
          totalPages={TOTAL_PAGES}
          sectionNumber={project.sectionNumber}
          title={project.title}
          client={project.client}
          industry={project.industry}
          overview={project.overview}
          deliverables={project.deliverables}
          tools={project.tools}
          accentColor={project.accentColor}
          pullQuote={project.pullQuote}
        />
      );
    }
    if (currentPage === 7) return <SkillsPage pageNumber={8} totalPages={TOTAL_PAGES} />;
    if (currentPage === 8) return <ContactPage pageNumber={9} totalPages={TOTAL_PAGES} />;
    return null;
  };

  return (
    <div className="min-h-screen" style={{ background: "#EAE7E0", fontFamily: "'DM Sans', sans-serif" }}>
      <PortfolioNav
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={setCurrentPage}
      />

      <div className="pt-12">
        <div key={currentPage} style={{ animation: "fadeSlide 0.35s ease-out" }}>
          {renderPage()}
        </div>
      </div>

      <div
        className="fixed bottom-6 right-6 text-[9px] tracking-widest uppercase text-[#6B6B6B] bg-white/80 backdrop-blur-sm px-3 py-2 rounded"
        style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
      >
        ← → to navigate
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(27,42,74,0.15); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(27,42,74,0.3); }
      `}</style>
    </div>
  );
}
