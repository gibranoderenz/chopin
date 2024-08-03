import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

export const ContactSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-400, 0]);

  const [openChatMenu, setOpenChatMenu] = useState(false);

  const variants = {
    open: {
      width: "100%",
      height: "100%",
      transition: {
        duration: 0.5,
        ease: [0.83, 0, 0.17, 1],
        type: "spring",
      },
    },
    closed: {
      width: 50,
      height: 50,
      transition: {
        duration: 0.5,
        ease: [0.83, 0, 0.17, 1],
        type: "spring",
      },
    },
  };

  return (
    <div ref={targetRef}>
      <div className="h-screen flex flex-col gap-4 items-center justify-center">
        <span className="text-3xl font-bold text-white rounded-3xl bg-black w-[150px] h-[60px] flex items-center justify-center">
          Chat?
        </span>
        <motion.div
          variants={variants}
          initial="closed"
          animate={openChatMenu ? "open" : "closed"}
          className="rounded-3xl bg-black text-white flex items-center justify-center relative p-2 max-w-[85vw] md:max-w-[40vw] max-h-[30vh]"
        >
          <button
            className={openChatMenu ? "absolute top-6 right-6" : ""}
            onClick={() => {
              setOpenChatMenu((prev) => !prev);
            }}
          >
            {openChatMenu ? (
              <CgClose className="w-6 h-6" />
            ) : (
              <HiOutlineChatBubbleBottomCenterText className="w-8 h-8" />
            )}
          </button>
          {openChatMenu && (
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <span className="text-2xl">
                You can contact me via{" "}
                <Link
                  href={"mailto:gibranoderenz123@gmail.com"}
                  className="underline"
                >
                  email
                </Link>
                .
              </span>
            </div>
          )}
        </motion.div>
      </div>
      <div className="bg-black h-[20vh]">
        <motion.div
          style={{ y }}
          className="text-white p-8 flex h-full items-center"
        >
          <span className="text-2xl font-bold underline w-full text-center">
            aglib.xyz
          </span>
        </motion.div>
      </div>
    </div>
  );
};
