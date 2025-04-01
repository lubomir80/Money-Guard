import RegisterForm from '@/components/auth/register-form'
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Registration",
};

function RegisterPage() {
   return (
      <RegisterForm />
   )
}

export default RegisterPage