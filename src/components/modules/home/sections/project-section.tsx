import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export const ProjectSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const difference = 1 / 3
  const x = useTransform(scrollYProgress, [0, difference], ["0%", "-150%"]);
  const x2 = useTransform(scrollYProgress, [difference, difference * 2], ["0%", "-150%"]);
  const x3 = useTransform(scrollYProgress, [difference * 2, difference * 3], ["0%", "-150%"]);

  return (
    <div className="min-h-screen">
      <h2 className="text-4xl font-bold py-16 text-center">Projects</h2>
      <div className="h-[400vh]" ref={targetRef}>
        <div className="h-screen flex items-center justify-center overflow-hidden sticky top-0">
          <motion.div
            style={{ x }}
            className="flex flex-col items-center gap-4 w-[90vw] md:w-[75vw] bg-[#FEC514] text-black rounded-3xl p-8"
          >
            <span className="text-2xl font-bold w-full">SupaBank</span>
            <div className="relative w-full md:w-4/5 aspect-video">
              <Image
                src={"/assets/supabank-cover.png"}
                className="object-contain rounded-3xl"
                alt="SupaBank app illustration"
                fill
              />
            </div>
            <Link
              target="_blank"
              href="https://docs.google.com/presentation/d/1fx0ebylXWxtID2Ywna1bgqSwIK3xEOTg/edit"
              className="font-bold text-center text-md md:text-xl italic underline"
            >
              Link to our hackathon-winning pitch deck
            </Link>
          </motion.div>
        </div>

        <div className="h-screen flex items-center justify-center overflow-hidden sticky top-0">
          <motion.div
            style={{ x: x2 }}
            className="flex flex-col items-center gap-4 w-[90vw] md:w-[75vw] bg-[#E4D8F0] text-[#564270] rounded-3xl p-8 border-x-4 border-b-8 border-[#D1C0E4]"
          >
            <span className="text-2xl font-bold w-full">Eventable</span>
            <div className="relative w-full md:w-4/5 aspect-[1892/898]">
              <Image
                src={"/assets/eventable-cover.png"}
                className="object-contain rounded-3xl outline outline-[#D1C0E4]"
                alt="Eventable website illustration"
                fill
              />
            </div>
            <Link
              href={"https://eventable.org"}
              target="_blank"
              className="font-bold text-center text-md md:text-xl italic underline"
            >
              Link to the project
            </Link>
          </motion.div>
        </div>

        <div className="h-screen flex items-center justify-center overflow-hidden sticky top-0">
          <motion.div
            style={{ x: x3 }}
            className="flex flex-col items-center gap-4 w-[90vw] md:w-[75vw] bg-[#BFE0FC] text-[#0D47A1] rounded-3xl p-8"
          >
            <span className="text-2xl font-bold w-full">Blurred Basket</span>
            <div className="relative w-full md:w-4/5 aspect-video">
              <Image
                src={"/assets/blurred-basket-cover.png"}
                className="object-contain rounded-3xl outline outline-[#50ADED]"
                alt="Blurred Basket app illustration"
                fill
              />
            </div>
            <Link
              href={"https://youtu.be/ROIhAE-D_Rw"}
              target="_blank"
              className="font-bold text-center text-md md:text-xl italic underline"
            >
              Link to the mobile demo (I worked on the mobile side of the
              project)
            </Link>
          </motion.div>
        </div>

        <div className="h-screen flex items-center justify-center overflow-hidden sticky top-0">
          <div className="w-[90vw] md:w-[75vw] h-[60vh] md:h-[85vh] bg-gray-100 flex items-center justify-center rounded-3xl p-8 outline-dashed outline-4 outline-offset-2 outline-gray-500">
            <span className="text-2xl font-bold text-gray-500">
              Your project?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
