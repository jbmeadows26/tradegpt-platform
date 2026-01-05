export default function SecurityPage() {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      <h2 style={{ margin: 0 }}>Security</h2>
      <p style={{ color: "#334155" }}>
        Configure authentication, session controls, and monitoring defaults.
      </p>
      <div
        style={{
          display: "grid",
          gap: 6,
          padding: 12,
          border: "1px dashed #cbd5e1",
          borderRadius: 10,
          background: "#f8fafc",
          color: "#475569",
        }}
      >
        <span>• Enforce MFA for admins</span>
        <span>• Require strong API tokens</span>
        <span>• Alert on unusual sign-in activity</span>
      </div>
    </div>
  );
}
