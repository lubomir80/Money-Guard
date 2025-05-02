"use client"

import { redirect, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { newVerification } from "@/actions/new-verification"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import CardWrapper from "../card/CardWrapper"
import Spinner from "../Spinner"


function NewVerificationForm() {
   const [error, setError] = useState<string | undefined>("")
   const [success, setSuccess] = useState<string | undefined>("")

   const searchParams = useSearchParams()
   const token = searchParams.get("token")



   const onSubmit = useCallback(async () => {
      if (error || success) return

      if (!token) {
         setError("Missing token!")
         return
      }
      await newVerification(token).then((data) => {
         if (data?.error) {
            setError(data?.error);
            setSuccess("");
         }
         if (data.success) {
            setError("");
            setSuccess(data.success);
            setTimeout(() => {
               redirect('/auth/login');
            }, 1000);
         }
      })
         .catch(() => {
            setError("Something went wrong!")
         })
   }, [token, error, success])

   useEffect(() => {
      onSubmit()
   }, [onSubmit])


   return (
      <CardWrapper
         headerLogo
         headerLabel="Confirm your verification"
         footerLabel="Back to login"
         footerHref="/auth/login">

         <div className="flex items-center w-full justify-center">
            {!success && !error && <Spinner />}
            {!success && <FormError message={error} />}
            <FormSuccess message={success} />
         </div>

      </CardWrapper>
   )
}

export default NewVerificationForm