import LoginForm from '@/components/auth/login-form'
import { Suspense } from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Login",
};


function LoginPage() {
   return (
      <Suspense>
         <LoginForm />
      </Suspense>
   )
}

export default LoginPage