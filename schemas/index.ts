import * as z from "zod"


export const LoginSchema = z.object({
   email: z.string().email({
      message: "Email is required"
   }),
   password: z.string().min(3, {
      message: "Password is required"
   })
})
export type TLoginSchema = z.infer<typeof LoginSchema>


const passwordSchema = z
   .string()
   .min(8, { message: "Minimum 8 characters" })
   .max(20, { message: "Maximum 20 characters" })
   .refine((password) => /[A-Z]/.test(password), {
      message: "Must include at least one uppercase letter",
   })
   .refine((password) => /[a-z]/.test(password), {
      message: "Must include at least one lowercase letter",
   })
   .refine((password) => /[0-9]/.test(password), {
      message: "Must include at least one number",
   })
   .refine((password) => /[!@#$%^&*]/.test(password), {
      message: "Must include at least one special character (!@#$%^&*)",
   });


export const RegisterSchema = z.object({
   name: z.string().min(3, {
      message: "Minimum 3 characters required"
   }),
   email: z.string().email({
      message: "Email is required"
   }),
   password: passwordSchema,
   confirmPassword: z.string().min(6, {
      message: 'Please confirm your password'
   }),
}).refine((data) => data.password === data.confirmPassword, {
   message: "Password not matching",
   path: ['confirmPassword'],
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>

export const ResetSchema = z.object({
   email: z.string().email({
      message: "Email is required"
   })
})
export type TResetSchema = z.infer<typeof ResetSchema>

export const NewPasswordSchema = z.object({
   password: passwordSchema
})
export type TNewPasswordSchema = z.infer<typeof NewPasswordSchema>


//..................................TRANSACTIONS

export const AddTransactionSchema = z.object({
   type: z.boolean(),
   category: z.string(),
   comment: z.optional(z.string().min(5, {
      message: "Min 5 characters"
   }).max(40, {
      message: "Max 40 characters"
   })),
   amount: z.coerce.number({
      invalid_type_error: "Amount must be a number",
   }).positive().refine(val => !isNaN(val), {
      message: "Please put some number",
   }),
   transactionDate: z.string()
}).refine((data) => {
   if (data.type) {
      return !!data.category
   }
   if (!data.type) {
      return data.category = "Income"
   }
},
   {
      message: "Category is required",
      path: ["category"]
   },
)
export type TAddTransactionSchema = z.infer<typeof AddTransactionSchema>


export const EditTransactionSchema = z.object({
   type: z.boolean(),
   category: z.string(),
   comment: z.optional(z.string().min(5), {
      message: "Min 5 characters"
   }),
   amount: z.optional(z.number().positive({
      message: "Must be a positive"
   })),
   transactionDate: z.string(),
   createdAt: z.date()
})
export type TEditTransactionSchema = z.infer<typeof EditTransactionSchema>



//................. USER SETTINGS......................


export const UserNameSchema = z.object({
   name: z.string()
      .min(3, { message: "Min 3 characters" })
      .max(30, { message: "Max 30 characters" }),
})
export type TUserNameSchema = z.infer<typeof UserNameSchema>


const newPasswordSchema = z.optional(
   z.string()
      .min(8, { message: "Minimum 8 characters" })
      .max(20, { message: "Maximum 20 characters" }))
   .refine((password) => password && /[A-Z]/.test(password), {
      message: "Must include at least one uppercase letter",
   })
   .refine((password) => password && /[a-z]/.test(password), {
      message: "Must include at least one lowercase letter",
   })
   .refine((password) => password && /[0-9]/.test(password), {
      message: "Must include at least one number",
   })
   .refine((password) => password && /[!@#$%^&*]/.test(password), {
      message: "Must include at least one special character (!@#$%^&*)",
   });


export const UserPasswordSchema = z.object({
   password: z.optional(z.string().min(6)),
   newPassword: newPasswordSchema
}).refine((data) => {
   if (data.password && !data.newPassword) {
      return false
   }
   return true
},
   {
      message: "New password is required!",
      path: ["newPassword"]
   },
)
export type TUserPasswordSchema = z.infer<typeof UserPasswordSchema>


export const UserAvatarSchema = z.object({
   image: z.string().min(6)
})
export type TUserAvatarSchema = z.infer<typeof UserAvatarSchema>