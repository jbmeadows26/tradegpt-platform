import Link from "next/link";
import { auth } from "@/auth";
import { createOrganization, setActiveOrganization } from "@/app/actions/organizationActions";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { card, pageShell } from "@/app/ui/layoutStyles";

export default async function OnboardingPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/auth/signin");
  }

  const memberships = await prisma.orgMember.findMany({
    where: { userId: session.user.id },
    include: { organization: true },
    orderBy: { createdAt: "asc" },
  });

  const cookieStore = await cookies();
  const activeOrgId = cookieStore.get("active_org")?.value ?? "";
  const activeMembership = memberships.find(
    (membership) => membership.organizationId === activeOrgId,
  );

  return (
    <main style={pageShell}>
      <section style={{ ...card, maxWidth: 640, display: "grid", gap: 20 }}>
        <div>
          <p style={{ textTransform: "uppercase", letterSpacing: 0.6, fontSize: 12, margin: 0 }}>
            Onboarding
          </p>
          <h1 style={{ margin: "6px 0 8px" }}>Set up your workspace</h1>
          <p style={{ color: "#334155", margin: 0 }}>
            Create an organization or switch into one you already belong to.
          </p>
        </div>

        {memberships.length > 0 ? (
          <div style={{ display: "grid", gap: 12 }}>
            <p style={{ margin: 0, fontWeight: 600 }}>Existing organizations</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {memberships.map((membership) => (
                <form key={membership.organizationId} action={setActiveOrganization}>
                  <input type="hidden" name="orgId" value={membership.organizationId} />
                  <button
                    type="submit"
                    style={{
                      padding: "8px 12px",
                      borderRadius: 10,
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
            {activeMembership ? (
              <p style={{ margin: 0, fontSize: 14 }}>
                Active org set to <strong>{activeMembership.organization.name}</strong>.{" "}
                <Link href="/settings">Go to settings</Link>
              </p>
            ) : null}
          </div>
        ) : null}

        <div style={{ display: "grid", gap: 12 }}>
          <p style={{ margin: 0, fontWeight: 600 }}>Create a new organization</p>
          <form action={createOrganization} style={{ display: "grid", gap: 12 }}>
            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontWeight: 600 }}>Organization name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="TradeGPT Capital"
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
              Create organization
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
