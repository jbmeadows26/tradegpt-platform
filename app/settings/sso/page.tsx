export default function SSOPage() {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      <h2 style={{ margin: 0 }}>Single Sign-On</h2>
      <p style={{ color: "#334155" }}>
        Connect an identity provider and keep access centralized.
      </p>
      <div
        style={{
          display: "grid",
          gap: 8,
          padding: 12,
          border: "1px dashed #cbd5e1",
          borderRadius: 10,
          background: "#f8fafc",
        }}
      >
        <strong>Provider setup</strong>
        <span style={{ color: "#475569" }}>
          SAML/OIDC configuration details and status badges will show here.
        </span>
      </div>
    </div>
  );
}
