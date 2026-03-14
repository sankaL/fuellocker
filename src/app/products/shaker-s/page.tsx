import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../product.module.css";
import { Dumbbell, Zap, CupSoda, Package, CreditCard, FlaskConical, Snowflake, Lightbulb, Lock, Store, GlassWater, IceCreamCone, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Shaker S - Compact Protein Shake Vending Machine",
  description: "Shaker S: A compact countertop protein shake vending machine. 130+ drinks, 4 protein flavors, 16,000 RPM mixers. Perfect for gyms and offices in Ontario.",
};

const features = [
  { icon: <Dumbbell size={32} className="text-yellow" />, title: "Designed for Gyms", desc: "Built for fitness environments - compact, reliable, loved by gym members and office workers alike." },
  { icon: <Zap size={32} className="text-yellow" />, title: "16,000 RPM Mixers", desc: "Two ultra-powerful mixers ensure the perfect airy shake consistency every single time." },
  { icon: <CupSoda size={32} className="text-yellow" />, title: "130+ Drink Options", desc: "Four large-capacity containers for protein powder - 130+ drink combinations available." },
  { icon: <Package size={32} className="text-yellow" />, title: "Countertop Design", desc: "Weighing just 80 lbs, Shaker S fits in gyms, offices, and co-working spaces anywhere." },
  { icon: <CreditCard size={32} className="text-yellow" />, title: "Flexible Payments", desc: "Accepts contactless payments, fitness memberships, and subscription-based plans anytime." },
  { icon: <FlaskConical size={32} className="text-yellow" />, title: "Syrup-Based Flavors", desc: "Three additional drink flavors from syrups - BCAA, L-Carnitine, and Isotonic." },
  { icon: <Snowflake size={32} className="text-yellow" />, title: "Cooling to 1°C", desc: "Energy-efficient or compressor-based cooling keeps beverages refreshingly chilled." },
  { icon: <Lightbulb size={32} className="text-yellow" />, title: "LED Lighting", desc: "Modern look and easy navigation - attracts attention and encourages purchases." },
  { icon: <Lock size={32} className="text-yellow" />, title: "Electronic Lock", desc: "Keyless entry for operators - create or remove access digitally. No keys to lose." },
];

const specs = [
  { label: "Dimensions (H/W/D)", value: "800 / 390 / 420 mm" },
  { label: "Type", value: "Countertop" },
  { label: "Weight", value: "80 lbs" },
  { label: "Power Supply", value: "110–220 V" },
  { label: "Power Consumption", value: "35 W / up to 200 W" },
  { label: "Display Size", value: '15" IPS' },
  { label: "Display Resolution", value: "1920 × 1080" },
  { label: "Brightness", value: "300 cd/m²" },
  { label: "Protein Containers", value: "4 × 1 kg each" },
  { label: "Mixers", value: "2 × 16,000 RPM" },
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
  { href: "/products/shaker-touch-2", icon: <CupSoda size={24} className="text-yellow" />, name: "Shaker Touch 2", tagline: "Full-Size Protein" },
  { href: "/products/milkshaker", icon: <GlassWater size={24} className="text-yellow" />, name: "MilkShaker", tagline: "Fresh Milkshakes" },
  { href: "/products/milkshaker-s", icon: <IceCreamCone size={24} className="text-yellow" />, name: "MilkShaker S", tagline: "Compact Milkshake" },
];

