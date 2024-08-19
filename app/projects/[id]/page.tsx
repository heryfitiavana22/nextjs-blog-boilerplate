import GithubRound from "@/components/icons/github-round";
import { MDXContent } from "@/components/mdx/mdx-content";
import { Section } from "@/components/section/section";
import { H1 } from "@/components/typography/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getOneProject } from "@/lib/get-projects";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: PageProps) {
  const project = getOneProject(params.id);

  return (
    <Section id="project" className="">
      <div className="pb-12 md:pb-16 lg:pb-20">
        <div className="space-y-4">
          <div className="space-y-2">
            <Badge variant="outline">{project.category}</Badge>
            <H1 className="font-bold tracking-tighter">{project.name}</H1>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technos.map((tag, k) => (
              <Badge variant="secondary" key={k}>
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.github && (
              <Link href={project.github} target="_blank">
                <Button variant="outline">
                  <GithubRound />
                  <span>Github</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
        <article className="space-y-5 mt-12">
          <MDXContent code={project.body.code} />
        </article>

        {project.bannerImage && (
          <div className="mt-12">
            <Image
              src={"/images/projects/" + project.bannerImage}
              alt={project.description}
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
  const project = getOneProject(params.id);

  return {
    title: project.name,
    description: project.description,
  };
}
