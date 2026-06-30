import type { Metadata, Viewport } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishekth Reddy Thanam — AI/ML Engineer",
  description:
    "Abhishekth Reddy Thanam — AI/ML Engineer specializing in LLMs, agentic RAG systems, multi-agent orchestration with LangGraph, LLM fine-tuning with LoRA/PEFT, and MLOps across finance and healthcare.",
  authors: [{ name: "Abhishekth Reddy Thanam" }],
};

export const viewport: Viewport = {
  themeColor: "#2B32B2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
