import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion'
import { styles } from "../style";

const Variant1 = {
  hidden: {
    y: 50,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 2,
    transition: {
      delay: 0.5,
      duration: 0.5,
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
      delay: 0.9,
      duration: 0.7,
    },
  },
};


const Contact = () => {
  
  return (
    <div className={` py-7 md:py-14  container font-main`}>
      <h1 className={` ${styles.pageTitle} mb-10`}>CONTACT ME</h1>

      <motion.div
        variants={Variant1}
        initial="hidden"
        animate="visible"
        className=" mb-8  py-1   text-white"
      >
        <div>
          <div className="flex gap-4 items-center">
            <div className="">
              <FontAwesomeIcon className="text-3xl" icon={faPhone} />{" "}
            </div>
            <div>
              <h5 className="">Phone</h5>

              <p className="">+2348149684195</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={Variant2}
        initial="hidden"
        animate="visible"
        className=" text-white"
      >
        <div>
          <div className= "flex gap-4 items-center">
            <div className="">
              <FontAwesomeIcon
                className=' text-3xl'
                icon={faEnvelope}
              />{" "}
            </div>
            <div>
              <h5 className="">Email</h5>

              <p className="">Aytechng@gmail.com</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
