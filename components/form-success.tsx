import { CheckCheckIcon } from "lucide-react";

interface FormSuccessProps {
   message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
   if (!message) return null;

   return (
      <div className="flex space-x-2 items-center p-2 bg-[#3d225a] max-w-fit rounded-md py-1 px-2 tracking-wider text-[0.8rem] text-[#ABEDD5]">
         <CheckCheckIcon className="w-5 h-5 " />
         <p>{message}</p>
      </div>
   )
}