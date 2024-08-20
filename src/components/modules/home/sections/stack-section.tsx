import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  BiLogoAws,
  BiLogoDjango,
  BiLogoDocker,
  BiLogoJava,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoSpringBoot,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiAndroid,
  SiExpress,
  SiGooglecloud,
  SiNestjs,
  SiRedis,
} from "react-icons/si";
import { TbBrandKotlin, TbBrandNextjs } from "react-icons/tb";

export const StackSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div className="relative h-[400vh]" ref={targetRef}>
      <h2 className="text-4xl font-bold text-center py-8">Stacks</h2>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-8 px-8 relative text-white"
        >
          <div className="bg-pink-700 w-[85vw] md:w-[35vw] h-[40vh] rounded-3xl z-[2] p-6 flex flex-col gap-2">
            <span className="text-3xl font-bold">Languages</span>
            <div className="flex h-full items-center justify-center gap-4 md:gap-6 flex-wrap">
              <BiLogoTypescript size={64} />
              <BiLogoPython size={64} />
              <BiLogoJava size={64} />
              <TbBrandKotlin size={64} />
            </div>
          </div>
          <div className="bg-red-600 w-[85vw] md:w-[35vw] h-[40vh] rounded-3xl z-[2] p-6 flex flex-col gap-2">
            <span className="text-3xl font-bold">Frontend</span>
            <div className="flex h-full items-center justify-center gap-4 md:gap-6 flex-wrap">
              <TbBrandNextjs size={64} />
            </div>
          </div>
          <div className="bg-orange-600 w-[85vw] md:w-[35vw] h-[40vh] rounded-3xl z-[2] p-6 flex flex-col gap-2">
            <span className="text-3xl font-bold">Backend</span>
            <div className="flex h-full items-center justify-center gap-4 md:gap-6 flex-wrap">
              <SiNestjs size={64} />
              <BiLogoDjango size={64} />
              <BiLogoSpringBoot size={64} />
              <SiExpress size={64} />
              <BiLogoPostgresql size={64} />
            </div>
          </div>
          <div className="bg-blue-600 w-[85vw] md:w-[35vw] h-[40vh] rounded-3xl z-[2] p-6 flex flex-col gap-2">
            <span className="text-3xl font-bold">Infra</span>
            <div className="flex h-full items-center justify-center gap-4 md:gap-6 flex-wrap">
              <BiLogoDocker size={64} />
              <SiRedis size={64} />
              <SiGooglecloud size={64} />
              <BiLogoAws size={64} />
            </div>
          </div>
          <div className="bg-green-600 w-[85vw] md:w-[35vw] h-[40vh] rounded-3xl z-[2] p-6 flex flex-col gap-2">
            <span className="text-3xl font-bold">Mobile</span>
            <div className="flex h-full items-center justify-center gap-4 md:gap-6 flex-wrap">
              <SiAndroid size={64} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
