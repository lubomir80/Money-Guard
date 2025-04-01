import { Suspense } from 'react'
import NewVerificationForm from '@/components/auth/new-verification-form'
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Verification",
};


function NewVerificationPage() {
   return (
      <Suspense>
         <NewVerificationForm />
      </Suspense>
   )
}

export default NewVerificationPage