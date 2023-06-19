import { motion } from "framer-motion";
import React from "react";
import { cardVariants } from "../../sections/MotivationSection/constant";
import { MotivationCardProps } from "./interface";

export const MotivationCard: React.FC<MotivationCardProps> = ({ text }) => {
  return (
    <motion.div
      className="pt-[20px] mb-[-100px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="flex items-center justify-center h-[430px] w-[300px] sm:w-[500px] md:w-[600px] text-xl sm:text-2xl md:text-3xl bg-white text-black shadow-card rounded-3xl text-center"
        variants={cardVariants}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};
