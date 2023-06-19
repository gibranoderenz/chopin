import React from "react";
import { TEXTS } from "./constant";
import { MotivationCard } from "../../module-elements/MotivationCard";

export const MotivationSection = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      {TEXTS.map((text) => (
        <MotivationCard text={text} key={text} />
      ))}
    </div>
  );
};
