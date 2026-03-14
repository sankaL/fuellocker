import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../product.module.css";
import { GlassWater, Zap, IceCreamCone, Star, CreditCard, FlaskConical, Snowflake, MousePointerClick, Package, Store, CupSoda, Dumbbell, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "MilkShaker - Fresh Milkshake Vending Machine",
  description: "MilkShaker: 250+ milkshake options including Strawberry Dream, Chocolate Bliss, Mango Burst and more. Premium milkshake vending machine for Ontario businesses.",
};

const features = [
  { icon: <GlassWater size={32} className="text-yellow" />, title: "Fresh Milkshakes on Demand", desc: "Countertop vending machine for preparing premium milkshakes and carbonated drinks - fresh every time." },
  { icon: <Zap size={32} className="text-yellow" />, title: "16,000 RPM Mixers", desc: "Four ultra-powerful mixers ensure the perfect creamy, airy milkshake texture every single time." },
  { icon: <IceCreamCone size={32} className="text-yellow" />, title: "250+ Drink Options", desc: "Eight large-capacity containers - over 250 milkshake combinations available." },
  { icon: <Star size={32} className="text-yellow" />, title: "11 Signature Milkshake Flavors", desc: "Strawberry, Chocolate, Banana, Vanilla, Oreo, Mango, Coconut, Cherry, Lemon Lime, Rocky Road, Pistachio." },
  { icon: <CreditCard size={32} className="text-yellow" />, title: "24/7 Payment Processing", desc: "Supports contactless payments, subscriptions, and QR code transactions anytime." },
  { icon: <FlaskConical size={32} className="text-yellow" />, title: "Syrup-Based Options", desc: "Add variety with syrup-based milkshake flavors, powered by three peristaltic pumps." },
  { icon: <Snowflake size={32} className="text-yellow" />, title: "Cooling to 1°C", desc: "Energy-efficient or compressor-based cooling keeps beverages perfectly chilled." },
  { icon: <MousePointerClick size={32} className="text-yellow" />, title: "Auto Cup Dispenser", desc: "Hands-free, clean serving - the machine handles everything automatically." },
  { icon: <Package size={32} className="text-yellow" />, title: "Compact & Portable", desc: "Weighing just 37 kg - easily relocate to find the best-selling spot for maximum revenue." },
];

const specs = [
  { label: "Dimensions (H/W/D)", value: "1800 / 730 / 600 mm" },
  { label: "Weight", value: "220 lbs" },
  { label: "Power Supply", value: "220–230 V" },
  { label: "Power Consumption", value: "35 W / up to 200 W" },
  { label: "Display Size", value: '32" IPS Touchscreen' },
  { label: "Display Resolution", value: "1920 × 1080" },
  { label: "Brightness", value: "300 cd/m²" },
  { label: "Milkshake Containers", value: "8 × 2 kg each" },
  { label: "Mixers", value: "4 × 16,000 RPM" },
  { label: "Cooling", value: "Down to 1°C" },
  { label: "Processor", value: "4.2 GHz" },
  { label: "RAM", value: "8 GB" },
];

const flavors = [
  { icon: <Star size={24} className="text-yellow" />, name: "Strawberry Dream", desc: "A creamy milkshake with a rich strawberry flavor and refreshing sweetness." },
  { icon: <Star size={24} className="text-yellow" />, name: "Chocolate Bliss", desc: "Smooth and indulgent, with deep cocoa notes and a silky texture." },
  { icon: <Star size={24} className="text-yellow" />, name: "Banana Paradise", desc: "Light and fruity, featuring the natural sweetness of ripe bananas." },
  { icon: <Star size={24} className="text-yellow" />, name: "Vanilla Classic", desc: "A timeless choice with a delicate vanilla aroma and creamy consistency." },
  { icon: <Star size={24} className="text-yellow" />, name: "Oreo Crunch", desc: "Smooth and creamy with real chocolate cookie pieces in every sip." },
  { icon: <Star size={24} className="text-yellow" />, name: "Mango Burst", desc: "A bright and juicy mango flavor that brings tropical vibes." },
  { icon: <Star size={24} className="text-yellow" />, name: "Coconut Chill", desc: "Refreshing coconut taste with a silky, tropical finish." },
  { icon: <Star size={24} className="text-yellow" />, name: "Cherry Pop", desc: "Sweet cherry flavor with a subtle tart kick - bold and fruity." },
  { icon: <Star size={24} className="text-yellow" />, name: "Lemon Lime Zing", desc: "Zesty lemon and lime combo for a crisp, citrusy refreshment." },
  { icon: <Star size={24} className="text-yellow" />, name: "Rocky Road Rush", desc: "Rich chocolate with hints of nut and marshmallow - indulgent and fun." },
  { icon: <Star size={24} className="text-yellow" />, name: "Pistachio Cream", desc: "Delicate pistachio flavor blended into a smooth, creamy base." },
];

