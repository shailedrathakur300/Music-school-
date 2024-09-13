"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Unleash Your Creative Vision: A Personal Journey in Design Mastery",
    description:
      "Embark on a creative journey that’s uniquely yours. Our personalized design mentorship adapts to your individual style, setting the foundation for growth and innovation. At our design studio, your artistic aspirations align with our dedicated support, creating a seamless path to mastery.",
  },
  {
    title: "Real-Time Feedback & Collaboration",
    description:
      "Immerse yourself in an interactive design experience where feedback is immediate, just like working with clients on live projects. This approach enhances your understanding of design principles and empowers you to make creative decisions with confidence.",
  },
  {
    title: "Innovative Design Curriculum",
    description:
      "Our curriculum is continuously updated to incorporate the latest design trends, tools, and techniques, ensuring you're always working with cutting-edge knowledge. Say goodbye to outdated approaches and welcome an education that evolves with the design industry.",
  },
  {
    title: "Unleash Your Creative Vision: A Personal Journey in Design Mastery",
    description:
      "Embark on a creative journey that’s uniquely yours. Our personalized design mentorship adapts to your individual style, setting the foundation for growth and innovation. At our design studio, your artistic aspirations align with our dedicated support, creating a seamless path to mastery.",
  },
  {
    title: "Endless Creative Possibilities",
    description:
      "With access to a vast library of resources and a wide range of design courses, you’ll never run out of new techniques to learn. Our platform ensures that your creative skills are constantly advancing, opening the door to limitless design opportunities.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
