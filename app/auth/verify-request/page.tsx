import Link from "next/link";
import { card, pageShell } from "@/app/ui/layoutStyles";

export default function VerifyRequestPage() {
  return (
    <main style={pageShell}>
      <section style={{ ...card, maxWidth: 520 }}>
        <h1 style={{ margin: "0 0 8px" }}>Check your inbox</h1>
        <p style={{ color: "#334155", margin: "0 0 16px" }}>
          We just sent you a magic link. Open the email to finish signing in.
        </p>
        <p style={{ margin: 0, fontSize: 14 }}>
          <Link href="/auth/signin">Use a different email</Link>
        </p>
      </section>
    </main>
  );
}
