import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

export const client =
  space && accessToken
    ? createClient({
        space,
        accessToken,
      })
    : null;
