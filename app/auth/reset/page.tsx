import ResetPasswordForm from '@/components/auth/reset-password-form'
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Password reset",
};


function ResetPage() {
   return (
      <ResetPasswordForm />
   )
}

export default ResetPage