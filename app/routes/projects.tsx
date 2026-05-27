import { ProjectsContent } from "~/components/projects";
import type { Route } from "./+types/home";
import { ExperienceContent } from "~/components/experience";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects" },
    { name: "description", content: "Projects" },
  ];
}

export default function Home() {
  return <ProjectsContent />;
}
