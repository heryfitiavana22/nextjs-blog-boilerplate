import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "../icons/arrow-right";
import { Blog } from "@/types/data-type";

export function CardBlog({ blog }: CardBlogProps) {
  return (
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold">{blog.title}</h3>
        <p className="text-muted-foreground mt-2">{blog.description}</p>
        <Link
          href={blog.url}
          className="inline-flex items-center gap-2 text-primary hover:underline mt-4"
        >
          En savoir plus
          <ArrowRight className="w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

type CardBlogProps = {
  blog: Blog;
};
