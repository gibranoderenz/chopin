import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCES } from "../constants";
import { ExperienceCard } from "../elements";

export const ExperienceSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const difference = 1 / EXPERIENCES.length;

  const range1 = [0, difference];
  const range2 = [difference, difference * 2];
  const range3 = [difference * 2, difference * 3];
  const range4 = [difference * 3, difference * 4];
  const range5 = [difference * 4, difference * 5];
  const range6 = [difference * 5, difference * 6];

  const scale1 = useTransform(scrollYProgress, range1, [1, 0.7]);
  const scale2 = useTransform(scrollYProgress, range2, [1, 0.7]);
  const scale3 = useTransform(scrollYProgress, range3, [1, 0.7]);
  const scale4 = useTransform(scrollYProgress, range4, [1, 0.7]);
  const scale5 = useTransform(scrollYProgress, range5, [1, 0.7]);
  const scale6 = useTransform(scrollYProgress, range6, [1, 0.7]);

  const rotate1 = useTransform(scrollYProgress, range1, [0, 2]);
  const rotate2 = useTransform(scrollYProgress, range2, [0, 2]);
  const rotate3 = useTransform(scrollYProgress, range3, [0, 2]);
  const rotate4 = useTransform(scrollYProgress, range4, [0, 2]);
  const rotate5 = useTransform(scrollYProgress, range5, [0, 2]);
  const rotate6 = useTransform(scrollYProgress, range6, [0, 2]);

  const borderRadius1 = useTransform(scrollYProgress, range1, [0, 40]);
  const borderRadius2 = useTransform(scrollYProgress, range2, [0, 40]);
  const borderRadius3 = useTransform(scrollYProgress, range3, [0, 40]);
  const borderRadius4 = useTransform(scrollYProgress, range4, [0, 40]);
  const borderRadius5 = useTransform(scrollYProgress, range5, [0, 40]);
  const borderRadius6 = useTransform(scrollYProgress, range6, [0, 40]);

  const scales = [scale1, scale2, scale3, scale4, scale5, scale6];
  const rotations = [rotate1, rotate2, rotate3, rotate4, rotate5, rotate6];
  const borderRadiuses = [
    borderRadius1,
    borderRadius2,
    borderRadius3,
    borderRadius4,
    borderRadius5,
    borderRadius6,
  ];

  return (
    <div className="min-h-screen">
      <h2 className="text-4xl font-bold text-center py-8">Experience</h2>
      <div
        style={{ height: `calc(100vh * ${EXPERIENCES.length} + 100vh)` }}
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
