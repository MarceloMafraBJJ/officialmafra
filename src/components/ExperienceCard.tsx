import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[450px] md:h-[400px] w-[80vw] max-w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-100 md:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <h4 className="text-xl md:text-4xl text-center uppercase font-semibold tracking-[8px] ml-2">
        {experience?.stack}
      </h4>

      <div className="flex space-x-4">
        {experience?.technologies.map((technology, i) => (
          <motion.img
            key={i}
            initial={{ y: -80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8 + i * 0.2,
            }}
            src={urlFor(technology.image).url()}
            alt="technologies"
            className="rounded-full h-12 w-12 xl:w-14 xl:h-14 object-cover object-center"
          />
        ))}
      </div>

      <ul className="space-y-8 md:space-y-5 font-medium pr-0 md:pr-10 text-base w-full h-80 md:text-lg overflow-y-scroll scrollbar-track-gray-900/20 scrollbar-thumb-purple-500/80 scrollbar-thin">
        {experience?.points.map((point, i) => (
          <li key={i} className="break-all break-words">
            {" "}
            - {point}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ExperienceCard;
