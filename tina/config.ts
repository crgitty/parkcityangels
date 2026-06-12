import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH ?? process.env.VERCEL_GIT_COMMIT_REF ?? "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: { outputFolder: "admin", publicFolder: "public" },
  media: { tina: { mediaRoot: "uploads", publicFolder: "public" } },
  schema: {
    collections: [
      {
        name: "team",
        label: "Team",
        path: "content/team",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Role",
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Bio",
          },
          {
            type: "image",
            name: "avatar",
            label: "Avatar",
          },
        ],
      },
      {
        name: "portfolio",
        label: "Portfolio",
        path: "content/portfolio",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Company Name",
            required: true,
          },
          {
            type: "string",
            name: "sector",
            label: "Sector",
            options: ["software", "healthcare", "consumer", "fintech", "hardware"],
          },
          {
            type: "string",
            name: "stage",
            label: "Stage",
            options: ["Pre-Seed", "Seed", "Series A"],
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
          },
          {
            type: "string",
            name: "website",
            label: "Website",
          },
        ],
      },
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "heroHeading",
            label: "Hero Heading",
          },
          {
            type: "string",
            name: "heroSubtext",
            label: "Hero Subtext",
            ui: {
              component: "textarea",
            },
          },
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
    ],
  },
});
