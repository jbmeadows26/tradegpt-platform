"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSent(false);

    try {
      const res = await signIn("nodemailer", {
        email,
        callbackUrl: "/onboarding",
        redirect: false,
      });

      if (res?.error) {
        setError(res.error);
      } else {
        // Success: show a confirmation even if res.url is missing
        setSent(true);
        if (res?.url) window.location.href = res.url; // may go to verify-request
      }
    } catch (err: any) {
      setError(err?.message ?? "Sign-in failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
      <label style={{ display: "grid", gap: 6 }}>
        Email
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          style={{ padding: 10, borderRadius: 8, border: "1px solid #333" }}
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        style={{ padding: "10px 12px", borderRadius: 10 }}
      >
        {loading ? "Sending..." : "Email me a sign-in link"}
      </button>

      {sent ? (
        <div style={{ fontSize: 14, opacity: 0.9 }}>
          ✅ Check your email for a sign-in link. (Also check spam.)
        </div>
      ) : null}

      {error ? (
        <div style={{ fontSize: 14, color: "tomato" }}>Error: {error}</div>
      ) : null}
    </form>
  );
}
