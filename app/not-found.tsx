import CardWrapper from '@/components/card/CardWrapper'
import { BsExclamationCircleFill } from 'react-icons/bs'


function NotFound() {
   return (
      <div className='h-full flex items-center justify-center'>
         <CardWrapper
            headerLogo
            headerLabel="Ops! Not found!"
            footerHref="/dashboard"
            footerLabel="Back to home"
         >

            <div className="flex space-x-2 items-center p-2 text-destructive bg-[#3d225a] max-w-fit rounded-md py-1 px-2 tracking-wider text-[0.8rem] mx-auto mb-8">
               <BsExclamationCircleFill className="w-5 h-5" />
               <p>Page not found!</p>
            </div>

         </CardWrapper>
      </div>
   )
}

export default NotFound