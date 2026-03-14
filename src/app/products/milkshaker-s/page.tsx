import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../product.module.css";

export const metadata: Metadata = {
  title: "MilkShaker S — Compact Milkshake Vending Machine",
  description: "MilkShaker S: A compact countertop milkshake vending machine. 130+ options, 11 flavors, 16,000 RPM mixers. Easy to relocate — find your best spot in Ontario.",
};

const features = [
  { icon: "🍦", title: "Compact Milkshake Power", desc: "Advanced design in a countertop format — everything to boost engagement and increase daily usage." },
  { icon: "⚡", title: "16,000 RPM Mixers", desc: "Two ultra-powerful mixers spinning at 16,000 RPM ensure the perfect texture for every shake." },
  { icon: "🥛", title: "130+ Drink Options", desc: "Four large-capacity containers — 130+ milkshake combinations in a compact footprint." },
  { icon: "🍓", title: "11 Signature Flavors", desc: "Strawberry, Chocolate, Banana, Vanilla, Oreo, Mango, Coconut, Cherry, Lemon Lime, Rocky Road, Pistachio." },
  { icon: "💳", title: "24/7 Payment Processing", desc: "Supports contactless payments, subscriptions, and QR code transactions anytime." },
  { icon: "🧪", title: "Syrup-Based Options", desc: "Three additional milkshake flavors from syrups — add variety powered by three peristaltic pumps." },
  { icon: "❄️", title: "Cooling to 1°C", desc: "Energy-efficient or compressor-based cooling keeps beverages perfectly chilled." },
  { icon: "🖱️", title: "Auto Cup Dispenser", desc: "Hands-free, clean serving every time. Simple and clear interface for all ages." },
  { icon: "🚚", title: "Easy to Relocate", desc: "Weighing just 37 kg — easily move the machine to find the best-selling spot." },
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
  { label: "Milkshake Containers", value: "4 × 1 kg each" },
  { label: "Mixers", value: "2 × 16,000 RPM" },
  { label: "Cooling", value: "Down to 1°C" },
  { label: "Processor", value: "4.2 GHz" },
  { label: "RAM", value: "8 GB" },
];

const flavors = [
  { name: "🍓 Strawberry Dream", desc: "A creamy milkshake with a rich strawberry flavor and refreshing sweetness." },
  { name: "🍫 Chocolate Bliss", desc: "Smooth and indulgent, with deep cocoa notes and a silky texture." },
  { name: "🍌 Banana Paradise", desc: "Light and fruity, featuring the natural sweetness of ripe bananas." },
  { name: "🍦 Vanilla Classic", desc: "A timeless choice with a delicate vanilla aroma and creamy consistency." },
  { name: "🍪 Oreo Crunch", desc: "Smooth and creamy with real chocolate cookie pieces in every sip." },
  { name: "🥭 Mango Burst", desc: "A bright and juicy mango flavor that brings tropical vibes." },
  { name: "🥥 Coconut Chill", desc: "Refreshing coconut taste with a silky, tropical finish." },
  { name: "🍒 Cherry Pop", desc: "Sweet cherry flavor with a subtle tart kick — bold and fruity." },
  { name: "🍋 Lemon Lime Zing", desc: "Zesty lemon and lime combo for a crisp, citrusy refreshment." },
  { name: "🍫 Rocky Road Rush", desc: "Rich chocolate with hints of nut and marshmallow — indulgent and fun." },
  { name: "🌰 Pistachio Cream", desc: "Delicate pistachio flavor blended into a smooth, creamy base." },
];

const related = [
  { href: "/products/milkshaker", icon: "🥛", name: "MilkShaker", tagline: "Full-Size Milkshake" },
  { href: "/products/shaker-prime", icon: "🏪", name: "Shaker Prime", tagline: "Snacks & Beverages" },
  { href: "/products/shaker-touch-2", icon: "🥤", name: "Shaker Touch 2", tagline: "Protein Shakes" },
  { href: "/products/shaker-s", icon: "💪", name: "Shaker S", tagline: "Compact Protein" },
];

