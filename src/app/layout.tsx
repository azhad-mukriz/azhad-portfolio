import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azhad Mukriz Bin Rizalman | e-Portfolio & IT Scholar",
  description: "Personal e-Portfolio of Azhad Mukriz Bin Rizalman — Bachelor of Information Technology (Honours) @ Universiti Tun Hussein Onn Malaysia (UTHM). JPA PIDN National Scholar, System Developer, Data Analytics, UI/UX Design & Applied AI.",
  keywords: [
    "Azhad Mukriz",
    "Azhad Mukriz Bin Rizalman",
    "UTHM",
    "Universiti Tun Hussein Onn Malaysia",
    "e-Portfolio",
    "JPA Scholar",
    "PIDN",
    "System Developer",
    "Full-Stack Developer",
    "AI Disaster Relief",
    "e-Pantas",
    "i-Qada",
    "Laravel",
    "Flutter",
    "Python",
    "Malaysia IT"
  ],
  authors: [{ name: "Azhad Mukriz Bin Rizalman" }],
  openGraph: {
    title: "Azhad Mukriz Bin Rizalman | e-Portfolio",
    description: "Bachelor of Information Technology (Honours) @ UTHM. JPA PIDN National Scholar, System Developer & Applied AI.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
