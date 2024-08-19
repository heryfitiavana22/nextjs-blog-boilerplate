import { CardBlog } from "@/components/card/card-blog";
import { Section } from "@/components/section/section";
import { H2 } from "@/components/typography/typography";
import { getAllBlogs } from "@/lib/get-blogs";

export default function Page() {
  const blogs = getAllBlogs();

  return (
    <Section className="">
      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <H2 className="tracking-tighter">
            Blog
          </H2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogs.map((blog) => (
          <CardBlog key={blog._id} blog={blog} />
        ))}
      </div>
    </Section>
  );
}
