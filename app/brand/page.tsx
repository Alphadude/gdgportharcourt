// ─────────────────────────────────────────────────────────────────────────────
// app/brand/page.tsx
// Convenient route redirect from /brand to /brand-guidelines
// ─────────────────────────────────────────────────────────────────────────────

import { redirect } from "next/navigation";

export default function BrandRedirectPage() {
  redirect("/brand-guidelines");
}
