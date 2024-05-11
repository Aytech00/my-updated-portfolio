import React from "react";

import img1 from "../Assets/cryptix.png";
import img2 from "../Assets/zyteon.png";
import img3 from "../Assets/ink.png";
import img4 from "../Assets/elise.png";
import img5 from "../Assets/cryptixmarket.png";
import img7 from "../Assets/letusrecon.png";

import img9 from "../Assets/magnolia.png";
import img10 from "../Assets/annex.png";
import img11 from "../Assets/nurse.png";
import img12 from "../Assets/amzon.png";
import img13 from "../Assets/ngo.png";
import img14 from "../Assets/note.png";

import { BsBoxArrowUpRight } from "react-icons/bs";
import { styles } from "../style";



const PORTFOLIO_DATA = [
  {
    title: "Ticket System ",
    link: "https://www.cryptixnft.io/",
    img: img1,
    stack: ["Sveltejs", "Nestjs", "Smart contract", "Boostrap", "Web 3 APIS",],
  },
  {
    title: "NFT Marketplace",
    link: "https://marketplace.cryptix.app/",
    img: img5,
    stack: ["Reactjs", "Nestjs", "Boostrap 5", "css"],
  },
  {
    title: " Reconnaissance Tool",
    link: "https://frontend-n9dcalori-letusrecon.vercel.app/",
    img: img7,
    stack: ["Nextjs", "Next Auth", "Nestjs", "Tailwind css", "Stripe"],
  },

  {
    title: " GCMS Website",
    link: "https://mummyserena.netlify.app/",
    img: img14,
    stack: ["Reactjs", "Styled Component", "Tailwind css", "Expressjs"],
  },
  {
    title: "Blog Website",
    link: "https://nursingwithlight.com/",
    img: img11,

    stack: ["WordPress", "Javascript", "Quiz maker", "Yoast"],
  },
  {
    title: "Mutivendor ecommerce Store",
    link: "https://frontend-nextjs-14jz.vercel.app/",
    img: img12,
    stack: ["Nextjs", "Expressjs", "Tailwind css", "Stripe"],
  },
  {
    title: "NGO Website",
    link: "https://hopeorukotanfoundation.org/",
    img: img13,
    stack: ["Wordpress"],
  },
  {
    title: "ecommerce Website",
    link: "https://annexvape.com",
    img: img10,
    stack: ["WordPress", "Woocomerce", "Stripe"],
  },

  {
    title: "Mognolia Party",
    link: "https://magnoliaparty.com/",
    img: img9,
    stack: ["React Native", "Taiwlind css"],
  },

  // {
  //   title: "NFT Marketplace",
  //   link: "https://zyteon.com",
  //   img: img2,
  //   stack: ["React", "Smart contract"],
  // },
  {
    id: 8,
    title: "NFT Marketplace",
    link: "https://inksea.io",
    img: img3,
    stack: ["React", "Smart contract"],
  },
  {
    title: "Affilate System",
    link: "https://elise.netlify.app",
    img: img4,
    stack: ["Javascript", "Html", "CSS", "jquery"],
  },
];

const Portfolio = () => {
    document.title = " Portfolio ";
  return (
    <div className=" py-6 md:py-14 container font-main">
      <div className="mb-10">
        <h2 className={`${styles.pageTitle}`}>PROJECTS</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {PORTFOLIO_DATA.map((item, i) => (
          <div key={i} className="mb-14  ">
            <div className="">
              <img
                className=" w-full sm:w-full md:w-full  lg:w-full  border p-3 bg-[#132f4e4b]  shadow border-[#cccccc20]  mb-4"
                src={item.img}
                alt=""
              />
            </div>
            <div className="px-1">
              <h4 className="text-slate-100 text-sm mb-5">{item.title}</h4>
              <ul className="flex justify-start flex-wrap gap-2  mb-6 ">
                {item.stack.map((stack, i) => (
                  <li className="  -ml-1 ">
                    <div className="flex text-secondary flex-wrap items-center px-3 shadow-md bg-[#132f4e7b] text-xs font-light  rounded-full  py-1">
                      {stack}
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                <a target="_blank" rel="noreferrer" href={item.link}>
                  <button className="border-0 flex items-center text-white text-[13px] transition-all hover:scale-105  ">
                    View live
                    <BsBoxArrowUpRight className=" ml-2" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