export default function MilkShakerSPage() {
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
                <span>MilkShaker S</span>
              </nav>
              <div className="badge">🍦 Compact Milkshake</div>
              <h1 className={styles.heroTitle} style={{ marginTop: "16px" }}>
                MilkShaker S:<br />
                <span className="text-yellow">Small Size, Big Performance</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Boost revenue, delight your clients, and keep them coming back. The compact milkshake vending machine — 130+ options, 11 flavors, 16,000 RPM power. Just 80 lbs.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact?machine=MilkShaker+S" className="btn btn-primary btn-lg" id="milkshaker-s-cta">
                  Get a Quote
                </Link>
                <Link href="#flavors" className="btn btn-secondary btn-lg">See Flavors</Link>
              </div>
            </div>
            <div className={styles.heroImageArea}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/images/products/milkshaker-s.png"
                  alt="MilkShaker S compact milkshake vending machine"
                  width={360}
                  height={450}
                  className={styles.heroImg}
                  priority
                />
                <div className={styles.heroSpecBadges}>
                  <div className={styles.heroSpecBadge}>
                    <span className={styles.heroSpecBadgeNum}>130+</span>
                    <span className={styles.heroSpecBadgeLabel}>Options</span>
                  </div>
                  <div className={styles.heroSpecBadge}>
                    <span className={styles.heroSpecBadgeNum}>80 lbs</span>
                    <span className={styles.heroSpecBadgeLabel}>Portable</span>
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
              <div className={styles.overviewNum}>11</div>
              <div className={styles.overviewLabel}>Milkshake Flavors</div>
            </div>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>16K</div>
              <div className={styles.overviewLabel}>RPM Mixers</div>
            </div>
            <div className={styles.overviewItem}>
              <div className={styles.overviewNum}>80 lbs</div>
              <div className={styles.overviewLabel}>Portable</div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.sectionGrid}>
            <div>
              <span className="section-label">About MilkShaker S</span>
              <h2>Maximum Milkshake. Minimum Footprint.</h2>
              <p style={{ marginTop: "20px" }}>
                MilkShaker S packs the full milkshake experience into a compact countertop format. Powerful mixers spinning at 16,000 RPM ensure the perfect texture for every shake.
              </p>
              <p style={{ marginTop: "16px" }}>
                Weighing just 37 kg, easily relocate the machine to find the best-selling spot. The simple and clear interface is convenient for both children and adults.
              </p>
              <p style={{ marginTop: "16px" }}>
                Advanced design, flexible setup, and high product quality — everything to boost engagement and increase daily usage at your Ontario location.
              </p>
            </div>
            <div className={styles.sectionImage}>
              <Image
                src="/images/products/milkshaker-s-2.png"
                alt="MilkShaker S compact machine in action"
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
          <h2>Why MilkShaker S Works Better</h2>
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

      <section id="flavors" className="section" style={{ background: "rgba(0,0,0,0.15)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "48px" }}>
            <span className="section-label">Premium Ingredients</span>
            <h2>11 Signature Milkshake Flavors</h2>
            <p style={{ maxWidth: "480px", margin: "12px auto 0" }}>All the flavors of the full-size MilkShaker — in a compact machine you can place anywhere.</p>
          </div>
          <div className={styles.flavorsGrid}>
            {flavors.map((f) => (
              <div key={f.name} className={styles.flavorCard}>
                <div className={styles.flavorName}>{f.name}</div>
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
              <span className="section-label">Easy Operation</span>
              <h3 style={{ marginTop: "8px" }}>Built for Operators</h3>
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { icon: "📦", t: "Modular Containers", d: "Four large-capacity containers. Each module serviced independently — minimal downtime, maximum uptime." },
                  { icon: "💧", t: "Flexible Water Supply", d: "Compatible with bottled or direct water connection. Easy service access for quick maintenance." },
                  { icon: "💼", t: "Full Business Support", d: "Business registration help, ready-to-use contract templates, and location selection guidance included." },
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
              <h2>Ready to Add MilkShaker S to Your Location?</h2>
              <p style={{ color: "var(--color-text-muted)", marginTop: "8px" }}>Compact enough for any space, powerful enough to drive serious revenue.</p>
            </div>
            <div className={styles.ctaStripActions}>
              <Link href="/contact?machine=MilkShaker+S" className="btn btn-primary btn-lg" id="milkshaker-s-bottom-cta">
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
              <Link key={r.href} href={r.href} className={styles.relatedCard} id={`related-mss-${r.name.toLowerCase().replace(/\s+/g, "-")}`}>
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
