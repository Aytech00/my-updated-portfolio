import React from 'react'
import styles from './Portfolio.module.css'
import img1 from "../Assets/cryptix.png";
import img2 from "../Assets/zyteon.png";
import img3 from "../Assets/ink.png";
import img4 from "../Assets/elise.png";
import img5 from "../Assets/crypto.png";
import img6 from "../Assets/QRcode.png";
import img7 from "../Assets/quote.png";
import img8 from '../Assets/nasa.png'
import { motion } from 'framer-motion';

const Variant1 = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 2,
    transition: {
      delay: 0.3,
    },
  },
};

const Variant2 = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 2,
    transition: {
      delay: 1,
    },
  },
};

const Variant3 = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 2,
    transition: {
      delay: 1.5,
    },
  },
};
const Variant4 = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 2,
    transition: {
      delay: 1.8,
    },
  },
};

const Portfolio = () => {
  return (
    <div className={styles.portfolio_container}>
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
          <img className={styles.portfolio_img} src={img1} alt="" />
          <a className={styles.portfolio_link} href="/">
            <h2>CrypTix</h2>
          </a>
          <p className={styles.portfolio_desc}>A beautiful t-shirt mockup.</p>
        </div>
        <div className={styles.inner_portfolio_wrap}>
          <img className={styles.portfolio_img} src={img2} alt="" />
          <a className={styles.portfolio_link} href="/">
            <h2>Zyteon</h2>
          </a>
          <p className={styles.portfolio_desc}>A beautiful t-shirt mockup.</p>
        </div>
        <div className={styles.inner_portfolio_wrap}>
          <img className={styles.portfolio_img} src={img3} alt="#" />
          <a className={styles.portfolio_link} href="/">
            <h2>Inksea</h2>
          </a>
          <p className={styles.portfolio_desc}>A beautiful t-shirt mockup.</p>
        </div>
      </motion.div>

      <motion.div
        variants={Variant3}
        initial="hidden"
        animate="visible"
        className={styles.portfolio_box_wrap_2}
      >
        <div className={styles.inner_portfolio_wrap}>
          <img className={styles.portfolio_img} src={img4} alt="" />
          <a className={styles.portfolio_link} href="/">
            <h2>Elise</h2>
          </a>
          <p className={styles.portfolio_desc}>A beautiful t-shirt mockup.</p>
        </div>
        <div className={styles.inner_portfolio_wrap}>
          <img className={styles.portfolio_img} src={img5} alt="" />
          <a className={styles.portfolio_link} href="/">
            <h2>Dapp</h2>
          </a>
          <p className={styles.portfolio_desc}>A beautiful t-shirt mockup.</p>
        </div>
        <div className={styles.inner_portfolio_wrap}>
          <img className={styles.portfolio_img} src={img6} alt="" />
          <a className={styles.portfolio_link} href="/">
            <h2>QR CODE GENERATOR</h2>
          </a>
          <p className={styles.portfolio_desc}>A beautiful t-shirt mockup.</p>
        </div>
      </motion.div>

      <motion.div
        variants={Variant4}
        initial="hidden"
        animate="visible"
        className={styles.portfolio_box_wrap_3}
      >
        <div className={styles.inner_portfolio_wrap}>
          <img className={styles.portfolio_img} src={img7} alt="" />
          <a className={styles.portfolio_link} href="/">
            <h2>React Quote App</h2>
          </a>
          <p className={styles.portfolio_desc}>A beautiful t-shirt mockup.</p>
        </div>

        <div className={styles.inner_portfolio_wrap}>
          <img className={styles.portfolio_img} src={img8} alt="" />
          <a className={styles.portfolio_link} href="/">
            <h2>NASA API PROJECT</h2> 
          </a>
          <p className={styles.portfolio_desc}>A beautiful t-shirt mockup.</p>
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
  );
}

export default Portfolio