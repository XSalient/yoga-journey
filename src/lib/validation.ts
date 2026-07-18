import { z } from 'zod';

export const enquiryFormSchema = z.object({
  fullName: z.string().min(2, 'Name required'),
  email: z.string().email('Invalid email'),
  country: z.string().min(1, 'Country required'),
  travelInterest: z.string().min(1, 'Interest required'),
  travellers: z.string().min(1, 'Count required'),
  message: z.string().min(10, 'Message too short').max(2000),
  consent: z.boolean().refine((val) => val, 'Must agree to privacy'),
  whatsapp: z.string().optional(),
  travelDates: z.string().optional(),
  duration: z.string().optional(),
  budget: z.string().optional(),
  url: z.string().max(0).optional(),
});

export type EnquiryFormData = z.infer<typeof enquiryFormSchema>;
