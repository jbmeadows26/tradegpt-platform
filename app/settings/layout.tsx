import { auth } from "@/auth";
import { setActiveOrganization } from "@/app/actions/organizationActions";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { card, pageShell } from "../ui/layoutStyles";
import SettingsNav from "./SettingsNav";

export default async function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/auth/signin");
  }

  const memberships = await prisma.orgMember.findMany({
    where: { userId: session.user.id },
    include: { organization: true },
    orderBy: { createdAt: "asc" },
  });

  if (memberships.length === 0) {
    redirect("/onboarding");
  }

  const cookieStore = await cookies();
  const activeOrgId = cookieStore.get("active_org")?.value ?? "";
  const activeMembership = memberships.find(
    (membership) => membership.organizationId === activeOrgId,
  );

  return (
    <main style={pageShell}>
      <header style={{ marginBottom: 24 }}>
        <p style={{ textTransform: "uppercase", letterSpacing: 0.6, fontSize: 12 }}>
          Settings
        </p>
        <h1 style={{ margin: "4px 0 8px", fontSize: 28, fontWeight: 700 }}>
          TradeGPT workspace
        </h1>
        <p style={{ color: "#334155", maxWidth: 640 }}>
          Configure policies, access, and authentication from a single place.
        </p>
        <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
          <p style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.6 }}>
            Active organization
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            <span style={{ fontWeight: 600 }}>
              {activeMembership?.organization.name ?? "Select an organization"}
            </span>
            {memberships.map((membership) => (
              <form key={membership.organizationId} action={setActiveOrganization}>
                <input type="hidden" name="orgId" value={membership.organizationId} />
                <button
                  type="submit"
                  style={{
                    padding: "6px 10px",
                    borderRadius: 8,
                    border: "1px solid #cbd5e1",
                    background:
                      activeOrgId === membership.organizationId ? "#0f172a" : "#f1f5f9",
                    color: activeOrgId === membership.organizationId ? "#fff" : "#0f172a",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {membership.organization.name}
                </button>
              </form>
            ))}
          </div>
        </div>
      </header>

      <div className="settings-layout-grid" style={{ display: "grid", gap: 24 }}>
        <nav style={{ ...card, padding: 16 }}>
          <SettingsNav />
        </nav>

        <section style={{ ...card, padding: 20 }}>
          {children}
        </section>
      </div>
    </main>
  );
}
