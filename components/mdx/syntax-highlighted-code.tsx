import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.min.css";
import { Badge } from "../badge/badge";
import { cn } from "@/lib/utils";

export function SyntaxHighlightedCode({
  children,
  ...props
}: SyntaxHighlightedCodeProps): ReactNode {
  const content = children?.toString() || "";
  const isCode =
    /[{};=<>]/.test(content.toString()) ||
    hljs.getLanguage(content.split(/\s+/)[0]);

  if (isCode) {
    return (
      <code {...props} className={cn(props.className, "hljs rounded-lg")}>
        {children}
      </code>
    );
  }

  return (
    <Badge {...props} className={cn("!text-inherit-size")}>
      {children}
    </Badge>
  );
}

type SyntaxHighlightedCodeProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;
