"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <main
      style={{
        padding: 24,
        fontFamily: "system-ui",
        minHeight: "100vh",
        background: "#f7f9fb",
        color: "#0f172a",
      }}
    >
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

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 24 }}>
        <nav
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 12,
            padding: 16,
            boxShadow: "0 1px 2px rgba(15, 23, 42, 0.06)",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
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

        <section
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 12,
            padding: 20,
            boxShadow: "0 1px 2px rgba(15, 23, 42, 0.06)",
          }}
        >
          {children}
        </section>
      </div>
    </main>
  );
}
