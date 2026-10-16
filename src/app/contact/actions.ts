"use server";

import { getDb } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { type ContactInput, contactSchema } from "@/lib/contact";

export async function submitContact(data: ContactInput): Promise<void> {
  const result = contactSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Please check your name, email, and message.");
  }

  try {
    await getDb().insert(contactSubmissions).values(result.data);
  } catch {
    // Do not log submitted personal data or database connection details.
    console.error("Failed to save a contact submission");
    throw new Error("Unable to send your message. Please try again later.");
  }
}
