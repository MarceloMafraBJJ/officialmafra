import { Book } from "../../typings";

export const fetchBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getBooks`);

  const data = await res.json();

  const books: Book[] = data.books;

  return books;
};
