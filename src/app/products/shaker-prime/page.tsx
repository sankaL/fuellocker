import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../product.module.css";
import { Shield, Smartphone, Thermometer, CreditCard, Lock, Activity, Store, Zap, Monitor, Wrench, Globe, CupSoda, Dumbbell, GlassWater, IceCreamCone } from "lucide-react";

export const metadata: Metadata = {
  title: "Shaker Prime - Smart Snack & Beverage Vending Machine",
  description: "Shaker Prime is a floor-standing smart vending machine for snacks, beverages, and energy drinks. 60+ item capacity, age verification, remote management. Ontario, Canada.",
};

const features = [
  { icon: <Shield size={32} className="text-yellow" />, title: "Smart Age Verification", desc: "Built-in camera ensures safe sales of energy drinks and 18+ products by instantly verifying customer age." },
  { icon: <Smartphone size={32} className="text-yellow" />, title: "Mobile-Ready Loyalty System", desc: "Integrated QR scanner for loyalty cards, promo codes, and client identification." },
  { icon: <Thermometer size={32} className="text-yellow" />, title: "Temperature-Controlled Storage", desc: "Refrigeration system keeps products fresh and stable from 4-25°C for maximum quality." },
  { icon: <CreditCard size={32} className="text-yellow" />, title: "24/7 Payment Processing", desc: "Supports contactless payments, subscriptions, and QR code transactions anytime." },
  { icon: <Lock size={32} className="text-yellow" />, title: "Keyless Entry", desc: "Key loss is no longer an issue - keys can be created or removed via your personal account." },
  { icon: <Activity size={32} className="text-yellow" />, title: "Remote Monitoring", desc: "Monitor inventory, sales analytics, and machine status from anywhere. Full control remotely." },
  { icon: <Store size={32} className="text-yellow" />, title: "Marketplace System", desc: "Sell snacks, drinks, or other products with flexible pricing and promotion options." },
  { icon: <Shield size={32} className="text-yellow" />, title: "Protective Glass", desc: "Durable front design to safeguard products and display from damage." },
  { icon: <Zap size={32} className="text-yellow" />, title: "Power Efficiency", desc: "Built-in UPS for uninterrupted operation - keep selling even during brief power disruptions." },
];

const specs = [
  { label: "Dimensions (H/W/D)", value: '47.2" × 75.9" × 34.4"' },
  { label: "Weight", value: "661 lbs" },
  { label: "Capacity", value: "60+ items (6 shelves × 10 slots)" },
  { label: "Power Supply", value: "110–220 V" },
  { label: "Power Consumption", value: "35 W / up to 200 W" },
  { label: "Display Size", value: '15.6" IPS' },
  { label: "Display Resolution", value: "1920 × 1080" },
  { label: "Brightness", value: "300 cd/m²" },
  { label: "Processor", value: "4.2 GHz" },
  { label: "RAM", value: "8 GB" },
  { label: "Operating System", value: "Linux" },
  { label: "Temperature Control", value: "4–25°C" },
];

const related = [
  { href: "/products/shaker-touch-2", icon: <CupSoda size={24} className="text-yellow" />, name: "Shaker Touch 2", tagline: "Protein Shake Machine" },
  { href: "/products/shaker-s", icon: <Dumbbell size={24} className="text-yellow" />, name: "Shaker S", tagline: "Compact Protein" },
  { href: "/products/milkshaker", icon: <GlassWater size={24} className="text-yellow" />, name: "MilkShaker", tagline: "Fresh Milkshakes" },
  { href: "/products/milkshaker-s", icon: <IceCreamCone size={24} className="text-yellow" />, name: "MilkShaker S", tagline: "Compact Milkshake" },
];

