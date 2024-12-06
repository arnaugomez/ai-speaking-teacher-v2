import { Button } from "~/common/ui/shadcn/components/ui/button";
import type { Route } from "./+types/teacher-page";
import { Textarea } from "~/common/ui/shadcn/components/ui/textarea";
import { cn } from "~/common/ui/shadcn/lib/utils";
import { textStyles } from "~/common/ui/styles/text-styles";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="px-4 py-16">
      <div className="max-w-prose mx-auto">
        <TeacherForm />
      </div>
    </div>
  );
}

function TeacherForm() {
  return (
    <form>
      <h1 className={cn(textStyles.h1)}>AI speaking lessons</h1>
      <div className="h-6"></div>
      <Textarea placeholder="Enter the content or topic of the lesson" />
      <div className="h-4"></div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
