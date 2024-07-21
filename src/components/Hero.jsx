import HeroImg from "../assets/travel-world.jpg";
import React from "react";

export default function Hero() {
  return (
    <section className="container mx-auto">
      <div className="lg:flex gap-10 items-center lg:p-10">
        <div className="w-full lg:w-6/12">
          <img src={HeroImg} alt="hero-image" className="w-full mb-6" />
        </div>

        <div className="w-full lg:w-6/12 px-4">
          <h1 className="mb-6 uppercase text-2xl">Time to travel</h1>
          <p className="mb-6 text-base">
            In our fast-paced world, time has become one of the most precious
            commodities, often slipping through our fingers unnoticed. Amidst
            our daily grind, the concept of taking a moment to step away from
            the routine and immerse ourselves in new environments is not just a
            luxury but a necessity. The idea of "time to travel" embodies more
            than just the act of moving from one place to another; it represents
            an opportunity for personal growth, cultural enrichment, and a
            profound reconnection with ourselves and the world around us.
          </p>
        </div>
      </div>
    </section>
  );
}
