"use server";

import { put } from "@vercel/blob";

export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
};

function sanitizePathSegment(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 48);
}

function validateContactSubmission(data: ContactSubmission) {
  const name = data.name.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  if (!name || !email || !message) {
    throw new Error("Please complete all contact form fields.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  return { name, email, message };
}

export async function saveContactSubmission(data: ContactSubmission) {
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
