import * as React from "react"

// import { cn } from "src/lib/utils"
import { cn } from "../../lib/utils"


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          " text-white flex h-2 w-full rounded-md  bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        placeholder="https://www.google.com/search?q=fifa23+minimap&tbm=isch&vedh=91...."
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
