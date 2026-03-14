import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Fuel Locker | Premium Vending Machines in Ontario, Canada",
    template: "%s | Fuel Locker"
  },
  description: "Ontario's premier smart vending machine provider. Protein shakes, milkshakes, and snack machines for gyms, offices, and high-traffic locations across Canada.",
  keywords: ["vending machines Canada", "protein shake vending", "smart vending Ontario", "Fuel Locker", "milkshake vending machine"],
  openGraph: {
    title: "Fuel Locker | Premium Vending Machines in Ontario, Canada",
    description: "Smart vending machines for gyms, offices, and high-traffic locations. Protein shakes, milkshakes & snacks - 24/7.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuel Locker | Premium Vending Machines",
    description: "Smart vending machines for Ontario businesses.",
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
