import { createClient } from "contentful";

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Missing Contentful env vars: CONTENTFUL_SPACE_ID and/or CONTENTFUL_ACCESS_TOKEN"
  );
}

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});
