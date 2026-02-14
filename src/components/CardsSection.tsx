import { Link } from "react-router-dom";
import "./CardsSection.css";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const grid: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardLeft: Variants = {
  hidden: { x: -60, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardRight: Variants = {
  hidden: { x: 60, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CardsSection = () => {
  return (
    <section className="cardsSection">
      <div className="cardsContainer">
        <motion.div
          className="cardsGrid"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
        >
          {/* CARD 1 */}
          <motion.article className="cardWrap" variants={cardLeft}>
            <img className="cardSticker" src="/Tigre.webp" alt="Tigre" />

            <div className="cardBorder">
              <div className="cardBody">
                <p className="cardTag cardTag--social">SOCIAL</p>
                <h3 className="cardTitle">FOLLOW US</h3>

                <p className="cardText">
                  Join us on our social media to keep up with the latest updates and
                  news.
                </p>

                <div className="cardIcons">
                  <a
                    href="https://www.instagram.com/etherdreams_/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="iconBtn"
                  >
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M12 16.2A4.2 4.2 0 1 0 12 7.8a4.2 4.2 0 0 0 0 8.4Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M17.7 6.3h.01"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://x.com/etherdreams"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X"
                    className="iconBtn"
                  >
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 4l16 16M20 4L4 20"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          {/* CARD 2 */}
          <motion.article className="cardWrap" variants={cardRight}>
            <img className="cardSticker" src="/Lobo.webp" alt="Lobo" />

            <div className="cardBorder">
              <div className="cardBody">
                <p className="cardTag cardTag--projects">PROJECTS</p>
                <h3 className="cardTitle">KIRAKIRA</h3>

                <p className="cardText">
                  Check out all the details of our first game "KIRAKIRA SLIMES".
                  Save kirakira from evil in a cute slime and puzzle game.
                </p>

                <div className="cardButtonRow">
                  <Link to="/projects" className="gradientBtn">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default CardsSection;
