import type { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "System Access | Digipro",
  description: "Authorized personnel only. Administrative access portal.",
  robots: "noindex, nofollow",
};

export default function LoginPage() {
  return <LoginClient />;
}
