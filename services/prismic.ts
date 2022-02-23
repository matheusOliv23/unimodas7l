import Prismic from "@prismicio/client";
import { DefaultClient } from "@prismicio/client/types/client";

declare var process: {
  env: {
    PRISMIC_API_ENDPOINT: string;
    PRISMIC_ACCESS_TOKEN: string;
  };
};

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}
