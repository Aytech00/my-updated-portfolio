import { React } from "react";
import styles from "./Home.module.css";
import * as FaIcons from "react-icons/fa";
import {motion} from 'framer-motion'

// Animation styles

const Variant1 = {
  hidden: {
    y:70,
    opacity: 0,

  },

  visible: {
    y:0,
    opacity: 2,
    transition: {
      delay: 0.3,
      duration: 0.7,

    },
  },
};

const Variant2 = {
  hidden: {
    y: 60,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 3,
    transition:{
      delay:0.8,
      duration: 0.7,
    }
  },
};

const Variant3 = {
  hidden: {
    opacity: 0,
    y:60,
  },

  visible: {
    opacity: 2,
    y:0,
    transition: {
      delay: 1.2,
      Type: 'spring',
      stiffness: '100',
      duration: 0.7,
        }
  },
};



const Home = () => {

  return (
    <div>
      <div className={styles.main_content}>
        <div className={styles.inner_main_content}>
          <div>
            <motion.div
              variants={Variant1}
              initial="hidden"
              animate="visible"
              className={styles.title_wrap}
            >
              <h1 className={styles.title}>
                Hi,I am <span className={styles.name_wrap}>Ayo</span>
              </h1>
            </motion.div>

            <motion.div
              variants={Variant2}
              initial="hidden"
              animate="visible"
              className={styles.text_wrap}
            >
              <p className={styles.text}>
                I am a Software Engineer. I provide functional websites with
                perfect design. I also make website
                interactive with web animations.
              </p>
            </motion.div>

            <motion.ul
              variants={Variant3}
              initial="hidden"
              animate="visible"
              className={styles.icon_wrap}
            >
              <a href="https://www.linkedin.com/feed/">
                <li className={styles.linkedin_icon_wrap}>
                  <FaIcons.FaLinkedinIn className={styles.linkedin_icon} />
                </li>

              </a>

              <a href="https://twitter.com/Aytechng">
                <li className={styles.twitter_icon_wrap}>
                  <FaIcons.FaTwitter className={styles.twitter_icon} />
                </li>
              </a>
              <a href="https://github.com/Aytech00">
                <li className={styles.github_icon_wrap}>
                  <FaIcons.FaGithub className={styles.github_icon} />
                </li>
              </a>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
