import React from "react";
import { motion } from "framer-motion";
import { Title } from "./Text";

import { Book } from "../../typings";
import BookCard from "./BookCard ";

type Props = {
  books: Book[];
};

const Books = ({ books }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col text-left md:flex-row max-w-full px-4 md:px-10 justify-evenly mx-auto items-center"
    >
      <Title text="Livros que indico" />

      <div className="w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory  scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/80 scrollbar-thin">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </motion.div>
  );
};

export default Books;
