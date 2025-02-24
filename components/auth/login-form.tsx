import CardWrapper from '../card/CardWrapper'


function LoginForm() {
   return (
      <CardWrapper
         headerLogo
         backButtonLabel="Register"
         backButtonHref="/auth/register"
         showSocial
      >
         <div>LoginForm</div>
      </CardWrapper>
   )
}

export default LoginForm