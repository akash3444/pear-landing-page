import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().email({ message: "Email address is invalid." }),
});

export const passwordSchema = z.object({
  password: z.string().min(8, { message: "Password not long enough." }),
});

export const signUpSchema = z.object({
  full_name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(100, { message: "Name is too long." }),
  email: emailSchema.shape.email,
  company_name: z
    .string()
    .max(100, { message: "Company name is too long." })
    .optional(),
  password: passwordSchema.shape.password,
});

export const signInSchema = z.object({
  email: emailSchema.shape.email,
  password: passwordSchema.shape.password,
});

export const resetPasswordSchema = z.object({
  email: emailSchema.shape.email,
});

export const updatePasswordSchema = z
  .object({
    newPassword: passwordSchema.shape.password,
    confirmNewPassword: passwordSchema.shape.password,
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ["confirmNewPassword"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type UpdatePasswordFormData = z.infer<typeof updatePasswordSchema>;
