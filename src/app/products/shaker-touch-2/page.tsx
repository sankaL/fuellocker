import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../product.module.css";
import { Dumbbell, Zap, CupSoda, Leaf, DollarSign, CreditCard, FlaskConical, Snowflake, Smartphone, Droplets, MousePointerClick, Store, GlassWater, IceCreamCone } from "lucide-react";

export const metadata: Metadata = {
  title: "Shaker Touch 2 - Next-Gen Protein Shake Vending Machine",
  description: "Shaker Touch 2: 250+ protein shake drinks, 16,000 RPM mixers, 32\" touchscreen. The ultimate protein vending machine for gyms and offices in Ontario.",
};

const features = [
  { icon: <Dumbbell size={32} className="text-yellow" />, title: "Designed for Gyms", desc: "Engineered for high-traffic fitness environments - durable, reliable, and loved by fitness enthusiasts." },
  { icon: <Zap size={32} className="text-yellow" />, title: "16,000 RPM Mixers", desc: "Two ultra-powerful mixers ensure the perfect airy shake consistency every single time." },
  { icon: <CupSoda size={32} className="text-yellow" />, title: "250+ Drink Options", desc: "Eight large-capacity containers for protein powder - 250+ drink combinations available." },
  { icon: <Leaf size={32} className="text-yellow" />, title: "Eco-Friendly Production", desc: "Sustainable design built with environmentally conscious manufacturing processes." },
  { icon: <DollarSign size={32} className="text-yellow" />, title: "High-Profit Margins", desc: "Premium protein products generate significant revenue at high-traffic gym and office locations." },
  { icon: <CreditCard size={32} className="text-yellow" />, title: "Subscription Payments", desc: "Accepts contactless payments, fitness memberships, and subscription-based plans anytime." },
  { icon: <FlaskConical size={32} className="text-yellow" />, title: "Syrup-Based Flavors", desc: "Three additional drink flavors from syrups - BCAA, L-Carnitine, and Isotonic." },
  { icon: <Snowflake size={32} className="text-yellow" />, title: "Cooling to 1°C", desc: "Energy-efficient or compressor-based cooling keeps beverages refreshingly chilled." },
  { icon: <Smartphone size={32} className="text-yellow" />, title: "Auto Setup Tutorial", desc: "Interactive setup and tutorial on first power-on. No tech support needed - even a child could do it." },
];

const specs = [
  { label: "Dimensions (H/W/D)", value: "1800 / 730 / 600 mm" },
  { label: "Weight", value: "220 lbs" },
  { label: "Power Supply", value: "110–220 V" },
  { label: "Power Consumption", value: "35 W / up to 200 W" },
  { label: "Display Size", value: '32" IPS Touchscreen' },
  { label: "Display Resolution", value: "1920 × 1080" },
  { label: "Brightness", value: "300 cd/m²" },
  { label: "Protein Containers", value: "8 × 2 kg each" },
  { label: "Mixers", value: "4 × 16,000 RPM" },
  { label: "Cooling", value: "Down to 1°C" },
  { label: "Processor", value: "4.2 GHz" },
  { label: "RAM", value: "8 GB" },
];

const supplements = [
  { name: "Whey Protein Shake", desc: "Classic whey for muscle growth & recovery." },
  { name: "Diet Protein Shake", desc: "Low-calorie protein for weight management." },
  { name: "Multi-Protein Shake", desc: "Blend of proteins for sustained energy." },
  { name: "Energy Shake", desc: "Boosts stamina with natural caffeine." },
  { name: "BCAA Shake", desc: "Supports muscle recovery & endurance." },
  { name: "Recovery Shake", desc: "Replenishes nutrients post-workout." },
  { name: "Pre-Training Shake", desc: "Enhances focus & performance." },
  { name: "Vegan Protein Shake", desc: "Plant-based protein for clean nutrition." },
  { name: "L-Carnitine Shake", desc: "Aids fat metabolism & energy production." },
  { name: "Isotonic Shake", desc: "Hydrates & replenishes electrolytes." },
  { name: "Classic Protein Shake", desc: "Everyday protein for balanced nutrition." },
];

const related = [
  { href: "/products/shaker-prime", icon: <Store size={24} className="text-yellow" />, name: "Shaker Prime", tagline: "Snacks & Beverages" },
  { href: "/products/shaker-s", icon: <Dumbbell size={24} className="text-yellow" />, name: "Shaker S", tagline: "Compact Protein" },
  { href: "/products/milkshaker", icon: <GlassWater size={24} className="text-yellow" />, name: "MilkShaker", tagline: "Fresh Milkshakes" },
  { href: "/products/milkshaker-s", icon: <IceCreamCone size={24} className="text-yellow" />, name: "MilkShaker S", tagline: "Compact Milkshake" },
];

