import Link from 'next/link'
import GoogleButton from '../google-button'
import { CardFooter } from '../ui/card'
import { Button } from '../ui/button'

function CardWrapperFooter({ footerLabel, footerHref, showSocial }: {
   showSocial?: boolean,
   footerLabel?: string,
   footerHref?: string
}) {

   const isSocial = showSocial ? <div><GoogleButton /></div> : null
   const isFooterLink = footerLabel && footerHref ? (
      <div>
         <Link href={footerHref}>
            <Button variant="link" className='text-whiteText text-sm tracking-wider'>
               {footerLabel}
            </Button>
         </Link>
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