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

// const passwordValidation = new RegExp(
//    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
// );


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
   password: z.string().min(6, {
      message: "Minimum of 6 characters required"
   })
})
export type TNewPasswordSchema = z.infer<typeof NewPasswordSchema>


//TRANSACTIONS

export const AddTransactionSchema = z.object({
   type: z.boolean(),
   category: z.string(),
   comment: z.optional(z.string().min(5, {
      message: "Min 5 characters"
   }).max(40, {
      message: "Max 40 characters"
   })),
   amount: z.coerce.number().positive({
      message: "Must be a positive"
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
   amount: z.coerce.number().positive({
      message: "Must be a positive"
   }),
   transactionDate: z.string(),
   createdAt: z.date()
})



export type TEditTransactionSchema = z.infer<typeof EditTransactionSchema>


export const UserSettingsSchema = z.object({
   name: z.optional(z.string()
      .min(3, { message: "Min 3 characters" })
      .max(30, { message: "Max 30 characters" })),
   image: z.optional(z.string()),
   password: z.optional(z.string().min(6)),
   newPassword: z.optional(z.string().min(6)),
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


export type TUserSettingsSchema = z.infer<typeof UserSettingsSchema>

