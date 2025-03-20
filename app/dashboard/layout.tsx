import Header from '@/components/dashboard/Header'
import Navigation from '@/components/dashboard/Navigation'

interface DashboardLayoutProps {
   currency: React.ReactNode,
   transaction: React.ReactNode,
   balance: React.ReactNode
}



function DashboardLayout({ currency, transaction, balance }: DashboardLayoutProps) {
   return (
      <div className='max-w-7xl mx-auto flex flex-col h-screen border relative border-black/20'>
         <Header />
         <main className="px-5 py-10 flex flex-col md:p-0 md:flex-row space-y-10 md:space-y-0
         flex-1 overflow-y-auto md:overflow-hidden ">
            <div className='
            md:basis-1/3 md:bg-gradient-to-br md:from-[#5710a3] md:to-[#2E225F] md:overflow-y-auto space-y-10'>
               <Navigation />
               {balance}
               {currency}
            </div>
            <section className="
            pb-10
            md:relative md:basis-2/3 md:py-10 md:pl-10 md:pr-4 md:bg-gradient-radial md:from-[#5710a3] md:to-[#221849da]
            md:h-full md:flex md:flex-col md:overflow-hidden">
               {transaction}
            </section>
         </main>
      </div>
   )
}

export default DashboardLayout