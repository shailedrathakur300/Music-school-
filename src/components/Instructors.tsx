"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Button } from "./ui/moving-border";
import Link from "next/link";

const instructors = [
  {
    id: 1,
    name: "Ania ",
    designation: "Graphic Designer",
    image: "/Instragram/ania.png",
  },
];

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Want to Make Remmembering design a Reality?
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet,
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
    </div>
  );
}

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <div className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={instructors} />
          </div>
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Want to Make Your Dream a Reality?
          </h1>
        </div>
        <div className="mt-4">
          <Link href="/contact">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Hire Me
            </Button>
          </Link>
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
