import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn("w-full py-12 md:py-24 lg:py-32", className)}
      {...props}
    >
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  );
}

type SectionProps = ComponentProps<"section">;
