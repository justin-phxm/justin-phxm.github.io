import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { contactSubmissions } from "@/db/schema";

const contactInsertSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  message: true,
});

export const contactSchema = contactInsertSchema.extend({
  name: z
    .string()
    .trim()
    .pipe(contactInsertSchema.shape.name.min(1, "Enter your name")),
  email: z
    .string()
    .trim()
    .pipe(contactInsertSchema.shape.email)
    .pipe(z.email("Enter a valid email address")),
  message: z
    .string()
    .trim()
    .pipe(contactInsertSchema.shape.message.min(1, "Enter a message")),
});

export type ContactInput = z.infer<typeof contactSchema>;
