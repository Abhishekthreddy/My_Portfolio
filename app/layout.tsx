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
  title: "Abhishekth Reddy Thanam — AI Engineer",
  description:
    "Abhishekth Reddy Thanam — AI Engineer specializing in agentic AI, multi-agent workflows with LangGraph and MCP, RAG, LLM evaluation and guardrails, building HIPAA-compliant AI systems in healthcare.",
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
