import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Store, CupSoda, Dumbbell, GlassWater, IceCreamCone, 
  DollarSign, Smartphone, Lock, CreditCard, Thermometer, Target, 
  Zap, ArrowRight, Package, Monitor, MapPin
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fuel Locker | Smart Vending Machines for Ontario Businesses",
  description: "Ontario's premier smart vending machine provider. Protein shakes, milkshakes, and snack vending machines for gyms, offices, and high-traffic locations.",
};

const products = [
  {
    href: "/products/shaker-prime",
    icon: <Store className="icon-xl text-yellow" />,
    name: "Shaker Prime",
    tagline: "Snacks. Sales. Success.",
    desc: "Floor-standing smart vending for snacks & beverages with age verification, temperature control & remote management.",
    capacity: "60+ items",
    display: '15.6" HD Display',
    badge: "Most Popular",
  },
  {
    href: "/products/shaker-touch-2",
    icon: <CupSoda className="icon-xl text-yellow" />,
    name: "Shaker Touch 2",
    tagline: "Next-Gen Protein Machine",
    desc: "250+ drinks with 8 protein flavors. 16,000 RPM mixers for perfect shake consistency every time.",
    capacity: "250+ drinks",
    display: '32" Touchscreen',
    badge: "Best Seller",
  },
  {
    href: "/products/shaker-s",
    icon: <Dumbbell className="icon-xl text-yellow" />,
    name: "Shaker S",
    tagline: "Small Size, Big Performance",
    desc: "Compact countertop protein vending machine - 130+ drinks, 4 protein flavors. Fits anywhere.",
    capacity: "130+ drinks",
    display: '15" Display',
    badge: "Compact",
  },
  {
    href: "/products/milkshaker",
    icon: <GlassWater className="icon-xl text-yellow" />,
    name: "MilkShaker",
    tagline: "Fresh Milkshakes on Demand",
    desc: "Premium milkshake machine with 250+ options. Strawberry, Chocolate, Mango, and more - fresh every time.",
    capacity: "250+ drinks",
    display: '32" Touchscreen',
    badge: "Milkshakes",
  },
  {
    href: "/products/milkshaker-s",
    icon: <IceCreamCone className="icon-xl text-yellow" />,
    name: "MilkShaker S",
    tagline: "Compact Milkshake Power",
    desc: "The compact version of our milkshake machine - 130+ options. Easy to relocate to find the best spot.",
    capacity: "130+ drinks",
    display: '15" Display',
    badge: "Compact",
  },
];

const benefits = [
  {
    icon: <DollarSign className="icon-lg text-yellow" />,
    title: "Revenue Share Partnership",
    desc: "Earn passive income from day one. We share a percentage of the revenue with zero investment from your end.",
  },
  {
    icon: <Smartphone className="icon-lg text-yellow" />,
    title: "Zero-Hassle Operation",
    desc: "We handle delivery, installation, daily stocking, and maintenance. You just provide the space.",
  },
  {
    icon: <Lock className="icon-lg text-yellow" />,
    title: "Keyless Entry",
    desc: "Electronic lock - our team manages restocking and servicing seamlessly, without needing your keys.",
  },
  {
    icon: <CreditCard className="icon-lg text-yellow" />,
    title: "Contactless Payments",
    desc: "Tap-to-pay and mobile payments supported out of the box, ensuring your customers always have a way to pay.",
  },
  {
    icon: <Thermometer className="icon-lg text-yellow" />,
    title: "Fresh, Healthy Products",
    desc: "From 16,000 RPM protein shakes to fresh snacks, we provide high-quality items your customers will love.",
  },
  {
    icon: <Target className="icon-lg text-yellow" />,
    title: "LCD Screen Marketing",
    desc: "Help market your own products, services, or gym schedules on our machine's interactive HD displays.",
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
            <div className="badge" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}><MapPin size={14} className="text-yellow" /> Ontario, Canada</div>
            <h1 className={styles.heroHeadline}>
              Premium vending machines<br />
              <span className="text-yellow">for your space</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Bring premium protein shakes, milkshakes, and snacks to your Ontario gym, office, or facility. Partner with us, share the revenue, and let us handle all the work.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-primary btn-lg" id="hero-cta-primary">
                Partner With Us
              </Link>
              <Link href="/products" className="btn btn-secondary btn-lg" id="hero-cta-secondary">
                View Our Machines
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
                alt="Fuel Locker smart vending machine"
                width={480}
                height={580}
                priority
                className={styles.heroMachineImg}
              />
              <div className={styles.floatingBadge1}>
                <Zap size={18} className="text-yellow" />
                <span>Live Revenue</span>
              </div>
              <div className={styles.floatingBadge2}>
                <CreditCard size={18} className="text-yellow" />
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

      {/* Why Fuel Locker */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <span className="section-label">Why Fuel Locker</span>
            <h2>More Than a Machine - A True Partnership</h2>
            <p style={{ maxWidth: "580px", margin: "16px auto 0" }}>
              We provide the complete turnkey solution. A premium machine, zero setup costs, zero maintenance, and a built-in marketing platform for your own services.
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
              From protein shake dispensers to milkshake machines - we have the right vending solution for your location.
            </p>
          </div>
          <div className={styles.productGrid}>
            {products.map((p, i) => (
              <Link key={p.href} href={p.href} className={`card ${styles.productCard} ${i === 0 ? styles.productCardFeatured : ""}`} id={`product-card-${p.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className={styles.productCardBadge}>{p.badge}</div>
                <div className={styles.productCardIcon}>{p.icon}</div>
                <div className={styles.productCardContent}>
                  <h3 className={styles.productCardName}>{p.name}</h3>
                  <p className={styles.productCardTagline}>{p.tagline}</p>
                  <p className={styles.productCardDesc}>{p.desc}</p>
                  <div className={styles.productCardSpecs}>
                    <span className={styles.productCardSpec}><Package size={14} /> {p.capacity}</span>
                    <span className={styles.productCardSpec}><Monitor size={14} /> {p.display}</span>
                  </div>
                  <div className={styles.productCardCta}>
                    Learn More <ArrowRight size={16} />
                  </div>
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
              { step: "01", title: "Assess Your Space", desc: "We work with you to find the perfect location and machine for your customers." },
              { step: "02", title: "Zero-Cost Install", desc: "We deliver and install the machine entirely free of charge." },
              { step: "03", title: "We Handle The Rest", desc: "We restock, maintain, and monitor the machine so you don't have to lift a finger." },
              { step: "04", title: "Share The Revenue", desc: "You earn a hands-off profit share every single month as your customers enjoy fresh products." },
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
              <h2>Ready to Upgrade Your Space?</h2>
              <p>Partner with us to provide fresh products to your customers and earn passive income with zero hassle.</p>
            </div>
            <div className={styles.ctaBannerActions}>
              <Link href="/contact" className="btn btn-primary btn-lg" id="cta-banner-btn">
                Partner With Us
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
