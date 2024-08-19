import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function ul({ children, className, ...props }: ulProps) {
  return (
    <ul className={cn("list-disc list-inside space-y-2", className)} {...props}>
      {children}
    </ul>
  );
}

type ulProps = ComponentProps<"ul">;

export function ol({ children, className, ...props }: olProps) {
  return (
    <ol
      className={cn("list-decimal list-inside space-y-2", className)}
      {...props}
    >
      {children}
    </ol>
  );
}

type olProps = ComponentProps<"ol">;
