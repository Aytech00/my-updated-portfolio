import React from "react";
import styles from "./Portfolio.module.css";
import img1 from "../Assets/cryptix.png";
import img2 from "../Assets/zyteon.png";
import img3 from "../Assets/ink.png";
import img4 from "../Assets/elise.png";
import img5 from "../Assets/crypto.png";
import img6 from "../Assets/QRcode.png";
import img7 from "../Assets/quote.png";
import img8 from "../Assets/nasa.png";
import img9 from '../Assets/magnolia.png'
import img10 from '../Assets/annex.png'
import { motion } from "framer-motion";

const Variant1 = {
  hidden: {
    y: "-100vh",
  },

  visible: {
    y: "0vh",
    transition: {
      type: "spring",
      stiffness: 90,
      delay: 0.3,
    },
  },
};

const Variant2 = {
  hidden: {
    y: 70,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 3, 
    transition: {
      delay: 0.6,
      duration: 0.6,
    },
  },
};

const Variant3 = {
  hidden: {
    y: 70,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 2,
    transition: {
      delay: 1,
      duration: 0.6,
    },
  },
};
const Variant4 = {
  hidden: {
    y: 70,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 2,
    transition: {
      delay: 1.6,
      duration: 0.6,
    },
  },
};
const Variant5 = {
  hidden: {
    y: 70,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 2,
    transition: {
      delay: 1.6,
      duration: 0.6,
    },
  },
};

const Portfolio = () => {
  return (
    <div className={styles.portfolio_container}>
      <div className={styles.portfolio_inner_container}>
        <motion.h1
          variants={Variant1}
          initial="hidden"
          animate="visible"
          className={styles.portfolio_title}
        >
          PORTFOLIO
        </motion.h1>
        <motion.div
          variants={Variant2}
          initial="hidden"
          animate="visible"
          className={styles.portfolio_box_wrap_1}
        >
          <div className={styles.inner_portfolio_wrap}>
            <a className={styles.portfolio_link} href="/">
              <img className={styles.portfolio_img} src={img1} alt="" />
              <h2>CrypTix</h2>
            </a>
            <p className={styles.portfolio_desc}>
              {" "}
              Built with ReactJS, Boostrap, SASS, MongoDB, ExpressJS.
            </p>
          </div>
          <div className={styles.inner_portfolio_wrap}>
            <img className={styles.portfolio_img} src={img2} alt="" />
            <a className={styles.portfolio_link} href="/">
              <h2>Zyteon</h2>
            </a>
            <p className={styles.portfolio_desc}>
              Built with ReactJS, Tailwindcss with a touch of CSS.
            </p>
          </div>
          <div className={styles.inner_portfolio_wrap}>
            <img className={styles.portfolio_img} src={img3} alt="#" />
            <a className={styles.portfolio_link} href="/">
              <h2>Inksea</h2>
            </a>
            <p className={styles.portfolio_desc}>
              Built with ReactJS, Bootsrap and CSS.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={Variant3}
          initial="hidden"
          animate="visible"
          className={styles.portfolio_box_wrap_2}
        >
          <div className={styles.inner_portfolio_wrap}>
            <img className={styles.portfolio_img} src={img9} alt="" />
            <a className={styles.portfolio_link} href="/">
              <h2>Magnolia</h2>
            </a>
            <p className={styles.portfolio_desc}>
              A real estate website built with Nextjs and CSS.
            </p>
          </div>
          <div className={styles.inner_portfolio_wrap}>
            <img className={styles.portfolio_img} src={img10} alt="" />
            <a className={styles.portfolio_link} href="/">
              <h2>Annex</h2>
            </a>
            <p className={styles.portfolio_desc}>
              An Vamp ecommerce website built with WordPress
            </p>
          </div>
          <div className={styles.inner_portfolio_wrap}>
            <img className={styles.portfolio_img} src={img6} alt="" />
            <a className={styles.portfolio_link} href="/">
              <h2>QR CODE GENERATOR</h2>
            </a>
            <p className={styles.portfolio_desc}>
              {" "}
              A QR code generator built with HTML, SASS and Vanilla JS.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={Variant4}
          initial="hidden"
          animate="visible"
          className={styles.portfolio_box_wrap_3}
        >
          <div className={styles.inner_portfolio_wrap}>
            <img className={styles.portfolio_img} src={img4} alt="" />
            <a className={styles.portfolio_link} href="/">
              <h2>Elise</h2>
            </a>
            <p className={styles.portfolio_desc}>
              Built with Html, CSS, Bootsrap and Vanilla Javascript.
            </p>
          </div>
          <div className={styles.inner_portfolio_wrap}>
            <img className={styles.portfolio_img} src={img5} alt="" />
            <a className={styles.portfolio_link} href="/">
              <h2>Dapp</h2>
            </a>
            <p className={styles.portfolio_desc}>
              A multichain Dapp built with SASS and Nextjs
            </p>
          </div>
          <div className={styles.inner_portfolio_wrap}>
            <img className={styles.portfolio_img} src={img6} alt="" />
            <a className={styles.portfolio_link} href="/">
              <h2>QR CODE GENERATOR</h2>
            </a>
            <p className={styles.portfolio_desc}>
              {" "}
              Built with HTML, SASS and Vanilla JS.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={Variant5}
          initial="hidden"
          animate="visible"
          className={styles.portfolio_box_wrap_4}
        >
          <div className={styles.inner_portfolio_wrap}>
            <a className={styles.portfolio_link} href="/">
              <img className={styles.portfolio_img} src={img7} alt="" />
              <h2>Quote App</h2>
            </a>
            <p className={styles.portfolio_desc}>
              Built with ReactJS, Tailwindcss, Firebase.
            </p>
          </div>

          <div className={styles.inner_portfolio_wrap}>
            <img className={styles.portfolio_img} src={img8} alt="" />
            <a className={styles.portfolio_link} href="/">
              <h2>NASA API PROJECT</h2>
            </a>
            <p className={styles.portfolio_desc}>
              Built with Html, CSS and Vanilla Javascript.
            </p>
          </div>
          {/* <div className={styles.inner_portfolio_wrap}>
          <img className={styles.portfolio_img} src={img1} alt="" />
          <a className={styles.portfolio_link} href="/">
            <h2>NASA </h2>
          </a>
          <p className={styles.portfolio_desc}>A beautiful t-shirt mockup.</p>
        </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
