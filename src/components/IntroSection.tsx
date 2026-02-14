import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";

interface IntroSectionProps {
  logoSrc?: string;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const leftLogo: Variants = {
  hidden: { x: -90, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const upItem: Variants = {
  hidden: { y: -18, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const rightItem: Variants = {
  hidden: { x: 60, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const fadeUp: Variants = {
  hidden: { y: 18, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const IntroSection: React.FC<IntroSectionProps> = ({ logoSrc }) => {
  const baseUrl = import.meta.env.BASE_URL;

  const resolvedLogoSrc = logoSrc
    ? logoSrc.startsWith("http")
      ? logoSrc
      : `${baseUrl}${logoSrc.replace(/^\/+/, "")}`
    : `${baseUrl}logoVectorED.webp`;

  return (
    <section className="w-full bg-black">
      {/* mismo ancho que el navbar */}
      <div className="mx-auto max-w-6xl px-6 py-28">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="grid items-center gap-16 md:grid-cols-[1fr_480px]"
        >
          {/* LOGO */}
          <motion.div
            variants={leftLogo}
            className="flex justify-center md:justify-start md:-mt-6"
          >
            <img
              src={resolvedLogoSrc}
              alt="Ether Dreams logo"
              className="
                w-[240px]
                sm:w-[280px]
                md:w-[320px]
                lg:w-[340px]
                max-w-full
                drop-shadow-[0_28px_90px_rgba(0,0,0,0.65)]
              "
              draggable={false}
            />
          </motion.div>

          {/* BLOQUE DERECHO */}
          <div className="md:justify-self-end">
            <motion.p
              variants={upItem}
              className="text-right tracking-[0.35em] text-xs font-semibold text-[#5aa7a6] md:text-sm"
            >
              WELCOME TO
            </motion.p>

            <motion.h2
              variants={rightItem}
              className="
                mt-4 text-right font-serif
                text-6xl md:text-8xl
                leading-[0.88] text-white
              "
            >
              ETHER <br /> DREAMS
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-right text-base leading-8 text-white/70"
            >
              We are an indie videogame development company based in Chile and
              exclusively dedicated to the exciting world of digital entertainment.
              Our main goal is to create unique, inspiring and entertaining gaming
              experiences for gamers of all ages.
            </motion.p>

            <motion.p
              variants={rightItem}
              className="mt-6 text-right text-white/85"
            >
              Our dreams are beyond this planet.
            </motion.p>

            <motion.div variants={upItem} className="mt-10 flex justify-end">
              <Link
                to="/about"
                className="
                  inline-flex items-center justify-center
                  rounded-full px-12 py-3 text-sm font-semibold text-white
                  bg-gradient-to-r from-[#62c6d9] via-[#a78bfa] to-[#f2b36b]
                  backdrop-blur-md
                  shadow-[0_22px_70px_rgba(0,0,0,0.6)]
                  transition
                  hover:scale-[1.02]
                  hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)]
                  active:scale-[0.98]
                "
              >
                OUR TEAM
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
