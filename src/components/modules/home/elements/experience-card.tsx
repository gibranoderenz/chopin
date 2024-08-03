import { motion } from "framer-motion";
import React from "react";
import { ExperienceCardProps } from "../interface";

export const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
  const {
    scale,
    rotate,
    borderRadius,
    backgroundColor,
    color,
    place,
    title,
    period,
    mode,
    type,
    jobDescriptions,
  } = props;

  return (
    <motion.div
      style={{
        scale,
        rotate,
        borderRadius,
        backgroundColor,
        color,
      }}
      className="h-screen sticky top-0 p-4 md:p-8"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-xl md:text-3xl font-bold">{title}</span>
          <span className="text-lg md:text-xl font-medium">{place}</span>
          <span className="text-md md:text-lg">
            {period} • {mode} • {type}
          </span>
        </div>

        <ul className="list-disc text-md md:text-2xl pl-5 md:leading-9">
          {jobDescriptions.map((description, index) => {
            return <li key={index}>{description}</li>;
          })}
        </ul>
      </div>
    </motion.div>
  );
};
