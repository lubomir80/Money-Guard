import Welcome from "@/components/email/Message"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const domain = process.env.NEXT_PUBLIC_APP_URL

export const sendVerificationEmail = async (
   email: string,
   token: string
) => {
   const confirmLink = `${domain}/auth/new-verification?token=${token}`
   const confirm = true

   await resend.emails.send({
      from: "mail@money-guard-v1.fyi",
      to: email,
      subject: "Confirm your email",
      react: Welcome({ confirmLink, confirm })
   })
}

export const sendPasswordResetEmail = async (
   email: string,
   token: string
) => {
   const resetLink = `${domain}/auth/new-password?token=${token}`
   const reset = true

   await resend.emails.send({
      from: "mail@money-guard-v1.fyi",
      to: email,
      subject: "Reset your password",
      react: Welcome({ resetLink, reset })
   })
}