export default function ShakerPrimePage() {
  return (
    <div className="page-bg">
      {/* Hero */}
      <section className={styles.productHero}>
        <div className={styles.productHeroBg}>
          <div className={styles.heroGlow} />
        </div>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <nav className={styles.breadcrumb}>
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/products">Products</Link>
                <span>/</span>
                <span>Shaker Prime</span>
              </nav>
              <div className="badge">🏪 Snacks & Beverages</div>
              <h1 className={styles.heroTitle} style={{ marginTop: "16px" }}>
                Shaker Prime:<br />
                <span className="text-yellow">Snacks. Sales. Success.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Serve more customers, protect your products, and partner with us - all with Shaker Prime. Built for offices, gyms, campuses, and hotels across Ontario.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact?machine=Shaker+Prime" className="btn btn-primary btn-lg" id="shaker-prime-cta">
                  Partner With Us
                </Link>
                <Link href="#specs" className="btn btn-secondary btn-lg">
                  View Specs
                </Link>
              </div>
            </div>
            <div className={styles.heroImageArea}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/images/products/shaker-prime.png"
                  alt="Shaker Prime smart vending machine"
                  width={420}
                  height={520}
                  className={styles.heroImg}
                  priority
                />
                <div className={styles.heroSpecBadges}>
                  <div className={styles.heroSpecBadge}>
                    <span className={styles.heroSpecBadgeNum}>60+</span>
                    <span className={styles.heroSpecBadgeLabel}>Items</span>
                  </div>
                  <div className={styles.heroSpecBadge}>
                    <span className={styles.heroSpecBadgeNum}>4–25°C</span>
                    <span className={styles.heroSpecBadgeLabel}>Temp Range</span>
                  </div>
                  <div className={styles.heroSpecBadge}>
                    <span className={styles.heroSpecBadgeNum}>24/7</span>
                    <span className={styles.heroSpecBadgeLabel}>Payments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview strip */}
      <div className={styles.overviewStrip}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>60+</div>
              <div className={styles.overviewLabel}>Item Capacity</div>
            </div>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>15.6&quot;</div>
              <div className={styles.overviewLabel}>HD Display</div>
            </div>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>4-25°C</div>
              <div className={styles.overviewLabel}>Temperature Range</div>
            </div>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>24/7</div>
              <div className={styles.overviewLabel}>Payment Processing</div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <section className={`${styles.contentSection} section`} style={{ paddingBottom: "40px" }}>
        <div className="container">
          <div className={styles.sectionGrid}>
            <div className={styles.sectionText}>
              <span className="section-label">About Shaker Prime</span>
              <h2>More Than Vending — It&apos;s a Complete Marketplace</h2>
              <p style={{ marginTop: "20px" }}>
                Shaker Prime is a floor-standing smart vending machine designed for snacks, beverages, and energy drinks. From offices and gyms to campuses and hotels - people love convenience. We provide it. We share the profits.
              </p>
              <p style={{ marginTop: "16px" }}>
                With a large HD display, built-in age verification camera, and a full remote management suite, Shaker Prime isn&apos;t just a vending machine - it&apos;s a complete business in a box.
              </p>
              <div style={{ display: "flex", gap: "16px", marginTop: "32px", flexWrap: "wrap" }}>
                <div className="stat-card">
                  <div className="stat-number">661</div>
                  <div className="stat-label">lbs - Built to last</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">6</div>
                  <div className="stat-label">Shelves × 10 Slots</div>
                </div>
              </div>
            </div>
            <div className={styles.sectionImage}>
              <Image
                src="/images/products/shaker-prime-2.png"
                alt="Shaker Prime interior and display"
                width={480}
                height={400}
                style={{ borderRadius: "16px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" style={{ paddingTop: "40px" }}>
        <div className="container">
          <span className="section-label">Smart Features</span>
          <h2>Advanced Vending Technologies</h2>
          <p style={{ maxWidth: "560px", marginTop: "12px" }}>Every detail is designed for precision, reliability, and easy service - making Shaker Prime the next-gen vending standard.</p>
          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureCardIcon}>{f.icon}</span>
                <div className={styles.featureCardTitle}>{f.title}</div>
                <p className={styles.featureCardDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className={`section ${styles.specsSection}`}>
        <div className="container">
          <div className={styles.specsGrid}>
            <div>
              <span className="section-label">Specifications</span>
              <h2>Technical Details</h2>
              <p style={{ marginTop: "12px" }}>
                Shaker Prime is built with enterprise-grade components designed for continuous, unattended operation in high-traffic locations.
              </p>
              <div style={{ marginTop: "32px" }}>
                <div className={styles.specsTable}>
                  <div className={styles.specsTableTitle}>Technical Specs</div>
                  {specs.map((s) => (
                    <div key={s.label} className="spec-row">
                      <span className="spec-label">{s.label}</span>
                      <span className="spec-value">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <span className="section-label">Inside the Machine</span>
              <h3 style={{ marginTop: "8px" }}>Engineered for Reliability</h3>
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { icon: <Monitor size={24} className="text-yellow" />, t: "Large HD Display", d: "A 15.6-inch IPS screen for promotions, menus, and advertisements - attracts attention and drives purchases." },
                  { icon: <Wrench size={24} className="text-yellow" />, t: "Easy Maintenance", d: "User-friendly automated service system for operators. Smart Control Board manages all processes." },
                  { icon: <Globe size={24} className="text-yellow" />, t: "QR-Code System", d: "Integrated QR code and payment options for instant access - loyalty cards, promo codes, and memberships." },
                ].map((item) => (
                  <div key={item.t} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "1.4rem", flexShrink: 0, paddingTop: "2px" }}>{item.icon}</div>
                    <div>
                      <div style={{ fontWeight: "700", fontSize: "0.95rem", marginBottom: "4px" }}>{item.t}</div>
                      <p style={{ fontSize: "0.87rem", margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaStripInner}>
            <div>
              <h2>Ready for a Shaker Prime Partnership?</h2>
              <p style={{ color: "var(--color-text-muted)", marginTop: "8px" }}>
                Explore a revenue-share partnership for your Ontario location.
              </p>
            </div>
            <div className={styles.ctaStripActions}>
              <Link href="/contact?machine=Shaker+Prime" className="btn btn-primary btn-lg" id="shaker-prime-bottom-cta">
                Partner With Us
              </Link>
              <Link href="/products" className="btn btn-secondary">
                All Machines
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <div className={styles.relatedNav}>
        <div className="container">
          <span className="section-label">Explore More</span>
          <h3 style={{ marginTop: "8px" }}>Other Machines</h3>
          <div className={styles.relatedGrid}>
            {related.map((r) => (
              <Link key={r.href} href={r.href} className={styles.relatedCard} id={`related-${r.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <span className={styles.relatedCardIcon}>{r.icon}</span>
                <div className={styles.relatedCardName}>{r.name}</div>
                <div className={styles.relatedCardTagline}>{r.tagline}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
