import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your name").max(100),
  email: z.string().trim().max(254).email("Enter a valid email address"),
  message: z.string().trim().min(1, "Enter a message").max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;
