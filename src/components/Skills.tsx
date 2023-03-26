import React from "react";
import { motion } from "framer-motion";
import { Title } from "./Text";
import Skill from "./Skill";
import { Skill as SkillType } from "../../typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-[2000px] md:px-10 justify-center mx-auto items-center"
    >
      <Title text="Habilidades" />

      <h3 className="absolute top-28 mb-10 uppercase tracking-[3px] text-gray-500 text-sm max-w-[80%]">
        Tecnologias dominadas
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 mt-10 md:mt-20">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
