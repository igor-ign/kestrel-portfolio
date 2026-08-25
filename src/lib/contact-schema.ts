import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .max(100, 'Name must be 100 characters or less'),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(254, 'Email must be 254 characters or less'),
  company: z
    .string()
    .trim()
    .max(100, 'Company / Project must be 100 characters or less')
    .optional()
    .default(''),
  message: z
    .string()
    .trim()
    .min(1, 'Message is required')
    .max(2000, 'Message must be 2000 characters or less'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
