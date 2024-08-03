import {
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  StackSection,
} from "./sections";
import { ProjectSection } from "./sections/project-section";

export const HomeModule = () => {
  return (
    <div>
      <HeroSection />
      <EducationSection />
      <StackSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};
