import React from "react";
import { motion } from "framer-motion";
import { Title } from "./Text";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../../typings";

type Props = {
  experiences: Experience[];
};

const Experience = ({ experiences }: Props) => {
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
      <Title text="Experiências" />

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/80 scrollbar-thin">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
