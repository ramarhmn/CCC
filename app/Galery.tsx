import React, { MutableRefObject, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Galery = () => {
  return (
    <section
      className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-[#023093] "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1701580442940-3f2098b4cb27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="font-sans text-5xl md:text-7xl font-bold text-black mb-5 lg:text-start text-center">
        CCC{" "}
        <span className="text-base sm:text-xl md:text-xl relative -top-3 sm:-top-2 md:-top-4 lg:-top-4">
          AT
        </span>{" "}
        Kahforward
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="https://ik.imagekit.io/4ux56l7ke/Snapinsta.app_461342407_1258919221793369_5617949909667227251_n_1080.jpg?updatedAt=1733716505747"
        alt="7"
        rotate="6deg"
        top="70%"
        left="70%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="https://ik.imagekit.io/4ux56l7ke/Snapinsta.app_461435504_573500065011059_256464451993464125_n_1080.jpg?updatedAt=1733716505800"
        alt="3"
        rotate="12deg"
        top="15%"
        left="45%"
        className="w-32 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://ik.imagekit.io/4ux56l7ke/Snapinsta.app_461509268_8647610515297298_5540110479191860728_n_1080.jpg?updatedAt=1733716505786"
        alt="6"
        rotate="-6deg"
        top="68%"
        left="35%"
        className="w-40 md:w-60"
      />
      <Card
        containerRef={containerRef}
        src="https://ik.imagekit.io/4ux56l7ke/Snapinsta.app_461554710_1232894704513381_8811021147356809569_n_1080.jpg?updatedAt=1733716505754"
        alt="5"
        rotate="8deg"
        top="60%"
        left="7%"
        className="w-40 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="https://ik.imagekit.io/4ux56l7ke/Snapinsta.app_461588174_554436366927632_463229099353382058_n_1080.jpg?updatedAt=1733716505892"
        alt="1"
        rotate="18deg"
        top="10%"
        left="2%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="https://ik.imagekit.io/4ux56l7ke/Snapinsta.app_461440415_1258846618619343_6610508189002446838_n_1080.jpg?updatedAt=1733716505725"
        alt="2"
        rotate="-3deg"
        top="15%"
        left="35%"
        className="w-32 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://ik.imagekit.io/4ux56l7ke/Snapinsta.app_461494257_1888378155330374_4151465722113255020_n_1080.jpg?updatedAt=1733716506024"
        alt="4"
        rotate="6deg"
        top="10%"
        left="75%"
        className="w-36 md:w-56"
      />
    </div>
  );
};

interface Props {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}

const Card = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}: Props) => {
  const [zIndex, setZIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLImageElement | null>(null);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.img
      ref={cardRef}
      onMouseDown={updateZIndex}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

export default Galery;