const related = [
  { href: "/products/milkshaker-s", icon: <IceCreamCone size={24} className="text-yellow" />, name: "MilkShaker S", tagline: "Compact Milkshake" },
  { href: "/products/shaker-prime", icon: <Store size={24} className="text-yellow" />, name: "Shaker Prime", tagline: "Snacks & Beverages" },
  { href: "/products/shaker-touch-2", icon: <CupSoda size={24} className="text-yellow" />, name: "Shaker Touch 2", tagline: "Protein Shakes" },
  { href: "/products/shaker-s", icon: <Dumbbell size={24} className="text-yellow" />, name: "Shaker S", tagline: "Compact Protein" },
];

export default function MilkShakerPage() {
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
                <span>MilkShaker</span>
              </nav>
              <div className="badge">🥛 Fresh Milkshakes</div>
              <h1 className={styles.heroTitle} style={{ marginTop: "16px" }}>
                MilkShaker:<br />
                <span className="text-yellow">Fresh Milkshakes & Drinks on Demand</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Boost revenue, delight your clients, and keep them coming back. Premium milkshakes in 11 signature flavors - served fresh, every time, 24/7.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact?machine=MilkShaker" className="btn btn-primary btn-lg" id="milkshaker-cta">
                  Get a Quote
                </Link>
                <Link href="#flavors" className="btn btn-secondary btn-lg">See Flavors</Link>
              </div>
            </div>
            <div className={styles.heroImageArea}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/images/products/milkshaker.png"
                  alt="MilkShaker fresh milkshake vending machine"
                  width={420}
                  height={520}
                  className={styles.heroImg}
                  priority
                />
                <div className={styles.heroSpecBadges}>
                  <div className={styles.heroSpecBadge}>
                    <span className={styles.heroSpecBadgeNum}>250+</span>
                    <span className={styles.heroSpecBadgeLabel}>Options</span>
                  </div>
                  <div className={styles.heroSpecBadge}>
                    <span className={styles.heroSpecBadgeNum}>11</span>
                    <span className={styles.heroSpecBadgeLabel}>Flavors</span>
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
              <div className={styles.overviewNum}>11</div>
              <div className={styles.overviewLabel}>Milkshake Flavors</div>
            </div>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>16K</div>
              <div className={styles.overviewLabel}>RPM Mixers</div>
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
              <span className="section-label">About MilkShaker</span>
              <h2>The Ultimate Milkshake Experience</h2>
              <p style={{ marginTop: "20px" }}>
                MilkShaker is a countertop vending machine for preparing milkshakes and carbonated drinks. It attracts attention and causes a desire to buy - the simple and clear interface is convenient for everyone.
              </p>
              <p style={{ marginTop: "16px" }}>
                Branded cups and supplies are available at special rates. Weighing just 37 kg, easily relocate the machine to find the best-selling spot for maximum revenue.
              </p>
              <p style={{ marginTop: "16px" }}>
                When the machine is powered on, an interactive setup tutorial begins automatically. Full business support included - registration help, contract templates, and location selection.
              </p>
            </div>
            <div className={styles.sectionImage}>
              <Image
                src="/images/products/milkshaker-2.png"
                alt="MilkShaker showing its interface and cups"
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
          <h2>Why MilkShaker Works Better</h2>
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

      {/* Flavors */}
      <section id="flavors" className="section" style={{ background: "rgba(0,0,0,0.15)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "48px" }}>
            <span className="section-label">Premium Ingredients</span>
            <h2>11 Signature Milkshake Flavors</h2>
            <p style={{ maxWidth: "480px", margin: "12px auto 0" }}>Every flavor crafted for maximum enjoyment. Branded cups and supplies available at special rates.</p>
          </div>
          <div className={styles.flavorsGrid}>
            {flavors.map((f) => (
              <div key={f.name} className={styles.flavorCard}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  {f.icon}
                  <div className={styles.flavorName} style={{ margin: 0 }}>{f.name}</div>
                </div>
                <p className={styles.flavorDesc}>{f.desc}</p>
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
              <h3 style={{ marginTop: "8px" }}>Built for Precision</h3>
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { icon: <FlaskConical size={24} className="text-yellow" />, t: "Ingredient Dispensers", d: "Precision valves, modular containers that can be serviced independently. Sealed connections prevent leaks and product loss." },
                  { icon: <Droplets size={24} className="text-yellow" />, t: "Water & Pump System", d: "Compatible with bottled or direct water connection. Pumps and filters maintain stable pressure and clean liquid flow." },
                  { icon: <IceCreamCone size={24} className="text-yellow" />, t: "Auto Cup Dispenser", d: "Hands-free, clean serving every time. The machine automatically dispenses cups and prepares your milkshake." },
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
              <h2>Bring Fresh Milkshakes to Your Location</h2>
              <p style={{ color: "var(--color-text-muted)", marginTop: "8px" }}>Get a personalized quote for your Ontario location.</p>
            </div>
            <div className={styles.ctaStripActions}>
              <Link href="/contact?machine=MilkShaker" className="btn btn-primary btn-lg" id="milkshaker-bottom-cta">
                Get a Quote
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
              <Link key={r.href} href={r.href} className={styles.relatedCard} id={`related-ms-${r.name.toLowerCase().replace(/\s+/g, "-")}`}>
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
