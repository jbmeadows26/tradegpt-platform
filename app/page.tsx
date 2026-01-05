import Link from "next/link";

const links = [
  { href: "/settings", label: "Settings overview" },
  { href: "/settings/compliance", label: "Compliance" },
  { href: "/settings/security", label: "Security" },
  { href: "/settings/sso", label: "Single Sign-On" },
];

export default function Home() {
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
      <section
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: 12,
          padding: 20,
          boxShadow: "0 1px 2px rgba(15, 23, 42, 0.06)",
        maxWidth: 640,
      }}
    >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ textTransform: "uppercase", letterSpacing: 0.6, fontSize: 12, margin: 0 }}>
              TradeGPT
            </p>
            <h1 style={{ margin: "4px 0 8px" }}>Platform ✅</h1>
          </div>
          <nav style={{ display: "flex", gap: 8 }}>
            <Link
              href="/settings"
              style={{
                padding: "8px 12px",
                borderRadius: 10,
                textDecoration: "none",
                background: "#0f172a",
                color: "#fff",
                fontWeight: 600,
                boxShadow: "0 1px 2px rgba(15,23,42,0.12)",
              }}
            >
              Settings
            </Link>
          </nav>
        </div>
        <p style={{ margin: "0 0 16px", color: "#334155" }}>
          If you can see this, the server is running and your phone can reach it.
        </p>
        <div
          style={{
            display: "grid",
            gap: 10,
            padding: 12,
            border: "1px dashed #cbd5e1",
            borderRadius: 10,
            background: "#f8fafc",
          }}
        >
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
