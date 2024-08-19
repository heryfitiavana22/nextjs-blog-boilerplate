import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export function Badge({
  className,
  children,
  enableHover = false,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "relative rounded bg-muted px-1 py-1 text-sm font-semibold inline-flex items-center gap-2 transition-colors custom-badge",
        {
          "hover:bg-primary/20": enableHover,
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

type BadgeProps = ComponentPropsWithoutRef<"div"> & {
  enableHover?: boolean;
};
