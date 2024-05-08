import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";


// const STACKS = [
//   {
//     id: 1,
//     stack: "Reactjs",
//   },
//   {
//     id: 2,
//     stack: "Nextjs",
//   },
//   {
//     id: 3,
//     stack: "Sveltejs",
//   },
//   {
//     id: 4,
//     stack: "Tailwindcss",
//   },
//   {
//     id: 1,
//     stack: "MaterialUI",
//   },
//   {
//     id: 5,
//     stack: "Reactjs",
//   },
//   {
//     id: 6,
//     stack: "Reactjs",
//   },
// ];


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
    <div className={` py-6  md:py-20 font-main container`}>
      <h1 className="text-xl  md:text-3xl mb-5 text-white">ABOUT ME</h1>

      <motion.div
        variants={Variant2}
        initial="hidden"
        animate="visible"
     
        className=""
      >
        <h3 className={styles.about_sub_title}>
          {" "}
          My name is Faseesin Ayokunumi
        </h3>
        <p className="text-white font-light leading-loose">
          I specialize in creating visually appealing and highly functional user
          interfaces for websites and web applications. I am able to interpret
          design mockups and translate them into functional user interfaces,
          adept at troubleshooting and resolving issues related to frontend
          development. In addition to technical skills, i possess strong
          communication and collaboration skills, and i'm able to work closely
          with other team members to achieve project goals.
        </p>
      </motion.div>

    
    </div>
  );
};

export default About;
