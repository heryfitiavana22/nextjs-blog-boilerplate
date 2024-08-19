import Link from "next/link";
import { getAllBlogs } from "@/lib/get-blogs";
import { Section } from "@/components/section/section";
import { H1 } from "@/components/typography/typography";

export default function Home() {
  console.log(getAllBlogs());

  return (
    <>
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <H1 className="tracking-tighter">
                Explorez notre blog et nos projets
              </H1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Découvrez nos derniers articles de blog et nos projets en
                vedette.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/blogs"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Voir le blog
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Voir les projets
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
