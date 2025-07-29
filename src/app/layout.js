import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "AmirAli's Portfolio | Developer, Designer, Lifelong Learner",
  description:
    "AmirAli is a passionate developer, designer, and lifelong learner. Explore projects, skills, and contact information. Portfolio, web development, UI/UX, JavaScript, React, Next.js, Three.js, creative coding.",
  keywords: [
    "AmirAli",
    "Portfolio",
    "Web Developer",
    "Designer",
    "UI/UX",
    "JavaScript",
    "React",
    "Next.js",
    "Three.js",
    "Frontend",
    "Creative Coding",
    "Software Engineer",
    "Personal Website",
    "Projects",
    "Contact",
    "Resume",
    "Modern Web",
    "Accessibility",
    "Performance",
    "SEO",
    "Open Source",
  ],
  authors: [{ name: "AmirAli", url: "https://ameerali.xyz" }],
  creator: "AmirAli",
  publisher: "AmirAli",
  openGraph: {
    title: "AmirAli's Portfolio | Developer, Designer, Lifelong Learner",
    description:
      "Explore AmirAli's work as a developer, designer, and creative technologist. Modern web, UI/UX, and more.",
    url: "https://ameerali.xyz",
    siteName: "AmirAli's Portfolio",
    images: [
      {
        url: "https://ameerali.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "AmirAli's Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AmirAli's Portfolio | Developer, Designer, Lifelong Learner",
    description:
      "Explore AmirAli's work as a developer, designer, and creative technologist. Modern web, UI/UX, and more.",
    site: "@vupayrs",
    creator: "@vupayrs",
    images: ["https://ameerali.xyz/og-image.png"],
  },
  metadataBase: new URL("https://ameerali.xyz"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ameerali.xyz",
  },
  themeColor: "#0a0a0a",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" prefix="og: http://ogp.me/ns#">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark light" />
        <link rel="canonical" href="https://ameerali.xyz" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Preload fonts for performance */}
        <link
          rel="preload"
          href="/fonts/Geist.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Open Graph & Twitter meta tags for SEO */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AmirAli's Portfolio | Developer, Designer, Lifelong Learner" />
        <meta property="og:description" content="Explore AmirAli's work as a developer, designer, and creative technologist. Modern web, UI/UX, and more." />
        <meta property="og:url" content="https://ameerali.xyz" />
        <meta property="og:site_name" content="AmirAli's Portfolio" />
        <meta property="og:image" content="https://ameerali.xyz/og-image.png" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AmirAli's Portfolio | Developer, Designer, Lifelong Learner" />
        <meta name="twitter:description" content="Explore AmirAli's work as a developer, designer, and creative technologist. Modern web, UI/UX, and more." />
        <meta name="twitter:site" content="@ameerali" />
        <meta name="twitter:creator" content="@ameerali" />
        <meta name="twitter:image" content="https://ameerali.xyz/og-image.png" />
        {/* Extra SEO */}
        <meta name="author" content="AmirAli" />
        <meta name="publisher" content="AmirAli" />
        <meta name="keywords" content="AmirAli, Portfolio, Web Developer, Designer, UI/UX, JavaScript, React, Next.js, Three.js, Frontend, Creative Coding, Software Engineer, Personal Website, Projects, Contact, Resume, Modern Web, Accessibility, Performance, SEO, Open Source" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sfpro antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
