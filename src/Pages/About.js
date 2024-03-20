import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPen, faCode } from "@fortawesome/free-solid-svg-icons";

const Variant2 = {
  hidden: {
    y: 70,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 2,
    transition: {
      delay: 0.1,
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

// const Variant4 = {
//   hidden: {
//     x: "100vw",
//   },

//   visible: {
//     x: 0,
//     transition: {
//       delay: 1.7,
//     },
//   },
// };

const About = (props) => {
  document.title = " About me ";
  return (
    <div className={` py-10  md:py-28 container font-main`}>
      <h1 className={styles.title}>ABOUT ME</h1>

      <motion.div
        variants={Variant2}
        initial="hidden"
        animate="visible"
        in
        className={styles.details_main_wrap}
      >
        <h3 className={styles.about_sub_title}>
          {" "}
          My name is Faseesin Ayokunumi
        </h3>
        <p className="text-white leading-loose">
          I specialize in creating visually appealing and highly functional user
          interfaces for websites and web applications. I am able to interpret
          design mockups and translate them into functional user interfaces,
          adept at troubleshooting and resolving issues related to frontend
          development. In addition to technical skills, i possess strong
          communication and collaboration skills, and i'm able to work closely
          with other team members to achieve project goals.
        </p>
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

      {/* <motion.div
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
      </motion.div> */}
    </div>
  );
};

export default About;
