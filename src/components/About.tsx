import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../../sanity";
import { PageInfo } from "../../typings";
import { Title } from "./Text";

type Props = {
  pageInfo: PageInfo;
};
const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-7 justify-evenly mx-auto items-center"
    >
      <Title text="Sobre" />

      <div className="flex justify-center items-center flex-col md:flex-row w-full mt-16 md:mt-0">
        <motion.img
          src={urlFor(pageInfo?.profilePic).url()}
          alt="profile-image"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="md:mb-0 flex-shrink-0 w-56 h-60 rounded-xl object-cover md:rounded-lg md:w-56 md:h-80"
        />

        <div className=" space-y-2 md:space-y-5 px-0 md:px-10 md:w-[600px] mt-5">
          <h4 className="text-xl md:text-4xl font-semibold uppercase">
            Um pouco{" "}
            <span className="underline decoration-purple-300/50">
              sobre mim
            </span>
          </h4>

          <p className="text-sm md:text-base">{pageInfo?.backgroundInformation}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
