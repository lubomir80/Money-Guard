import Spinner from "@/components/Spinner";

export default function loading() {
   return (
      <section className="px-10 py-3 bg-[#2E225F] shadow-md mb-10">
         <Spinner title="balance" />
      </section>
   )
}