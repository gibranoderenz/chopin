import React from "react";
import { IntroductionSection, ProfileSection } from "./sections";

const HomeModule = () => {
  return (
    <div className="flex flex-col gap-8">
      <IntroductionSection />
      <ProfileSection />
    </div>
  );
};

export default HomeModule;
