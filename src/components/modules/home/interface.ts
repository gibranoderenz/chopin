import { MotionValue } from "framer-motion";

export interface ExperienceCardProps {
  id: number;
  scale?: MotionValue<number>;
  rotate?: MotionValue<number>;
  borderRadius?: MotionValue<number>;
  backgroundColor: string;
  color: string;
  borderColor: string
  place: string;
  title: string;
  period: string;
  mode: string;
  type: string;
  jobDescriptions: string[];
}
