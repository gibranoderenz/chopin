import React from "react";
import {
  MotivationSection,
  ProfileSection,
  ProgrammingSection,
} from "./sections";

const HomeModule = () => {
  return (
    <div className="flex flex-col gap-8">
      <MotivationSection />
      <ProgrammingSection />
      <ProfileSection />
    </div>
  );
};

export default HomeModule;
