import React from "react";
import { motion } from "framer-motion";
import { Title } from "./Text";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 overflow-hidden"
    >
      <Title text="Projetos" />

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/80 scrollbar-thin">
        {projects.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-44 h-screen"
            key={index}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
              }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
              className="relative md:h-[200px] w-[350px] md:w-[400px] mx-auto object-cover"
            />

            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center underline decoration-purple-500/50">
                {project?.title}
              </h4>

              <div className="flex items-center justify-center space-x-2">
                {project?.technologies.map((technology, i) => (
                  <motion.img
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8 + i * 0.2,
                    }}
                    src={urlFor(technology.image).url()}
                    alt="technologies"
                    className="rounded-full h-10 w-10 object-cover object-center"
                  />
                ))}
              </div>

              <p className="text-center text-base md:max-w-[700px]">
                {project?.summary}
              </p>
              <h5 className="text-xl font-semibold text-center">
                {index + 1} │ {projects.length}
              </h5>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-purple-500/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
