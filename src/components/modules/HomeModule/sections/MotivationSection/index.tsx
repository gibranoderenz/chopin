import { motion, Variants } from "framer-motion";
import React from "react";

interface Props {
  text: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 0,
    rotate: -2,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.7,
    },
  },
};

function Card({ text }: Props) {
  return (
    <motion.div
      className="pt-[20px] mb-[-100px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="flex items-center justify-center h-[430px] w-[300px] md:w-[600px] text-xl md:text-3xl bg-white text-black shadow-card rounded-3xl text-center"
        variants={cardVariants}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}

const texts: string[] = [
  "You know, life is interesting.",
  "😄",
  "Sometimes you are high up on the mountain.",
  "Sometimes you are in the valley.",
  "And sometimes,",
  "it may seem so tough,",
  "that there may seem to be no way out.",
  "🥺😭",
  "But you know, what?",
  "There will always be a way out.",
  "Hang in there, love! 💖",
];

export const MotivationSection = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      {texts.map((text) => (
        <Card text={text} key={text} />
      ))}
    </div>
  );
};
