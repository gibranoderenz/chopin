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

  const difference = 1 / EXPERIENCES.length
  const scales: MotionValue<number>[] = []
  const rotations: MotionValue<number>[] = []
  const borderRadiuses: MotionValue<number>[] = []

  for (let i = 0; i < EXPERIENCES.length; i++) {
    const range = [difference * i, difference * i + 1]
    const scale = useTransform(scrollYProgress, range, [1, 0.4]);
    const rotate = useTransform(scrollYProgress, range, [0, 2]);
    const borderRadius = useTransform(scrollYProgress, range, [0, 120]);
    scales.push(scale)
    rotations.push(rotate)
    borderRadiuses.push(borderRadius)
  }

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
