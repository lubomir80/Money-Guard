
function SpinnerMini({ classname }: { classname?: string }) {
   return (
      <div className="flex flex-col gap-2 items-center">
         <div className={`spinner-mini ${classname}`} />
      </div>
   );
}

export default SpinnerMini;