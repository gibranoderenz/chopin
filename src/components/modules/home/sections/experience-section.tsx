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
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.7]);
  const scale3 = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.7]);
  const scale4 = useTransform(scrollYProgress, [0.6, 0.8], [1, 0.7]);
  const scale5 = useTransform(scrollYProgress, [0.8, 1], [1, 0.7]);

  const rotate = useTransform(scrollYProgress, [0, 0.2], [0, 2]);
  const rotate2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 2]);
  const rotate3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 2]);
  const rotate4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 2]);
  const rotate5 = useTransform(scrollYProgress, [0.8, 1], [0, 2]);

  const borderRadius = useTransform(scrollYProgress, [0, 0.2], [0, 40]);
  const borderRadius2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 40]);
  const borderRadius3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 40]);
  const borderRadius4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 40]);
  const borderRadius5 = useTransform(scrollYProgress, [0.8, 1], [0, 40]);

  const scales = [scale, scale2, scale3, scale4, scale5];
  const rotations = [rotate, rotate2, rotate3, rotate4, rotate5];
  const borderRadiuses = [
    borderRadius,
    borderRadius2,
    borderRadius3,
    borderRadius4,
    borderRadius5,
  ];

  return (
    <div className="min-h-screen">
      <h2 className="text-4xl font-bold text-center py-8">Experience</h2>
      <div
        style={{ height: `calc(100vh * ${EXPERIENCES.length})` }}
        ref={targetRef}
      >
        {EXPERIENCES.map((experience, index) => {
          return (
            <ExperienceCard
              {...experience}
              key={experience.id}
              scale={scales[index]}
              rotate={rotations[index]}
              borderRadius={borderRadiuses[index]}
            />
          );
        })}
      </div>
    </div>
  );
};
