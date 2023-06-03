import React from "react";
import { motion } from "framer-motion";
import { Book } from "../../typings";
import { urlFor } from "../../sanity";
import Link from "next/link";

type Props = {
  book: Book;
};

const BookCard = ({ book }: Props) => {
  return (
    <article className="flex rounded-lg items-center flex-shrink-0 h-[320px] w-[full] max-w-[90%] md:max-w-[550px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-100 md:opacity-40 transition-opacity duration-200">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <motion.img
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          src={urlFor(book.image).url()}
          alt="technologies"
          className="md:w-full w-[130px] max-h-[200px] md:max-h-[250px] object-cover rounded-lg"
        />

        <div className="flex flex-col">
          <h1 className="text-xs md:text-base text-center uppercase font-semibold tracking-[2px]">
            {book?.name}
          </h1>
          <p className="text-sm mt-2 text-center hidden md:block">{book?.descripton}</p>
          <Link
            href={book?.url}
            className="mt-2 text-center border border-neutral-400 px-2 py-1 rounded-full hover:bg-neutral-200 hover:text-[#242424] transition-all uppercase text-sm md:w-[80%] mx-auto"
             target="_blank"
          >
            Adquirir na Amazon
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
