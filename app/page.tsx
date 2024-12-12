"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { motion } from "framer-motion";
import Footer from "../app/Footer";
import MouseImageTrail from "../app/MouseImageTrail";
import Galery from "../app/Galery";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section
        className=" bg-white"
        style={{
          backgroundImage: "url('/images/bg.AVIF')",

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* HEADER */}
        <header className=" fixed top-0 left-0 w-full -mt-1 overflow-hidden z-50 ">
          <nav className="flex justify-between items-center ">
            <div className="flex justyfy-start ml-10 mt-3 ">
              <a
                href="#about"
                className="text-black bg-white font-semibold text-sm rounded-full hidden md:block justify-start mx-4 tracking-widest relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full py-1 px-4"
              >
                ABOUT
              </a>
              <a
                href="#galery"
                className="text-black text-sm bg-white font-semibold rounded-full hidden md:block justify-start mx-4 tracking-widest relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full py-1 px-3"
              >
                GALERY
              </a>
            </div>
            <div className="flex md:justify-center w-1/3 -mx-52 ">
              {/* <Image
                src={img1}
                alt="Konser"
                width={150}
                height={5000}
                className="w-24 md:w-24 h-auto"
              /> */}
              <h1 className="text-black font-sans text-4xl md:text-5xl font-bold mt-3 mb-2 md:mt-4 md:mb-2  ">
                CCC
              </h1>
            </div>
            <div className="flex justyfy-start mr-10 mt-3">
              <a
                href="#syarat"
                className="text-black text-sm bg-white font-semibold rounded-full hidden md:block justify-start mx-4 tracking-widest relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full py-1 px-4"
              >
                TERMS
              </a>

              <a
                href="#kontak"
                className="text-black text-sm bg-white font-semibold rounded-full hidden md:block justify-start mx-4 tracking-widest relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full py-1 px-3"
              >
                CONTACT
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black e p-2 rounded focus:outline-none "
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={` left-0 w-full bg-white custom-backdrop text-[#023093] text-6xl fixed  ${
                isMenuOpen ? "flex" : "hidden"
              } flex-col p-4 custom-menu z-50`}
            >
              <a
                href="#about"
                className="py-2 mt-28 rounded flex justify-between items-center transition-transform transform0 hover:scale-105 active:scale-95"
                onClick={toggleMenu}
              >
                <span className="flex items-center ">
                  About
                  <span className="text-red-500 text-base ml-4 mb-10">01</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-12 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
              <a
                href="#galery"
                className="py-2 rounded flex justify-between items-center transition-transform transform hover:scale-105 active:scale-95"
                onClick={toggleMenu}
              >
                <span className="flex items-center">
                  Galery
                  <span className="text-red-500 text-sm ml-4 mb-10">02</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-12 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
              <a
                href="#syarat"
                className="py-2 rounded flex justify-between items-center transition-transform transform hover:scale-105 active:scale-95"
                onClick={toggleMenu}
              >
                <span className="flex items-center">
                  Terms
                  <span className="text-red-500 text-sm ml-4 mb-10">03</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-12 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>

              <a
                href="#kontak"
                className="py-2 rounded flex justify-between items-center transition-transform transform hover:scale-105 active:scale-95"
                onClick={toggleMenu}
              >
                <span className="flex items-center">
                  Contact
                  <span className="text-red-500 text-sm ml-4 mb-10">04</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-12 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
              <p className="text-center text-sm mt-36 mb-5">
                © 2024 Cretivox Creative Community
              </p>
            </div>
          </nav>
          <hr className="border-t-1 border-black md:hidden block" />
        </header>
        <div className=" text-white text-xs text-center absolute bottom-2 left-0 right-0 py-4 cursor-pointer">
          <button
            onClick={() =>
              window.scrollBy({
                top: window.innerHeight * 1.2,
                behavior: "smooth",
              })
            }
            className="group relative inline-flex items-center overflow-hidden bg-white px-3 py-1 text-black font-semibold focus:outline-none focus:ring rounded-full"
          >
            Scroll Down
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 ml-2"
              fill="none"
              viewBox="0 0 30 30"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        {/* END HEADER */}

        {/* TAGLINE */}
        <section
          id="tagline"
          className=" min-h-screen w-full md:max-w-full flex items-center justify-center overflow-hidden"
        >
          <div className="absolute hidden md:block z-10">
            <Image
              src="/images/awan2.png"
              alt="Konser"
              width={500}
              height={500}
              className="w-72 md:w-[400px] lg:w-[600px] object-cover"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="3000"
            />
          </div>

          <div className="text-center z-20">
            <motion.div
              className="flex"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <h2 className="text-5xl italic md:text-8xl mx-3 font-sans text-black font-black text-left md:text-center">
                CRETIVOX{" "}
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.2, duration: 0.5 },
                    },
                  }}
                >
                  FUTURE
                </motion.span>{" "}
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.35, duration: 0.5 },
                    },
                  }}
                >
                  EXPERIENCE
                </motion.span>
              </h2>
            </motion.div>
          </div>
        </section>
        {/* END TAGLINE */}
      </section>

      {/* TEXT */}
      <section id="text" className="hidden sm:block">
        <MouseImageTrail />
      </section>
      {/* END TEXT */}

      {/* VIDEO */}
      <section
        id="video"
        className="sm:hidden block bg-blue-500 overflow-hidden"
      >
        <div className="">
          <video
            controls={false}
            playsInline={false}
            autoPlay={true}
            loop={true}
            muted
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      {/* END VIDEO */}

      {/* TEXT2 */}
      <section className="min-h-screen w-full md:max-w-full flex flex-col bg-white py-5 text-[#023093] overflow-hidden">
        <div
          className=""
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <h1 className="text-5xl md:text-7xl font-bold mt-auto mb:ml-10 ml-5 text-start">
            CHANGE
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-1 mb:ml-10 ml-5 text-start">
            BEGINS
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-1 mb:ml-10 ml-5 text-start">
            WITH YOU
          </h1>
        </div>
        <div
          className="mt-auto text-left ml-auto mr-5 text-lg md:text-2xl"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <p className="font-bold">Menuju Indonesia Emas</p>
          <p>
            <span className="font-bold">2045</span>, masih banyak
          </p>
          <p className="font-bold">pemuda berdampak</p>
          <p className="font-bold">Indonesia yang belum</p>
          <p>
            <span className="font-bold">tersorot</span>, bahkan tidak
          </p>
          <p>dapat mendapatkan apresiasi.</p>
        </div>
        <div className="mt-auto text-start mb:ml-10 ml-5 text-lg md:text-2xl"
         data-aos="fade-right"
         data-aos-anchor-placement="center-bottom"
         data-aos-duration="1000"
        >
          <p className="font-bold">Ini saatnya kamu ambil</p>
          <p className="font-bold">langkah nyata, karena</p>
          <p className="font-bold">masa depan bangsa ada</p>
          <p className="font-bold">di tanganmu</p>
        </div>
      </section>
      {/* END */}

      {/* ABOUT */}
      <section
        id="about"
        className="py-16 md:py-40 relative bg-[#023093] scroll-mt-14 md:scroll-mt-5 rounded-3xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="w-full max-w-full px-4 -mt-8 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex ">
                  <h2 className=" text-5xl md:text-7xl font-bold text-white mb-5 lg:text-start text-center">
                    CCC{" "}
                    <span className="text-base sm:text-xl md:text-xl relative -top-3 sm:-top-2 md:-top-4 lg:-top-4 text-white">
                      AT
                    </span>{" "}
                    Kahforward
                  </h2>
                  <div className="flex items-center text-white font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                    </svg>
                    <span className="text-sm md:text-xl font-semibold">
                      28 - 29 September 2024
                    </span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 mx-6"
                    >
                      <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                    </svg>
                    <span className="text-sm md:text-xl font-semibold">
                      Indonesia Arena, 2nd Floor
                    </span>
                  </div>
                  <p className="text-white text-base md:text-lg mt-5 lg:text-start text-center">
                    Kahforward merupakan wadah untuk kamu para generasi muda
                    untuk ambil tindakan nyata dan beri solusi yang berdampak
                    positif untuk Indonesia bahkan dunia. Selama dua hari, akan
                    ada lebih dari 30.000 peserta termasuk kamu yang
                    terinspirasi oleh pembicara global dan lokal yang membahas
                    isu-isu penting. Melalui Mini Stage CCC at Kahforward, kita
                    akan jadikan ini sebagai panggung bagimu untuk menyampaikan
                    aspirasi serta orasi. Jangan takut untuk ikut ambil bagian
                    karena perubahan dimulai dari dirimu, dan kalau bukan kita
                    siapa lagi? Ayo bergabung dengan pemuda berdampak lainnya!
                  </p>
                </div>
                <div className="flex justify-center ">
                  <a
                    className="group relative inline-flex items-center overflow-hidden rounded bg-white px-8 py-3 text-[#023093] focus:outline-none focus:ring active:bg-indigo-500"
                    href="#syarat"
                  >
                    <span className="absolute -start-full transition-all group-hover:start-4">
                      <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>

                    <span className="text-sm font-semibold transition-all group-hover:ms-4">
                      {" "}
                      Read More{" "}
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex justify-end">
                <Image
                  src="/images/konten.png"
                  alt="Konser"
                  width={500}
                  height={500}
                  className="h-full rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* END ABOUT */}

      {/* SPEAKERS */}
      {/* <section id="speakers" className="bg-white">
        <div className="p-5 md:p-16">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-black">
              Speakers
            </h1>
            <div className="flex flex-col md:flex-row mt-7 overflow-hidden">
              <Image
                src={img3}
                alt="Konser"
                width={600}
                height={5000}
                className="w-full h-auto"
              />
              <Image
                src={img4}
                alt="Konser"
                width={600}
                height={5000}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* END SPEAKERS */}

      {/* TERMS */}
      <section id="syarat" className="bg-white scroll-mt-6">
        <div className="w-full max-w-full px-4 -mt-8  md:px-5 lg:px-5 mx-auto bg-white py-36 text-[#023093] ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="flex flex-col ">
              <h2 className="text-5xl md:text-7xl font-bold text-[#023093]">
                LET'S MAKE
              </h2>
              <h2 className="text-5xl md:text-7xl font-bold text-[#023093] mb-5">
                AN IMPACT
              </h2>
              <div className="mt-auto text-left ml-auto mr-3 text-xl md:text-3xl py-10 font-bold">
                <h1>Ayo bergabung dengan</h1>
                <h1>pria berdampak lain nya!</h1>
              </div>
              <div className="text-[#023093] py-10">
                <h1 className="font-bold text-xl md:text-3xl">
                  {" "}
                  Syarat & Ketentuan:
                </h1>
                <p className="mt-5 text-base md:text-xl">
                  1) Registrasi dan Input data diri kamu di Google Forms yang
                  sudah disediakan (Nama, Domisili, Umur, Akun IG, Asal
                  Institusi/Kampus/Sekolah).
                </p>
                <p className="mt-5 text-base md:text-xl">
                  2) Cantumin profil singkat/atribusi kamu, dan kamu juga bisa
                  menyuarakan keresahanmu.
                </p>
                <p className="mt-5 text-base md:text-xl">
                  3) Kamu akan menjadi orator di acara Offline Activation CCC at
                  Kahforward tanggal 28-29 September 2024.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-start mt-8 py-7">
            <a
              className="group relative inline-flex items-center overflow-hidden rounded bg-[#023093] px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdhI7_rqGzzcN3zIpiYVqcfI6EpWV1KvXyOX9YOs4kSkdr_1w/viewform"
            >
              <span className="absolute -start-full transition-all group-hover:start-4">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-semibold transition-all group-hover:ms-4">
                {" "}
                Registrasi{" "}
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* END TERMS */}

      {/* GALERY */}
      <section id="galery" className="scroll-mt-14">
        <Galery />
      </section>
      {/* END GALERY */}

      {/* FOOTER */}
      <section id="kontak">
        <Footer />
      </section>
      {/* END FOOTER */}
    </>
  );
}
