import AddTransaction from './AddTransaction'

function CallToAdd() {
   return (
      <div className="py-6 sm:py-10 space-y-8 text-white text-center">
         <AddTransaction className="blob w-20 h-20 sm:w-14 sm:h-14" />
         <p className="hidden sm:block text-[20px] p-5">
            Add your first transaction. 🧐
         </p>
      </div>
   )
}

export default CallToAdd