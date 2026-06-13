// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH ?? process.env.VERCEL_GIT_COMMIT_REF ?? "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: { outputFolder: "admin", publicFolder: "public" },
  media: { tina: { mediaRoot: "uploads", publicFolder: "public" } },
  schema: {
    collections: [
      // ─── Team ────────────────────────────────────────────────────────────────
      {
        name: "team",
        label: "Team",
        path: "content/team",
        fields: [
          { type: "string", name: "name", label: "Name", required: true },
          { type: "string", name: "role", label: "Role" },
          { type: "string", name: "bio", label: "Bio", ui: { component: "textarea" } },
          { type: "image", name: "avatar", label: "Photo" }
        ]
      },
      // ─── Portfolio ───────────────────────────────────────────────────────────
      {
        name: "portfolio",
        label: "Portfolio",
        path: "content/portfolio",
        fields: [
          { type: "string", name: "name", label: "Company Name", required: true },
          {
            type: "string",
            name: "sector",
            label: "Sector",
            options: ["software", "healthcare", "consumer", "fintech", "hardware"]
          },
          {
            type: "string",
            name: "stage",
            label: "Stage",
            options: ["Pre-Seed", "Seed", "Series A"]
          },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "image", name: "logo", label: "Logo" },
          { type: "string", name: "website", label: "Website URL" }
        ]
      },
      // ─── Pages ───────────────────────────────────────────────────────────────
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        ui: {
          allowedActions: { create: false, delete: false },
          router: ({ document }) => {
            if (document._sys.filename === "homepage") return "/";
            if (document._sys.filename === "about") return "/about";
            return void 0;
          }
        },
        fields: [
          { type: "string", name: "title", label: "SEO Title" },
          // ── Hero ──
          { type: "string", name: "heroEyebrow", label: "Hero \u2014 Eyebrow text" },
          { type: "string", name: "heroHeading", label: "Hero \u2014 Main heading" },
          {
            type: "string",
            name: "heroSubtext",
            label: "Hero \u2014 Subtext",
            ui: { component: "textarea" }
          },
          {
            type: "object",
            name: "heroStats",
            label: "Hero \u2014 Stats strip",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.stat }) },
            fields: [{ type: "string", name: "stat", label: "Stat (e.g. $100M+ invested)" }]
          },
          // ── Why PCA section ──
          { type: "string", name: "whyKicker", label: "Why PCA \u2014 Section label" },
          { type: "string", name: "whyHeading", label: "Why PCA \u2014 Heading" },
          { type: "string", name: "whyBody", label: "Why PCA \u2014 Body copy", ui: { component: "textarea" } },
          // ── Stat cards ──
          {
            type: "object",
            name: "statCards",
            label: "Stat Cards",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "label", label: "Label (e.g. Invested capital)" },
              { type: "string", name: "value", label: "Value (e.g. $100M+)" },
              { type: "string", name: "description", label: "Description" }
            ]
          },
          // ── Thesis section ──
          { type: "string", name: "thesisKicker", label: "Thesis \u2014 Section label" },
          { type: "string", name: "thesisHeading", label: "Thesis \u2014 Heading" },
          {
            type: "object",
            name: "thesisCards",
            label: "Thesis Cards",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "label", label: "Card label" },
              { type: "string", name: "heading", label: "Card heading" },
              { type: "string", name: "body", label: "Card body", ui: { component: "textarea" } }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
