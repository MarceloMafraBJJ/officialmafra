import React from "react";
import { motion } from "framer-motion";
import { Title } from "./Text";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const {
    reset,
    register,
    trigger,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    reset();

    if (!isValid) {
      return e.preventDefault();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:flex-row md:max-w-7xl justify-evenly mx-auto items-center px-10"
    >
      <Title text="Contato" />

      <div className="flex flex-col space-y-5 mt-10">
        <h4 className="text-xl font-semibold text-center uppercase">
          Vamos conversar!
          <br />
          <span className="decoration-purple-500/50 underline normal-case">
            Entre em contato.
          </span>
        </h4>

        <ul className="space-y-4 ">
          <li className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-purple-500 h-6 w-6 animate-pulse" />
            <p className="text-base md:text-2xl">{"+55 (48) 99975-9801"}</p>
          </li>

          <li className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-purple-500 h-6 w-6 animate-pulse" />
            <p className="text-base md:text-2xl">marcelomafradev@gmail.com</p>
          </li>
        </ul>

        <form
          target="_black"
          onSubmit={onSubmit}
          action="https://formsubmit.co/546870d20de19fc000b29bf164f46f9c"
          method="POST"
          className="flex flex-col space-y-2 w-[100%] mx-auto"
        >
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              className="contactInput"
              placeholder="Nome"
              {...register("name")}
              required
            />
            <input
              type="email"
              className="contactInput"
              placeholder="Email"
              {...register("email")}
              required
            />
          </div>

          <input
            type="text"
            className="contactInput"
            placeholder="Assunto"
            {...register("subject")}
            required
          />

          <textarea
            className="contactInput"
            placeholder="Mensagem"
            {...register("message")}
            required
          />
          <button
            type="submit"
            className="bg-purple-500 p-2 md:py-5 px-10 rounded-md text-black font-bold text-base uppercase"
          >
            Enviar
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
