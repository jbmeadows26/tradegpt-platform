"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await signIn("email", {
      email,
      callbackUrl: "/onboarding",
      redirect: false,
    });

    // Usually redirect happens before this returns.
    if (res?.error) setError(res.error);
    if (res?.url) window.location.href = res.url;
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label style={{ display: "block", marginBottom: 8 }}>
        Email
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
          placeholder="you@company.com"
        />
      </label>

      <button type="submit" disabled={loading} style={{ padding: "8px 12px" }}>
        {loading ? "Sending..." : "Email me a sign-in link"}
      </button>

      {error ? <p style={{ marginTop: 12 }}>Error: {error}</p> : null}
    </form>
  );
}
