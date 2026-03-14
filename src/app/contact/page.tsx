import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Fuel Locker. Request a free quote for vending machines in Ontario, Canada. We'll respond within 1-2 business days.",
};

const infoCards = [
  { icon: <Mail size={32} className="text-yellow" />, title: "Email Us", value: "fuellockervending@gmail.com", link: "mailto:fuellockervending@gmail.com" },
  { icon: <MapPin size={32} className="text-yellow" />, title: "Location", value: "Ontario, Canada", link: null },
  { icon: <Clock size={32} className="text-yellow" />, title: "Response Time", value: "Within 1-2 business days", link: null },
];

export default function ContactPage() {
  return (
    <div className="page-bg">
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className="section-label">Get in Touch</span>
          <h1>Let&apos;s Build Your Vending Business</h1>
          <p className={styles.heroSubtitle}>
            Ready to place a premium vending machine at your Ontario location? Fill in the form and our team will craft a custom proposal for your business.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className={styles.layout}>
            {/* Form */}
            <div className={styles.formSide}>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Request a Free Quote</h2>
                <p className={styles.formSubtitle}>Tell us about your location and we&apos;ll find the perfect machine for you.</p>
                <ContactForm />
              </div>
            </div>

            {/* Info sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.infoCards}>
                {infoCards.map((c) => (
                  <div key={c.title} className={`card ${styles.infoCard}`}>
                    <div className="feature-icon" style={{ marginBottom: "12px" }}>{c.icon}</div>
                    <div className={styles.infoCardTitle}>{c.title}</div>
                    {c.link
                      ? <a href={c.link} className={styles.infoCardValue}>{c.value}</a>
                      : <div className={styles.infoCardValue}>{c.value}</div>
                    }
                  </div>
                ))}
              </div>

              <div className={`card ${styles.whyCard}`}>
                <h3 className={styles.whyTitle}>Why Fuel Locker?</h3>
                <ul className={styles.whyList}>
                  {[
                    "Fast delivery & installation",
                    "Business registration support",
                    "Remote management tools",
                    "Full technical support",
                    "Contract templates included",
                    "Revenue from day one",
                  ].map((item) => (
                    <li key={item} className={styles.whyItem}>
                      <span className={styles.tick}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.locationCard}>
                <div className={styles.locationCardInner}>
                  <div className={styles.locationIcon}><MapPin size={32} className="text-yellow" /></div>
                  <div>
                    <div className={styles.locationTitle}>Serving All of Ontario</div>
                    <div className={styles.locationSub}>From Toronto to Ottawa, Hamilton to London - we cover Ontario.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
