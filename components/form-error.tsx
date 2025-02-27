import { BsExclamationCircleFill } from "react-icons/bs";

interface FormSuccessProps {
   message?: string;
}
export const FormError = ({ message }: FormSuccessProps) => {
   if (!message) return null;
   return (
      <div className="flex space-x-2 items-center p-2 text-destructive bg-[#3d225a] max-w-fit rounded-md py-1 px-2 tracking-wider text-[0.8rem]">
         <BsExclamationCircleFill className="w-5 h-5 " />
         <p>{message}</p>
      </div>
   );
};