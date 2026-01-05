"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createOrganization(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/auth/signin");
  }

  const name = String(formData.get("name") || "").trim();
  if (!name) {
    return;
  }

  const organization = await prisma.organization.create({
    data: {
      name,
      members: {
        create: {
          userId: session.user.id,
          role: "OWNER",
        },
      },
    },
  });

  const cookieStore = await cookies();
  cookieStore.set("active_org", organization.id, { path: "/" });
  redirect("/settings");
}

export async function setActiveOrganization(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/auth/signin");
  }

  const organizationId = String(formData.get("orgId") || "").trim();
  if (!organizationId) {
    return;
  }

  const membership = await prisma.orgMember.findFirst({
    where: {
      organizationId,
      userId: session.user.id,
    },
  });

  if (!membership) {
    return;
  }

  const cookieStore = await cookies();
  cookieStore.set("active_org", organizationId, { path: "/" });
  redirect("/settings");
}
