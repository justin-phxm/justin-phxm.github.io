"use server";

import { getDb } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { type ContactInput, contactSchema } from "@/lib/contact";

export async function submitContact(data: ContactInput): Promise<void> {
  const result = contactSchema.safeParse(data);
  if (!result.success) {
    throw new Error(`Form Errors: ${result.error.issues}`);
  }
  await getDb().insert(contactSubmissions).values(result.data);
}
