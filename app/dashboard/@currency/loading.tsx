import Spinner from "@/components/Spinner";

export default function loading() {
   return (
      <>
         <div className="hidden sm:block flex-1 h-full">
            <Spinner title="Currency" />
         </div>
      </>
   )
}