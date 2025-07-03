import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Pratik Senjaliya - Frontend Developer & Full-Stack Engineer",
  description: "Experienced Frontend Developer & Full-Stack Engineer with 4+ years of expertise in React, Next.js, Angular, and modern web technologies. Building scalable digital solutions that users love and businesses need.",
  keywords: [
    "Pratik Senjaliya",
    "Frontend Developer", 
    "Full-Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "UI/UX Development",
    "React Native",
    "Node.js",
    "Portfolio",
    "India Developer",
    "Remote Developer"
  ],
  authors: [{ name: "Pratik Senjaliya" }],
  creator: "Pratik Senjaliya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pratiksenjaliya.dev",
    title: "Pratik Senjaliya - Frontend Developer & Full-Stack Engineer",
    description: "Experienced Frontend Developer & Full-Stack Engineer crafting exceptional digital experiences with React, Next.js, and Angular. 4+ years of expertise in building scalable solutions.",
    siteName: "Pratik Senjaliya Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pratik Senjaliya - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Senjaliya - Frontend Developer & Full-Stack Engineer",
    description: "Experienced Frontend Developer crafting exceptional digital experiences with React, Next.js, and Angular. Available for new opportunities.",
    creator: "@pratiksenjaliya",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Portfolio Website",
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Anti-FODT script for preventing flash of default theme
const antiFlashScript = `
(function() {
  try {
    const preference = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = preference || systemPreference;
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  } catch (e) {
    // Silently fail if localStorage is not available
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pratik Senjaliya" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: antiFlashScript }} />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
