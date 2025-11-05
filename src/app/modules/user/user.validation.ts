import { z } from "zod";

const update_user = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  imageUrl: z.string().optional(),
  location: z.object().optional(),
  phone: z.object().optional(),
});

export const user_validations = {
  update_user,
};
