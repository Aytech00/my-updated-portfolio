import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";

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
    x: "100vw",
  },

  visible: {
    x:0,
    transition: {
      delay: 1.8,
      
    },
  },
};

const About = (props) => {
  return (
    <div className={styles.about_main_container}>
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
        <h2 className={styles.about_sub_title}>I am Toluwani</h2>
        <p className={styles.about_text}>
          Hi there, I'm a developer with vast experience in building websites,
          web apps, cms websites and different kinds of softwares. I have got a
          unique set of skills that allows me to work on every aspect of a
          wesbite project, from the front-end user interface to the back-end
          server-side logic. With proficiency in multiple programming languages,
          I am able to tackle any challenge that comes my way. I am also a
          strong communicator, able to work effectively in teams and collaborate
          with others to deliver high-quality projects.
        </p>
        <div className={styles.resume_btn_wrap}>
          <button className={styles.resume_btn}>RESUME</button>
        </div>
      </motion.div>

      {/* Service */}

      <motion.div
        variants={Variant3}
        initial="hidden"
        animate="visible"
        className={styles.service_main_wrap}
      >
        <h2 className={styles.service_main_title}>SERVICES</h2>

        <div className={styles.service_inner_wrap}>
          <div className={styles.service_card}>
            <h3 className={styles.service_title}>Web design</h3>
            <p className={styles.service_text}>
              Web Design Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Autem tenetur ratione quod.
            </p>
          </div>

          <div className={styles.service_card}>
            <h3 className={styles.service_title}>Web development</h3>
            <p className={styles.service_text}>
              Web Design Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Autem tenetur ratione quod.
            </p>
          </div>
          <div className={styles.service_card}>
            <h3 className={styles.service_title}>Web development</h3>
            <p className={styles.service_text}>
              Web Design Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Autem tenetur ratione quod.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={Variant4}
        initial="hidden"
        animate="visible"
        className={styles.testimonial_main_wrap}
      >
        <h1 className={styles.testimonial_title}>REVIEWS</h1>

        <div className={styles.testimonial_wrap}>
          <p className={styles.testimonial_text}>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            expedita laudantium inventore nihil animi quidem ut numquam
            architecto minus itaque........""
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
