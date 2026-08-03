import { getDb } from "../../../db";
import { volunteers } from "../../../db/schema";

export async function POST(request: Request) {
  const f = await request.formData();
  const value = (k: string) => String(f.get(k) ?? "").trim();
  const required = ["name", "email", "phone", "district", "skills", "availability"];
  const missing = required.filter((key) => !value(key));

  if (missing.length > 0) {
    const message = encodeURIComponent("Please complete all required fields before submitting.");
    return Response.redirect(new URL(`/volunteer?error=${message}`, request.url), 303);
  }

  try {
    await getDb().insert(volunteers).values({
      name: value("name"),
      email: value("email"),
      phone: value("phone"),
      district: value("district"),
      skills: value("skills"),
      availability: value("availability"),
      createdAt: new Date().toISOString(),
    });

    const message = encodeURIComponent("Your volunteer application was sent successfully.");
    return Response.redirect(new URL(`/volunteer?success=${message}`, request.url), 303);
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Volunteer application could not be submitted.";
    const message = encodeURIComponent(detail);
    return Response.redirect(new URL(`/volunteer?error=${message}`, request.url), 303);
  }
}
