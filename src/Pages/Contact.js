import React from "react";
import Styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion'

const Variant1 = {
  hidden: {
    y: 70,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 2,
    transition: {
      delay: 0.5,
      duration: 0.7,
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
    <div className={Styles.contact_main_container}>
      <h1 className={Styles.contact_title}>CONTACT ME</h1>

      <motion.div variants={Variant1} initial="hidden" animate="visible" className={Styles.phone_wrap}>
        <div>
          <div className={Styles.phone_inner_wrap}>
            <div className={Styles.inner_phone_icon_wrap}>
              <FontAwesomeIcon className={Styles.phone_icon} icon={faPhone} />{" "}
            </div>
            <div>
              <h5 className={Styles.phone_title}>Phone</h5>

              <p className={Styles.phone_text}>+2348149684195</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={Variant2} initial="hidden" animate="visible" className={Styles.email_wrap}>
        <div>
          <div className={Styles.email_inner_wrap}>
            <div className={Styles.inner_email_icon_wrap}>
              <FontAwesomeIcon className={Styles.email_icon} icon={faEnvelope} />{" "}
            </div>
            <div>
              <h5 className={Styles.email_title}>Email</h5>

              <p className={Styles.email_text}>Aytechng@gmail.com</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