export default function ShakerTouch2Page() {
  return (
    <div className="page-bg">
      <section className={styles.productHero}>
        <div className={styles.productHeroBg}><div className={styles.heroGlow} /></div>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <nav className={styles.breadcrumb}>
                <Link href="/">Home</Link><span>/</span>
                <Link href="/products">Products</Link><span>/</span>
                <span>Shaker Touch 2</span>
              </nav>
              <div className="badge">🥤 Protein Shakes</div>
              <h1 className={styles.heroTitle} style={{ marginTop: "16px" }}>
                Shaker Touch 2:<br />
                <span className="text-yellow">Next-Gen Shake Machine</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Boost revenue, delight your clients, and keep them coming back. Self-serve protein shakes with 250+ drink options and ultra-powerful 16,000 RPM mixers.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact?machine=Shaker+Touch+2" className="btn btn-primary btn-lg" id="shaker-touch-2-cta">
                  Partner With Us
                </Link>
                <Link href="#specs" className="btn btn-secondary btn-lg">View Specs</Link>
              </div>
            </div>
            <div className={styles.heroImageArea}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/images/products/shaker-touch-2.png"
                  alt="Shaker Touch 2 protein shake vending machine"
                  width={420}
                  height={520}
                  className={styles.heroImg}
                  priority
                />
                <div className={styles.heroSpecBadges}>
                  <div className={styles.heroSpecBadge}>
                    <span className={styles.heroSpecBadgeNum}>250+</span>
                    <span className={styles.heroSpecBadgeLabel}>Drinks</span>
                  </div>
                  <div className={styles.heroSpecBadge}>
                    <span className={styles.heroSpecBadgeNum}>16K</span>
                    <span className={styles.heroSpecBadgeLabel}>RPM Mixers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.overviewStrip}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>250+</div>
              <div className={styles.overviewLabel}>Drink Options</div>
            </div>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>16K</div>
              <div className={styles.overviewLabel}>RPM Mixers</div>
            </div>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>8</div>
              <div className={styles.overviewLabel}>Protein Flavors</div>
            </div>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>1°C</div>
              <div className={styles.overviewLabel}>Min. Cooling</div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.sectionGrid}>
            <div>
              <span className="section-label">About Shaker Touch 2</span>
              <h2>The Professional Protein Vending Solution</h2>
              <p style={{ marginTop: "20px" }}>
                Partner with us to bring this vending machine to your gym or office. It efficiently prepares protein, BCAA, and gainer shakes, ensuring the perfect texture with high-speed 16,000 RPM mixers.
              </p>
              <p style={{ marginTop: "16px" }}>
                The large 32&quot; touchscreen attracts attention and encourages purchases. Advanced design, flexible setup, and high product quality - everything to boost engagement and increase daily usage.
              </p>
              <p style={{ marginTop: "16px" }}>
                When the machine is powered on for the first time, an interactive setup and tutorial will begin automatically. No tech support needed - even a child could do it.
              </p>
            </div>
            <div className={styles.sectionImage}>
              <Image
                src="/images/products/shaker-touch-2-2.png"
                alt="Shaker Touch 2 in a gym setting"
                width={480}
                height={400}
                style={{ borderRadius: "16px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <span className="section-label">Smart Features</span>
          <h2>Why Shaker Touch 2 Works Better</h2>
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

      {/* Supplements */}
      <section className="section" style={{ background: "rgba(0,0,0,0.15)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "48px" }}>
            <span className="section-label">Available Supplements</span>
            <h2>Premium Protein Blends</h2>
            <p style={{ maxWidth: "480px", margin: "12px auto 0" }}>High-quality, easily dissolvable ingredients for the smoothest blends your customers will love.</p>
          </div>
          <div className={styles.flavorsGrid}>
            {supplements.map((s) => (
              <div key={s.name} className={styles.flavorCard}>
                <div className={styles.flavorName}>{s.name}</div>
                <p className={styles.flavorDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className={`section ${styles.specsSection}`}>
        <div className="container">
          <div className={styles.specsGrid}>
            <div>
              <span className="section-label">Specifications</span>
              <h2>Technical Details</h2>
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
              <h3 style={{ marginTop: "8px" }}>Advanced Components</h3>
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { icon: <FlaskConical size={24} className="text-yellow" />, t: "Ingredient Dispensers", d: "Precision valves, modular containers that can be serviced independently, and sealed connections prevent leaks and product loss." },
                  { icon: <Droplets size={24} className="text-yellow" />, t: "Water & Pump System", d: "Compatible with bottled or direct water connection. Pumps & filters maintain stable pressure and clean liquid flow." },
                  { icon: <MousePointerClick size={24} className="text-yellow" />, t: "Smart Design", d: "Auto cup dispenser for hands-free, clean serving. Touchscreen for quick drink selection. Fast, secure cashless checkout." },
                ].map((item) => (
                  <div key={item.t} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</div>
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

      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaStripInner}>
            <div>
              <h2>Partner With Us for Shaker Touch 2</h2>
              <p style={{ color: "var(--color-text-muted)", marginTop: "8px" }}>Explore a revenue-share partnership for your Ontario location.</p>
            </div>
            <div className={styles.ctaStripActions}>
              <Link href="/contact?machine=Shaker+Touch+2" className="btn btn-primary btn-lg" id="shaker-touch-2-bottom-cta">
                Partner With Us
              </Link>
              <Link href="/products" className="btn btn-secondary">All Machines</Link>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.relatedNav}>
        <div className="container">
          <span className="section-label">Explore More</span>
          <h3 style={{ marginTop: "8px" }}>Other Machines</h3>
          <div className={styles.relatedGrid}>
            {related.map((r) => (
              <Link key={r.href} href={r.href} className={styles.relatedCard} id={`related-st2-${r.name.toLowerCase().replace(/\s+/g, "-")}`}>
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
