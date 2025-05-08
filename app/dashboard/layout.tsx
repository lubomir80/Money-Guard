import Header from '@/components/dashboard/Header'
import Navigation from '@/components/dashboard/Navigation'
import { Metadata } from 'next';

interface DashboardLayoutProps {
   currency: React.ReactNode,
   transaction: React.ReactNode,
   balance: React.ReactNode
}

export const metadata: Metadata = {
   title: "Dashboard / Money Guard",
   description: "Track expenses and incomes",
};



function DashboardLayout({ currency, transaction, balance }: DashboardLayoutProps) {
   return (
      <div className='max-w-7xl w-full flex flex-col h-screen relative border border-black/20'>
         <Header />
         <div className="flex flex-col px-5 py-10 sm:pt-0 md:p-0 md:flex-row md:space-y-0 space-y-10
         flex-1 overflow-y-auto md:overflow-hidden">
            <div className='sm:flex sm:justify-between md:block sm:gap-5
            md:basis-1/3 md:bg-gradient-to-br md:from-[#5710a3] md:to-[#2E225F] md:overflow-y-auto space-y-10 sm:space-y-0 md:space-y-10'>
               <div className='flex flex-col flex-1 gap-10'>
                  <Navigation />
                  {balance}
               </div>
               {currency}
            </div>
            <section className="flex-1 pb-10 pr-0 
            md:relative md:basis-2/3 md:py-10 md:pl-10 md:pr-4 md:bg-gradient-radial md:from-[#5710a3] md:to-[#221849da]
            md:h-full flex flex-col md:overflow-hidden o">
               {transaction}
            </section>
         </div>
      </div>
   )
}

export default DashboardLayout