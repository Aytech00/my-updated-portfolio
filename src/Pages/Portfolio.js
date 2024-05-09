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

import { BsBoxArrowUpRight } from "react-icons/bs";
import { styles } from "../style";

const PORTFOLIO_DATA = [
  {
    title: "CrypTix Ticket dApp ",
    link: "https://www.cryptixnft.io/",
    img: img1,
    stack: ["Sveltejs", "Nestjs", "Smart contract"],
  },
  {
    title: "NFT Marketplace",
    link: "https://marketplace.cryptix.app/",
    img: img5,
    stack: ["Reactjs", "Nestjs", "Boostrap 5", "css"],
  },
  {
    title: "LetUsRecon Reconnaissance ",
    link: "https://www.letusrecon.com/",
    img: img7,
    stack: ["Nextjs", "Nestjs", "Tailwind css"],
  },
  {
    title: "Nursingwithlight",
    link: "https://nursingwithlight.com/",
    img: img11,

    stack: ["WordPress", "Javascript", "Quiz maker"],
  },
  {
    title: "Mutivendor store",
    link: "https://frontend-nextjs-14jz.vercel.app/",
    img: img12,
    stack: ["Nextjs", "Expressjs", "Tailwind css"],
  },
  {
    title: "Hope Foundation",
    link: "https://hopeorukotanfoundation.org/",
    img: img13,
    stack: ["Wordpress"],
  },
  {
    title: "Annex Vape Store",
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

  {
    title: "Zyteon NFT Marketplace",
    link: "https://zyteon.com",
    img: img2,
    stack: ["React", "Smart contract"],
  },
  {
    id: 8,
    title: "Inksea",
    link: "https://inksea.io",
    img: img3,
    stack: ["React", "Smart contract"],
  },
  {
    title: "Ellise",
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO_DATA.map((item, i) => (
          <div key={i} className="mb-14  ">
            <div className="">
              <img
                className=" w-full sm:w-full md:w-[300px]  lg:w-[300px]  border p-3 bg-[#132f4e4b]  shadow border-[#cccccc20]  mb-4"
                src={item.img}
                alt=""
              />
            </div>
            <div className="px-1">
              <h4 className="text-slate-100 text-sm mb-5">{item.title}</h4>
              <ul className="flex justify-start gap-2 mb-6 ">
                {item.stack.map((stack, i) => (
                  <li className="text-secondary shadow-md bg-[#132f4e7b] text-[12px] font-light rounded-full px-3 py-2">
                    {stack}
                  </li>
                ))}
              </ul>
              <div>
                <a target="_blank" rel="noreferrer" href={item.link}>
                  <button className="border-0 flex items-center text-white text-[13px] transition-all hover:scale-105  ">
                    View
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
