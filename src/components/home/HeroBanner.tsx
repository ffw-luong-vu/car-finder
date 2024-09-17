import homeHeroCar from "@/assets/images/home-hero-car.png";
import homeHeroDecorate from "@/assets/images/home-hero-decorate.png";

import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="hero-banner relative bg-sonic-silver pt-10 pb-5 px-5 flex flex-col items-center gap-8 text-white md:flex-row md:justify-between md:items-start lg:pt-20 md:pl-20 md:pr-0 md:pb-8 mb-14 md:mb-8">
      <div className="">
        <h1 className="font-semibold mb-3 md:mb-4 md:text-4xl md:leading-normal">
          The Best Platform for Car Rental
        </h1>
        <div className="max-w-[216px] md:max-w-[284px] font-medium text-xs leading-5 md:text-base md:mb-9">
          <p>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
        </div>
        <button className="btn-primary hidden md:block md:py-4 px-9 z-20 relative">
          Rent now
        </button>
      </div>
      <div className="max-w-80 md:max-w-none">
        <Image
          src={homeHeroCar.src}
          alt="home hero car"
          width={750}
          height={400}
          priority
        />
      </div>
      <button className="btn-primary md:hidden">Rent now</button>
      <Image
        src={homeHeroDecorate.src}
        alt="home hero decorate"
        width={750}
        height={400}
        className="hidden md:block absolute bottom-0 left-0 "
      />
    </div>
  );
};

export default HeroBanner;
