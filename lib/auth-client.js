"use client";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://bazar-dor-uppe.vercel.app",
});

export const { useSession, signIn, signUp, signOut, updateUser } = authClient;
