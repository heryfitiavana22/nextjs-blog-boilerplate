import { useMDXComponent } from "next-contentlayer/hooks";
import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/typography";
import * as components from "./mdx-components";
import "highlight.js/styles/atom-one-dark-reasonable.min.css";
import { SyntaxHighlightedCode } from "./syntax-highlighted-code";

export function MDXContent({ code }: MdxContentProps) {
  const Component = useMDXComponent(code);
  return (
    <Component
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        code: SyntaxHighlightedCode,
        ...components,
      }}
    />
  );
}

type MdxContentProps = {
  code: string;
};
