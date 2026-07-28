import { eq } from "drizzle-orm";
import { getDb } from "../../../../db";
import { activity, users } from "../../../../db/schema";
import { createSession, verifyPassword } from "../../../auth";

function safeReturnPath(value: FormDataEntryValue | null): string {
  const candidate = String(value || "/admin");
  return candidate.startsWith("/") && !candidate.startsWith("//")
    ? candidate
    : "/admin";
}

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get("email") || "").trim().toLowerCase();
  const password = String(form.get("password") || "");
  const returnTo = safeReturnPath(form.get("return_to"));
  const fail = new URL("/signin", request.url);
  fail.searchParams.set("error", "Email or password is incorrect.");
  fail.searchParams.set("return_to", returnTo);

  if (!email || !password) return Response.redirect(fail, 303);

  const db = getDb();
  const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (!user || user.status !== "active" || !verifyPassword(password, user.passwordHash)) {
    return Response.redirect(fail, 303);
  }

  const now = new Date().toISOString();
  await db.update(users).set({ lastLoginAt: now }).where(eq(users.id, user.id));
  await db.insert(activity).values({
    actor: user.email,
    action: "signed in",
    entity: "user",
    entityId: user.id,
    createdAt: now,
  });
  await createSession(user.id);
  return Response.redirect(new URL(returnTo, request.url), 303);
}
