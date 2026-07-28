import { randomBytes } from "node:crypto";
import { cookies, headers } from "next/headers";
import { getDb } from "../../../../db";
import { pageViews } from "../../../../db/schema";

const VISITOR_COOKIE = "paccy_visitor";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({})) as { path?: string; referrer?: string };
  const path = String(body.path || "").slice(0, 255);
  if (!path.startsWith("/") || path.startsWith("/admin") || path.startsWith("/api")) {
    return Response.json({ ok: true });
  }

  const cookieStore = await cookies();
  let visitorId = cookieStore.get(VISITOR_COOKIE)?.value;
  if (!visitorId) {
    visitorId = randomBytes(18).toString("base64url");
    cookieStore.set(VISITOR_COOKIE, visitorId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production" && process.env.APP_HTTPS === "true",
      path: "/",
      maxAge: 31_536_000,
    });
  }

  const requestHeaders = await headers();
  await getDb().insert(pageViews).values({
    visitorId,
    path,
    referrer: String(body.referrer || "").slice(0, 500) || null,
    userAgent: requestHeaders.get("user-agent")?.slice(0, 500) || null,
    createdAt: new Date().toISOString(),
  });
  return Response.json({ ok: true });
}
