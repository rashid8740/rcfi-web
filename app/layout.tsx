import type { Metadata, Viewport } from "next";
import { fontStylesheets } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "RCFI Technology",
  description:
    "Reprodrive Center for Innovation Limited — digital trust, PKI, governance and business platforms for Africa.",
  icons: { icon: "/brand/rcfi-logo.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {fontStylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
