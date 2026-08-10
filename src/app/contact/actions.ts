"use server";

export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
};

const blobApiVersion = "11";

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

  const response = await fetch(`https://blob.vercel-storage.com/${pathname}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
      "x-api-version": blobApiVersion,
      "x-add-random-suffix": "1",
    },
    body: JSON.stringify({ ...submission, submittedAt }),
  });

  if (!response.ok) {
    throw new Error("Unable to save your message right now. Please try again.");
  }

  return { ok: true };
}
