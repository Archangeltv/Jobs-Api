import React from "react";

const Hero = () => {
  return (
    <main className="relative bg-brandblack py-5">
      <img src="/Group 9.svg" className="absolute top-0 -z-1" />
      <img
        src="/Group 9.svg"
        className="absolute hidden md:block top-0  right-0 -z-1"
      />
      <img src="/Group 9.svg" className="absolute top-1/2 left-1/2 -z-1" />
      <section className="w-full py-12 relative z-10 text-white place-items-center flex flex-col lg:flex-row  gap-10  rounded-2xl">
        <div className="padding flex flex-col gap-5 ">
          <h1 className=" text-3xl md:text-5xl leading-snug font-semibold ">
            Find your next Job/Worker on our Job Search Platform.
          </h1>
          <p className=" text-lg md:text-xl ">
            Connecting talents with opportunities. Discover the perfect match
            for your tech career journey.
          </p>
          <button className="basicBtn block  w-60 h-12">Get Started</button>
        </div>
        <div className="flex w-full items-center justify-center">
          <img src="/hero.svg" alt="Hero Image" className="w-full" />
        </div>
      </section>
    </main>
  );
};

export default Hero;
