import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../../sanity";
import { PageInfo } from "../../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Olá, Meu Nome é Marcelo Mafra!",
      "Guy-who-loves-coffe.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        src={urlFor(pageInfo?.heroImage).url()}
        alt="hero-image"
        className="relative rounded-full h-36 w-36 mx-auto object-cover"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px] md:tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-lg md:text-2xl font-semibold px-5">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#D8B4FE" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">Sobre</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experiências</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projetos</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton invisible md:visible">
              Habilidades
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
