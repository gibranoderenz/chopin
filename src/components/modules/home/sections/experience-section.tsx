import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCES } from "../constants";
import { ExperienceCard } from "../elements";

export const ExperienceSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="min-h-screen">
      <h2 className="text-4xl font-bold text-center py-8">Experience</h2>
      <div
        style={{ height: `calc(100vh * ${EXPERIENCES.length} + 100vh)` }}
        ref={targetRef}
      >
        {EXPERIENCES.map((experience, index) => {
          // these calculations is so that the animation starts and ends properly for each card
          const range = 1 / EXPERIENCES.length;
          const start = range * index;
          const end = start + range;

          const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);
          const rotate = useTransform(scrollYProgress, [start, end], [0, 2]);
          const borderRadius = useTransform(
            scrollYProgress,
            [start, end],
            [0, 40]
          );

          return (
            <ExperienceCard
              {...experience}
              key={experience.id}
              scale={scale}
              rotate={rotate}
              borderRadius={borderRadius}
            />
          );
        })}
      </div>
    </div>
  );
};
