import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { styles } from "../style";
import { useState } from "react";

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
  const [enteredValue, setEnteredValue] = useState({
    name: "",
    number: "",
    email: "",
    msg: "",
  });

  const handleOnchange = (e) => {
    const values = e.target.value;
    setEnteredValue({ ...enteredValue, [e.target.name]: values });
  
    
  };

  const handleformSubmit = (e)=> {

    e.preventDefault()
    console.log(enteredValue);

  }

  return (
    <div className=" py-3 font-main">
      <div
        className={` px-5 md:px-10 py-10 md:py-20 bg-[#091221]  rounded-md  w-full `}
      >
        <form
          onSubmit={handleformSubmit}
          action="
    "
          className="flex flex-col mx-auto w-full  max-w-2xl"
        >
          <h1
            className={` text-xl md:text-3xl mb-10 text-center font-medium text-secondary`}
          >
           CONTACT 
          </h1>
          <div className="flex flex-col md:flex-row gap-5 mb-5 w-full">
            <input
              className="w-full md:w-1/2  h-12 p-4  border-[#171F2B] duration-100 text-base ease-in focus:border  outline-none text-white  transition-all  hover:border  hover:border-lightCyan  focus:border-lightCyan  rounded-md bg-[#171F2B]"
              type="text"
              onChange={handleOnchange}
              name="name"
              placeholder="Your Name"
            />

            <input
              className="w-full md:w-1/2  h-12 p-4  border-[#171F2B] text-base ease-in duration-100 focus:border  outline-none text-white  transition-all  hover:border  hover:border-lightCyan  focus:border-lightCyan  rounded-md bg-[#171F2B]"
              type="text"
              onChange={handleOnchange}
              name="number"
              placeholder="Phone Number"
            />
          </div>

          <div className="mb-5">
            <input
              className="w-full   h-12 p-4  border border-[#171F2B] text-base ease-in duration-100 focus:border  outline-none text-white  transition-all  hover:border  hover:border-lightCyan  focus:border-lightCyan  rounded-md bg-[#171F2B]"
              type="text"
              onChange={handleOnchange}
              name="email"
              required
              placeholder="Email Address"
            />
          </div>

          <div className="mb-5">
            <textarea
              className="w-full  h-40 p-4  border border-[#171F2B] text-base ease-in duration-100 focus:border  outline-none text-white  transition-all  hover:border  hover:border-lightCyan  focus:border-lightCyan  rounded-md bg-[#171F2B]"
              id=""
              required
              onChange={handleOnchange}
              name="msg"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-secondary py-2 rounded-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
