import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[18px]  transition-colors leading-7 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ",
   {
      variants: {
         variant: {
            default:
               "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive:
               "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline:
               "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary:
               "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            orange: "bg-gradient-to-r from-[#FFC727] via-[#9E40BA] to-[#7000FF] shadow-xl",
            white: "bg-whiteText text-purple-800 shadow-xl",
            exit: "flex bg-transparent capitalize hover:bg-transparent [&_svg]:size-5 [&_svg]:shrink-0",
            close: " text-[#9E40BA] [&_svg]:size-5 bg-transparent hover:text-[#7000FF] hover: bg-transparent border-none shadow-none"
         },
         size: {
            default: "h-9 px-4 py-2",
            sm: "text-[16px] px-3 py-1 rounded-full capitalize md:text-[14px]",
            lg: "p-3 rounded-[20px] uppercase w-full max-w-[300px]",
            round: "w-[44px] h-[44px] rounded-full text-2xl"
         },
      },
      defaultVariants: {
         variant: "default",
         size: "default",
      },
   }
)

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
   VariantProps<typeof buttonVariants> {
   asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button"
      return (
         <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
         />
      )
   }
)
Button.displayName = "Button"

export { Button, buttonVariants }
