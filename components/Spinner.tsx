

function Spinner({ title }: { title?: string }) {
   return (
      <div className="flex flex-col gap-2 items-center">
         <div className='spinner'></div>
         {title ? <h2>{title}</h2> : null}
      </div>
   );
}

export default Spinner;