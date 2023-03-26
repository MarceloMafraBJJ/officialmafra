type Props = {
  text: string;
};

export const Title = ({ text }: Props) => (
  <h3 className="absolute top-20 md:top-16 uppercase tracking-[12px] md:tracking-[20px] text-gray-500 text-xl ml-8">
    {text}
  </h3>
);
