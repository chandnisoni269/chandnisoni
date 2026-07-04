import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE = "https://chandnisoni.co.uk";
const TITLE = "Chandni Soni — Marketing Professional & Brand Strategist";
const DESCRIPTION =
  "Chandni Soni is a UK-based marketing professional, brand strategist and content creator. Helping brands grow through creative marketing, brand identity, social media and visual storytelling.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s · Chandni Soni",
  },
  description: DESCRIPTION,
  applicationName: "Chandni Soni Portfolio",
  authors: [{ name: "Chandni Soni", url: SITE }],
  creator: "Chandni Soni",
  keywords: [
    "Chandni Soni",
    "Marketing Manager UK",
    "Brand Strategist",
    "Digital Marketing",
    "Social Media Marketing",
    "Content Creator",
    "Brand Identity",
    "Freelance Marketing",
    "Bradford",
    "United Kingdom",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE,
    siteName: "Chandni Soni",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Chandni Soni — Marketing Professional & Brand Strategist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  category: "portfolio",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chandni Soni",
  url: SITE,
  jobTitle: "Marketing Professional & Brand Strategist",
  description: DESCRIPTION,
  gender: "Female",
  nationality: "Indian",
  address: { "@type": "PostalAddress", addressCountry: "GB", addressRegion: "United Kingdom" },
  worksFor: { "@type": "Organization", name: "Amazon UK" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Bradford",
  },
  knowsAbout: [
    "Digital Marketing",
    "Brand Strategy",
    "Social Media Marketing",
    "Content Creation",
    "Brand Identity",
    "Visual Storytelling",
  ],
  sameAs: ["https://www.linkedin.com/in/chandnisoni"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
