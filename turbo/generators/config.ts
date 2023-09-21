import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("package", {
    description:
      "Generate a new nestjs library workspace.",
    prompts: [
      {
        "type": "input",
        "name": "name",
        "message": "What is the name of the library?",
      },
      {
        "type": "input",
        "name": "packageName",
        "message": "What is the package name to give? @sketchmonk/",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "{{ turbo.paths.root }}/packages/{{ dashCase name }}",
        templateFiles: "templates/library/**/*.hbs",
        base: "templates/library"
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/{{ dashCase name }}/.gitignore",
        templateFile: "templates/library/.gitignore.hbs",
      }
    ],
  });
}
