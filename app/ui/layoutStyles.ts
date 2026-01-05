import type { CSSProperties } from "react";

export const pageShell: CSSProperties = {
  padding: 24,
  fontFamily: "system-ui",
  minHeight: "100vh",
  background: "#f7f9fb",
  color: "#0f172a",
};

export const card: CSSProperties = {
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: 12,
  padding: 20,
  boxShadow: "0 1px 2px rgba(15, 23, 42, 0.06)",
};

export const dashedPanel: CSSProperties = {
  display: "grid",
  gap: 10,
  padding: 12,
  border: "1px dashed #cbd5e1",
  borderRadius: 10,
  background: "#f8fafc",
};

