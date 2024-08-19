import { Project } from "@/types/data-type";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { ArrowRight } from "../icons/arrow-right";

export function CardProject({ project }: CardProjectProps) {
  return (
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-muted-foreground mt-2">{project.description}</p>
        <Link
          href={project.url}
          className="inline-flex items-center gap-2 text-primary hover:underline mt-4"
        >
          Voir le projet
          <ArrowRight className="w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

type CardProjectProps = {
  project: Project;
};
