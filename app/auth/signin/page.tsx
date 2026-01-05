import { signIn } from "@/auth";
import Link from "next/link";
import { card, pageShell } from "@/app/ui/layoutStyles";

export default function SignInPage() {
  async function handleSignIn(formData: FormData) {
    "use server";
    const email = String(formData.get("email") || "").trim();
    if (!email) {
      return;
    }

    await signIn("nodemailer", { email, redirectTo: "/onboarding" });
  }

  return (
    <main style={pageShell}>
      <section style={{ ...card, maxWidth: 520 }}>
        <h1 style={{ margin: "0 0 8px" }}>Sign in</h1>
        <p style={{ color: "#334155", margin: "0 0 16px" }}>
          Use your work email to receive a secure magic link.
        </p>
        <form action={handleSignIn} style={{ display: "grid", gap: 12 }}>
          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontWeight: 600 }}>Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid #cbd5e1",
                fontSize: 14,
              }}
            />
          </label>
          <button
            type="submit"
            style={{
              padding: "10px 12px",
              borderRadius: 10,
              border: "none",
              background: "#0f172a",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Email me a sign-in link
          </button>
        </form>
        <p style={{ marginTop: 16, fontSize: 14 }}>
          <Link href="/">Back to home</Link>
        </p>
      </section>
    </main>
  );
}
