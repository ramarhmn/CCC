import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section className="grid items-center text-center gap-2 bg-[#023093] px-8 py-5 text-white">
      <div>
        <ul className="py-7 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className=" text-sm md:text-lg transition hover:text-gray-300/75 font-semibold"
              href="#about"
            >
              {" "}
              About{" "}
            </a>
          </li>

          <li>
            <a
              className="text-sm md:text-lg transition hover:text-gray-300/75 font-semibold"
              href="#galery"
            >
              {" "}
              Galery{" "}
            </a>
          </li>

          <li>
            <a
              className="text-sm md:text-lg transition hover:text-gray-300/75 font-semibold"
              href="#syarat"
            >
              {" "}
              Terms{" "}
            </a>
          </li>

          <li>
            <a
              className="text-sm md:text-lg transition hover:text-gray-300/75 font-semibold"
              href="#kontak"
            >
              {" "}
              Contact{" "}
            </a>
          </li>
        </ul>
      </div>
      <FlipLink href="https://www.instagram.com/ccc.ommunity/">
        Instagram
      </FlipLink>
      <FlipLink href="https://www.tiktok.com/@cretivox">Tiktok</FlipLink>
      <FlipLink href="https://www.youtube.com/@Cretivox">Youtube</FlipLink>
      <p className="text-gray-300 text-center text-xs md:text-sm mt-8">
        © 2024 Cretivox Creative Community
      </p>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-5xl md:text-6xl lg:text-7xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default RevealLinks;
