"use server";

import { put } from "@vercel/blob";
import { z } from "zod";

const contactSubmissionSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, "Please enter your name.")
      .max(100, "Your name is too long."),
    email: z
      .string()
      .trim()
      .email("Please enter a valid email address.")
      .max(254, "Your email address is too long."),
    message: z
      .string()
      .trim()
      .min(1, "Please enter a message.")
      .max(5000, "Your message is too long."),
  })
  .strict();

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

function sanitizePathSegment(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 48);
}

function validateContactSubmission(data: unknown) {
  const result = contactSubmissionSchema.safeParse(data);

  if (!result.success) {
    throw new Error(
      result.error.issues[0]?.message ??
        "Please complete all contact form fields.",
    );
  }

  return result.data;
}

export async function saveContactSubmission(data: unknown) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;

  if (!token) {
    throw new Error("Contact form storage is not configured.");
  }

  const submission = validateContactSubmission(data);
  const submittedAt = new Date().toISOString();
  const filename = `${submittedAt}-${sanitizePathSegment(submission.name)}.json`;
  const pathname = `contact-submissions/${filename}`;

  await put(pathname, JSON.stringify({ ...submission, submittedAt }), {
    access: "private",
    addRandomSuffix: true,
    contentType: "application/json",
    token,
  });

  return { ok: true };
}
