import React from "react";

import img1 from "../Assets/cryptix.png";
import img2 from "../Assets/zyteon.png";
import img3 from "../Assets/ink.png";
import img4 from "../Assets/elise.png";
import img5 from "../Assets/cryptixmarket.png";
import img7 from "../Assets/letusrecon.png";

import img9 from '../Assets/magnolia.png'
import img10 from '../Assets/annex.png'

import {BsBoxArrowUpRight} from 'react-icons/bs'


const PORTFOLIO_DATA = [
  { id: 1, title: "CrypTix", link: "https://www.cryptixnft.io/", img: img1 },
  {
    id: 2,
    title: "CrypTix Marketplace",
    link: "https://marketplace.cryptix.app/",
    img: img5,
  },
  {
    id: 3,
    title: "LetUsRecon",
    link: "https://www.letusrecon.com/",
    img: img7,
  },
  { id: 6, title: "AnnexVape", link: "https://annexvape.com", img: img10 },
  {
    id: 4,
    title: "Mognolia Party",
    link: "https://magnoliaparty.com/",
    img: img9,
  },
  { id: 5, title: "Ellise", link: "https://elise.netlify.app", img: img4 },
  { id: 7, title: "Zyteon", link: "https://zyteon.com", img: img2 },
  { id: 8, title: "Inksea", link: "https://inksea.io", img: img3 },
];




const Portfolio = () => {
  return (
    <div className=" py-20 px-10  font-main">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO_DATA.map((item) => (
          <div key={item.id} className="mb-14">
            <img
              className=" w-full sm:w-full md:w-[300px] lg:w-[300px] border-[1px] rounded-sm border-slate-400 mb-4"
              src={item.img}
              alt=""
            />
            <h4 className="text-slate-100 text-sm mb-5">{item.title}</h4>
            <a target="_blank" rel="noreferrer" href={item.link}>
              <button className="border-0 flex items-center  rounded-md text-sm  text-[#64ffda]  ">
                View project
                <BsBoxArrowUpRight className=" ml-2"/>
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
