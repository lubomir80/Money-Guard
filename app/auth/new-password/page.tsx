import NewPasswordForm from "@/components/auth/new-password-form"
import { Suspense } from "react"
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "New Password",
};

function NewPasswordPage() {
   return (
      <Suspense>
         <NewPasswordForm />
      </Suspense>
   )
}

export default NewPasswordPage