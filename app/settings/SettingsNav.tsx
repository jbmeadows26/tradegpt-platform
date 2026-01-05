"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/settings", label: "Overview" },
  { href: "/settings/compliance", label: "Compliance" },
  { href: "/settings/security", label: "Security" },
  { href: "/settings/sso", label: "Single Sign-On" },
];

export default function SettingsNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/settings") return pathname === "/settings";
    return pathname.startsWith(href);
  };

  return (
    <>
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
      <style jsx>{`
        .settings-nav-link:hover {
          background: #e2e8f0;
          border-color: #cbd5e1;
        }
      `}</style>
    </>
  );
}
