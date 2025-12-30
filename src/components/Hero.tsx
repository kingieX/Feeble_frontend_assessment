import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

// Assets
import Badge from "../assets/imessage.png";
import Overlay from "../assets/overlay.png";
import Arrow from "../assets/arrow-down.png";
import Bird from "../assets/smallBird.png";
import Bird1 from "../assets/bird1.png";
import Bird2 from "../assets/bird2.png";
import Bird3 from "../assets/bird3.png";
import Bird4 from "../assets/bird4.png";

// --- Types & Interfaces ---

interface BirdProps {
  src: string;
  className: string;
  delay?: string;
  anchor?: string;
  animation?: string;
}

interface BirdData {
  src: string;
  pos: string;
  delay: string;
}

// --- Sub-Components ---

/**
 * Reusable Bird Component with TypeScript Props
 */
const BirdIcon: React.FC<BirdProps> = ({
  src,
  className,
  delay = "0",
  anchor,
  animation = "fade-up",
}) => (
  <img
    src={src}
    alt="Decorative Bird"
    data-aos={animation}
    data-aos-delay={delay}
    data-aos-anchor={anchor}
    className={`pointer-events-none absolute w-fit hidden md:block ${className}`}
  />
);

const HeroBadge: React.FC = () => (
  <div className="inline-flex justify-center items-center gap-2 bg-white/70 px-2 py-1.5 rounded-full">
    <img src={Badge} alt="badge" className="w-fit h-fit inline-block" />
    <p className="text-primary text-xs font-medium">
      #1 iMessage Automation Tool
    </p>
  </div>
);

// --- Main Component ---

const Hero: React.FC = () => {
  // Strongly typed arrays for better maintenance
  const backgroundBirds: BirdData[] = [
    { src: Bird, pos: "left-28 top-24", delay: "250" },
    { src: Bird, pos: "left-[280px] top-38", delay: "0" },
    { src: Bird, pos: "right-[260px] top-32", delay: "250" },
    { src: Bird, pos: "right-[220px] top-60", delay: "0" },
  ];

  const overlayBirds: BirdData[] = [
    { src: Bird1, pos: "left-50 top-40", delay: "300" },
    { src: Bird2, pos: "left-1/3 top-30", delay: "350" },
    { src: Bird3, pos: "right-85 top-45", delay: "300" },
    { src: Bird4, pos: "right-30 top-30", delay: "350" },
  ];

  return (
    <section className="relative overflow-hidden mt-20">
      {/* Time-based Diagonal Animation Birds */}
      <BirdIcon
        src={Bird2}
        className="bottom-0 left-0 opacity-0 animate-fly-tr z-50"
        animation="" // No AOS for these as they use CSS Keyframes
      />
      <BirdIcon
        src={Bird2}
        className="bottom-0 right-0 opacity-0 animate-fly-tl z-50"
        animation="" // No AOS for these as they use CSS Keyframes
      />

      {/* Background Decorative Birds */}
      {backgroundBirds.map((bird, index) => (
        <BirdIcon
          key={`bg-bird-${index}`}
          src={bird.src}
          className={bird.pos}
          delay={bird.delay}
        />
      ))}

      {/* Hero Content Section */}
      <div className="flex flex-col max-w-4xl mx-auto items-center justify-center text-center px-6 pt-10">
        <HeroBadge />
        <h1 className="md:max-w-lg mt-4 text-4xl md:text-5xl font-bold">
          <span className="text-primary">iMessage</span> Automation for Teams
          and AI Workflows.
        </h1>
        <p className="mt-4 text-base text-text max-w-lg mx-auto">
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number, running securely on your Mac or Mac Mini.
        </p>
        <div className="w-full mt-10 flex md:flex-row flex-col items-center justify-center gap-4">
          <PrimaryButton label="Get Started" />
          <SecondaryButton label="Download the Mac app" />
        </div>
      </div>

      {/* Bottom Image & Internal Birds Section */}
      <div id="hero-section" className="relative mx-auto mt-10 w-full">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            data-aos="fade-up"
            data-aos-delay="250"
            src={Overlay}
            alt="Hero overlay"
            className="h-full w-full object-cover"
          />

          {overlayBirds.map((bird, index) => (
            <BirdIcon
              key={`overlay-bird-${index}`}
              src={bird.src}
              className={bird.pos}
              delay={bird.delay}
              anchor="#hero-section"
            />
          ))}

          <div className="absolute inset-0 flex flex-col items-center justify-end px-6 py-4">
            <p className="text-xs font-medium text-center mb-2">
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
