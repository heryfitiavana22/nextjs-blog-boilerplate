import { MDXContent } from "@/components/mdx/mdx-content";
import { Section } from "@/components/section/section";
import { H1 } from "@/components/typography/typography";
import { DateHumanizer } from "@/lib/date-humanizer";
import { getOneBlog } from "@/lib/get-blogs";
import Image from "next/image";

export default async function Page({ params }: PageProps) {
  const blog = getOneBlog(params.id);

  return (
    <Section id="blog" className="blog">
      <div className="pb-12 md:pb-16 lg:pb-20">
        <div className="space-y-4">
          <div className="space-y-2">
            <H1 className="font-bold tracking-tighter">{blog.title}</H1>
            {blog.description && (
              <p className="text-muted-foreground md:text-xl">
                {blog.description}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="text-sm text-muted-foreground">
              {DateHumanizer.format(blog.date)}
            </div>
          </div>
        </div>
        <article className="space-y-5 mt-12">
          <MDXContent code={blog.body.code} />
        </article>

        {blog.bannerImage && (
          <div className="mt-12">
            <Image
              src={"/images/blogs/" + blog.bannerImage}
              alt={blog.title}
              width="100"
              height="100"
              className="mx-auto rounded-lg w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </Section>
  );
}

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: PageProps) {
  const blog = getOneBlog(params.id);

  return {
    title: blog.title,
    description: blog.description,
  };
}
