import { useRouter } from 'next/navigation'
import { CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import GoogleButton from '../google-button'
import GithubButton from '../github-button'

function CardWrapperFooter({ footerLabel, footerHref, showSocial }: {
   showSocial?: boolean,
   footerLabel?: string,
   footerHref?: string
}) {

   const router = useRouter()

   const isSocial = showSocial ? (
      <div className='flex gap-4'>
         <GoogleButton /><GithubButton />
      </div>
   ) : null
   const isFooterLink = footerLabel && footerHref ? (
      <div>
         <Button
            onClick={() => router.push(footerHref)}
            variant="link"
            className='text-whiteText text-sm tracking-wider'>
            {footerLabel}
         </Button>
      </div>
   ) : null

   return (
      <CardFooter className='flex flex-col gap-2 items-center justify-center'>
         {isSocial}
         {isFooterLink}
      </CardFooter>
   )
}

export default CardWrapperFooter