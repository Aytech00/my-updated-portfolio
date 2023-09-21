import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPen, faCode } from "@fortawesome/free-solid-svg-icons";

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
    opacity: 2,
    transition: {
      delay: 1,
      duration: 0.7,
    },
  },
};

// const Variant3 = {
//   hidden: {
//     y: 70,
//     opacity: 0,
//   },

//   visible: {
//     y: 0,
//     opacity: 2,
//     transition: {
//       delay: 1.6,
//       duration: 0.7,
//     },
//   },
// };

const Variant4 = {
  hidden: {
    x: "100vw",
  },

  visible: {
    x: 0,
    transition: {
      delay: 1.7,
    },
  },
};

const About = (props) => {


  document.title = " About me "
  return (
    <div className={ ` ${styles.about_main_container} font-main`}>
      <motion.h1
        variants={Variant1}
        initial="hidden"
        animate="visible"
        className={styles.title}
      >
        ABOUT ME
      </motion.h1>

      <motion.div
        variants={Variant2}
        initial="hidden"
        animate="visible"
        in
        className={styles.details_main_wrap}
      >
        <h3 className={styles.about_sub_title}>Hi! My name is Ayo</h3>
        <p className={styles.about_text}>
          I specialize in creating visually appealing and highly functional
          user interfaces for websites and web applications. I am able to
          interpret design mockups and translate them into functional user
          interfaces, adept at troubleshooting and resolving issues related to
          frontend development. In addition to technical skills, i possess
          strong communication and collaboration skills, and i'm able to work
          closely with other team members to achieve project goals.
        </p>

        <div className={styles.skill_main_wrap}>
          <h3 className={styles.skill_title}>STACKS</h3>
          <ul className={styles.skill_ul_wrap}>
           
            <li className={styles.skill_li}>CSS</li>
            <li className={styles.skill_li}>SASS</li>
            <li className={styles.skill_li}> Bootstrap</li>
            <li className={styles.skill_li}>Tailwindcss</li>
            <li className={styles.skill_li}>Styled Component</li>
          </ul>

          <ul className={styles.skill_ul_wrap}>
            <li className={styles.skill_li}>Javascript (ES6+)</li>
            <li className={styles.skill_li}>Material-UI</li>

            <li className={styles.skill_li}>React.js</li>
            <li className={styles.skill_li}>Redux</li>
            <li className={styles.skill_li}>Next.js</li>
            <li className={styles.skill_li}>Git</li>
          </ul>
          <ul className={styles.skill_ul_wrap}>
            <li className={styles.skill_li}>WordPress</li>
            <li className={styles.skill_li}>Webflow</li>
            <li className={styles.skill_li}>Shopify</li>
          </ul>
        </div>

        {/* <div className={styles.resume_btn_wrap}>
          <button className={styles.resume_btn}>RESUME</button>
        </div> */}
      </motion.div>

      {/* Service */}

      {/* <motion.div
        variants={Variant3}
        initial="hidden"
        animate="visible"
        className={styles.service_main_wrap}
      >
        <h2 className={styles.service_main_title}>SERVICES</h2>

        <div className={styles.service_inner_wrap}>
          <div className={styles.service_card_1}>
            <FontAwesomeIcon icon={faPen} className={styles.design_icon} />
            <h3 className={styles.service_title}>Web development</h3>

            <p className={styles.service_text}>
              I have in-depth knowledge and expertise in designing visually
              appealing and user-friendly websites. With my strong understanding
              of the latest web design trends and technologies, i'm able to
              create responsive and mobile-friendly websites that can adapt to
              different screen sizes and devices
            </p>
          </div>

          <div className={styles.service_card_2}>
            <FontAwesomeIcon icon={faCode} className={styles.dev_icon} />
            <h3 className={styles.service_title}>Web design</h3>
            <p className={styles.service_text}>
              I have in-depth knowledge and expertise in designing visually
              appealing and user-friendly websites. With my strong understanding
              of the latest web design trends and technologies, i'm able to
              create responsive and mobile-friendly websites that can adapt to
              different screen sizes and devices
            </p>
          </div>
        </div>
      </motion.div> */}

      <motion.div
        variants={Variant4}
        initial="hidden"
        animate="visible"
        className={styles.testimonial_main_wrap}
      >
        <h1 className={styles.testimonial_title}>REVIEWS</h1>

        <div className={styles.testimonial_wrap}>
          <p className={styles.testimonial_text}>
            "Ayo was swift with job given, Understood the job and delivered as
            expected. Job welldone!"
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
