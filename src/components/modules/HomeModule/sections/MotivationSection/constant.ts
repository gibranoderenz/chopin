import { Variants } from "framer-motion";

export const TEXTS: string[] = [
  "You know, life is interesting.",
  "😄",
  "Sometimes you are high up on the mountain.",
  "Sometimes you are in the valley.",
  "And sometimes,",
  "it may seem so tough,",
  "that there may seem to be no way out.",
  "🥺😭",
  "But you know, what?",
  "There will always be a way out.",
  "Hang in there, love! 💖",
];

export const cardVariants: Variants = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 0,
    rotate: -2,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.7,
    },
  },
};
