import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FuelLocker | Smart Vending Machines for Ontario Businesses",
  description: "Ontario's premier smart vending machine provider. Protein shakes, milkshakes, and snack vending machines for gyms, offices, and high-traffic locations.",
};

const products = [
  {
    href: "/products/shaker-prime",
    icon: "🏪",
    name: "Shaker Prime",
    tagline: "Snacks. Sales. Success.",
    desc: "Floor-standing smart vending for snacks & beverages with age verification, temperature control & remote management.",
    capacity: "60+ items",
    display: '15.6" HD Display',
    badge: "Most Popular",
  },
  {
    href: "/products/shaker-touch-2",
    icon: "🥤",
    name: "Shaker Touch 2",
    tagline: "Next-Gen Protein Machine",
    desc: "250+ drinks with 8 protein flavors. 16,000 RPM mixers for perfect shake consistency every time.",
    capacity: "250+ drinks",
    display: '32" Touchscreen',
    badge: "Best Seller",
  },
  {
    href: "/products/shaker-s",
    icon: "💪",
    name: "Shaker S",
    tagline: "Small Size, Big Performance",
    desc: "Compact countertop protein vending machine — 130+ drinks, 4 protein flavors. Fits anywhere.",
    capacity: "130+ drinks",
    display: '15" Display',
    badge: "Compact",
  },
  {
    href: "/products/milkshaker",
    icon: "🥛",
    name: "MilkShaker",
    tagline: "Fresh Milkshakes on Demand",
    desc: "Premium milkshake machine with 250+ options. Strawberry, Chocolate, Mango, and more — fresh every time.",
    capacity: "250+ drinks",
    display: '32" Touchscreen',
    badge: "Milkshakes",
  },
  {
    href: "/products/milkshaker-s",
    icon: "🍦",
    name: "MilkShaker S",
    tagline: "Compact Milkshake Power",
    desc: "The compact version of our milkshake machine — 130+ options. Easy to relocate to find the best spot.",
    capacity: "130+ drinks",
    display: '15" Display',
    badge: "Compact",
  },
];

const benefits = [
  {
    icon: "💰",
    title: "Passive Revenue Stream",
    desc: "Earn income 24/7 with minimal time investment. Our machines start generating revenue from day one.",
  },
  {
    icon: "📱",
    title: "Remote Management",
    desc: "Monitor sales, inventory, and performance from your phone. Full control, anywhere in Ontario.",
  },
  {
    icon: "🔒",
    title: "Keyless Entry",
    desc: "Electronic lock — create or remove access via your personal account. No keys to lose.",
  },
  {
    icon: "💳",
    title: "Contactless Payments",
    desc: "Tap-to-pay, subscriptions, QR codes, and loyalty programs supported out of the box.",
  },
  {
    icon: "🌡️",
    title: "Temperature Control",
    desc: "Keep products fresh and chilled. Smart cooling systems maintain optimal conditions automatically.",
  },
  {
    icon: "🎯",
    title: "Full Business Support",
    desc: "Business registration help, contract templates, location selection — we set you up for success.",
  },
];

const reasons = [
  { num: "700+", label: "Units Installed" },
  { num: "6", label: "Countries" },
  { num: "24/7", label: "Payment Processing" },
  { num: "1°C", label: "Cooling Capability" },
];

export default function HomePage() {
  return (
    <div className="page-bg">
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGlow1} />
          <div className={styles.heroGlow2} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <div className="badge">🇨🇦 Ontario, Canada</div>
            <h1 className={styles.heroHeadline}>
              Smart Vending Machines<br />
              <span className="text-yellow">Built for Business</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Premium protein shake, milkshake, and snack vending machines for gyms, offices, and high-traffic locations across Ontario. Start earning on day one.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-primary btn-lg" id="hero-cta-primary">
                Get a Free Quote
              </Link>
              <Link href="/products" className="btn btn-secondary btn-lg" id="hero-cta-secondary">
                Explore Machines
              </Link>
            </div>
            <div className={styles.heroStats}>
              {reasons.map((r) => (
                <div key={r.num} className={styles.heroStat}>
                  <span className={styles.heroStatNum}>{r.num}</span>
                  <span className={styles.heroStatLabel}>{r.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/products/hero-machine.png"
                alt="FuelLocker smart vending machine"
                width={480}
                height={580}
                priority
                className={styles.heroMachineImg}
              />
              <div className={styles.floatingBadge1}>
                <span>⚡</span>
                <span>Live Revenue</span>
              </div>
              <div className={styles.floatingBadge2}>
                <span>💳</span>
                <span>Tap to Pay</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroScrollHint}>
          <span>Discover Our Machines</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* Why FuelLocker */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <span className="section-label">Why FuelLocker</span>
            <h2>More Than a Vending Machine</h2>
            <p style={{ maxWidth: "580px", margin: "16px auto 0" }}>
              We provide the complete package — premium machines, business setup support, remote management tools, and ongoing tech support for Ontario businesses.
            </p>
          </div>
          <div className="grid-3">
            {benefits.map((b) => (
              <div key={b.title} className={`card ${styles.benefitCard}`}>
                <div className="feature-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products showcase */}
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <span className="section-label">Our Machines</span>
            <h2>Five Machines, Endless Opportunity</h2>
            <p style={{ maxWidth: "560px", margin: "16px auto 0" }}>
              From protein shake dispensers to milkshake machines — we have the right vending solution for your location.
            </p>
          </div>
          <div className={styles.productGrid}>
            {products.map((p, i) => (
              <Link key={p.href} href={p.href} className={`card ${styles.productCard} ${i === 0 ? styles.productCardFeatured : ""}`} id={`product-card-${p.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className={styles.productCardBadge}>{p.badge}</div>
                <div className={styles.productCardIcon}>{p.icon}</div>
                <h3 className={styles.productCardName}>{p.name}</h3>
                <p className={styles.productCardTagline}>{p.tagline}</p>
                <p className={styles.productCardDesc}>{p.desc}</p>
                <div className={styles.productCardSpecs}>
                  <span className={styles.productCardSpec}>📦 {p.capacity}</span>
                  <span className={styles.productCardSpec}>🖥️ {p.display}</span>
                </div>
                <div className={styles.productCardCta}>
                  Learn More <span>→</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/products" className="btn btn-outline-yellow btn-lg" id="view-all-products">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={`section ${styles.howItWorks}`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <span className="section-label">How It Works</span>
            <h2>Up & Earning in 4 Simple Steps</h2>
          </div>
          <div className="grid-4">
            {[
              { step: "01", title: "Choose Your Machine", desc: "Pick the right vending machine for your location and customer base." },
              { step: "02", title: "We Handle Setup", desc: "Fast delivery and installation. Business registration help included." },
              { step: "03", title: "Manage Remotely", desc: "Monitor inventory, sales, and performance from anywhere in Ontario." },
              { step: "04", title: "Earn 24/7", desc: "Your machine sells while you sleep. Revenue from day one." },
            ].map((s) => (
              <div key={s.step} className={styles.stepCard}>
                <div className={styles.stepNum}>{s.step}</div>
                <h4>{s.title}</h4>
                <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaBannerInner}>
            <div>
              <h2>Ready to Grow Your Business?</h2>
              <p>Join hundreds of Ontario business owners earning passive income with FuelLocker vending machines.</p>
            </div>
            <div className={styles.ctaBannerActions}>
              <Link href="/contact" className="btn btn-primary btn-lg" id="cta-banner-btn">
                Get a Free Quote
              </Link>
              <Link href="/products" className="btn btn-secondary btn-lg" id="cta-banner-products">
                Browse Machines
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
