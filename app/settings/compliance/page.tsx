export default function CompliancePage() {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      <h2 style={{ margin: 0 }}>Compliance</h2>
      <p style={{ color: "#334155" }}>
        Track evidence, attestations, and requirements for your controls.
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
        <strong>Placeholder</strong>
        <span style={{ color: "#475569" }}>
          Control mappings, audit tasks, and export options will live here.
        </span>
      </div>
    </div>
  );
}
