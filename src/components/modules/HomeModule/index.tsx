import React from "react";
import { MotivationSection, ProfileSection } from "./sections";

const HomeModule = () => {
  return (
    <div className="flex flex-col gap-8">
      <MotivationSection />
      <ProfileSection />
    </div>
  );
};

export default HomeModule;
