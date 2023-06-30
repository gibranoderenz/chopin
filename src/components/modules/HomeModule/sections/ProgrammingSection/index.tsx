import Spline from "@splinetool/react-spline";
import React from "react";
import { INTERESTS } from "./constant";

export const ProgrammingSection = () => {
  return (
    <section className="flex items-center justify-center h-[70vh] flex-col gap-16">
      <Spline
        scene="https://prod.spline.design/Vfqrlr3YZGSGXn2r/scene.splinecode"
        className="h-[50vh]"
      />

      <span className="font-semibold text-2xl">
        You know what else is interesting? (at least for me)
      </span>

      <div className="flex items-center justify-center flex-wrap gap-4">
        {INTERESTS.map((interest, index) => {
          return (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl text-black hover:scale-105 hover:font-semibold transform duration-75 ease-in"
            >
              <span className="text-xl">{interest}</span>
            </div>
          );
        })}
      </div>

      <span className="text-xl">
        Speaking of programming 👀, here is what I have been doing on that
        matter:
      </span>
    </section>
  );
};
