"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Working with this designer transformed my brand. Their creativity and attention to detail brought my vision to life!",
    name: "Alex Johnson",
    title: "Brand Identity",
  },
  {
    quote:
      "Their design skills are exceptional! My website now feels more professional, modern, and visually engaging. I'm beyond impressed.",
    name: "Samantha Lee",
    title: "Website Redesign",
  },
  {
    quote:
      "The designer captured the essence of my business perfectly in the logo they created. Their work is both unique and timeless.",
    name: "Michael Chen",
    title: "Logo Design",
  },
  {
    quote:
      "The design solutions provided were spot on! They understood my goals and delivered high-quality work that exceeded my expectations.",
    name: "Emily Taylor",
    title: "Marketing Materials",
  },
  {
    quote:
      "I was amazed at how they turned abstract ideas into stunning visuals. Highly recommend their design expertise!",
    name: "Chris Morales",
    title: "Social Media Campaign",
  },
  {
    quote:
      "Their design skills are exceptional! My website now feels more professional, modern, and visually engaging. I'm beyond impressed.",
    name: "Shailendra Singh",
    title: "Website Redesign",
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;
