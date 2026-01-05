"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { card, pageShell } from "../ui/layoutStyles";

const navLinks = [
  { href: "/settings", label: "Overview" },
  { href: "/settings/compliance", label: "Compliance" },
  { href: "/settings/security", label: "Security" },
  { href: "/settings/sso", label: "Single Sign-On" },
];

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/settings") return pathname === "/settings";
    return pathname.startsWith(href);
  };

  return (
    <main style={pageShell}>
      <header style={{ marginBottom: 24 }}>
        <p style={{ textTransform: "uppercase", letterSpacing: 0.6, fontSize: 12 }}>
          Settings
        </p>
        <h1 style={{ margin: "4px 0 8px", fontSize: 28, fontWeight: 700 }}>
          TradeGPT workspace
        </h1>
        <p style={{ color: "#334155", maxWidth: 640 }}>
          Configure policies, access, and authentication from a single place.
        </p>
      </header>

      <div className="settings-layout-grid" style={{ display: "grid", gap: 24 }}>
        <nav style={{ ...card, padding: 16 }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="settings-nav-link"
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "10px 12px",
                    borderRadius: 8,
                    textDecoration: "none",
                    color: isActive(link.href) ? "#0f172a" : "#0f172a",
                    background: isActive(link.href) ? "#e2e8f0" : "#f8fafc",
                    border: isActive(link.href) ? "1px solid #cbd5e1" : "1px solid #e2e8f0",
                    fontWeight: isActive(link.href) ? 700 : 500,
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section style={{ ...card, padding: 20 }}>
          {children}
        </section>
      </div>
      <style jsx>{`
        .settings-layout-grid {
          grid-template-columns: 1fr;
        }

        .settings-nav-link:hover {
          background: #e2e8f0;
          border-color: #cbd5e1;
        }

        @media (min-width: 900px) {
          .settings-layout-grid {
            grid-template-columns: 220px 1fr;
          }
        }
      `}</style>
    </main>
  );
}
