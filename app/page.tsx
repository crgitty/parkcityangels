import { client } from "@/tina/__generated__/client";
import HomePageClient from "@/components/HomePageClient";

export default async function HomePage() {
  const result = await client.queries.pages({ relativePath: "homepage.md" });

  return (
    <HomePageClient
      data={result.data}
      query={result.query}
      variables={result.variables}
    />
  );
}
