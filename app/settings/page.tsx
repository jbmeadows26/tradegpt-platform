export default function SettingsPage() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h2 style={{ margin: 0 }}>Overview</h2>
      <p style={{ color: "#334155" }}>
        Quick links to help you keep your workspace configured and compliant.
      </p>
      <ul style={{ margin: 0, paddingLeft: 18, color: "#0f172a", lineHeight: 1.6 }}>
        <li>Review compliance requirements and attestations.</li>
        <li>Adjust security defaults and monitoring.</li>
        <li>Set up single sign-on for your team.</li>
      </ul>
    </div>
  );
}
