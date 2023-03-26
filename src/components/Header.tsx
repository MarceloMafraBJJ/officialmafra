import React, { useState } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Social } from "../../typings";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {/* Social Icons */}

        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            target={"_blank"}
            style={{ height: 35, width: 35, marginRight: 8 }}
            network={social.title}
            className="hover:border-b-2 border-b-0 border-transparent hover:border-purple-400 transition-all"
          />
        ))}
      </motion.div>

      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        onClick={() => (window.location.href = "#contact")}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          target={"_blank"}
          style={{ height: 35, width: 35 }}
        />

        <p className="uppercase hidden md:inline-flex text-xs text-gray-400">
          Entre em contato!
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
