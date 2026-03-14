import Link from "next/link";
import styles from "./Footer.module.css";
import { Zap, MapPin, Mail } from "lucide-react";

const products = [
  { href: "/products/shaker-prime", label: "Shaker Prime" },
  { href: "/products/shaker-touch-2", label: "Shaker Touch 2" },
  { href: "/products/shaker-s", label: "Shaker S" },
  { href: "/products/milkshaker", label: "MilkShaker" },
  { href: "/products/milkshaker-s", label: "MilkShaker S" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>
                <Zap size={24} />
              </span>
              <span>Fuel <span className={styles.logoAccent}>Locker</span></span>
            </Link>
            <p className={styles.tagline}>
              Ontario&apos;s premier smart vending machine provider. Premium protein shakes, milkshakes, and snacks - available 24/7 for your business.
            </p>
            <div className={styles.location}>
              <MapPin size={18} />
              <span>Ontario, Canada</span>
            </div>
          </div>

          {/* Products */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Our Machines</h4>
            <ul className={styles.linkList}>
              {products.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className={styles.footerLink}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.footerLink}>Home</Link></li>
              <li><Link href="/products" className={styles.footerLink}>Products</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Get in Touch</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Mail size={18} />
                <a href="mailto:fuellockervending@gmail.com" className={styles.footerLink}>fuellockervending@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={18} />
                <span className={styles.contactText}>Ontario, Canada</span>
              </div>
            </div>
            <Link href="/contact" className={`btn btn-primary ${styles.footerCta}`} id="footer-cta">
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} Fuel Locker. All rights reserved. Serving Ontario, Canada.</p>
          <div className={styles.bottomLinks}>
            <span className={styles.bottomLink}>Privacy Policy</span>
            <span className={styles.bottomLink}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
