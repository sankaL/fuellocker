import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { Store, CupSoda, Dumbbell, GlassWater, IceCreamCone } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Vending Machines",
  description: "Explore Fuel Locker's full range of smart vending machines for Ontario businesses - protein shake dispensers, milkshake machines, and snack vending.",
};

const products = [
  {
    href: "/products/shaker-prime",
    icon: <Store size={48} className="text-yellow" />,
    name: "Shaker Prime",
    tagline: "Snacks. Sales. Success.",
    desc: "A floor-standing smart vending machine designed for snacks, beverages, and energy drinks - with 60+ item capacity, age verification, temperature control, and remote management.",
    specs: [
      { label: "Type", value: "Floor-standing" },
      { label: "Capacity", value: "60+ items" },
      { label: "Display", value: '15.6" HD IPS' },
      { label: "Weight", value: "661 lbs" },
    ],
    highlights: ["Smart Age Verification", "Temperature Control 4-25°C", "Remote Management", "Keyless Entry"],
    badge: "Snacks & Beverages",
    id: "shaker-prime",
  },
  {
    href: "/products/shaker-touch-2",
    icon: <CupSoda size={48} className="text-yellow" />,
    name: "Shaker Touch 2",
    tagline: "The Next Generation Shake Machine",
    desc: "Vending machine designed for gyms, offices, and vending businesses. Prepares protein, BCAA, and gainer shakes with high-speed 16,000 RPM mixers for perfect texture.",
    specs: [
      { label: "Type", value: "Floor-standing" },
      { label: "Drinks", value: "250+" },
      { label: "Display", value: '32" IPS Touchscreen' },
      { label: "Weight", value: "220 lbs" },
    ],
    highlights: ["250+ Drink Options", "16,000 RPM Mixers", "8 Protein Flavors", "Cooling to 1°C"],
    badge: "Protein Shakes",
    id: "shaker-touch-2",
  },
  {
    href: "/products/shaker-s",
    icon: <Dumbbell size={48} className="text-yellow" />,
    name: "Shaker S",
    tagline: "Small Size, Big Performance",
    desc: "A compact countertop vending machine designed for gyms, offices, and vending businesses. Weighing just 80 lbs - fits anywhere and relocates easily.",
    specs: [
      { label: "Type", value: "Countertop" },
      { label: "Drinks", value: "130+" },
      { label: "Display", value: '15" IPS' },
      { label: "Weight", value: "80 lbs" },
    ],
    highlights: ["130+ Drink Options", "4 Protein Flavors", "Countertop Design", "Just 80 lbs"],
    badge: "Compact Protein",
    id: "shaker-s",
  },
  {
    href: "/products/milkshaker",
    icon: <GlassWater size={48} className="text-yellow" />,
    name: "MilkShaker",
    tagline: "Fresh Milkshakes & Drinks on Demand",
    desc: "A countertop vending machine for preparing premium milkshakes and carbonated drinks. From Strawberry Dream to Mango Burst - fresh every time.",
    specs: [
      { label: "Type", value: "Floor-standing" },
      { label: "Drinks", value: "250+" },
      { label: "Display", value: '32" IPS Touchscreen' },
      { label: "Weight", value: "220 lbs" },
    ],
    highlights: ["250+ Milkshake Options", "11 Signature Flavors", "Auto Cup Dispenser", "Cooling to 1°C"],
    badge: "Milkshakes",
    id: "milkshaker",
  },
  {
    href: "/products/milkshaker-s",
    icon: <IceCreamCone size={48} className="text-yellow" />,
    name: "MilkShaker S",
    tagline: "Small Size, Big Performance",
    desc: "The compact milkshake vending machine powered by 16,000 RPM mixers. 130+ drink options in a countertop size - weigh just 80 lbs, relocate anytime.",
    specs: [
      { label: "Type", value: "Countertop" },
      { label: "Drinks", value: "130+" },
      { label: "Display", value: '15" IPS' },
      { label: "Weight", value: "80 lbs" },
    ],
    highlights: ["130+ Milkshake Options", "4 Milkshake Flavors", "Countertop Design", "Easy to Relocate"],
    badge: "Compact Milkshake",
    id: "milkshaker-s",
  },
];

export default function ProductsPage() {
  return (
    <div className="page-bg">
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">Our Machines</span>
          <h1>
            Five Machines.<br />
            <span className="text-yellow">Limitless Revenue.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            From high-capacity protein shake dispensers to premium milkshake machines - Fuel Locker partners with you to bring the right vending solution to your Ontario location.
          </p>
        </div>
      </section>

      {/* Products list */}
      <section className="section" style={{ paddingTop: "60px" }}>
        <div className="container">
          <div className={styles.productList}>
            {products.map((p, i) => (
              <div key={p.id} className={`card ${styles.productRow}`} id={p.id}>
                <div className={styles.productRowLeft}>
                  <div className={styles.productRowNumber}>0{i + 1}</div>
                  <div className={styles.productRowIcon}>{p.icon}</div>
                  <div>
                    <div className={styles.productRowBadge}>{p.badge}</div>
                    <h2 className={styles.productRowName}>{p.name}</h2>
                    <p className={styles.productRowTagline}>{p.tagline}</p>
                    <p className={styles.productRowDesc}>{p.desc}</p>
                    <div className={styles.productRowHighlights}>
                      {p.highlights.map((h) => (
                        <span key={h} className={styles.highlight}>✓ {h}</span>
                      ))}
                    </div>
                    <Link href={p.href} className="btn btn-primary" id={`view-${p.id}`} style={{ marginTop: "24px" }}>
                      View Machine →
                    </Link>
                  </div>
                </div>
                <div className={styles.productRowSpecs}>
                  <div className={styles.specsTitle}>Specifications</div>
                  {p.specs.map((s) => (
                    <div key={s.label} className="spec-row">
                      <span className="spec-label">{s.label}</span>
                      <span className="spec-value">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: "rgba(0,0,0,0.2)", paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="container text-center">
          <h2>Ready for a Partnership?</h2>
          <p style={{ maxWidth: "500px", margin: "16px auto 32px" }}>
            Let us assess your location and recommend the perfect machine for your business. Zero setup costs, zero hassle.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg" id="products-cta">
            Partner With Us - Free
          </Link>
        </div>
      </section>
    </div>
  );
}
