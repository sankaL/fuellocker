"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { Store, CupSoda, Dumbbell, GlassWater, IceCreamCone, Zap } from "lucide-react";

const products = [
  { href: "/products/shaker-prime", label: "Shaker Prime", icon: <Store size={18} />, tagline: "Snacks & Beverages" },
  { href: "/products/shaker-touch-2", label: "Shaker Touch 2", icon: <CupSoda size={18} />, tagline: "Protein Shakes" },
  { href: "/products/shaker-s", label: "Shaker S", icon: <Dumbbell size={18} />, tagline: "Compact Protein" },
  { href: "/products/milkshaker", label: "MilkShaker", icon: <GlassWater size={18} />, tagline: "Fresh Milkshakes" },
  { href: "/products/milkshaker-s", label: "MilkShaker S", icon: <IceCreamCone size={18} />, tagline: "Compact Milkshake" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProductsOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>
            <Zap size={24} />
          </span>
          <span className={styles.logoText}>
            Fuel <span className={styles.logoAccent}>Locker</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <Link href="/" className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}>
            Home
          </Link>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className={`${styles.navLink} ${styles.dropdownTrigger} ${pathname.startsWith("/products") ? styles.active : ""}`}
            >
              Products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>

            <div className={`${styles.dropdownMenu} ${productsOpen ? styles.dropdownOpen : ""}`}>
              <div className={styles.dropdownHeader}>
                <span>Our Machines</span>
                <Link href="/products" className={styles.viewAll}>View All →</Link>
              </div>
              {products.map((p) => (
                <Link key={p.href} href={p.href} className={styles.dropdownItem}>
                  <span className={styles.dropdownIcon}>{p.icon}</span>
                  <span>
                    <span className={styles.dropdownItemLabel}>{p.label}</span>
                    <span className={styles.dropdownItemTagline}>{p.tagline}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className={`${styles.navLink} ${pathname === "/contact" ? styles.active : ""}`}>
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <div className={styles.headerActions}>
          <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`} id="header-cta">
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          id="mobile-menu-toggle"
          aria-label="Toggle mobile menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <Link href="/" className={styles.mobileNavLink}>Home</Link>
        <Link href="/products" className={styles.mobileNavLink}>All Products</Link>
        <div className={styles.mobileDivider}>Machines</div>
        {products.map((p) => (
          <Link key={p.href} href={p.href} className={styles.mobileNavLink}>
            {p.icon} {p.label}
          </Link>
        ))}
        <Link href="/contact" className={styles.mobileNavLink}>Contact Us</Link>
        <Link href="/contact" className={`btn btn-primary ${styles.mobileCtaBtn}`} id="mobile-header-cta">
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
