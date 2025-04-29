import {
   Body,
   Container,
   Tailwind,
   Head,
   Heading,
   Html,
   Text,
   Button,
   Img
} from '@react-email/components';

type WelcomeProps = {
   confirmLink?: string
   confirm?: boolean
   resetLink?: string
   reset?: boolean
}

const Welcome = ({ confirmLink, confirm, resetLink, reset }: WelcomeProps) => {
   return (
      <Html>
         <Head />
         <Tailwind>
            <Body className='my-12 mx-auto font-sans text-center text-white'>
               <Container className='bg-[#5710a3] p-12 rounded-lg shadow-lg'>
                  <Img
                     src='https://ik.imagekit.io/lubomir/MoneyGuard.png?updatedAt=1745852077013'
                     className='w-12 mx-auto rounded-full' />
                  <Heading className='text-xl text-[#ffd058]'>Money-Guard 👋</Heading>
                  <Text className='text-lg font-medium text-white'>
                     {confirm && "With our app, you can manage your finances"}
                     {reset && "We received a request to reset your password"}
                  </Text>
                  <Text className='text-lg font-medium mb-12 text-white'>
                     {confirm && "To confirm your account by clicking the button below"}
                     {reset && "If you made this request, click the button below"}
                  </Text>
                  <Button className='bg-white text-purple-800 shadow-xl py-2 px-4 rounded-[20px] uppercase' href={confirmLink || resetLink}>
                     {reset && "Reset"}
                     {confirm && "Confirm"}
                  </Button>
               </Container>
            </Body>
         </Tailwind>
      </Html>
   )
}

export default Welcome