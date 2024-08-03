"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export const EducationSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const negativeScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const negativeRotate = useTransform(scrollYProgress, [0, 1], [-3, 0]);

  return (
    <section className="min-h-screen bg-black">
      <h2 className="text-white font-bold text-4xl text-center py-16">
        Education
      </h2>

      <div className="h-[200vh]" ref={targetRef}>
        <motion.div
          style={{ scale, rotate }}
          className="w-full h-screen sticky top-0"
        >
          <Image
            src={"/assets/ui.jpeg"}
            alt="Test image"
            className="object-cover absolute"
            fill
          />
          <div className="flex flex-col absolute text-black top-6 left-8">
            <span className="text-xl font-bold">University of Indonesia</span>
            <span>Computer Science • Jul '21 - Present</span>
            <span className="italic">Source of picture: Myself 😁</span>
          </div>
        </motion.div>
        <motion.div
          style={{ scale: negativeScale, rotate: negativeRotate }}
          className="w-full h-screen relative"
        >
          <Image
            src={
              "https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg"
            }
            alt="Test image"
            className="object-cover absolute"
            fill
          />
          <div className="flex flex-col items-end absolute text-black top-6 right-8">
            <span className="text-xl font-bold">
              University of Pennsylvania
            </span>
            <span>International Guest Student Program • Aug '24 - Present</span>
            <Link
              className="underline italic"
              target="_blank"
              href={
                "https://www.cntraveler.com/activities/philadelphia/philadelphia/university-of-pennsylvania"
              }
            >
              Source of picture: Condé Nast Traveler
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
