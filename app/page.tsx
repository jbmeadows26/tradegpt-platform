import Link from "next/link";
import { card, dashedPanel, pageShell } from "./ui/layoutStyles";

const links = [
  { href: "/settings", label: "Settings overview" },
  { href: "/settings/compliance", label: "Compliance" },
  { href: "/settings/security", label: "Security" },
  { href: "/settings/sso", label: "Single Sign-On" },
];

const topNavLinks = [
  { href: "/settings", label: "Settings", variant: "primary" as const, external: false },
  {
    href: "https://docs.placeholder.tradegpt",
    label: "Docs",
    variant: "ghost" as const,
    external: true,
  },
  {
    href: "https://status.placeholder.tradegpt",
    label: "Status",
    variant: "ghost" as const,
    external: true,
  },
];

export default function Home() {
  return (
    <main style={pageShell}>
      <section style={{ ...card, maxWidth: 820 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ textTransform: "uppercase", letterSpacing: 0.6, fontSize: 12, margin: 0 }}>
              TradeGPT
            </p>
            <h1 style={{ margin: "4px 0 8px" }}>Platform ✅</h1>
          </div>
          <nav style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {topNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                style={{
                  padding: "8px 12px",
                  borderRadius: 10,
                  textDecoration: "none",
                  background: link.variant === "primary" ? "#0f172a" : "#e2e8f0",
                  color: link.variant === "primary" ? "#fff" : "#0f172a",
                  fontWeight: 600,
                  boxShadow:
                    link.variant === "primary" ? "0 1px 2px rgba(15,23,42,0.12)" : "none",
                  border: link.variant === "primary" ? "none" : "1px solid #cbd5e1",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p style={{ margin: "0 0 16px", color: "#334155" }}>
          If you can see this, the server is running and your phone can reach it.
        </p>
        <div style={dashedPanel}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                padding: "10px 12px",
                borderRadius: 8,
                textDecoration: "none",
                background: "#e2e8f0",
                color: "#0f172a",
                border: "1px solid #cbd5e1",
                fontWeight: 600,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
