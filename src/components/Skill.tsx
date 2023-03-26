import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
        alt="skill-image"
        className="rounded-full border border-gray-500 object-cover h-14 w-14 md:h-20 md:w-20 filter md:group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-black h-20 w-20 rounded-full z-0 md:visible invisible">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm font-bold text-white opacity-100 text-center">
            {skill?.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
