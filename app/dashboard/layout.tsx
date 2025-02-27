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
         <main className="flex-1 flex overflow-y-hidden">
            <div className='basis-1/3 bg-gradient-to-br from-[#5710a3] to-[#2E225F] overflow-y-auto space-y-10'>
               <Navigation />
               {balance}
               {currency}
            </div>
            <section className="basis-2/3 overflow-y-auto py-10 pl-10 pr-4 
            bg-gradient-radial from-[#5710a3] to-[#221849da]">
               {transaction}
            </section>
         </main>
      </div>
   )
}

export default DashboardLayout