import React from "react";
import TitleSection from "@/components/landing-page/title-section";
import { CLIENTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Banner from "../../../public/appBanner.png";
import Cal from "../../../public/cal.png";

const HomePageLayout = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="overflow-hidden px-4 sm:px-6 mt-10 flex flex-col items-center lg:gap-4">
        <TitleSection
          pill="✨Your workspace perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />

        <div className="bg-gradient-to-r from-primary to-brand-washedBlue p-[2px] mt-6 rounded-xl sm:w-[300px]">
          <Button
            variant="secondary"
            className="w-full rounded-[10px] p-6 text-2xl bg-background"
          >
            Get Cypress Free
          </Button>
        </div>

        <div className="relative md:mt-[-90px] mt-[-40px] w-[750px] sm:w-full flex justify-center ml-[-50px] sm:ml-0">
          <Image src={Banner} alt="Application Banner" priority />
          <div className="absolute inset-x-0 top-[-50%] bottom-0 z-10 bg-gradient-to-t dark:from-background" />
        </div>
      </section>

      {/* Client Slider */}
      <section className="relative">
        <div className="overflow-hidden flex 
          before:absolute before:inset-y-0 before:left-0 before:w-20 before:bg-gradient-to-r before:from-background before:to-transparent before:z-10 
          after:absolute after:inset-y-0 after:right-0 after:w-20 after:bg-gradient-to-l after:from-background after:to-transparent after:z-10"
        >
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex flex-nowrap animate-slide">
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className="relative w-[200px] m-20 shrink-0 flex items-center"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 flex flex-col items-center relative">
        <div className="absolute top-22 w-[30%] h-32 blur-[120px] rounded-full bg-brand-primaryPurple/50 -z-10" />

        <TitleSection
          pill="Features"
          title="Keep track of your meetings all in one place"
          subheading="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
        />

        <div className="mt-10 max-w-[450px] rounded-2xl border-8 border-washed-purple-300 border-opacity-10">
          <Image src={Cal} alt="Calendar Banner" className="rounded-2xl" />
        </div>
      </section>

      <section>
        
      </section>
    </>
  );
};

export default HomePageLayout;
