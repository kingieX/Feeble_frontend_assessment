import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

import Badge from "../assets/imessage.png";
import Overlay from "../assets/overlay.png";
import Arrow from "../assets/arrow-down.png";
import Bird from "../assets/smallBird.png";
import Bird1 from "../assets/bird1.png";
import Bird2 from "../assets/bird2.png";
import Bird3 from "../assets/bird3.png";
import Bird4 from "../assets/bird4.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative birds */}
      <img
        data-aos="fade-up"
        data-aos-delay="250"
        src={Bird}
        alt=""
        className="pointer-events-none absolute left-28 top-24 w-fit md:w-fit hidden md:block"
      />

      <img
        src={Bird}
        alt=""
        className="pointer-events-none absolute left-70 top-38 w-fit md:w-fit hidden md:block"
      />

      <img
        data-aos="fade-up"
        data-aos-delay="250"
        src={Bird}
        alt=""
        className="pointer-events-none absolute right-65 top-32 w-fit md:w-fit hidden md:block"
      />

      <img
        src={Bird}
        alt=""
        className="pointer-events-none absolute right-55 top-60 w-fit md:w-fit hidden md:block"
      />

      <div className="flex flex-col max-w-4xl mx-auto items-center justify-center text-center px-6 pt-10">
        {/* Badge */}
        <div className="inline-flex justify-center items-center gap-2 bg-white/70 px-2 py-1.5 rounded-full">
          <img src={Badge} alt="badge" className="w-fit h-fit inline-block" />
          <p className="text-primary text-xs font-medium">
            #1 iMessage Automation Tool
          </p>
        </div>

        <h1 className="md:max-w-lg mt-4 text-4xl md:text-5xl font-bold text-center">
          <span className="text-primary">iMessage</span> Automation for Teams
          and AI Workflows.
        </h1>

        <p
          //   data-aos="fade-up"
          //   data-aos-delay="150"
          className="mt-4 text-base text-text max-w-lg mx-auto"
        >
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number, running securely on your Mac or Mac Mini.
        </p>

        <div className="w-full mt-10 flex md:flex-row flex-col items-center justify-center gap-4">
          <PrimaryButton label="Get Started" />
          <SecondaryButton label="Download the Mac app" />
        </div>
      </div>

      <div className="relative mx-auto mt-10 w-full">
        <div
          //   data-aos="fade-up"
          //   data-aos-delay="250"
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Overlay background image */}
          <img
            data-aos="fade-up"
            data-aos-delay="250"
            src={Overlay}
            alt="Hero overlay"
            className="h-full w-full object-cover"
          />

          <img
            src={Bird1}
            alt="Bird1"
            data-aos="fade-up"
            data-aos-delay="300"
            className="pointer-events-none absolute left-50 top-40 w-fit md:w-fit hidden md:block"
          />

          <img
            src={Bird2}
            alt="Bird2"
            data-aos="fade-up"
            data-aos-delay="350"
            className="pointer-events-none absolute left-1/3 top-30 w-fit md:w-fit hidden md:block"
          />

          <img
            src={Bird3}
            alt="Bird3"
            data-aos="fade-up"
            data-aos-delay="300"
            className="pointer-events-none absolute right-85 top-45 w-fit md:w-fit hidden md:block"
          />

          <img
            src={Bird4}
            alt="Bird4"
            data-aos="fade-up"
            data-aos-delay="350"
            className="pointer-events-none absolute right-30 top-30 w-fit md:w-fit hidden md:block"
          />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-end px-6 py-4">
            <p className="text-xs font-medium text-center">
              Scroll to learn more
            </p>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur">
              <img src={Arrow} alt="Arrow" className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
