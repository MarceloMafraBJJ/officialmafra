import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Book } from "../../../typings";

const query = groq`
    *[_type == "books"]
`;

type Data = {
  books: Book[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const books: Book[] = await sanityClient.fetch(query);

  res.status(200).json({ books });
}
