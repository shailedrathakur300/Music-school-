import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { BackgroundLines } from "@/components/ui/background-lines";

function HeroSection() {
  return (
    <div>
      <BackgroundLines className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Welcome to Ania ❁ Design Studio
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            I&#39;m a Graphics Designer. I specialize in creating Eye Catching,
            Interactive, and Engaging Designs. I love creating visually stunning
            and unique designs that can help your business stand out in a
            crowded market.
          </p>
        </div>
      </BackgroundLines>
    </div>
  );
}

export default HeroSection;
