import { redirect } from "next/navigation";

export default function LoginPage() {
  redirect("/signin?return_to=%2Fadmin");
}
