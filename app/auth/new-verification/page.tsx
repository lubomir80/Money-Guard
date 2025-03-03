import { Suspense } from 'react'
import NewVerificationForm from '@/components/auth/new-verification-form'


function NewVerificationPage() {
   return (
      <Suspense>
         <NewVerificationForm />
      </Suspense>
   )
}

export default NewVerificationPage