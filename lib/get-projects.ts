import { allProjects } from "@/.contentlayer/generated";
import { Project } from "@/types/data-type";
import { notFound } from "next/navigation";

export const getAllProjects = (): Project[] => {
  return allProjects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export const getLastProjects = (limit = 4): Project[] => {
  return getAllProjects().slice(0, limit);
};

export const getOneProject = (filename: string): Project => {
  const project = allProjects.find(
    (item) => item.url === `/projects/${filename}`
  );
  if (project) return project;
  return notFound();
};
