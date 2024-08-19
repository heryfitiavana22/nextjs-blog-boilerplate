import { CardProject } from "@/components/card/card-project";
import { Section } from "@/components/section/section";
import { H2 } from "@/components/typography/typography";
import { getAllProjects } from "@/lib/get-projects";

export default function Page() {
  const projects = getAllProjects();

  return (
    <Section>
      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <H2 className="tracking-tighter">Projet</H2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <CardProject key={project._id} project={project} />
        ))}
      </div>
    </Section>
  );
}