export default function ShakerSPage() {
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
                <span>Shaker S</span>
              </nav>
              <div className="badge">💪 Compact Protein</div>
              <h1 className={styles.heroTitle} style={{ marginTop: "16px" }}>
                Shaker S:<br />
                <span className="text-yellow">Small Size, Big Performance</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Boost revenue, delight your clients, and keep them coming back. A compact countertop protein shake machine - 130+ drinks, fits anywhere. Just 80 lbs.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact?machine=Shaker+S" className="btn btn-primary btn-lg" id="shaker-s-cta">
                  Partner With Us
                </Link>
                <Link href="#specs" className="btn btn-secondary btn-lg">View Specs</Link>
              </div>
            </div>
            <div className={styles.heroImageArea}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/images/products/shaker-s.png"
                  alt="Shaker S compact protein shake vending machine"
                  width={360}
                  height={450}
                  className={styles.heroImg}
                  priority
                />
                <div className={styles.heroSpecBadges}>
                  <div className={styles.heroSpecBadge}>
                    <span className={styles.heroSpecBadgeNum}>130+</span>
                    <span className={styles.heroSpecBadgeLabel}>Drinks</span>
                  </div>
                  <div className={styles.heroSpecBadge}>
                    <span className={styles.heroSpecBadgeNum}>80 lbs</span>
                    <span className={styles.heroSpecBadgeLabel}>Lightweight</span>
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
              <div className={styles.overviewNum}>130+</div>
              <div className={styles.overviewLabel}>Drink Options</div>
            </div>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>16K</div>
              <div className={styles.overviewLabel}>RPM Mixers</div>
            </div>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>4</div>
              <div className={styles.overviewLabel}>Protein Flavors</div>
            </div>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>80 lbs</div>
              <div className={styles.overviewLabel}>Lightweight</div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.sectionGrid}>
            <div>
              <span className="section-label">About Shaker S</span>
              <h2>Maximum Protein. Minimum Footprint.</h2>
              <p style={{ marginTop: "20px" }}>
                Partner with us to place the Shaker S in your gym or office. It efficiently prepares protein, BCAA, and gainer shakes with high-speed 16,000 RPM mixers for a perfect texture.
              </p>
              <p style={{ marginTop: "16px" }}>
                Weighing just 80 lbs, Shaker S fits in gyms, offices, and co-working spaces - offering maximum flexibility and minimal space requirements. Place it on a counter and start earning.
              </p>
              <p style={{ marginTop: "16px" }}>
                Advanced design, flexible setup, and high product quality - everything to boost engagement and increase daily usage.
              </p>
            </div>
            <div className={styles.sectionImage}>
              <Image
                src="/images/products/shaker-s-2.png"
                alt="Shaker S compact machine in use"
                width={420}
                height={360}
                style={{ borderRadius: "16px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <span className="section-label">Smart Features</span>
          <h2>Why Shaker S Works Better</h2>
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

      <section className="section" style={{ background: "rgba(0,0,0,0.15)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "48px" }}>
            <span className="section-label">Available Supplements</span>
            <h2>Premium Protein Blends</h2>
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
              <span className="section-label">Easy Operation</span>
              <h3 style={{ marginTop: "8px" }}>Built for Operators</h3>
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { icon: <Package size={24} className="text-yellow" />, t: "Modular Containers", d: "Four large-capacity containers for protein powder. Each module can be serviced independently - minimal downtime." },
                  { icon: <Droplets size={24} className="text-yellow" />, t: "Flexible Water Supply", d: "Compatible with bottled or direct water connection. Easy service access for quick maintenance of tanks." },
                  { icon: <CreditCard size={24} className="text-yellow" />, t: "Turnkey Partnership", d: "Zero setup costs, full maintenance, and a hands-off revenue share from day one." },
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
              <h2>Ready for a Shaker S Partnership?</h2>
              <p style={{ color: "var(--color-text-muted)", marginTop: "8px" }}>Perfect for countertops across Ontario - gyms, offices, studios, and more.</p>
            </div>
            <div className={styles.ctaStripActions}>
              <Link href="/contact?machine=Shaker+S" className="btn btn-primary btn-lg" id="shaker-s-bottom-cta">
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
              <Link key={r.href} href={r.href} className={styles.relatedCard} id={`related-ss-${r.name.toLowerCase().replace(/\s+/g, "-")}`}>
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
