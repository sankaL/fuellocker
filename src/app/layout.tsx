import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Fuel Locker | Premium Vending Machines in Ontario, Canada",
    template: "%s | Fuel Locker"
  },
  description: "Partner with Ontario's premier smart vending service. We provide the machines, you provide the space. Offer protein shakes, milkshakes, and snacks while sharing revenue.",
  keywords: ["vending machine partnerships Canada", "revenue share vending", "smart vending Ontario", "Fuel Locker", "turnkey vending solutions"],
  openGraph: {
    title: "Fuel Locker | Premium Vending Partnerships in Ontario",
    description: "Zero-cost vending machine placement for gyms, offices, and high-traffic locations. Partner with us, offer premium products & share revenue.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuel Locker | Premium Vending Partnerships",
    description: "Zero-cost smart vending partnerships for Ontario businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='%23292A30'/><text y='.9em' font-size='80' x='10'>⚡</text></svg>" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
