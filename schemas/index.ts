import * as z from "zod"

export const LoginSchema = z.object({
   email: z.string().email({
      message: "Email is required"
   }),
   password: z.string().min(1, {
      message: "Password is required"
   })
})
export type TLoginSchema = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
   name: z.string().min(3, {
      message: "Minimum 3 characters required"
   }),
   email: z.string().email({
      message: "Email is required"
   }),
   password: z.string().min(6, {
      message: "Minimum 6 characters required"
   }),
   confirmPassword: z.string().min(6, {
      message: 'Please confirm your password'
   }),
}).superRefine((val, ctx) => {
   if (val.password !== val.confirmPassword) {
      ctx.addIssue({
         code: z.ZodIssueCode.custom,
         message: 'Password is not the same as confirm password',
         path: ['confirmPassword'],
      })
   }
})
export type TRegisterSchema = z.infer<typeof RegisterSchema>